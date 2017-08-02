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
        title: ("Day's Headline:" + " " + headline),
        allDay: true,
        start: Now,
        end: Now,
        description: ("Today's Story:" + " " + story),
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
            title: "How I Slept: ",
            start: Now,
            end: Now,
            description: howdidUsleep,
            howdidUsleep: howdidUsleep,
            createdAt: new Date(),
        });
   },
   'submit #dndreamdiarysubmitter':function(e){
        e.preventDefault();
        var dreamDiary = $('#dndreamDiary').val();
        Agenda.insert({
            title: "Dream Diary: ",
            start: Now,
            end: Now,
            description: dreamDiary,
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
            title: "My Wakeup Time: ",
            start: Now,
            end: Now,
            description: wakeuptime,
            wakeuptime: wakeuptime,
            createdAt: new Date()
        });
    },
    'submit #dnoutofbedSubmitter':function(e){
        e.preventDefault();
        var outofBed = $('#dnoutofBed').val();
        Agenda.insert({
            title: "Out of Bed Time: ",
            start: Now,
            end: Now,
            description: outofBed,
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
            title: "My Mood Right Now: ",
            start: Now,
            end: Now,
            description: mood,
            mood: mood,
            createdAt: new Date()
        });
    },
    'submit #dnwhymoodSubmitter':function(e){
        e.preventDefault();
        var whymood = $('#dnwhymood').val();
        Agenda.insert({
            title: "Why Im Feeling this Mood: ",
            start: Now,
            end: Now,
            description: whymood,
            whymood: whymood,
            createdAt: new Date()
        });
    },
    'submit #dngoodhabitsSubmitter':function(e){
        e.preventDefault();
        var goodhabits = $('#dngoodhabits').val();
        Agenda.insert({
            title: "Good Habits: ",
            start: Now,
            end: Now,
            description: goodhabits,
            goodhabits: goodhabits,
            createdAt: new Date()
        });
    },
    'submit #dnbadhabitsSubmitter':function(e){
        e.preventDefault();
        var badhabits = $('#dnbadhabits').val();
        Agenda.insert({
            title: "Bad Habits: ",
            start: Now,
            end: Now,
            description: badhabits,
            badhabits: badhabits,
            createdAt: new Date()
        });
    },
    'submit #dnjokesSubmitter':function(e){
        e.preventDefault();
        var jokes = $('#dnjokes').val();
        Agenda.insert({
            title: "Jokes Log: ",
            start: Now,
            end: Now,
            description: jokes,
            jokes: jokes,
            createdAt: new Date()
        });
    },
    'submit #dncreativeartideasSubmitter':function(e){
        e.preventDefault();
        var creativeartideas = $('#dncreativeartideas').val();
        Agenda.insert({
            title: "Creative Idea: ",
            start: Now,
            end: Now,
            description: creativeartideas,
            creativeartideas: creativeartideas,
            createdAt: new Date()
        });
    },
    'submit #dninventionsSubmitter':function(e){
        e.preventDefault();
        var inventions = $('#dninventions').val();
        Agenda.insert({
            title: "Invention: ",
            start: Now,
            end: Now,
            description:inventions,
            inventions: inventions,
            createdAt: new Date()
        });
    },
    'submit #dnentreprenuerialideaSubmitter':function(e){
        e.preventDefault();
        var entreprenuerialidea = $('#dnentreprenuerialidea').val();
        Agenda.insert({
            title: "Entreprenuerial Idea: ",
            start: Now,
            end: Now,
            description: entreprenuerialidea,
            entreprenuerialidea: entreprenuerialidea,
            createdAt: new Date()
        });
    },
    'submit #dnjobcareerbizOppSubmitter':function(e){
        e.preventDefault();
        var jobcareerbizOpp = $('#dnjobcareerbizOpp').val();
        Agenda.insert({
            title: "Job | Career | Bizz Opp: ",
            start: Now,
            end: Now,
            description: jobcareerbizOpp,
            jobcareerbizOpp: jobcareerbizOpp,
            createdAt: new Date()
        });
    },
    'submit #dnopinionSubmitter':function(e){
        e.preventDefault();
        var opinion = $('#dnopinion').val();
        Agenda.insert({
            title: "Opinion: ",
            start: Now,
            end: Now,
            description: opinion,
            opinion: opinion,
            createdAt: new Date()
        });
    },
    'submit #dnwisdomSubmitter':function(e){
        e.preventDefault();
        var wisdom = $('#dnwisdom').val();
        Agenda.insert({
            title: "Wisdom: ",
            start: Now,
            end: Now,
            description: wisdom,
            wisdom: wisdom,
            createdAt: new Date()
        });
    },
});

