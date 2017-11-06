   './seasonpast.html'


///// HELPERS /////


Template.seasonpastPage.helpers({
    seasonpastEach() {
        return DevTest.find( { spirit: {$exists: true}}, {sort: {createdAt: -1}}); },

});



////////* seasonpast Events *//////