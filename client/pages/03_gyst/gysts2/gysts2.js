import './gysts2.html';


 Template.checkboxItem.helpers({
     'checked': function(){
         // code goes here
         var isCompleted = this.checkbox;
         	if(isCompleted){
         	    return "checked";
         	} else {
         	    return "";
         	}
     }
 });


  ///// EVENTS /////
  
 Template.checkboxItem.events({
     'change [type=checkbox]': function(){
     event.preventDefault(); 
     	Agenda.insert({ 
         name: "checkbox",
         checkbox: true,
         checkboxhist: true, 
         createdAt: new Date()
     });		
	    var documentId = Agenda.findOne({checkbox: {$exists: true}}, {sort: {createdAt: -1}});
	    console.log("documentId")
     	if(documentId){
     	 	Agenda.update({ _id: documentId }, {$set: { checkbox: true, checkboxhist: true }});
         	console.log("Task marked as incomplete.");
         	return "checked";
     	} else {
         	Agenda.update({ _id: documentId }, {$set: { checkbox: false, checkboxhist: false }});
         	console.log("Task marked as complete.");
         	return "";
    	};
    	     

     /*
     Agenda.insert({ 
         name: "checkbox",
         checkbox: false,
         checkboxhist: true, 
         createdAt: new Date()
     });
     console.log("Task marked as complete.");
    },

 });
*/

 	}
 });



 Template.acheckboxhist.helpers({
  acheckboxhistlooper() {
    return Agenda.find({
            $and: [
            {checkboxhist: {$exists: true}}, 
            {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
  }
});