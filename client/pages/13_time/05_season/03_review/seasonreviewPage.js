   './seasonreview.html'


///// HELPERS /////


Template.seasonreviewPage.helpers({
    seasonreviewEach() {
        return DevTest.find( { spirit: {$exists: true}}, {sort: {createdAt: -1}}); },

});



////////* seasonreview Events *//////