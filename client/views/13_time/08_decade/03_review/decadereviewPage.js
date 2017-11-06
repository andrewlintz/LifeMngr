   './decadereview.html'


///// HELPERS /////


Template.decadereviewPage.helpers({
    decadereviewEach() {
        return DevTest.find( { spirit: {$exists: true}}, {sort: {createdAt: -1}}); },

});



////////* decadereview Events *//////