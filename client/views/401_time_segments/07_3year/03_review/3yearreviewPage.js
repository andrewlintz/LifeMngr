   './threeyearreview.html'


///// HELPERS /////


Template.threeyearreviewPage.helpers({
    threeyearreviewEach() {
        return DevTest.find( { spirit: {$exists: true}}, {sort: {createdAt: -1}}); },

});



////////* threeyearreview Events *//////