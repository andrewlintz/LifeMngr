'./health.html'


///// HELPERS /////


Template.healthPage.helpers({
  agenda() {
    return Agenda.find({}, {sort: {createdAt: -1}});  },
});

Template.biostatsCard.helpers({
  agenda() {
    return Agenda.find({}, {sort: {createdAt: -1}}); }
});



///// EVENTS /////




////////* Biostats Events *//////


Template.addbiostatsItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var biostatsitemName = $('[name="biostatsitemName"]').val();
    Agenda.insert({
        biostats: biostatsitemName,
        createdAt: new Date()
    });
    $('[name="biostatsitemName"]').val('');
}
});

Template.biostatsItem.events({
    // events go here
    'click .delete-biostatsitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=biostatsItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var biostatsItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { biostats: biostatsItem }});
        }
    },
});






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




////////* Medhistory Events *//////


Template.addmedhistoryItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var medhistoryitemName = $('[name="medhistoryitemName"]').val();
    Agenda.insert({
        medhistory: medhistoryitemName,
        createdAt: new Date()
    });
    $('[name="medhistoryitemName"]').val('');
}
});

Template.medhistoryItem.events({
    // events go here
    'click .delete-medhistoryitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=medhistoryItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var medhistoryItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { medhistory: medhistoryItem }});
        }
    },
});



////////* Dentalhist Events *//////


Template.adddentalhistItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var dentalhistitemName = $('[name="dentalhistitemName"]').val();
    Agenda.insert({
        dentalhist: dentalhistitemName,
        createdAt: new Date()
    });
    $('[name="dentalhistitemName"]').val('');
}
});

Template.dentalhistItem.events({
    // events go here
    'click .delete-dentalhistitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=dentalhistItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var dentalhistItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { dentalhist: dentalhistItem }});
        }
    },
});





////////* Visionhist Events *//////


Template.addvisionhistItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var visionhistitemName = $('[name="visionhistitemName"]').val();
    Agenda.insert({
        visionhist: visionhistitemName,
        createdAt: new Date()
    });
    $('[name="visionhistitemName"]').val('');
}
});

Template.visionhistItem.events({
    // events go here
    'click .delete-visionhistitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=visionhistItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var visionhistItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { visionhist: visionhistItem }});
        }
    },
});



////////* Pooplog Events *//////


Template.addpooplogItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var pooplogitemName = $('[name="pooplogitemName"]').val();
    Agenda.insert({
        pooplog: pooplogitemName,
        createdAt: new Date()
    });
    $('[name="pooplogitemName"]').val('');
}
});

Template.pooplogItem.events({
    // events go here
    'click .delete-pooplogitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=pooplogItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var pooplogItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { pooplog: pooplogItem }});
        }
    },
});


