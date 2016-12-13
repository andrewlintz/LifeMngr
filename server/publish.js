Meteor.publish('events', function (start, end) {
    return Agenda.find({
        $and: [
            {date: {$gte: start}},
            {date: {$lte: end}}
        ]
    });
});