
/*

Meteor.methods({
	'submitsPost': function(headline, story){
	}
});

Meteor.publish('events', function (start, end) {
    return Agenda.find({
        $and: [
            {date: {$gte: start}},
            {date: {$lte: end}}
        ]
    });
});

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

*/