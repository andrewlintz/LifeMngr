Agenda = new Mongo.Collection('agenda');
Daily = new Mongo.Collection('daily');


Meteor.methods({
    addEvent: function(title, start, end, description){
        Agenda.insert({
            title: title,
            start: start,
            end: end,
            allDay: false,
            createdAt: new Date(),
            editedAt: new Date(),
            description: description,
            private: true,
            owner: "Meteor.userId()"
        });
    },

    deleteEvent: function(id){
        Agenda.remove(id);
    }
});