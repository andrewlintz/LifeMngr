 './weekplan.html'


///// HELPERS /////


Template.weekplanPage.helpers({
    weekplanEach() {
        return DevTest.find( { spirit: {$exists: true}}, {sort: {createdAt: -1}}); },

});



////////* weekplan Events *//////