'./people.html'


///// HELPERS /////


Template.peoplePage.helpers({
    peoplenetworkEach() {
        return Agenda.find( { peoplenetwork: {$exists: true}}, {sort: {createdAt: -1}}); },

});




////////* Peoplenetwork Events *//////




Template.addpeoplenetworkItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var peoplenetworkitemName = $('[name="peoplenetworkitemName"]').val();
    Agenda.insert({
        peoplenetwork: peoplenetworkitemName,
        createdAt: new Date()
    });
    $('[name="peoplenetworkitemName"]').val('');
}
});

Template.peoplenetworkItem.events({
    // events go here
    'click .delete-peoplenetworkitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=peoplenetworkItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var peoplenetworkItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { peoplenetwork: peoplenetworkItem }});
        }
    },
});
