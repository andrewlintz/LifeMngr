'./place.html'


///// HELPERS /////


Template.placePage.helpers({
    placesbeenEach() {
        return Agenda.find( { placesbeen: {$exists: true}}, {sort: {createdAt: -1}}); },
    placeswantEach() {
        return Agenda.find( { placeswant: {$exists: true}}, {sort: {createdAt: -1}}); },
    placesplannerEach() {
        return Agenda.find( { placesplanner: {$exists: true}}, {sort: {createdAt: -1}}); },

});




////////* Placesbeen Events *//////




Template.addplacesbeenItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var placesbeenitemName = $('[name="placesbeenitemName"]').val();
    Agenda.insert({
        placesbeen: placesbeenitemName,
        createdAt: new Date()
    });
    $('[name="placesbeenitemName"]').val('');
}
});

Template.placesbeenItem.events({
    // events go here
    'click .delete-placesbeenitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=placesbeenItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var placesbeenItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { placesbeen: placesbeenItem }});
        }
    },
});


////////* Placeswant Events *//////




Template.addplaceswantItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var placeswantitemName = $('[name="placeswantitemName"]').val();
    Agenda.insert({
        placeswant: placeswantitemName,
        createdAt: new Date()
    });
    $('[name="placeswantitemName"]').val('');
}
});

Template.placeswantItem.events({
    // events go here
    'click .delete-placeswantitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=placeswantItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var placeswantItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { placeswant: placeswantItem }});
        }
    },
});


////////* Placesplanner Events *//////




Template.addplacesplannerItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var placesplanneritemName = $('[name="placesplanneritemName"]').val();
    Agenda.insert({
        placesplanner: placesplanneritemName,
        createdAt: new Date()
    });
    $('[name="placesplanneritemName"]').val('');
}
});

Template.placesplannerItem.events({
    // events go here
    'click .delete-placesplanneritem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=placesplannerItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var placesplannerItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { placesplanner: placesplannerItem }});
        }
    },
});
