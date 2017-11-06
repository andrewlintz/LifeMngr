/*
'./money.html'


///// HELPERS /////


Template.foodPage.helpers({
  agenda() {
    return Agenda.find({}, {sort: {createdAt: -1}});  },
});


////////* Spirit Events *//////


/*

Template.addspiritItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var spirititemName = $('[name="spirititemName"]').val();
    Agenda.insert({
        spirit: spirititemName,
        createdAt: new Date()
    });
    $('[name="spirititemName"]').val('');
}
});

Template.spiritItem.events({
    // events go here
    'click .delete-spirititem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=spiritItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var spiritItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { spirit: spiritItem }});
        }
    },
});
 
*/