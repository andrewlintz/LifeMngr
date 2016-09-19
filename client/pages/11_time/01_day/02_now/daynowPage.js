'./daynow.html'


///// HELPERS /////


///// EVENTS /////


Template.collapseCity.events({
    'submit #todaysstory':function(e){
        e.preventDefault();
        var headline = $('#dayHeadline').val();
        var story = $('#dayStory').val();
    Daily.insert({
        headline: headline,
        story: story,
        createdAt: new Date()
    });
   }
});


//Sleep//

Template.sleepLogger.events({
    // events go here
    'click .delete-howdidUsleepitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=howdidUsleepItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var howdidUsleepItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { howdidUsleep: howdidUsleepItem }});
        }
    },

});
