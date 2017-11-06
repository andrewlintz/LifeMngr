  './decadeplan.html'


///// HELPERS /////


Template.decadeplanPage.helpers({
    decadeplanEach() {
        return DevTest.find( { spirit: {$exists: true}}, {sort: {createdAt: -1}}); },

});



////////* decadeplan Events *//////