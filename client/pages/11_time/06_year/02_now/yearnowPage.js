'./yearnow.html'


///// HELPERS /////


Template.yearnowPage.helpers({
    yearnowEach() {
        return Agenda.find( { spirit: {$exists: true}}, {sort: {createdAt: -1}}); },

});



////////* yearnow Events *//////