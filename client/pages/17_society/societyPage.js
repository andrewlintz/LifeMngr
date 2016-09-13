'./society.html'


///// HELPERS /////


Template.societyPage.helpers({
  agenda() {
    return Agenda.find({}, {sort: {createdAt: -1}});  },
});







////////* Govt Events *//////


Template.addgovtItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var govtitemName = $('[name="govtitemName"]').val();
    Agenda.insert({
        govt: govtitemName,
        createdAt: new Date()
    });
    $('[name="govtitemName"]').val('');
}
});

Template.govtItem.events({
    // events go here
    'click .delete-govtitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=govtItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var govtItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { govt: govtItem }});
        }
    },
});



////////* Policies Events *//////




Template.addpoliciesItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var policiesitemName = $('[name="policiesitemName"]').val();
    Agenda.insert({
        policies: policiesitemName,
        createdAt: new Date()
    });
    $('[name="policiesitemName"]').val('');
}
});

Template.policiesItem.events({
    // events go here
    'click .delete-policiesitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=policiesItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var policiesItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { policies: policiesItem }});
        }
    },
});




////////* Vote Events *//////




Template.addvoteItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var voteitemName = $('[name="voteitemName"]').val();
    Agenda.insert({
        vote: voteitemName,
        createdAt: new Date()
    });
    $('[name="voteitemName"]').val('');
}
});

Template.voteItem.events({
    // events go here
    'click .delete-voteitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=voteItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var voteItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { vote: voteItem }});
        }
    },
});