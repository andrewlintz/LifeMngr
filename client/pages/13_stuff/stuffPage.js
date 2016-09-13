'./stuff.html'


///// HELPERS /////


Template.stuffPage.helpers({
  agenda() {
    return Agenda.find({}, {sort: {createdAt: -1}});  },
});




////////* Stuffhave Events *//////




Template.addstuffhaveItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var stuffhaveitemName = $('[name="stuffhaveitemName"]').val();
    Agenda.insert({
        stuffhave: stuffhaveitemName,
        createdAt: new Date()
    });
    $('[name="stuffhaveitemName"]').val('');
}
});

Template.stuffhaveItem.events({
    // events go here
    'click .delete-stuffhaveitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=stuffhaveItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var stuffhaveItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { stuffhave: stuffhaveItem }});
        }
    },
});



////////* Stuffwant Events *//////




Template.addstuffwantItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var stuffwantitemName = $('[name="stuffwantitemName"]').val();
    Agenda.insert({
        stuffwant: stuffwantitemName,
        createdAt: new Date()
    });
    $('[name="stuffwantitemName"]').val('');
}
});

Template.stuffwantItem.events({
    // events go here
    'click .delete-stuffwantitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=stuffwantItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var stuffwantItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { stuffwant: stuffwantItem }});
        }
    },
});



////////* Stuffplanner Events *//////




Template.addstuffplannerItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var stuffplanneritemName = $('[name="stuffplanneritemName"]').val();
    Agenda.insert({
        stuffplanner: stuffplanneritemName,
        createdAt: new Date()
    });
    $('[name="stuffplanneritemName"]').val('');
}
});

Template.stuffplannerItem.events({
    // events go here
    'click .delete-stuffplanneritem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=stuffplannerItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var stuffplannerItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { stuffplanner: stuffplannerItem }});
        }
    },
});
