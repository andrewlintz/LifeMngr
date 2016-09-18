  './seasonplan.html'


///// HELPERS /////


Template.seasonplanPage.helpers({
    seasonplanEach() {
        return Agenda.find( { spirit: {$exists: true}}, {sort: {createdAt: -1}}); },

});



////////* seasonplan Events *//////