   './decadenow.html'


///// HELPERS /////


Template.decadenowPage.helpers({
    decadenowEach() {
        return DevTest.find( { spirit: {$exists: true}}, {sort: {createdAt: -1}}); },

});



////////* decadenow Events *//////