Template.agendaLogger.events({
    'submit #dneventsiwantohappenSubmitter':function(e){
        e.preventDefault();
        var eventsiwantohappen = $('#dneventsiwantohappen').val();
        Agenda.insert({
            title: "Events I want to Happen: ",
            start: Now,
            end: Now,
            description: eventsiwantohappen,
            eventsiwantohappen: eventsiwantohappen,
            createdAt: new Date()
        });
    },
    'submit #dnactivitiesiwanttodoSubmitter':function(e){
        e.preventDefault();
        var activitiesiwanttodo = $('#dnactivitiesiwanttodo').val();
        Agenda.insert({
            title: "Activities I want to do: ",
            start: Now,
            end: Now,
            description: activitiesiwanttodo,
            activitiesiwanttodo: activitiesiwanttodo,
            createdAt: new Date()
        });
    },
    'submit #dntodosSubmitter':function(e){
        e.preventDefault();
        var todos = $('#dntodos').val();
        Agenda.insert({
            title: "To Do: ",
            start: Now,
            end: Now,
            description: todos,
            todos: todos,
            createdAt: new Date()
        });
    },
    'submit #dnvaluesSubmitter':function(e){
        e.preventDefault();
        var values = $('#dnvalues').val();
        Agenda.insert({
            title: "Values: ",
            start: Now,
            end: Now,
            description: values,
            values: values,
            createdAt: new Date()
        });
    },
    'submit #dnvisionSubmitter':function(e){
        e.preventDefault();
        var vision = $('#dnvision').val();
        Agenda.insert({
            title: "Vision: ",
            start: Now,
            end: Now,
            description: vision,
            vision: vision,
            createdAt: new Date()
        });
    },
    'submit #dngoalsSubmitter':function(e){
        e.preventDefault();
        var goals = $('#dngoals').val();
        Agenda.insert({
            title: "Goals: ",
            start: Now,
            end: Now,
            description: goals, 
            goals: goals,
            createdAt: new Date()
        });
    },
    'submit #dnstrategySubmitter':function(e){
        e.preventDefault();
        var strategy = $('#dnstrategy').val();
        Agenda.insert({
            title: "Strategy: ",
            start: Now,
            end: Now,
            description: strategy,
            strategy: strategy,
            createdAt: new Date()
        });
    },
    'submit #dnaccomplishmentsSubmitter':function(e){
        e.preventDefault();
        var accomplishments = $('#dnaccomplishments').val();
        Agenda.insert({
            title: "Accomplishments: ",
            start: Now,
            end: Now,
            description: accomplishments,
            accomplishments: accomplishments,
            createdAt: new Date()
        });
    },
    'submit #dnsuccessesSubmitter':function(e){
        e.preventDefault();
        var successes = $('#dnsuccesses').val();
        Agenda.insert({
            title: "Successes: ",
            start: Now,
            end: Now,
            description: successes,
            successes: successes,
            createdAt: new Date()
        });
    },
    'submit #dnfailureSubmitter':function(e){
        e.preventDefault();
        var failure = $('#dnfailure').val();
        Agenda.insert({
            title: "Failures: ",
            start: Now,
            end: Now,
            description: failure,
            failure: failure,
            createdAt: new Date()
        });
    },
    'submit #dnstrengthsSubmitter':function(e){
        e.preventDefault();
        var strengths = $('#dnstrengths').val();
        Agenda.insert({
            title: "Strengths: ",
            start: Now,
            end: Now,
            description: strengths,
            strengths: strengths,
            createdAt: new Date()
        });
    },
    'submit #dnweaknessesSubmitter':function(e){
        e.preventDefault();
        var weaknesses = $('#dnweaknesses').val();
        Agenda.insert({
            title: "Weakness: ",
            start: Now,
            end: Now,
            description: weaknesses,
            weaknesses: weaknesses,
            createdAt: new Date()
        });
    },


    'submit #dnthoughtsSubmitter':function(e){
        e.preventDefault();
        var thoughts = $('#dnthoughts').val();
        Agenda.insert({
            title: "Thoughts: ",
            start: Now,
            end: Now,
            description: thoughts,
            thoughts: thoughts,
            createdAt: new Date()
        });
    },
    'submit #dnwantsSubmitter':function(e){
        e.preventDefault();
        var wants = $('#dnwants').val();
        Agenda.insert({
            title: "Wants: ",
            start: Now,
            end: Now,
            description: wants,
            wants: wants,
            createdAt: new Date()
        });
    },
    'submit #dnproblemsSubmitter':function(e){
        e.preventDefault();
        var problems = $('#dnproblems').val();
        Agenda.insert({
            title: "Problems: ",
            start: Now,
            end: Now,
            description: problems,
            problems: problems,
            createdAt: new Date()
        });
    },



    'submit #dncareerSubmitter':function(e){
        e.preventDefault();
        var career = $('#dncareer').val();
        Agenda.insert({
            title: "Career: ",
            start: Now,
            end: Now,
            description: career,
            career: career,
            createdAt: new Date()
        });
    },
    'submit #dnprojectsSubmitter':function(e){
        e.preventDefault();
        var projects = $('#dnprojects').val();
        Agenda.insert({
            title: "Projects: ",
            start: Now,
            end: Now,
            description: projects,
            projects: projects,
            createdAt: new Date()
        });
    },
    'submit #dnhobbySubmitter':function(e){
        e.preventDefault();
        var hobby = $('#dnhobby').val();
        Agenda.insert({
            title: "Hobby: ",
            start: Now,
            end: Now,
            description: hobby,
            hobby: hobby,
            createdAt: new Date()
        });
    },
});


