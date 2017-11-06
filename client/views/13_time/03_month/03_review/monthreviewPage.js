   './monthreview.html'


///// HELPERS /////


Template.monthreviewPage.helpers({
    monthreviewEach() {
        return DevTest.find( { spirit: {$exists: true}}, {sort: {createdAt: -1}}); },

});



////////* monthreview Events *//////