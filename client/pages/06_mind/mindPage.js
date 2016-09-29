import './mind.html'; 


///// HELPERS /////


Template.mindPage.helpers({
  moodEach() {
    return Agenda.find( { mood: { $exists: true }},{sort: {createdAt: -1}}); }, 
  creativeartideasEach() {
    return Agenda.find( { creativeartideas: { $exists: true }},{sort: {createdAt: -1}}); }, 
  jokesEach() {
    return Agenda.find( { jokes: { $exists: true }},{sort: {createdAt: -1}}); }, 
  opinionEach() {
    return Agenda.find( { opinion: { $exists: true }},{sort: {createdAt: -1}}); }, 
  entreprenuerialideaEach() {
    return Agenda.find( { entreprenuerialidea: { $exists: true }},{sort: {createdAt: -1}}); }, 
  wantEach() {
    return Agenda.find( { want: { $exists: true }},{sort: {createdAt: -1}}); }, 
  thoughtsEach() {
    return Agenda.find( { thoughts: { $exists: true }},{sort: {createdAt: -1}}); }, 
  wisdomEach() {
    return Agenda.find( { wisdom: { $exists: true }},{sort: {createdAt: -1}}); }, 
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



////////* creativeartideas Arts Ideas Projects Events *//////

Template.addcreativeartideasItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var creativeartideasitemName = $('[name="creativeartideasitemName"]').val();
    Agenda.insert({
        creativeartideas: creativeartideasitemName,
        createdAt: new Date()
    });
    $('[name="creativeartideasitemName"]').val('');
}
});

Template.creativeartideasItem.events({
    // events go here
    'click .delete-creativeartideasitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=creativeartideasItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var creativeartideasItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { creativeartideas: creativeartideasItem }});
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



////////* Opinion Events *//////

Template.addopinionItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var opinionitemName = $('[name="opinionitemName"]').val();
    Agenda.insert({
        opinion: opinionitemName,
        createdAt: new Date()
    });
    $('[name="opinionitemName"]').val('');
}
});

Template.opinionItem.events({
    // events go here
    'click .delete-opinionitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=opinionItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var opinionItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { opinion: opinionItem }});
        }
    },
});

////////* Entreprenurial Invention Events *//////

Template.addentreprenuerialideaItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var entreprenuerialideaitemName = $('[name="entreprenuerialideaitemName"]').val();
    Agenda.insert({
        entreprenuerialidea: entreprenuerialideaitemName,
        createdAt: new Date()
    });
    $('[name="entreprenuerialideaitemName"]').val('');
}
});

Template.entreprenuerialideaItem.events({
    // events go here
    'click .delete-entreprenuerialideaitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=entreprenuerialideaItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var entreprenuerialideaItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { entreprenuerialidea: entreprenuerialideaItem }});
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


