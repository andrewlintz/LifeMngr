   './quarternow.html'


///// HELPERS /////


Template.quarternowPage.helpers({
    quarternowEach() {
        return Agenda.find( { spirit: {$exists: true}}, {sort: {createdAt: -1}}); },

});



////////* quarternow Events *//////