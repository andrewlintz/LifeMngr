/*
//Mind events//

Template.agendaLogger.events({
    // individual submitters

    'submit #dnmissionSubmitter':function(e){
        e.preventDefault();
        var mission = $('#dnmission').val();
        Agenda.insert({
            mission: mission,
            createdAt: new Date()
        });
    },

   // End of Indi submitters & closing of Template Events
});

*/