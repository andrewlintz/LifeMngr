   './decadepast.html'


///// HELPERS /////


Template.decadepastPage.helpers({
    decadepastEach() {
        return DevTest.find( { spirit: {$exists: true}}, {sort: {createdAt: -1}}); },

});



////////* decadepast Events *//////