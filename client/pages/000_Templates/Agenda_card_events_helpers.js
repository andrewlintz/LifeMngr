

////////* Thoughts Events *//////


Template.addthoughtsItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var thoughtsitemName = $('[name="thoughtsitemName"]').val();
    Agenda.insert({
        thoughts: thoughtsitemName,
        createdAt: new Date()
    });
    $('[name="thoughtsitemName"]').val('');
}
});

Template.thoughtsItem.events({
    // events go here
    'click .delete-thoughtsitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=thoughtsItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var thoughtsItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { thoughts: thoughtsItem }});
        }
    },
});

