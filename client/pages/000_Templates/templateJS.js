/*
'./money.html'


///// HELPERS /////


Template.foodPage.helpers({
  agenda() {
    return Agenda.find({}, {sort: {createdAt: -1}});  },
});


////////* Currentpets Events *//////


/*

Template.addcurrentpetsItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var currentpetsitemName = $('[name="currentpetsitemName"]').val();
    Agenda.insert({
        currentpets: currentpetsitemName,
        createdAt: new Date()
    });
    $('[name="currentpetsitemName"]').val('');
}
});

Template.currentpetsItem.events({
    // events go here
    'click .delete-currentpetsitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=currentpetsItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var currentpetsItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { currentpets: currentpetsItem }});
        }
    },
});
 */
