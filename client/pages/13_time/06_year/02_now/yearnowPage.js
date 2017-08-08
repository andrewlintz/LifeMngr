'./yearnow.html'


///// HELPERS /////


Template.yearnowPage.helpers({
    yearnowEach() {
        return DevTest.find( { spirit: {$exists: true}}, {sort: {createdAt: -1}}); },

});



////////* yearnow Events *//////