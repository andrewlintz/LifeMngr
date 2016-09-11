import './mind.html'; 


///// HELPERS /////


Template.mindPage.helpers({
  agenda() {
    return Agenda.find({}, {sort: {createdAt: -1}});  },
});



///// EVENTS /////



////////* Mood Events *//////

Template.addmoodItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var mooditemName = $('[name="mooditemName"]').val();
    Agenda.insert({
        mood: mooditemName,
        createdAt: new Date()
    });
    $('[name="mooditemName"]').val('');
}
});

Template.moodItem.events({
    // events go here
    'click .delete-mooditem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=moodItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var moodItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { mood: moodItem }});
        }
    },

});



////////* Creative Arts Ideas Projects Events *//////

Template.addcreativeItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var creativeitemName = $('[name="creativeitemName"]').val();
    Agenda.insert({
        creative: creativeitemName,
        createdAt: new Date()
    });
    $('[name="creativeitemName"]').val('');
}
});

Template.creativeItem.events({
    // events go here
    'click .delete-creativeitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=creativeItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var creativeItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { creative: creativeItem }});
        }
    },

});



////////* Jokes Events *//////

Template.addjokesItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var jokesitemName = $('[name="jokesitemName"]').val();
    Agenda.insert({
        jokes: jokesitemName,
        createdAt: new Date()
    });
    $('[name="jokesitemName"]').val('');
}
});

Template.jokesItem.events({
    // events go here
    'click .delete-jokesitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=jokesItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var jokesItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { jokes: jokesItem }});
        }
    },
});



////////* Opinions Events *//////

Template.addopinionsItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var opinionsitemName = $('[name="opinionsitemName"]').val();
    Agenda.insert({
        opinions: opinionsitemName,
        createdAt: new Date()
    });
    $('[name="opinionsitemName"]').val('');
}
});

Template.opinionsItem.events({
    // events go here
    'click .delete-opinionsitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=opinionsItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var opinionsItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { opinions: opinionsItem }});
        }
    },
});

////////* Entreprenurial Invention Events *//////

Template.addentreinventionsItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var entreinventionsitemName = $('[name="entreinventionsitemName"]').val();
    Agenda.insert({
        entreinventions: entreinventionsitemName,
        createdAt: new Date()
    });
    $('[name="entreinventionsitemName"]').val('');
}
});

Template.entreinventionsItem.events({
    // events go here
    'click .delete-entreinventionsitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=entreinventionsItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var entreinventionsItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { entreinventions: entreinventionsItem }});
        }
    },
});




////////* Wants Events *//////

Template.addwantItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var wantitemName = $('[name="wantitemName"]').val();
    Agenda.insert({
        want: wantitemName,
        createdAt: new Date()
    });
    $('[name="wantitemName"]').val('');
}
});

Template.wantItem.events({
    // events go here
    'click .delete-wantitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=wantItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var wantItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { want: wantItem }});
        }
    },
});




////////* Thoughts Events *//////


Template.addthoughtsItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var thoughtsitemName = $('[name="thoughtsitemName"]').val();
    Agenda.insert({
        thoughts: thoughtsitemName,
        createdAt: new Date()
    });
    $('[name="thoughtsitemName"]').val('');
}
});

Template.thoughtsItem.events({
    // events go here
    'click .delete-thoughtsitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=thoughtsItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var thoughtsItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { thoughts: thoughtsItem }});
        }
    },
});



////////* Wisdom Events *//////


Template.addwisdomItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var wisdomitemName = $('[name="wisdomitemName"]').val();
    Agenda.insert({
        wisdom: wisdomitemName,
        createdAt: new Date()
    });
    $('[name="wisdomitemName"]').val('');
}
});

Template.wisdomItem.events({
    // events go here
    'click .delete-wisdomitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=wisdomItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var wisdomItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { wisdom: wisdomItem }});
        }
    },
});


