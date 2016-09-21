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
});




////////* dayreview Events *//////

// past logging ///

Template.dayreviewheadliner.events({
    // events go here
    'click .delete-dayreviewheadlineritem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=dayreviewheadlinerItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var dayreviewheadlinerItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { headline: dayreviewheadlinerItem }});
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

