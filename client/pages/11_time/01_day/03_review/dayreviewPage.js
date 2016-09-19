'./dayreview.html'


///// HELPERS ///// 


Template.dayreviewPage.helpers({
    dayreviewEach() {
        return Daily.find( { headline: {$exists: true}}, {sort: {createdAt: -1}}); },

});



////////* dayreview Events *//////

// past logging ///

Template.dayreviewheadliner.events({
	// events go here
    'click .delete-dayreviewheadlineritem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
    		Daily.remove({ _id: documentId });
	},

	'keyup [name=dayreviewheadlinerItem]': function(event){
    if(event.which == 13 || event.which == 27){
    	$(event.target).blur();
    } else {
        var documentId = this._id;
        var dayreviewheadlinerItem = $(event.target).val();
        Daily.update({ _id: documentId }, {$set: { headline: dayreviewheadlinerItem }});
    	}
    },

});

Template.dayreviewstory.events({
	// events go here
    'click .delete-dayreivewstoryitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
    		Daily.remove({ _id: documentId });
	},

	'keyup [name=dayreviewstoryItem]': function(event){
    if(event.which == 13 || event.which == 27){
    	$(event.target).blur();
    } else {
        var documentId = this._id;
        var dayreviewstoryItem = $(event.target).val();
        Daily.update({ _id: documentId }, {$set: { story: dayreviewstoryItem }});
    	}
    },

});

