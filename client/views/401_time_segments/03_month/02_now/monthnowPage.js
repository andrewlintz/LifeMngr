   './monthnow.html'


///// HELPERS /////


Template.monthnowPage.helpers({
    monthnowEach() {
        return DevTest.find( { spirit: {$exists: true}}, {sort: {createdAt: -1}}); },

});



////////* monthnow Events *//////