'./love.html'


///// HELPERS /////


Template.lovePage.helpers({
  agenda() {
    return Agenda.find({}, {sort: {createdAt: -1}});  },
});






////////* Dreamso Events *//////




Template.adddreamsoItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var dreamsoitemName = $('[name="dreamsoitemName"]').val();
    Agenda.insert({
        dreamso: dreamsoitemName,
        createdAt: new Date()
    });
    $('[name="dreamsoitemName"]').val('');
}
});

Template.dreamsoItem.events({
    // events go here
    'click .delete-dreamsoitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=dreamsoItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var dreamsoItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { dreamso: dreamsoItem }});
        }
    },
});



////////* Currentso Events *//////




Template.addcurrentsoItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var currentsoitemName = $('[name="currentsoitemName"]').val();
    Agenda.insert({
        currentso: currentsoitemName,
        createdAt: new Date()
    });
    $('[name="currentsoitemName"]').val('');
}
});

Template.currentsoItem.events({
    // events go here
    'click .delete-currentsoitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=currentsoItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var currentsoItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { currentso: currentsoItem }});
        }
    },
});





////////* Lovehist Events *//////




Template.addlovehistItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var lovehistitemName = $('[name="lovehistitemName"]').val();
    Agenda.insert({
        lovehist: lovehistitemName,
        createdAt: new Date()
    });
    $('[name="lovehistitemName"]').val('');
}
});

Template.lovehistItem.events({
    // events go here
    'click .delete-lovehistitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=lovehistItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var lovehistItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { lovehist: lovehistItem }});
        }
    },
});