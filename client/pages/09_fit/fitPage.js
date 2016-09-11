'./fit.html'


///// HELPERS /////


Template.fitPage.helpers({
  agenda() {
    return Agenda.find({}, {sort: {createdAt: -1}});  },
});





////////* Fitness Events *//////


Template.addfitnessItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var fitnessitemName = $('[name="fitnessitemName"]').val();
    Agenda.insert({
        fitness: fitnessitemName,
        createdAt: new Date()
    });
    $('[name="fitnessitemName"]').val('');
}
});

Template.fitnessItem.events({
    // events go here
    'click .delete-fitnessitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=fitnessItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var fitnessItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { fitness: fitnessItem }});
        }
    },
});




////////* Fitness Program Events *//////


Template.addfitnessprogramItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var fitnessprogramitemName = $('[name="fitnessprogramitemName"]').val();
    Agenda.insert({
        fitnessprogram: fitnessprogramitemName,
        createdAt: new Date()
    });
    $('[name="fitnessprogramitemName"]').val('');
}
});

Template.fitnessprogramItem.events({
    // events go here
    'click .delete-fitnessprogramitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=fitnessprogramItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var fitnessprogramItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { fitnessprogram: fitnessprogramItem }});
        }
    },
});