Template.HealthLogger.events({
    // individual submitters
    'submit #dnsymptomsSubmitter':function(e){
        e.preventDefault();
        var symptoms = $('#dnsymptoms').val();
        Agenda.insert({
            title: "Symptoms: ",
            start: Now,
            end: Now,
            description: symptoms,
            symptoms: symptoms,
            createdAt: new Date()
        });
    },
    'submit #dnwhyhealthissueSubmitter':function(e){
        e.preventDefault();
        var whyhealthissue = $('#dnwhyhealthissue').val();
        Agenda.insert({
            title: "Why I think I feel this health issue: ",
            start: Now,
            end: Now,
            description: whyhealthissue,
            whyhealthissue: whyhealthissue,
            createdAt: new Date()
        });
    },
    'submit #dnallergiesSubmitter':function(e){
        e.preventDefault();
        var allergies = $('#dnallergies').val();
        Agenda.insert({
            title: "Allergies: ",
            start: Now,
            end: Now,
            description: allergies,
            allergies: allergies,
            createdAt: new Date()
        });
    },
    'submit #dnpooplogSubmitter':function(e){
        e.preventDefault();
        var pooplog = $('#dnpooplog').val();
        Agenda.insert({
            title: "Poop Log: ",
            start: Now,
            end: Now,
            description: pooplog,
            pooplog: pooplog,
            createdAt: new Date()
        });
    },
    'submit #dnpeelogSubmitter':function(e){
        e.preventDefault();
        var peelog = $('#dnpeelog').val();
        Agenda.insert({
            title: "Pee Log: ",
            start: Now,
            end: Now,
            description: peelog,
            peelog: peelog,
            createdAt: new Date()
        });
    },
    'submit #dnvisionhistSubmitter':function(e){
        e.preventDefault();
        var visionhist = $('#dnvisionhist').val();
        Agenda.insert({
            title: "Vision Hist: ",
            start: Now,
            end: Now,
            description: visionhist,
            visionhist: visionhist,
            createdAt: new Date()
        });
    },
});


