'./health.html'


///// HELPERS /////


Template.healthPage.helpers({
  agenda() {
    return Agenda.find({}, {sort: {createdAt: -1}});  },
});



///// EVENTS /////



////////* Allergies Events *//////


Template.addallergiesItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var allergiesitemName = $('[name="allergiesitemName"]').val();
    Agenda.insert({
        allergies: allergiesitemName,
        createdAt: new Date()
    });
    $('[name="allergiesitemName"]').val('');
}
});

Template.allergiesItem.events({
    // events go here
    'click .delete-allergiesitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=allergiesItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var allergiesItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { allergies: allergiesItem }});
        }
    },
});


////////* Symptoms Events *//////


Template.addsymptomsItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var symptomsitemName = $('[name="symptomsitemName"]').val();
    Agenda.insert({
        symptoms: symptomsitemName,
        createdAt: new Date()
    });
    $('[name="symptomsitemName"]').val('');
}
});

Template.symptomsItem.events({
    // events go here
    'click .delete-symptomsitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=symptomsItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var symptomsItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { symptoms: symptomsItem }});
        }
    },
});
