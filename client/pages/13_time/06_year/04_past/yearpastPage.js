   './yearpast.html'


///// HELPERS /////


Template.yearpastPage.helpers({
    yearpastEach() {
        return DevTest.find( { spirit: {$exists: true}}, {sort: {createdAt: -1}}); },

});



////////* yearpast Events *//////