Template.HygieneLogger.events({
    // individual submitters
    'submit #dnhowshygieneSubmitter':function(e){
        e.preventDefault();
        var howshygiene = $('#dnhowshygiene').val();
        Agenda.insert({
            title: "Hygiene Logger: ",
            start: Now,
            end: Now,
            description: howshygiene,
            howshygiene: howshygiene,
            createdAt: new Date()
        });
    },
    'submit #dnhaircoditionSubmitter':function(e){
        e.preventDefault();
        var haircodition = $('#dnhaircodition').val();
        Agenda.insert({
            title: "Hair Condition: ",
            start: Now,
            end: Now,
            description: haircodition,
            haircodition: haircodition,
            createdAt: new Date()
        });
    },
    'submit #dnnailsconditionSubmitter':function(e){
        e.preventDefault();
        var nailscondition = $('#dnnailscondition').val();
        Agenda.insert({
            title: "Nails Condition: ",
            start: Now,
            end: Now,
            description: nailscondition,
            nailscondition: nailscondition,
            createdAt: new Date()
        });
    },
    'submit #dndressedSubmitter':function(e){
        e.preventDefault();
        var dressed = $('#dndressed').val();
        Agenda.insert({
            title: "How am I dressed: ",
            start: Now,
            end: Now,
            description: dressed,
            dressed: dressed,
            createdAt: new Date()
        });
    },
});


Template.FoodLogger.events({
    // individual submitters
    'submit #dneatlogSubmitter':function(e){
        e.preventDefault();
        var eatlog = $('#dneatlog').val();
        Agenda.insert({
            title: "Food Log: ",
            start: Now,
            end: Now,
            description: eatlog,
            eatlog: eatlog,
            createdAt: new Date()
        });
    },
});


Template.FitLogger.events({
    // individual submitters
    'submit #dnfitnesslogSubmitter':function(e){
        e.preventDefault();
        var fitnesslog = $('#dnfitnesslog').val();
        Agenda.insert({
            title: "Fitness Log: ",
            start: Now,
            end: Now,
            description: fitnesslog,
            fitnesslog: fitnesslog,
            createdAt: new Date()
        });
    },
});


Template.MoneyLogger.events({
    // individual submitters

});


Template.ThingsLogger.events({
    // individual submitters
    'submit #dnstuffhaveSubmitter':function(e){
        e.preventDefault();
        var stuffhave = $('#dnstuffhave').val();
        Agenda.insert({
            title: "Stuff I Have: ",
            start: Now,
            end: Now,
            description: stuffhave,
            stuffhave: stuffhave,
            createdAt: new Date()
        });
    },
    'submit #dnstuffwantSubmitter':function(e){
        e.preventDefault();
        var stuffwant = $('#dnstuffwant').val();
        Agenda.insert({
            title: "Stuff want: ",
            start: Now,
            end: Now,
            description: stuffwant,
            stuffwant: stuffwant,
            createdAt: new Date()
        });
    },
       'submit #dnstufflostSubmitter':function(e){
        e.preventDefault();
        var stufflost = $('#dnstufflost').val();
        Agenda.insert({
            title: "Stuff I've Lost: ",
            start: Now,
            end: Now,
            description: stufflost,
            stufflost: stufflost,
            createdAt: new Date()
        });
    },
    'submit #dnstufflentSubmitter':function(e){
        e.preventDefault();
        var stufflent = $('#dnstufflent').val();
        Agenda.insert({
            title: "Stuff I've Lent: ",
            start: Now,
            end: Now,
            description: stufflent,
            stufflent: stufflent,
            createdAt: new Date()
        });
    },
    'submit #dnstuffborrowedSubmitter':function(e){
        e.preventDefault();
        var stuffborrowed = $('#dnstuffborrowed').val();
        Agenda.insert({
            title: "Stuff I've Bottowed: ",
            start: Now,
            end: Now,
            description: stuffborrowed,
            stuffborrowed: stuffborrowed,
            createdAt: new Date()
        });
    },
});

