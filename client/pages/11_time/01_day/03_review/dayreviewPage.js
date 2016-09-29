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
    drmissionlooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {mission: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
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
