import './gyst.html';


///// HELPERS /////


Template.gystPage.helpers({
  tester() {
    return Tester.find({}, {sort: {createdAt: -1}});  },
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

Template.testerCount.helpers({
    // helpers go here
    'totalTester': function(){
        // code goes here
        return Tester.find().count();
    },
    'completedTester': function(){
        // code goes here
        return Tester.find({ completed: true }).count();
    }
});


///// EVENTS /////

Template.addTesteritem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var testeritemName = $('[name="testeritemName"]').val();
    Tester.insert({
        name: testeritemName,
        completed: false,
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
    		Tester.remove({ _id: documentId });
	},

	'keyup [name=testerItem]': function(event){
    if(event.which == 13 || event.which == 27){
    	$(event.target).blur();
        console.log("You tapped the Return or Escape key");
    } else {
        var documentId = this._id;
        var testerItem = $(event.target).val();
        Tester.update({ _id: documentId }, {$set: { name: testerItem }});
    	}
    },

    'change [type=checkbox]': function(){
    	var documentId = this._id;
    	var isCompleted = this.completed;
    	if(isCompleted){
        	Tester.update({ _id: documentId }, {$set: { completed: false }});
        	console.log("Task marked as incomplete.");
    	} else {
        	Tester.update({ _id: documentId }, {$set: { completed: true }});
        	console.log("Task marked as complete.");
    }
	}

});
