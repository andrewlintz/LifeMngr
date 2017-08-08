  './weekreview.html'


///// HELPERS /////


Template.weekreviewPage.helpers({
    weekreviewEach() {
        return DevTest.find( { spirit: {$exists: true}}, {sort: {createdAt: -1}}); },

});



////////* weekreview Events *//////