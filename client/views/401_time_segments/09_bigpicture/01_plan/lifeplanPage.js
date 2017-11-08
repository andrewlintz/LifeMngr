'./lifeplan.html'


///// HELPERS /////


Template.lifeplanPage.helpers({
    lifeplanEach() {
        return DevTest.find( { spirit: {$exists: true}}, {sort: {createdAt: -1}}); },

});



////////* lifeplan Events *//////