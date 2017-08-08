   './yearreview.html'


///// HELPERS /////


Template.yearreviewPage.helpers({
    yearreviewEach() {
        return DevTest.find( { spirit: {$exists: true}}, {sort: {createdAt: -1}}); },

});



////////* yearreview Events *//////