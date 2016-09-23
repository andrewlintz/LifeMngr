'./daynow.html'


///// HELPERS /////


///// EVENTS /////

Template.tempName.onRendered(function() {
    this.$('.datetimepicker').datetimepicker();
});

// Life Journal events//
Template.daysStory.events({
    'submit #todaysstory2':function(e){
        e.preventDefault();
        var headline = $('#dayHeadline').val();
        var story = $('#dayStory').val();
    Agenda.insert({
        headline: headline,
        story: story,
        createdAt: new Date()
    });
   }
});

//Sleep events//

Template.sleepLogger.events({
    'submit #sleepLoggersubmitter':function(e){
        e.preventDefault();
        var howdidUsleep = $('#dnhowdidUsleep').val();
        Agenda.insert({
            howdidUsleep: howdidUsleep,
            createdAt: new Date()
        });
   },
   'submit #dndreamdiarysubmitter':function(e){
        e.preventDefault();
        var dreamDiary = $('#dndreamDiary').val();
        Agenda.insert({
            dreamDiary: dreamDiary,
            createdAt: new Date()
        });
   },
});
//Waking events//

Template.wakeLogger.events({
    'submit #dnwakeupSubmitter':function(e){
        e.preventDefault();
        var wakeuptime = $('#dnwakeuptime').val();
        Agenda.insert({
            wakeuptime: wakeuptime,
            createdAt: new Date()
        });
    },
    'submit #dnoutofbedSubmitter':function(e){
        e.preventDefault();
        var outofBed = $('#dnoutofBed').val();
        Agenda.insert({
            outofBed: outofBed,
            createdAt: new Date()
        });
    },
});

Template.mindLogger.events({
    'submit #dnmoodSubmitter':function(e){
        e.preventDefault();
        var mood = $('#dnmood').val();
        Agenda.insert({
            mood: mood,
            createdAt: new Date()
        });
    },
    'submit #dnwhymoodSubmitter':function(e){
        e.preventDefault();
        var whymood = $('#dnwhymood').val();
        Agenda.insert({
            whymood: whymood,
            createdAt: new Date()
        });
    },
    'submit #dngoodhabbitsSubmitter':function(e){
        e.preventDefault();
        var goodhabbits = $('#dngoodhabbits').val();
        Agenda.insert({
            goodhabbits: goodhabbits,
            createdAt: new Date()
        });
    },
    'submit #dnbadhabbitsSubmitter':function(e){
        e.preventDefault();
        var badhabbits = $('#dnbadhabbits').val();
        Agenda.insert({
            badhabbits: badhabbits,
            createdAt: new Date()
        });
    },
    'submit #dnjokesSubmitter':function(e){
        e.preventDefault();
        var jokes = $('#dnjokes').val();
        Agenda.insert({
            jokes: jokes,
            createdAt: new Date()
        });
    },
    'submit #dncreativeartideasSubmitter':function(e){
        e.preventDefault();
        var creativeartideas = $('#dncreativeartideas').val();
        Agenda.insert({
            creativeartideas: creativeartideas,
            createdAt: new Date()
        });
    },
    'submit #dninventionsSubmitter':function(e){
        e.preventDefault();
        var inventions = $('#dninventions').val();
        Agenda.insert({
            inventions: inventions,
            createdAt: new Date()
        });
    },
    'submit #dnentreprenuerialideaSubmitter':function(e){
        e.preventDefault();
        var entreprenuerialidea = $('#dnentreprenuerialidea').val();
        Agenda.insert({
            entreprenuerialidea: entreprenuerialidea,
            createdAt: new Date()
        });
    },
    'submit #dnjobcareerbizOppSubmitter':function(e){
        e.preventDefault();
        var jobcareerbizOpp = $('#dnjobcareerbizOpp').val();
        Agenda.insert({
            jobcareerbizOpp: jobcareerbizOpp,
            createdAt: new Date()
        });
    },
    'submit #dnoppinionSubmitter':function(e){
        e.preventDefault();
        var oppinion = $('#dnoppinion').val();
        Agenda.insert({
            oppinion: oppinion,
            createdAt: new Date()
        });
    },
    'submit #dnwisdomSubmitter':function(e){
        e.preventDefault();
        var wisdom = $('#dnwisdom').val();
        Agenda.insert({
            wisdom: wisdom,
            createdAt: new Date()
        });
    },
});

Template.agendaLogger.events({
    'submit #dnmissionSubmitter':function(e){
        e.preventDefault();
        var mission = $('#dnmission').val();
        Agenda.insert({
            mission: mission,
            createdAt: new Date()
        });
    },

});
