import './mind.html'; 


///// HELPERS /////


Template.mindPage.helpers({
  agenda() {
    return Agenda.find({}, {sort: {createdAt: -1}});  },
});

////////* Mood Events *//////

Template.addmoodItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var mooditemName = $('[name="mooditemName"]').val();
    Agenda.insert({
        mood: mooditemName,
        createdAt: new Date()
    });
    $('[name="mooditemName"]').val('');
}
});

Template.moodItem.events({
    // events go here
    'click .delete-mooditem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=moodItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var moodItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { mood: moodItem }});
        }
    },

});