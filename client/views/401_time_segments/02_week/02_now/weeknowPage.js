  './weeknow.html'


///// HELPERS /////


Template.weeknowPage.helpers({
    weeknowEach() {
        return DevTest.find( { spirit: {$exists: true}}, {sort: {createdAt: -1}}); },

});



////////* weeknow Events *//////