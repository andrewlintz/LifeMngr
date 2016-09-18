'./dayplan.html'


///// HELPERS /////


Template.dayplanPage.helpers({
    dayplanEach() {
        return Agenda.find( { spirit: {$exists: true}}, {sort: {createdAt: -1}}); },

});



////////* dayplan Events *//////