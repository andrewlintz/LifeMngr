'./pet.html'


///// HELPERS /////


Template.petPage.helpers({
    addpetEach() {
        return Agenda.find( { addpet: {$exists: true}}, {sort: {createdAt: -1}}); },
    currentpetsEach() {
        return Agenda.find( { currentpets: {$exists: true}}, {sort: {createdAt: -1}}); },
    pastpetsEach() {
        return Agenda.find( { pastpets: {$exists: true}}, {sort: {createdAt: -1}}); },

});


////////* Addpet Events *//////




Template.addaddpetItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var addpetitemName = $('[name="addpetitemName"]').val();
    Agenda.insert({
        addpet: addpetitemName,
        createdAt: new Date()
    });
    $('[name="addpetitemName"]').val('');
}
});

Template.addpetItem.events({
    // events go here
    'click .delete-addpetitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=addpetItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var addpetItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { addpet: addpetItem }});
        }
    },
});


////////* Currentpets Events *//////




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



////////* Pastpets Events *//////




Template.addpastpetsItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var pastpetsitemName = $('[name="pastpetsitemName"]').val();
    Agenda.insert({
        pastpets: pastpetsitemName,
        createdAt: new Date()
    });
    $('[name="pastpetsitemName"]').val('');
}
});

Template.pastpetsItem.events({
    // events go here
    'click .delete-pastpetsitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=pastpetsItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var pastpetsItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { pastpets: pastpetsItem }});
        }
    },
});
 