'./hygiene.html'


///// HELPERS /////


Template.hygienePage.helpers({
    teethbrushEach() {
        return Agenda.find( { teethbrush: {$exists: true}}, {sort: {createdAt: -1}}); },
    flossedEach() {
        return Agenda.find( { flossed: {$exists: true}}, {sort: {createdAt: -1}}); },
    washedfaceEach() {
        return Agenda.find( { washedface: {$exists: true}}, {sort: {createdAt: -1}}); },
    shavedEach() {
        return Agenda.find( { shaved: {$exists: true}}, {sort: {createdAt: -1}}); },
    showeredEach() {
        return Agenda.find( { showered: {$exists: true}}, {sort: {createdAt: -1}}); },
    dressedEach() {
        return Agenda.find( { dressed: {$exists: true}}, {sort: {createdAt: -1}}); },

});








////////* Teethbrush Events *//////


Template.addteethbrushItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var teethbrushitemName = $('[name="teethbrushitemName"]').val();
    Agenda.insert({
        teethbrush: teethbrushitemName,
        createdAt: new Date()
    });
    $('[name="teethbrushitemName"]').val('');
}
});

Template.teethbrushItem.events({
    // events go here
    'click .delete-teethbrushitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=teethbrushItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var teethbrushItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { teethbrush: teethbrushItem }});
        }
    },
});




////////* Flossed Events *//////


Template.addflossedItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var flosseditemName = $('[name="flosseditemName"]').val();
    Agenda.insert({
        flossed: flosseditemName,
        createdAt: new Date()
    });
    $('[name="flosseditemName"]').val('');
}
});

Template.flossedItem.events({
    // events go here
    'click .delete-flosseditem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=flossedItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var flossedItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { flossed: flossedItem }});
        }
    },
});




////////* Washedface Events *//////


Template.addwashedfaceItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var washedfaceitemName = $('[name="washedfaceitemName"]').val();
    Agenda.insert({
        washedface: washedfaceitemName,
        createdAt: new Date()
    });
    $('[name="washedfaceitemName"]').val('');
}
});

Template.washedfaceItem.events({
    // events go here
    'click .delete-washedfaceitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=washedfaceItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var washedfaceItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { washedface: washedfaceItem }});
        }
    },
});




////////* Shaved Events *//////


Template.addshavedItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var shaveditemName = $('[name="shaveditemName"]').val();
    Agenda.insert({
        shaved: shaveditemName,
        createdAt: new Date()
    });
    $('[name="shaveditemName"]').val('');
}
});

Template.shavedItem.events({
    // events go here
    'click .delete-shaveditem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=shavedItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var shavedItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { shaved: shavedItem }});
        }
    },
});




////////* Showered Events *//////


Template.addshoweredItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var showereditemName = $('[name="showereditemName"]').val();
    Agenda.insert({
        showered: showereditemName,
        createdAt: new Date()
    });
    $('[name="showereditemName"]').val('');
}
});

Template.showeredItem.events({
    // events go here
    'click .delete-showereditem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=showeredItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var showeredItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { showered: showeredItem }});
        }
    },
});



////////* Dressed Events *//////


Template.adddressedItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var dresseditemName = $('[name="dresseditemName"]').val();
    Agenda.insert({
        dressed: dresseditemName,
        createdAt: new Date()
    });
    $('[name="dresseditemName"]').val('');
}
});

Template.dressedItem.events({
    // events go here
    'click .delete-dresseditem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=dressedItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var dressedItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { dressed: dressedItem }});
        }
    },
});


