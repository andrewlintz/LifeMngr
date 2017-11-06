  './weekpast.html'


///// HELPERS /////


Template.weekpastPage.helpers({
    weekpastEach() {
        return DevTest.find( { spirit: {$exists: true}}, {sort: {createdAt: -1}}); },

});



////////* weekpast Events *//////