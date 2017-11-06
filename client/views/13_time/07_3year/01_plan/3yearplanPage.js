  './threeyearplan.html'


///// HELPERS /////


Template.threeyearplanPage.helpers({
    threeyearplanEach() {
        return DevTest.find( { spirit: {$exists: true}}, {sort: {createdAt: -1}}); },

});



////////* threeyearplan Events *//////