Template.PlacesLogger.events({
    // individual submitters
    'submit #dnplacesbeenSubmitter':function(e){
        e.preventDefault();
        var placesbeen = $('#dnplacesbeen').val();
        Agenda.insert({
            title: "Places I've Been: ",
            start: Now,
            end: Now,
            description: placesbeen,
            placesbeen: placesbeen,
            createdAt: new Date()
        });
    },
    'submit #dnplaceswantSubmitter':function(e){
        e.preventDefault();
        var placeswant = $('#dnplaceswant').val();
        Agenda.insert({
            title: "Places I Want To Go: ",
            start: Now,
            end: Now,
            description: placeswant,
            placeswant: placeswant,
            createdAt: new Date()
        });
    },
});

Template.FengshuiLogger.events({
    // individual submitters
    'submit #dnchoreslogSubmitter':function(e){
        e.preventDefault();
        var choreslog = $('#dnchoreslog').val();
        Agenda.insert({
            title: "Chores Log I did: ",
            start: Now,
            end: Now,
            description: choreslog,
            choreslog: choreslog,
            createdAt: new Date()
        });
    },
    'submit #dnhomemessSubmitter':function(e){
        e.preventDefault();
        var homemess = $('#dnhomemess').val();
        Agenda.insert({
            title: "Home Mess to Deal With: ",
            start: Now,
            end: Now,
            description: homemess,
            homemess: homemess,
            createdAt: new Date()
        });
    },
    'submit #dnhometightinessSubmitter':function(e){
        e.preventDefault();
        var hometightiness = $('#dnhometightiness').val();
        Agenda.insert({
            title: "Home Tightiness: ",
            start: Now,
            end: Now,
            description: hometightiness,
            hometightiness: hometightiness,
            createdAt: new Date()
        });
    },
    'submit #dncarmessSubmitter':function(e){
        e.preventDefault();
        var carmess = $('#dncarmess').val();
        Agenda.insert({
            title: "Car Mess to Dead with: ",
            start: Now,
            end: Now,
            description: carmess,
            carmess: carmess,
            createdAt: new Date()
        });
    },
    'submit #dncartightinessSubmitter':function(e){
        e.preventDefault();
        var cartightiness = $('#dncartightiness').val();
        Agenda.insert({
            title: "Car Tightiness: ",
            start: Now,
            end: Now,
            description: cartightiness,
            cartightiness: cartightiness,
            createdAt: new Date()
        });
    },
    'submit #dnworkspacemessSubmitter':function(e){
        e.preventDefault();
        var workspacemess = $('#dnworkspacemess').val();
        Agenda.insert({
            title: "Work Space Messes to Deal With: ",
            start: Now,
            end: Now,
            description: workspacemess,
            workspacemess: workspacemess,
            createdAt: new Date()
        });
    },
    'submit #dnworkspacetightinessSubmitter':function(e){
        e.preventDefault();
        var workspacetightiness = $('#dnworkspacetightiness').val();
        Agenda.insert({
            title: "Work Space Tightiness: ",
            start: Now,
            end: Now,
            description: workspacetightiness,
            workspacetightiness: workspacetightiness,
            createdAt: new Date()
        });
    },
});

Template.PeopleLogger.events({
    // individual submitters
    'submit #dnpplengagedwithSubmitter':function(e){
        e.preventDefault();
        var pplengagedwith = $('#dnpplengagedwith').val();
        Agenda.insert({
            title: "People I've Engaged with Today: ",
            start: Now,
            end: Now,
            description: pplengagedwith,
            pplengagedwith: pplengagedwith,
            createdAt: new Date()
        });
    },
    'submit #dnpplgiftideasSubmitter':function(e){
        e.preventDefault();
        var pplgiftideas = $('#dnpplgiftideas').val();
        Agenda.insert({
            title: "People's Gift Ideas: ",
            start: Now,
            end: Now,
            description: pplgiftideas,
            pplgiftideas: pplgiftideas,
            createdAt: new Date()
        });
    },
});

