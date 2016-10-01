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
    'submit #dngoodhabitsSubmitter':function(e){
        e.preventDefault();
        var goodhabits = $('#dngoodhabits').val();
        Agenda.insert({
            goodhabits: goodhabits,
            createdAt: new Date()
        });
    },
    'submit #dnbadhabitsSubmitter':function(e){
        e.preventDefault();
        var badhabits = $('#dnbadhabits').val();
        Agenda.insert({
            badhabits: badhabits,
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
    'submit #dnopinionSubmitter':function(e){
        e.preventDefault();
        var opinion = $('#dnopinion').val();
        Agenda.insert({
            opinion: opinion,
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
    'submit #dneventsiwantohappenSubmitter':function(e){
        e.preventDefault();
        var eventsiwantohappen = $('#dneventsiwantohappen').val();
        Agenda.insert({
            eventsiwantohappen: eventsiwantohappen,
            createdAt: new Date()
        });
    },
    'submit #dnactivitiesiwanttodoSubmitter':function(e){
        e.preventDefault();
        var activitiesiwanttodo = $('#dnactivitiesiwanttodo').val();
        Agenda.insert({
            activitiesiwanttodo: activitiesiwanttodo,
            createdAt: new Date()
        });
    },
    'submit #dntodosSubmitter':function(e){
        e.preventDefault();
        var todos = $('#dntodos').val();
        Agenda.insert({
            todos: todos,
            createdAt: new Date()
        });
    },
    'submit #dnvaluesSubmitter':function(e){
        e.preventDefault();
        var values = $('#dnvalues').val();
        Agenda.insert({
            values: values,
            createdAt: new Date()
        });
    },
    'submit #dnvisionSubmitter':function(e){
        e.preventDefault();
        var vision = $('#dnvision').val();
        Agenda.insert({
            vision: vision,
            createdAt: new Date()
        });
    },
    'submit #dngoalsSubmitter':function(e){
        e.preventDefault();
        var goals = $('#dngoals').val();
        Agenda.insert({
            goals: goals,
            createdAt: new Date()
        });
    },
    'submit #dnstrategySubmitter':function(e){
        e.preventDefault();
        var strategy = $('#dnstrategy').val();
        Agenda.insert({
            strategy: strategy,
            createdAt: new Date()
        });
    },
    'submit #dnaccomplishmentsSubmitter':function(e){
        e.preventDefault();
        var accomplishments = $('#dnaccomplishments').val();
        Agenda.insert({
            accomplishments: accomplishments,
            createdAt: new Date()
        });
    },
    'submit #dnsuccessesSubmitter':function(e){
        e.preventDefault();
        var successes = $('#dnsuccesses').val();
        Agenda.insert({
            successes: successes,
            createdAt: new Date()
        });
    },
    'submit #dnfailureSubmitter':function(e){
        e.preventDefault();
        var failure = $('#dnfailure').val();
        Agenda.insert({
            failure: failure,
            createdAt: new Date()
        });
    },
    'submit #dnstrengthsSubmitter':function(e){
        e.preventDefault();
        var strengths = $('#dnstrengths').val();
        Agenda.insert({
            strengths: strengths,
            createdAt: new Date()
        });
    },
    'submit #dnweaknessesSubmitter':function(e){
        e.preventDefault();
        var weaknesses = $('#dnweaknesses').val();
        Agenda.insert({
            weaknesses: weaknesses,
            createdAt: new Date()
        });
    },
    'submit #dnthoughtsSubmitter':function(e){
        e.preventDefault();
        var thoughts = $('#dnthoughts').val();
        Agenda.insert({
            thoughts: thoughts,
            createdAt: new Date()
        });
    },
    'submit #dnwantsSubmitter':function(e){
        e.preventDefault();
        var wants = $('#dnwants').val();
        Agenda.insert({
            wants: wants,
            createdAt: new Date()
        });
    },
    'submit #dnproblemsSubmitter':function(e){
        e.preventDefault();
        var problems = $('#dnproblems').val();
        Agenda.insert({
            problems: problems,
            createdAt: new Date()
        });
    },
    'submit #dncareerSubmitter':function(e){
        e.preventDefault();
        var career = $('#dncareer').val();
        Agenda.insert({
            career: career,
            createdAt: new Date()
        });
    },
    'submit #dnprojectsSubmitter':function(e){
        e.preventDefault();
        var projects = $('#dnprojects').val();
        Agenda.insert({
            projects: projects,
            createdAt: new Date()
        });
    },
    'submit #dnhobbySubmitter':function(e){
        e.preventDefault();
        var hobby = $('#dnhobby').val();
        Agenda.insert({
            hobby: hobby,
            createdAt: new Date()
        });
    },
    'submit #dnsymptomsSubmitter':function(e){
        e.preventDefault();
        var symptoms = $('#dnsymptoms').val();
        Agenda.insert({
            symptoms: symptoms,
            createdAt: new Date()
        });
    },
    'submit #dnwhyhealthissueSubmitter':function(e){
        e.preventDefault();
        var whyhealthissue = $('#dnwhyhealthissue').val();
        Agenda.insert({
            whyhealthissue: whyhealthissue,
            createdAt: new Date()
        });
    },
    'submit #dnallergiesSubmitter':function(e){
        e.preventDefault();
        var allergies = $('#dnallergies').val();
        Agenda.insert({
            allergies: allergies,
            createdAt: new Date()
        });
    },
    'submit #dnpooplogSubmitter':function(e){
        e.preventDefault();
        var pooplog = $('#dnpooplog').val();
        Agenda.insert({
            pooplog: pooplog,
            createdAt: new Date()
        });
    },
    'submit #dnpeelogSubmitter':function(e){
        e.preventDefault();
        var peelog = $('#dnpeelog').val();
        Agenda.insert({
            peelog: peelog,
            createdAt: new Date()
        });
    },
    'submit #dnvisionhistSubmitter':function(e){
        e.preventDefault();
        var visionhist = $('#dnvisionhist').val();
        Agenda.insert({
            visionhist: visionhist,
            createdAt: new Date()
        });
    },
    'submit #dnhowshygieneSubmitter':function(e){
        e.preventDefault();
        var howshygiene = $('#dnhowshygiene').val();
        Agenda.insert({
            howshygiene: howshygiene,
            createdAt: new Date()
        });
    },
    'submit #dnhaircoditionSubmitter':function(e){
        e.preventDefault();
        var haircodition = $('#dnhaircodition').val();
        Agenda.insert({
            haircodition: haircodition,
            createdAt: new Date()
        });
    },
    'submit #dnnailsconditionSubmitter':function(e){
        e.preventDefault();
        var nailscondition = $('#dnnailscondition').val();
        Agenda.insert({
            nailscondition: nailscondition,
            createdAt: new Date()
        });
    },
    'submit #dndressedSubmitter':function(e){
        e.preventDefault();
        var dressed = $('#dndressed').val();
        Agenda.insert({
            dressed: dressed,
            createdAt: new Date()
        });
    },
    'submit #dneatlogSubmitter':function(e){
        e.preventDefault();
        var eatlog = $('#dneatlog').val();
        Agenda.insert({
            eatlog: eatlog,
            createdAt: new Date()
        });
    },
    'submit #dnfitnesslogSubmitter':function(e){
        e.preventDefault();
        var fitnesslog = $('#dnfitnesslog').val();
        Agenda.insert({
            fitnesslog: fitnesslog,
            createdAt: new Date()
        });
    },
    'submit #dnstuffhaveSubmitter':function(e){
        e.preventDefault();
        var stuffhave = $('#dnstuffhave').val();
        Agenda.insert({
            stuffhave: stuffhave,
            createdAt: new Date()
        });
    },
    'submit #dnstuffwantSubmitter':function(e){
        e.preventDefault();
        var stuffwant = $('#dnstuffwant').val();
        Agenda.insert({
            stuffwant: stuffwant,
            createdAt: new Date()
        });
    },
    'submit #dnstufflostSubmitter':function(e){
        e.preventDefault();
        var stufflost = $('#dnstufflost').val();
        Agenda.insert({
            stufflost: stufflost,
            createdAt: new Date()
        });
    },
    'submit #dnstufflentSubmitter':function(e){
        e.preventDefault();
        var stufflent = $('#dnstufflent').val();
        Agenda.insert({
            stufflent: stufflent,
            createdAt: new Date()
        });
    },
    'submit #dnstuffborrowedSubmitter':function(e){
        e.preventDefault();
        var stuffborrowed = $('#dnstuffborrowed').val();
        Agenda.insert({
            stuffborrowed: stuffborrowed,
            createdAt: new Date()
        });
    },
    'submit #dnplacesbeenSubmitter':function(e){
        e.preventDefault();
        var placesbeen = $('#dnplacesbeen').val();
        Agenda.insert({
            placesbeen: placesbeen,
            createdAt: new Date()
        });
    },
    'submit #dnplaceswantSubmitter':function(e){
        e.preventDefault();
        var placeswant = $('#dnplaceswant').val();
        Agenda.insert({
            placeswant: placeswant,
            createdAt: new Date()
        });
    },
    'submit #dnhomemessSubmitter':function(e){
        e.preventDefault();
        var homemess = $('#dnhomemess').val();
        Agenda.insert({
            homemess: homemess,
            createdAt: new Date()
        });
    },
    'submit #dnhometightinessSubmitter':function(e){
        e.preventDefault();
        var hometightiness = $('#dnhometightiness').val();
        Agenda.insert({
            hometightiness: hometightiness,
            createdAt: new Date()
        });
    },
    'submit #dncarmessSubmitter':function(e){
        e.preventDefault();
        var carmess = $('#dncarmess').val();
        Agenda.insert({
            carmess: carmess,
            createdAt: new Date()
        });
    },
    'submit #dncartightinessSubmitter':function(e){
        e.preventDefault();
        var cartightiness = $('#dncartightiness').val();
        Agenda.insert({
            cartightiness: cartightiness,
            createdAt: new Date()
        });
    },
    'submit #dnworkspacemessSubmitter':function(e){
        e.preventDefault();
        var workspacemess = $('#dnworkspacemess').val();
        Agenda.insert({
            workspacemess: workspacemess,
            createdAt: new Date()
        });
    },
    'submit #dnworkspacetightinessSubmitter':function(e){
        e.preventDefault();
        var workspacetightiness = $('#dnworkspacetightiness').val();
        Agenda.insert({
            workspacetightiness: workspacetightiness,
            createdAt: new Date()
        });
    },
    'submit #dnchoreslogSubmitter':function(e){
        e.preventDefault();
        var choreslog = $('#dnchoreslog').val();
        Agenda.insert({
            choreslog: choreslog,
            createdAt: new Date()
        });
    },
    'submit #dnpplengagedwithSubmitter':function(e){
        e.preventDefault();
        var pplengagedwith = $('#dnpplengagedwith').val();
        Agenda.insert({
            pplengagedwith: pplengagedwith,
            createdAt: new Date()
        });
    },
    'submit #dnpplgiftideasSubmitter':function(e){
        e.preventDefault();
        var pplgiftideas = $('#dnpplgiftideas').val();
        Agenda.insert({
            pplgiftideas: pplgiftideas,
            createdAt: new Date()
        });
    },
    'submit #dnhowsodoingSubmitter':function(e){
        e.preventDefault();
        var howsodoing = $('#dnhowsodoing').val();
        Agenda.insert({
            howsodoing: howsodoing,
            createdAt: new Date()
        });
    },
    'submit #dnsolikesSubmitter':function(e){
        e.preventDefault();
        var solikes = $('#dnsolikes').val();
        Agenda.insert({
            solikes: solikes,
            createdAt: new Date()
        });
    },
    'submit #dnsodislikesSubmitter':function(e){
        e.preventDefault();
        var sodislikes = $('#dnsodislikes').val();
        Agenda.insert({
            sodislikes: sodislikes,
            createdAt: new Date()
        });
    },
    'submit #dnsogiftideasSubmitter':function(e){
        e.preventDefault();
        var sogiftideas = $('#dnsogiftideas').val();
        Agenda.insert({
            sogiftideas: sogiftideas,
            createdAt: new Date()
        });
    },
    'submit #dnsomoodSubmitter':function(e){
        e.preventDefault();
        var somood = $('#dnsomood').val();
        Agenda.insert({
            somood: somood,
            createdAt: new Date()
        });
    },
    'submit #dnsogarguementSubmitter':function(e){
        e.preventDefault();
        var sogarguement = $('#dnsogarguement').val();
        Agenda.insert({
            sogarguement: sogarguement,
            createdAt: new Date()
        });
    },
    'submit #dnperiodSubmitter':function(e){
        e.preventDefault();
        var period = $('#dnperiod').val();
        Agenda.insert({
            period: period,
            createdAt: new Date()
        });
    },
    'submit #dnsexualactivitySubmitter':function(e){
        e.preventDefault();
        var sexualactivity = $('#dnsexualactivity').val();
        Agenda.insert({
            sexualactivity: sexualactivity,
            createdAt: new Date()
        });
    },
    'submit #dnpetdoingSubmitter':function(e){
        e.preventDefault();
        var petdoing = $('#dnpetdoing').val();
        Agenda.insert({
            petdoing: petdoing,
            createdAt: new Date()
        });
    },
    'submit #dnpetmedSubmitter':function(e){
        e.preventDefault();
        var petmed = $('#dnpetmed').val();
        Agenda.insert({
            petmed: petmed,
            createdAt: new Date()
        });
    },
    'submit #dnmeditatedSubmitter':function(e){
        e.preventDefault();
        var meditated = $('#dnmeditated').val();
        Agenda.insert({
            meditated: meditated,
            createdAt: new Date()
        });
    },



});
