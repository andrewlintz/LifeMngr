import './daypast.html';


///// HELPERS /////


Template.daypastPage.helpers({
  ester() {
    return Daily.find({}, {sort: {createdAt: -1}});  },
});


///// EVENTS /////


Template.esterItem.events({
	// events go here
    'click .delete-esteritem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
    		Daily.remove({ _id: documentId });
	},

	'keyup [name=esterItem]': function(event){
    if(event.which == 13 || event.which == 27){
    	$(event.target).blur();
    } else {
        var documentId = this._id;
        var esterItem = $(event.target).val();
        Daily.update({ _id: documentId }, {$set: { headline: esterItem }});
    	}
    },

});

Template.storyItem.events({
	// events go here
    'click .delete-storyitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
    		Daily.remove({ _id: documentId });
	},

	'keyup [name=storyItem]': function(event){
    if(event.which == 13 || event.which == 27){
    	$(event.target).blur();
    } else {
        var documentId = this._id;
        var storyItem = $(event.target).val();
        Daily.update({ _id: documentId }, {$set: { story: storyItem }});
    	}
    },

});
