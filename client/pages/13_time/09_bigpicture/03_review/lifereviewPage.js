'./lifereview.html'


///// HELPERS /////


Template.lifereviewPage.helpers({
    lifereviewEach() {
        return DevTest.find( { spirit: {$exists: true}}, {sort: {createdAt: -1}}); },

});



////////* lifereview Events *//////