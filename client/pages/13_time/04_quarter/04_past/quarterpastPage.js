   './quarterpast.html'


///// HELPERS /////


Template.quarterpastPage.helpers({
    quarterpastEach() {
        return DevTest.find( { spirit: {$exists: true}}, {sort: {createdAt: -1}}); },

});



////////* quarterpast Events *//////