import './agenda.html';


///// HELPERS /////


Template.agendaPage.helpers({
  agenda() {
    return Agenda.find({}, {sort: {createdAt: -1}});  },
});


///// EVENTS /////








/////// cards //////


////////* Vision Events *//////

Template.addvisionItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var visionitemName = $('[name="visionitemName"]').val();
    Agenda.insert({
        vision: visionitemName,
        createdAt: new Date()
    });
    $('[name="visionitemName"]').val('');
}
});

Template.visionItem.events({
    // events go here
    'click .delete-visionitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=visionItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var visionItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { vision: visionItem }});
        }
    },

});



////////* Mission Events *//////

Template.addmissionItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var missionitemName = $('[name="missionitemName"]').val();
    Agenda.insert({
        mission: missionitemName,
        createdAt: new Date()
    });
    $('[name="missionitemName"]').val('');
}
});

Template.missionItem.events({
    // events go here
    'click .delete-missionitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=missionItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var missionItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { mission: missionItem }});
        }
    },

});

////////* Values Events *//////

Template.addvaluesItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var valuesitemName = $('[name="valuesitemName"]').val();
    Agenda.insert({
        values: valuesitemName,
        createdAt: new Date()
    });
    $('[name="valuesitemName"]').val('');
}
});

Template.valuesItem.events({
    // events go here
    'click .delete-valuesitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=valuesItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var valuesItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { values: valuesItem }});
        }
    },

});


////////* Goals Events *//////

Template.addgoalsItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var goalsitemName = $('[name="goalsitemName"]').val();
    Agenda.insert({
        goals: goalsitemName,
        createdAt: new Date()
    });
    $('[name="goalsitemName"]').val('');
}
});

Template.goalsItem.events({
    // events go here
    'click .delete-goalsitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=goalsItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var goalsItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { goals: goalsItem }});
        }
    },

});



////////* Accomplishments Events *//////

Template.addaccomplishmentsItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var accomplishmentsitemName = $('[name="accomplishmentsitemName"]').val();
    Agenda.insert({
        accomplishments: accomplishmentsitemName,
        createdAt: new Date()
    });
    $('[name="accomplishmentsitemName"]').val('');
}
});

Template.accomplishmentsItem.events({
    // events go here
    'click .delete-accomplishmentsitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=accomplishmentsItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var accomplishmentsItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { accomplishments: accomplishmentsItem }});
        }
    },

});


////////* Successes Events *//////

Template.addsuccessesItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var successesitemName = $('[name="successesitemName"]').val();
    Agenda.insert({
        successes: successesitemName,
        createdAt: new Date()
    });
    $('[name="successesitemName"]').val('');
}
});

Template.successesItem.events({
    // events go here
    'click .delete-successesitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=successesItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var successesItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { successes: successesItem }});
        }
    },

});


///// Failure /////


///// EVENTS /////

Template.currentFailure.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var failureitemName = $('[name="failureitemName"]').val();
    Agenda.insert({
        failure: failureitemName,
        createdAt: new Date()
    });
    $('[name="failureitemName"]').val('');
}
});

Template.failureItem.events({
    // events go here
    'click .delete-failureitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=failureItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
        console.log("You tapped the Return or Escape key");
    } else {
        var documentId = this._id;
        var failureItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { failure: failureItem }});
        }
    },
});




////////* Goodhabits Events *//////

Template.addgoodhabitsItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var goodhabitsitemName = $('[name="goodhabitsitemName"]').val();
    Agenda.insert({
        goodhabits: goodhabitsitemName,
        createdAt: new Date()
    });
    $('[name="goodhabitsitemName"]').val('');
}
});

Template.goodhabitsItem.events({
    // events go here
    'click .delete-goodhabitsitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=goodhabitsItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var goodhabitsItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { goodhabits: goodhabitsItem }});
        }
    },
});




////////* Badhabits Events *//////

Template.addbadhabitsItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var badhabitsitemName = $('[name="badhabitsitemName"]').val();
    Agenda.insert({
        badhabits: badhabitsitemName,
        createdAt: new Date()
    });
    $('[name="badhabitsitemName"]').val('');
}
});

Template.badhabitsItem.events({
    // events go here
    'click .delete-badhabitsitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=badhabitsItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var badhabitsItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { badhabits: badhabitsItem }});
        }
    },
});



////////* Strengths Events *//////

Template.addstrengthsItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var strengthsitemName = $('[name="strengthsitemName"]').val();
    Agenda.insert({
        strengths: strengthsitemName,
        createdAt: new Date()
    });
    $('[name="strengthsitemName"]').val('');
}
});

Template.strengthsItem.events({
    // events go here
    'click .delete-strengthsitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=strengthsItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var strengthsItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { strengths: strengthsItem }});
        }
    },

});


////////* Weaknesses Events *//////

Template.addweaknessesItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var weaknessesitemName = $('[name="weaknessesitemName"]').val();
    Agenda.insert({
        weaknesses: weaknessesitemName,
        createdAt: new Date()
    });
    $('[name="weaknessesitemName"]').val('');
}
});

Template.weaknessesItem.events({
    // events go here
    'click .delete-weaknessesitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=weaknessesItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var weaknessesItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { weaknesses: weaknessesItem }});
        }
    },

});


////////* Career Events *//////

Template.addcareerItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var careeritemName = $('[name="careeritemName"]').val();
    Agenda.insert({
        career: careeritemName,
        createdAt: new Date()
    });
    $('[name="careeritemName"]').val('');
}
});

Template.careerItem.events({
    // events go here
    'click .delete-careeritem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=careerItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var careerItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { career: careerItem }});
        }
    },

});



////////* Projects Events *//////

Template.addprojectsItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var projectsitemName = $('[name="projectsitemName"]').val();
    Agenda.insert({
        projects: projectsitemName,
        createdAt: new Date()
    });
    $('[name="projectsitemName"]').val('');
}
});

Template.projectsItem.events({
    // events go here
    'click .delete-projectsitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=projectsItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var projectsItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { projects: projectsItem }});
        }
    },

});



////////* Todos Events *//////

Template.addtodosItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var todositemName = $('[name="todositemName"]').val();
    Agenda.insert({
        todos: todositemName,
        createdAt: new Date()
    });
    $('[name="todositemName"]').val('');
}
});

Template.todosItem.events({
    // events go here
    'click .delete-todositem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=todosItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var todosItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { todos: todosItem }});
        }
    },

});
