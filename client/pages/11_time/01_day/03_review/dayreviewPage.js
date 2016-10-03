'./dayreview.html'


///// HELPERS ///// 
Template.time.helpers({
  time: function(){ return new Date(); }
});

Template.drLooper.helpers({
    drDiarylooper() {
        return Agenda.find({
            $and: [
            {story: {$exists: true}},
            {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
});
Template.drSleepRecord.helpers({
    drSleeplooper() {
        return Agenda.find({
            $and: [
            {howdidUsleep: {$exists: true}}, 
            {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    drdreamDiarylooper() {
        return Agenda.find({
            $and: [
            {dreamDiary: {$exists: true}}, 
            {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    drwakeUplooper() {
        return Agenda.find({
            $and: [
            {wakeuptime: {$exists: true}}, 
            {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    droutofBedlooper() {
        return Agenda.find({
            $and: [
            {outofBed: {$exists: true}}, 
            {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
});

Template.drMindRecord.helpers({
    drmoodlooper() {
        return Agenda.find({
            $and: [
            {mood: {$exists: true}}, 
            {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    drwhymoodlooper() {
        return Agenda.find({
            $and: [
            {whymood: {$exists: true}}, 
            {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    drgoodhabitslooper() {
        return Agenda.find({
            $and: [
            {goodhabits: {$exists: true}}, 
            {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    drbadhabitslooper() {
        return Agenda.find({
            $and: [
            {badhabits: {$exists: true}}, 
            {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    drjokeslooper() {
        return Agenda.find({
            $and: [
            {jokes: {$exists: true}}, 
            {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    drcreativeartideaslooper() {
        return Agenda.find({
            $and: [
            {creativeartideas: {$exists: true}}, 
            {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    drinventionslooper() {
        return Agenda.find({
            $and: [
            {inventions: {$exists: true}}, 
            {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    drentreprenuerialidealooper() {
        return Agenda.find({
            $and: [
            {entreprenuerialidea: {$exists: true}}, 
            {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    drjobcareerbizOpplooper() {
        return Agenda.find({
            $and: [
            {jobcareerbizOpp: {$exists: true}}, 
            {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    drthoughtslooper() {
        return Agenda.find({
            $and: [
            {thoughts: {$exists: true}}, 
            {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    drwantslooper() {
        return Agenda.find({
            $and: [
            {wants: {$exists: true}}, 
            {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    drproblemslooper() {
        return Agenda.find({
            $and: [
            {problems: {$exists: true}}, 
            {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    dropinionlooper() {
        return Agenda.find({
            $and: [
            {opinion: {$exists: true}}, 
            {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    drwisdomlooper() {
        return Agenda.find({
            $and: [
            {wisdom: {$exists: true}}, 
            {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
});
Template.drAgendaRecord.helpers({
    drmissionlooper() {
        return Agenda.find({
            $and: [
            {mission: {$exists: true}}, 
            {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    drtodoslooper() {
        return Agenda.find({
            $and: [
            {todos: {$exists: true}}, 
            {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    drvalueslooper() {
        return Agenda.find({
            $and: [
            {values: {$exists: true}}, 
            {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    drvisionlooper() {
        return Agenda.find({
            $and: [
            {vision: {$exists: true}}, 
            {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    drgoalslooper() {
        return Agenda.find({
            $and: [
            {goals: {$exists: true}}, 
            {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    drstrategylooper() {
        return Agenda.find({
            $and: [
            {strategy: {$exists: true}}, 
            {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    draccomplishmentslooper() {
        return Agenda.find({
            $and: [
            {accomplishments: {$exists: true}}, 
            {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    drsuccesseslooper() {
        return Agenda.find({
            $and: [
            {successes: {$exists: true}}, 
            {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    drfailurelooper() {
        return Agenda.find({
            $and: [
            {failure: {$exists: true}}, 
            {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    drstrengthslooper() {
        return Agenda.find({
            $and: [
            {strengths: {$exists: true}}, 
            {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    drweaknesseslooper() {
        return Agenda.find({
            $and: [
            {weaknesses: {$exists: true}}, 
            {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    drcareerlooper() {
        return Agenda.find({
            $and: [
            {career: {$exists: true}}, 
            {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    drprojectslooper() {
        return Agenda.find({
            $and: [
            {projects: {$exists: true}}, 
            {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    drhobbylooper() {
        return Agenda.find({
            $and: [
            {hobby: {$exists: true}}, 
            {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
});
Template.drHealthRecord.helpers({
    drsymptomslooper() {
        return Agenda.find({
            $and: [
            {symptoms: {$exists: true}}, 
            {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    drwhyhealthissuelooper() {
        return Agenda.find({
            $and: [
            {whyhealthissue: {$exists: true}}, 
            {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    drallergieslooper() {
        return Agenda.find({
            $and: [
            {allergies: {$exists: true}}, 
            {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    drpooploglooper() {
        return Agenda.find({
            $and: [
            {pooplog: {$exists: true}}, 
            {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    drpeeloglooper() {
        return Agenda.find({
            $and: [
            {peelog: {$exists: true}}, 
            {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    drvisionhistlooper() {
        return Agenda.find({
            $and: [
            {visionhist: {$exists: true}}, 
            {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
});
Template.drHygieneRecord.helpers({
drhowshygienelooper() {
        return Agenda.find({
            $and: [
            {howshygiene: {$exists: true}}, 
            {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    drhaircoditionlooper() {
        return Agenda.find({
            $and: [
            {haircodition: {$exists: true}}, 
            {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    drnailsconditionlooper() {
        return Agenda.find({
            $and: [
            {nailscondition: {$exists: true}}, 
            {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    drdressedlooper() {
        return Agenda.find({
            $and: [
            {dressed: {$exists: true}}, 
            {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
});
Template.drFoodRecord.helpers({
    dreatloglooper() {
        return Agenda.find({
            $and: [
            {eatlog: {$exists: true}}, 
            {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
});
Template.drFitRecord.helpers({
    drfitnessloglooper() {
        return Agenda.find({
            $and: [
            {fitnesslog: {$exists: true}}, 
            {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
});
Template.drMoneyRecord.helpers({
    

});
Template.drThingsRecord.helpers({
    drstuffhavelooper() {
        return Agenda.find({
        $and: [
        {stuffhave: {$exists: true}}, 
        {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    drstuffwantlooper() {
        return Agenda.find({
        $and: [
        {stuffwant: {$exists: true}}, 
        {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    drstufflostlooper() {
        return Agenda.find({
        $and: [
        {stufflost: {$exists: true}}, 
        {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    drstufflentlooper() {
        return Agenda.find({
        $and: [
        {stufflent: {$exists: true}}, 
        {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    drstuffborrowedlooper() {
        return Agenda.find({
        $and: [
        {stuffborrowed: {$exists: true}}, 
        {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
});
Template.drPlacesRecord.helpers({
    drplacesbeenlooper() {
        return Agenda.find({
        $and: [
        {placesbeen: {$exists: true}}, 
        {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    drplaceswantlooper() {
        return Agenda.find({
        $and: [
        {placeswant: {$exists: true}}, 
        {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
});
Template.drFengshuiRecord.helpers({
    drchoresloglooper() {
        return Agenda.find({
        $and: [
        {choreslog: {$exists: true}}, 
        {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    drhomemesslooper() {
        return Agenda.find({
        $and: [
        {homemess: {$exists: true}}, 
        {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    drhometightinesslooper() {
        return Agenda.find({
        $and: [
        {hometightiness: {$exists: true}}, 
        {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    drcarmesslooper() {
        return Agenda.find({
        $and: [
        {carmess: {$exists: true}}, 
        {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    drcartightinesslooper() {
        return Agenda.find({
        $and: [
        {cartightiness: {$exists: true}}, 
        {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    drworkspacemesslooper() {
        return Agenda.find({
        $and: [
        {workspacemess: {$exists: true}}, 
        {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    drworkspacetightinesslooper() {
        return Agenda.find({
        $and: [
        {workspacetightiness: {$exists: true}}, 
        {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
});
Template.drPeopleRecord.helpers({
    drpplengagedwithlooper() {
        return Agenda.find({
        $and: [
        {pplengagedwith: {$exists: true}}, 
        {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    drpplgiftideaslooper() {
        return Agenda.find({
        $and: [
        {pplgiftideas: {$exists: true}}, 
        {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
});
Template.drLoveRecord.helpers({
    drhowsodoinglooper() {
        return Agenda.find({
        $and: [
        {howsodoing: {$exists: true}}, 
        {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    drsolikeslooper() {
        return Agenda.find({
        $and: [
        {solikes: {$exists: true}}, 
        {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    drsodislikeslooper() {
        return Agenda.find({
        $and: [
        {sodislikes: {$exists: true}}, 
        {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    drsogiftideaslooper() {
        return Agenda.find({
        $and: [
        {sogiftideas: {$exists: true}}, 
        {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    drsomoodlooper() {
        return Agenda.find({
        $and: [
        {somood: {$exists: true}}, 
        {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    drsogarguementlooper() {
        return Agenda.find({
        $and: [
        {sogarguement: {$exists: true}}, 
        {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    drperiodlooper() {
        return Agenda.find({
        $and: [
        {period: {$exists: true}}, 
        {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    drsexualactivitylooper() {
        return Agenda.find({
        $and: [
        {sexualactivity: {$exists: true}}, 
        {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
});
Template.drCompanionRecord.helpers({
    drpetdoinglooper() {
        return Agenda.find({
        $and: [
        {petdoing: {$exists: true}}, 
        {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
    drpetmedlooper() {
        return Agenda.find({
        $and: [
        {petmed: {$exists: true}}, 
        {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
});
Template.drSocietyRecord.helpers({
    

});
Template.drSpiritRecord.helpers({
    drmeditatedlooper() {
        return Agenda.find({
        $and: [
        {meditated: {$exists: true}}, 
        {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
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

