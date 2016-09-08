import './agenda.html';


///// HELPERS /////


Template.agendaPage.helpers({
  agenda() {
    return Agenda.find({}, {sort: {createdAt: -1}});  },
});


///// EVENTS /////




Template.agendaInput.events({
    'submit #agendaInputter':function(e){
        e.preventDefault();
        var mission = $('#currentMission').val();
        var goals = $('#currentGoals').val();
    Agenda.insert({
        mission: mission,
        goals: goals,
        createdAt: new Date()
    });
  }
});



/////// cards //////

Template.currentMission.events({
    /// events go here
    'submit currentMission': function(event){
    event.preventDefault();
    var currentmissionName = $('[name="currentmissionName"]').val();
    Agenda.insert({
        mission: currentmissionName,
        createdAt: new Date()
    });
    $('[name="currentmissionName"]').val('');
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




////////* Agenda Events *//////

Template.addagendaItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var agendaitemName = $('[name="agendaitemName"]').val();
    Agenda.insert({
        agenda: agendaitemName,
        createdAt: new Date()
    });
    $('[name="agendaitemName"]').val('');
}
});

Template.agendaItem.events({
    // events go here
    'click .delete-agendaitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=agendaItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var agendaItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { agenda: agendaItem }});
        }
    },

});





///// Nission /////


///// EVENTS /////

Template.currentNission.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var nissionitemName = $('[name="nissionitemName"]').val();
    Agenda.insert({
        name: nissionitemName,
        createdAt: new Date()
    });
    $('[name="nissionitemName"]').val('');
}
});

Template.nissionItem.events({
    // events go here
    'click .delete-nissionitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=nissionItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
        console.log("You tapped the Return or Escape key");
    } else {
        var documentId = this._id;
        var nissionItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { name: nissionItem }});
        }
    },
});
