  './monthplan.html'


///// HELPERS /////


Template.monthplanPage.helpers({
    monthplanEach() {
        return DevTest.find( { spirit: {$exists: true}}, {sort: {createdAt: -1}}); },

});



////////* monthplan Events *//////