'./love.html'


///// HELPERS /////


Template.lovePage.helpers({
    dreamsoEach() {
        return Agenda.find( { dreamso: {$exists: true}}, {sort: {createdAt: -1}}); },
    lovehistEach() {
        return Agenda.find( { lovehist: {$exists: true}}, {sort: {createdAt: -1}}); },

});

Template.currentsocard.helpers({
    periodEach() {
        return Agenda.find( { period: {$exists: true}}, {sort: {createdAt: -1}}); },
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

Template.addperiodItem.events({
    'submit #addPeriod':function(e){
        e.preventDefault();
        var periods = $('#perioditemName').val();
    Agenda.insert({
        period: periods,
        createdAt: new Date()
    });
    }
});



Template.addperiodItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var perioditemName = $('[name="perioditemName"]').val();
    Agenda.insert({
        period: perioditemName,
        createdAt: new Date()
    });
    $('[name="perioditemName"]').val('');
}
});

Template.periodItem.events({
    // events go here
    'click .delete-perioditem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=periodItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var periodItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { period: periodItem }});
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