Template.LoveLogger.events({
    // individual submitters
    'submit #dnhowsodoingSubmitter':function(e){
        e.preventDefault();
        var howsodoing = $('#dnhowsodoing').val();
        Agenda.insert({
            title: "How's SO doing? ",
            start: Now,
            end: Now,
            description: howsodoing,
            howsodoing: howsodoing,
            createdAt: new Date()
        });
    },
    'submit #dnsolikesSubmitter':function(e){
        e.preventDefault();
        var solikes = $('#dnsolikes').val();
        Agenda.insert({
            title: "SO Likes: ",
            start: Now,
            end: Now,
            description: solikes,
            solikes: solikes,
            createdAt: new Date()
        });
    },
    'submit #dnsodislikesSubmitter':function(e){
        e.preventDefault();
        var sodislikes = $('#dnsodislikes').val();
        Agenda.insert({
            title: "SO Dislikes: ",
            start: Now,
            end: Now,
            description: sodislikes,
            sodislikes: sodislikes,
            createdAt: new Date()
        });
    },
    'submit #dnsogiftideasSubmitter':function(e){
        e.preventDefault();
        var sogiftideas = $('#dnsogiftideas').val();
        Agenda.insert({
            title: "SO Gift Ideas: ",
            start: Now,
            end: Now,
            description: sogiftideas,
            sogiftideas: sogiftideas,
            createdAt: new Date()
        });
    },
    'submit #dnsomoodSubmitter':function(e){
        e.preventDefault();
        var somood = $('#dnsomood').val();
        Agenda.insert({
            title: "SO Mood Log: ",
            start: Now,
            end: Now,
            description: somood,
            somood: somood,
            createdAt: new Date()
        });
    },
    'submit #dnsogarguementSubmitter':function(e){
        e.preventDefault();
        var sogarguement = $('#dnsogarguement').val();
        Agenda.insert({
            title: "SO Arguement Hist: ",
            start: Now,
            end: Now,
            description: sogarguement, 
            sogarguement: sogarguement,
            createdAt: new Date()
        });
    },
    'submit #dnperiodSubmitter':function(e){
        e.preventDefault();
        var period = $('#dnperiod').val();
        Agenda.insert({
            title: "Period Log: ",
            start: Now,
            end: Now,
            description: period,
            period: period,
            createdAt: new Date()
        });
    },
    'submit #dnsexualactivitySubmitter':function(e){
        e.preventDefault();
        var sexualactivity = $('#dnsexualactivity').val();
        Agenda.insert({
            title: "Sex Hist: ",
            start: Now,
            end: Now,
            description: sexualactivity,
            sexualactivity: sexualactivity,
            createdAt: new Date()
        });
    },
});


Template.CompanionLogger.events({
    // individual submitters
    'submit #dnpetdoingSubmitter':function(e){
        e.preventDefault();
        var petdoing = $('#dnpetdoing').val();
        Agenda.insert({
            title: "Pet Doing: ",
            start: Now,
            end: Now,
            description: petdoing,
            petdoing: petdoing,
            createdAt: new Date()
        });
    },
    'submit #dnpetmedSubmitter':function(e){
        e.preventDefault();
        var petmed = $('#dnpetmed').val();
        Agenda.insert({
            title: "Pet's Medical Hist: ",
            start: Now,
            end: Now,
            description: petmed,
            petmed: petmed,
            createdAt: new Date()
        });
    },
});


Template.SocietyLogger.events({
    // individual submitters

});


Template.SpiritLogger.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    console.log('yo');

    // Get value from form element
    const target = event.target;
    const spirititemName = target.spirititemName.value;
    
    // Insert a spirit item into the collection
    Meteor.call('spirititemName.insert', spirititemName);

    // Clear form
    target.spirititemName.value = '';
    },
});
