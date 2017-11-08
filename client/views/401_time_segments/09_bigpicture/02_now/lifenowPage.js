'./lifenow.html'


///// HELPERS /////


Template.lifenowPage.helpers({
    lifenowEach() {
        return DevTest.find( { spirit: {$exists: true}}, {sort: {createdAt: -1}}); },

});



////////* lifenow Events *//////