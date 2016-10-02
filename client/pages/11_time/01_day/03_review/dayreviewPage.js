'./dayreview.html'


///// HELPERS ///// 
Template.time.helpers({
  time: function(){ return new Date(); }
});

Template.drLooper.helpers({
    drDiarylooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {headline: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
});
Template.drSleepRecord.helpers({
    drSleeplooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {howdidUsleep: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    drdreamDiarylooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {dreamDiary: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    drwakeUplooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {wakeuptime: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    droutofBedlooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {outofBed: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
});

Template.drMindRecord.helpers({
    drmoodlooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {mood: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    drwhymoodlooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {whymood: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    drgoodhabitslooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {goodhabits: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    drbadhabitslooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {badhabits: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    drjokeslooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {jokes: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    drcreativeartideaslooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {creativeartideas: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    drinventionslooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {inventions: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    drentreprenuerialidealooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {entreprenuerialidea: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    drjobcareerbizOpplooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {jobcareerbizOpp: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    drthoughtslooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {thoughts: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    drwantslooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {wants: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    drproblemslooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {problems: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    dropinionlooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {opinion: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    drwisdomlooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {wisdom: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
});
Template.drAgendaRecord.helpers({
    drmissionlooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {mission: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    drtodoslooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {todos: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    drvalueslooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {values: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    drvisionlooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {vision: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    drgoalslooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {goals: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    drstrategylooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {strategy: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    draccomplishmentslooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {accomplishments: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    drsuccesseslooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {successes: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    drfailurelooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {failure: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    drstrengthslooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {strengths: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    drweaknesseslooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {weaknesses: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    drcareerlooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {career: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    drprojectslooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {projects: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    drhobbylooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {hobby: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
});
Template.drHealthRecord.helpers({
    drsymptomslooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {symptoms: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    drwhyhealthissuelooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {whyhealthissue: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    drallergieslooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {allergies: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    drpooploglooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {pooplog: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    drpeeloglooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {peelog: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    drvisionhistlooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {visionhist: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
});
Template.drHygieneRecord.helpers({
drhowshygienelooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {howshygiene: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    drhaircoditionlooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {haircodition: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    drnailsconditionlooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {nailscondition: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    drdressedlooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {dressed: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
});
Template.drFoodRecord.helpers({
    dreatloglooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {eatlog: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
});
Template.drFitRecord.helpers({
    drfitnessloglooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {fitnesslog: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
});
Template.drMoneyRecord.helpers({
    

});
Template.drThingsRecord.helpers({
    drstuffhavelooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {stuffhave: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    drstuffwantlooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {stuffwant: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    drstufflostlooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {stufflost: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    drstufflentlooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {stufflent: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    drstuffborrowedlooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {stuffborrowed: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
});
Template.drPlacesRecord.helpers({
    drplacesbeenlooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {placesbeen: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    drplaceswantlooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {placeswant: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
});
Template.drFengshuiRecord.helpers({
    drchoresloglooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {choreslog: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    drhomemesslooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {homemess: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    drhometightinesslooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {hometightiness: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    drcarmesslooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {carmess: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    drcartightinesslooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {cartightiness: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    drworkspacemesslooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {workspacemess: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    drworkspacetightinesslooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {workspacetightiness: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
});
Template.drPeopleRecord.helpers({
    drpplengagedwithlooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {pplengagedwith: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    drpplgiftideaslooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {pplgiftideas: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
});
Template.drLoveRecord.helpers({
    drhowsodoinglooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {howsodoing: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    drsolikeslooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {solikes: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    drsodislikeslooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {sodislikes: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    drsogiftideaslooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {sogiftideas: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    drsomoodlooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {somood: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    drsogarguementlooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {sogarguement: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    drperiodlooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {period: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    drsexualactivitylooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {sexualactivity: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
});
Template.drCompanionRecord.helpers({
    drpetdoinglooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {petdoing: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
    drpetmedlooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {petmed: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },
});
Template.drSocietyRecord.helpers({
    

});
Template.drSpiritRecord.helpers({
    drmeditatedlooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {meditated: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },

});





////////* dayreview Events *//////

// past logging ///

Template.drheadliner.events({
    // events go here
    'click .delete-dayreviewheadlineritem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drheadlinerItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drheadlinerItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { headline: drheadlinerItem }});
        }
    },
});

Template.drstory.events({
    // events go here
    'click .delete-dayreviewstoryitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=dayreviewstoryItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var dayreviewstoryItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { story: dayreviewstoryItem }});
        }
    },
});

Template.drhowdidUsleep.events({
    // events go here
    'click .delete-drhowdidUsleepitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drhowdidUsleepItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drhowdidUsleepItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { howdidUsleep: drhowdidUsleepItem }});
        }
    },
});
Template.drdreamDiaryloader.events({
    // events go here
    'click .delete-drdreamDiaryitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drdreamDiaryItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drdreamDiaryItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { dreamDiary: drdreamDiaryItem }});
        }
    },    
});

Template.drwakeUploader.events({
    // events go here
    'click .delete-drwakeUpitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drwakeUpItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drwakeUpItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { wakeuptime: drwakeUpItem }});
        }
    },
});

Template.droutofBedloader.events({
    // events go here
    'click .delete-droutofBeditem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=droutofBedItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var droutofBedItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { outofBed: droutofBedItem }});
        }
    },
});

Template.drmoodloader.events({
    // events go here
    'click .delete-drmooditem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drmoodItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drmoodItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { mood: drmoodItem }});
        }
    },
});

Template.drwhymoodloader.events({
    // events go here
    'click .delete-drwhymooditem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drwhymoodItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drwhymoodItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { whymood: drwhymoodItem }});
        }
    },
});

Template.drgoodhabitsloader.events({
    // events go here
    'click .delete-drgoodhabitsitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drgoodhabitsItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drgoodhabitsItem = $(event.target).val();
       Agenda.update({ _id: documentId }, {$set: { goodhabbits: drgoodhabbitsItem }});
        }
    },
});

Template.drbadhabitsloader.events({
    // events go here
    'click .delete-drbadhabitsitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drbadhabitsItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drbadhabitsItem = $(event.target).val();
       Agenda.update({ _id: documentId }, {$set: { badhabbits: drbadhabbitsItem }});
        }
    },
});
Template.drjokesloader.events({
    // events go here
    'click .delete-drjokesitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drjokesItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drjokesItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { jokes: drjokesItem }});
        }
    },
});
Template.drcreativeartideasloader.events({
    // events go here
    'click .delete-drcreativeartideasitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drcreativeartideasItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drcreativeartideasItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { creativeartideas: drcreativeartideasItem }});
        }
    },
});
Template.drinventionsloader.events({
    // events go here
    'click .delete-drinventionsitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drinventionsItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drinventionsItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { inventions: drinventionsItem }});
        }
    },
});
Template.drentreprenuerialidealoader.events({
    // events go here
    'click .delete-drentreprenuerialideaitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drentreprenuerialideaItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drentreprenuerialideaItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { entreprenuerialidea: drentreprenuerialideaItem }});
        }
    },
});
Template.drjobcareerbizOpploader.events({
    // events go here
    'click .delete-drjobcareerbizOppitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drjobcareerbizOppItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drjobcareerbizOppItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { jobcareerbizOpp: drjobcareerbizOppItem }});
        }
    },
});
Template.dropinionloader.events({
    // events go here
    'click .delete-dropinionitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=dropinionItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var dropinionItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { opinion: dropinionItem }});
        }
    },
});
Template.drwisdomloader.events({
    // events go here
    'click .delete-drwisdomitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drwisdomItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drwisdomItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { wisdom: drwisdomItem }});
        }
    },
});





// AGENDA//





Template.drmissionloader.events({
    // events go here
    'click .delete-drmissionitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drmissionItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drmissionItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { mission: drmissionItem }});
        }
    },
});




Template.dreventsiwantohappenloader.events({
    // events go here
    'click .delete-dreventsiwantohappenitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=dreventsiwantohappenItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var dreventsiwantohappenItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { eventsiwantohappen: dreventsiwantohappenItem }});
        }
    },
});
Template.dractivitiesiwanttodoloader.events({
    // events go here
    'click .delete-dractivitiesiwanttodoitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=dractivitiesiwanttodoItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var dractivitiesiwanttodoItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { activitiesiwanttodo: dractivitiesiwanttodoItem }});
        }
    },
});
Template.drtodosloader.events({
    // events go here
    'click .delete-drtodositem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drtodosItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drtodosItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { todos: drtodosItem }});
        }
    },
});
Template.drvaluesloader.events({
    // events go here
    'click .delete-drvaluesitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drvaluesItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drvaluesItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { values: drvaluesItem }});
        }
    },
});
Template.drvisionloader.events({
    // events go here
    'click .delete-drvisionitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drvisionItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drvisionItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { vision: drvisionItem }});
        }
    },
});
Template.drgoalsloader.events({
    // events go here
    'click .delete-drgoalsitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drgoalsItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drgoalsItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { goals: drgoalsItem }});
        }
    },
});
Template.drstrategyloader.events({
    // events go here
    'click .delete-drstrategyitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drstrategyItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drstrategyItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { strategy: drstrategyItem }});
        }
    },
});
Template.draccomplishmentsloader.events({
    // events go here
    'click .delete-draccomplishmentsitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=draccomplishmentsItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var draccomplishmentsItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { accomplishments: draccomplishmentsItem }});
        }
    },
});
Template.drsuccessesloader.events({
    // events go here
    'click .delete-drsuccessesitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drsuccessesItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drsuccessesItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { successes: drsuccessesItem }});
        }
    },
});
Template.drfailureloader.events({
    // events go here
    'click .delete-drfailureitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drfailureItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drfailureItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { failure: drfailureItem }});
        }
    },
});
Template.drstrengthsloader.events({
    // events go here
    'click .delete-drstrengthsitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drstrengthsItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drstrengthsItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { strengths: drstrengthsItem }});
        }
    },
});
Template.drweaknessesloader.events({
    // events go here
    'click .delete-drweaknessesitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drweaknessesItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drweaknessesItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { weaknesses: drweaknessesItem }});
        }
    },
});
Template.drthoughtsloader.events({
    // events go here
    'click .delete-drthoughtsitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drthoughtsItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drthoughtsItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { thoughts: drthoughtsItem }});
        }
    },
});
Template.drwantsloader.events({
    // events go here
    'click .delete-drwantsitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drwantsItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drwantsItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { wants: drwantsItem }});
        }
    },
});
Template.drproblemsloader.events({
    // events go here
    'click .delete-drproblemsitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drproblemsItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drproblemsItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { problems: drproblemsItem }});
        }
    },
});
Template.drcareerloader.events({
    // events go here
    'click .delete-drcareeritem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drcareerItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drcareerItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { career: drcareerItem }});
        }
    },
});
Template.drprojectsloader.events({
    // events go here
    'click .delete-drprojectsitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drprojectsItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drprojectsItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { projects: drprojectsItem }});
        }
    },
});
Template.drhobbyloader.events({
    // events go here
    'click .delete-drhobbyitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drhobbyItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drhobbyItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { hobby: drhobbyItem }});
        }
    },
});
Template.drsymptomsloader.events({
    // events go here
    'click .delete-drsymptomsitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drsymptomsItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drsymptomsItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { symptoms: drsymptomsItem }});
        }
    },
});
Template.drwhyhealthissueloader.events({
    // events go here
    'click .delete-drwhyhealthissueitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drwhyhealthissueItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drwhyhealthissueItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { whyhealthissue: drwhyhealthissueItem }});
        }
    },
});
Template.drallergiesloader.events({
    // events go here
    'click .delete-drallergiesitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drallergiesItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drallergiesItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { allergies: drallergiesItem }});
        }
    },
});
Template.drpooplogloader.events({
    // events go here
    'click .delete-drpooplogitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drpooplogItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drpooplogItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { pooplog: drpooplogItem }});
        }
    },
});
Template.drpeelogloader.events({
    // events go here
    'click .delete-drpeelogitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drpeelogItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drpeelogItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { peelog: drpeelogItem }});
        }
    },
});
Template.drvisionhistloader.events({
    // events go here
    'click .delete-drvisionhistitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drvisionhistItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drvisionhistItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { visionhist: drvisionhistItem }});
        }
    },
});
Template.drhowshygieneloader.events({
    // events go here
    'click .delete-drhowshygieneitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drhowshygieneItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drhowshygieneItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { howshygiene: drhowshygieneItem }});
        }
    },
});
Template.drhaircoditionloader.events({
    // events go here
    'click .delete-drhaircoditionitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drhaircoditionItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drhaircoditionItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { haircodition: drhaircoditionItem }});
        }
    },
});
Template.drnailsconditionloader.events({
    // events go here
    'click .delete-drnailsconditionitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drnailsconditionItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drnailsconditionItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { nailscondition: drnailsconditionItem }});
        }
    },
});
Template.drdressedloader.events({
    // events go here
    'click .delete-drdresseditem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drdressedItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drdressedItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { dressed: drdressedItem }});
        }
    },
});
Template.dreatlogloader.events({
    // events go here
    'click .delete-dreatlogitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=dreatlogItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var dreatlogItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { eatlog: dreatlogItem }});
        }
    },
});
Template.drfitnesslogloader.events({
    // events go here
    'click .delete-drfitnesslogitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drfitnesslogItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drfitnesslogItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { fitnesslog: drfitnesslogItem }});
        }
    },
});
Template.drstuffhaveloader.events({
    // events go here
    'click .delete-drstuffhaveitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drstuffhaveItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drstuffhaveItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { stuffhave: drstuffhaveItem }});
        }
    },
});
Template.drstuffwantloader.events({
    // events go here
    'click .delete-drstuffwantitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drstuffwantItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drstuffwantItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { stuffwant: drstuffwantItem }});
        }
    },
});
Template.drstufflostloader.events({
    // events go here
    'click .delete-drstufflostitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drstufflostItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drstufflostItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { stufflost: drstufflostItem }});
        }
    },
});
Template.drstufflentloader.events({
    // events go here
    'click .delete-drstufflentitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drstufflentItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drstufflentItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { stufflent: drstufflentItem }});
        }
    },
});
Template.drstuffborrowedloader.events({
    // events go here
    'click .delete-drstuffborroweditem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drstuffborrowedItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drstuffborrowedItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { stuffborrowed: drstuffborrowedItem }});
        }
    },
});
Template.drplacesbeenloader.events({
    // events go here
    'click .delete-drplacesbeenitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drplacesbeenItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drplacesbeenItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { placesbeen: drplacesbeenItem }});
        }
    },
});
Template.drplaceswantloader.events({
    // events go here
    'click .delete-drplaceswantitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drplaceswantItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drplaceswantItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { placeswant: drplaceswantItem }});
        }
    },
});
Template.drhomemessloader.events({
    // events go here
    'click .delete-drhomemessitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drhomemessItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drhomemessItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { homemess: drhomemessItem }});
        }
    },
});
Template.drhometightinessloader.events({
    // events go here
    'click .delete-drhometightinessitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drhometightinessItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drhometightinessItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { hometightiness: drhometightinessItem }});
        }
    },
});
Template.drcarmessloader.events({
    // events go here
    'click .delete-drcarmessitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drcarmessItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drcarmessItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { carmess: drcarmessItem }});
        }
    },
});
Template.drcartightinessloader.events({
    // events go here
    'click .delete-drcartightinessitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drcartightinessItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drcartightinessItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { cartightiness: drcartightinessItem }});
        }
    },
});
Template.drworkspacemessloader.events({
    // events go here
    'click .delete-drworkspacemessitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drworkspacemessItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drworkspacemessItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { workspacemess: drworkspacemessItem }});
        }
    },
});
Template.drworkspacetightinessloader.events({
    // events go here
    'click .delete-drworkspacetightinessitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drworkspacetightinessItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drworkspacetightinessItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { workspacetightiness: drworkspacetightinessItem }});
        }
    },
});
Template.drchoreslogloader.events({
    // events go here
    'click .delete-drchoreslogitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drchoreslogItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drchoreslogItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { choreslog: drchoreslogItem }});
        }
    },
});
Template.drpplengagedwithloader.events({
    // events go here
    'click .delete-drpplengagedwithitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drpplengagedwithItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drpplengagedwithItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { pplengagedwith: drpplengagedwithItem }});
        }
    },
});
Template.drpplgiftideasloader.events({
    // events go here
    'click .delete-drpplgiftideasitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drpplgiftideasItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drpplgiftideasItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { pplgiftideas: drpplgiftideasItem }});
        }
    },
});
Template.drhowsodoingloader.events({
    // events go here
    'click .delete-drhowsodoingitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drhowsodoingItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drhowsodoingItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { howsodoing: drhowsodoingItem }});
        }
    },
});
Template.drsolikesloader.events({
    // events go here
    'click .delete-drsolikesitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drsolikesItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drsolikesItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { solikes: drsolikesItem }});
        }
    },
});
Template.drsodislikesloader.events({
    // events go here
    'click .delete-drsodislikesitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drsodislikesItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drsodislikesItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { sodislikes: drsodislikesItem }});
        }
    },
});
Template.drsogiftideasloader.events({
    // events go here
    'click .delete-drsogiftideasitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drsogiftideasItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drsogiftideasItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { sogiftideas: drsogiftideasItem }});
        }
    },
});
Template.drsomoodloader.events({
    // events go here
    'click .delete-drsomooditem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drsomoodItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drsomoodItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { somood: drsomoodItem }});
        }
    },
});
Template.drsogarguementloader.events({
    // events go here
    'click .delete-drsogarguementitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drsogarguementItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drsogarguementItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { sogarguement: drsogarguementItem }});
        }
    },
});
Template.drperiodloader.events({
    // events go here
    'click .delete-drperioditem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drperiodItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drperiodItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { period: drperiodItem }});
        }
    },
});
Template.drsexualactivityloader.events({
    // events go here
    'click .delete-drsexualactivityitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drsexualactivityItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drsexualactivityItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { sexualactivity: drsexualactivityItem }});
        }
    },
});
Template.drpetdoingloader.events({
    // events go here
    'click .delete-drpetdoingitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drpetdoingItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drpetdoingItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { petdoing: drpetdoingItem }});
        }
    },
});
Template.drpetmedloader.events({
    // events go here
    'click .delete-drpetmeditem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drpetmedItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drpetmedItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { petmed: drpetmedItem }});
        }
    },
});
Template.drmeditatedloader.events({
    // events go here
    'click .delete-drmeditateditem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drmeditatedItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drmeditatedItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { meditated: drmeditatedItem }});
        }
    },
});

