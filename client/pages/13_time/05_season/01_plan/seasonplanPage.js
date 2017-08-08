  './seasonplan.html'


///// HELPERS /////


Template.seasonplanPage.helpers({
    seasonplanEach() {
        return DevTest.find( { spirit: {$exists: true}}, {sort: {createdAt: -1}}); },

});



////////* seasonplan Events *//////