import './life.html';



///// HELPERS /////


Template.pastdayslogger.helpers({
  dayoflife() {
    return Daily.find({}, {sort: {createdAt: -1}});  },
});


///// EVENTS /////

// submitter //



Template.journalEntry.events({
    'submit #todaysstory1':function(e){
        e.preventDefault();
        var headline1 = $('#dayHeadline1').val();
        var story1 = $('#dayStory1').val();
    Daily.insert({
        headline: headline1,
        story: story1,
        createdAt: new Date()
    });

   }
});



// past logging ///

Template.lifeheadliner.events({
	// events go here
    'click .delete-lifeheadlineritem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
    		Daily.remove({ _id: documentId });
	},

	'keyup [name=lifeheadlinerItem]': function(event){
    if(event.which == 13 || event.which == 27){
    	$(event.target).blur();
    } else {
        var documentId = this._id;
        var lifeheadlinerItem = $(event.target).val();
        Daily.update({ _id: documentId }, {$set: { headline: lifeheadlinerItem }});
    	}
    },

});

Template.lifestory.events({
	// events go here
    'click .delete-lifestoryitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
    		Daily.remove({ _id: documentId });
	},

	'keyup [name=lifestoryItem]': function(event){
    if(event.which == 13 || event.which == 27){
    	$(event.target).blur();
    } else {
        var documentId = this._id;
        var lifestoryItem = $(event.target).val();
        Daily.update({ _id: documentId }, {$set: { story: lifestoryItem }});
    	}
    },

});

