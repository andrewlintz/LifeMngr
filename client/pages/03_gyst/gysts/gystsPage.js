import './gysts.html';


Template.gystsPage.helpers({
   tester() {
     return Agenda.find({completed: {$exists: true}}, {sort: {createdAt: -1}});  },
 });
  
  
 Template.testerItem.helpers({
     'checked': function(){
         // code goes here
         var isCompleted = this.completed;
         	if(isCompleted){
        	     return "checked";
         	} else {
         	    return "";
         	}
     }
 });
  
  ///// EVENTS /////
  
 Template.addTesteritem.events({
     /// events go here
     'change [type=checkbox]': function(){
     event.preventDefault();
     var testeritemName2 = $('[name="testeritemName"]').val();
     var Now = new Date()
     Agenda.insert({ 
     	 title: "checkbox clicked",
     	 start: Now,
     	 end: Now,
     	 description: "",
         name: testeritemName2,
         completed: false,
         hist: true, 
         createdAt: new Date()
     });
     $('[name="testeritemName"]').val('');
 	},
     'submit form': function(event){
     event.preventDefault();
     var testeritemName = $('[name="testeritemName"]').val();
     Agenda.insert({ 
         name: testeritemName,
         completed: false,
         hist: true, 
         createdAt: new Date()
     });
     $('[name="testeritemName"]').val('');
 	}
 });
 
 Template.testerItem.events({
 	// events go here
     'click .delete-testeritem': function(event){
     event.preventDefault();
     var documentId = this._id;
     var confirm = 
     		Agenda.remove({ _id: documentId });
 	},
 
 	'keyup [name=testerItem]': function(event){
     if(event.which == 13 || event.which == 27){
     	$(event.target).blur();
         console.log("You tapped the Return or Escape key");
     } else {
         var documentId = this._id;
         var testerItem = $(event.target).val();
         Agenda.update({ _id: documentId }, {$set: { name: testerItem }});
     	}
     },
 
     'change [type=checkbox]': function(){
     	var documentId = this._id;
     	var isCompleted = this.completed;
     	if(isCompleted){
         	Agenda.update({ _id: documentId }, {$set: { completed: false, hist: true }});
         	console.log("Task marked as incomplete.");
     	} else {
         	Agenda.update({ _id: documentId }, {$set: { completed: true, hist: false }});
         	console.log("Task marked as complete.");
    	};
    	var isCompleted2 = this.hist;
    	Agenda.insert({
    	 name: "hist",
         completed2: isCompleted2,
         createdAt: new Date()
     	})
 		},
 });

 Template.testerhist.helpers({
  testerhistlooper() {
    return Agenda.find({
            $and: [
            {completed2: {$exists: true}}, 
            {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
  }
});