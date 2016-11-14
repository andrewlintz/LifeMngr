/*
    drmissionlooper() {
        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        return Agenda.find( {mission: {$exists: true}}, {createdAt: {$gte: start, $lt: end}}, {sort: {createdAt: -1}});
    },




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

*/
