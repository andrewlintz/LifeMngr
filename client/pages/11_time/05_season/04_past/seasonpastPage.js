   './seasonpast.html'


///// HELPERS /////


Template.seasonpastPage.helpers({
    seasonpastEach() {
        return Agenda.find( { spirit: {$exists: true}}, {sort: {createdAt: -1}}); },

});



////////* seasonpast Events *//////