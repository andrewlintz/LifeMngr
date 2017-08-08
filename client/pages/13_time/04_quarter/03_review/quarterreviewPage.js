   './quarterreview.html'


///// HELPERS /////


Template.quarterreviewPage.helpers({
    quarterreviewEach() {
        return DevTest.find( { spirit: {$exists: true}}, {sort: {createdAt: -1}}); },

});



////////* quarterreview Events *//////