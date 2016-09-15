'./feng.html'


///// HELPERS /////


Template.fengPage.helpers({
    hometightinessEach() {
        return Agenda.find( { hometightiness: {$exists: true}}, {sort: {createdAt: -1}}); },
    cartightinessEach() {
        return Agenda.find( { cartightiness: {$exists: true}}, {sort: {createdAt: -1}}); },
    workspacetightinessEach() {
        return Agenda.find( { workspacetightiness: {$exists: true}}, {sort: {createdAt: -1}}); },
    choresEach() {
        return Agenda.find( { chores: {$exists: true}}, {sort: {createdAt: -1}}); },

});





////////* Hometightiness Events *//////


Template.addhometightinessItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var hometightinessitemName = $('[name="hometightinessitemName"]').val();
    Agenda.insert({
        hometightiness: hometightinessitemName,
        createdAt: new Date()
    });
    $('[name="hometightinessitemName"]').val('');
}
});

Template.hometightinessItem.events({
    // events go here
    'click .delete-hometightinessitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=hometightinessItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var hometightinessItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { hometightiness: hometightinessItem }});
        }
    },
});



////////* Cartightiness Events *//////


Template.addcartightinessItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var cartightinessitemName = $('[name="cartightinessitemName"]').val();
    Agenda.insert({
        cartightiness: cartightinessitemName,
        createdAt: new Date()
    });
    $('[name="cartightinessitemName"]').val('');
}
});

Template.cartightinessItem.events({
    // events go here
    'click .delete-cartightinessitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=cartightinessItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var cartightinessItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { cartightiness: cartightinessItem }});
        }
    },
});




////////* Workspacetightiness Events *//////


Template.addworkspacetightinessItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var workspacetightinessitemName = $('[name="workspacetightinessitemName"]').val();
    Agenda.insert({
        workspacetightiness: workspacetightinessitemName,
        createdAt: new Date()
    });
    $('[name="workspacetightinessitemName"]').val('');
}
});

Template.workspacetightinessItem.events({
    // events go here
    'click .delete-workspacetightinessitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=workspacetightinessItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var workspacetightinessItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { workspacetightiness: workspacetightinessItem }});
        }
    },
});




////////* Chores Events *//////


Template.addchoresItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var choresitemName = $('[name="choresitemName"]').val();
    Agenda.insert({
        chores: choresitemName,
        createdAt: new Date()
    });
    $('[name="choresitemName"]').val('');
}
});

Template.choresItem.events({
    // events go here
    'click .delete-choresitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=choresItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var choresItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { chores: choresItem }});
        }
    },
});
