'./yearplan.html'


///// HELPERS /////


Template.yearplanPage.helpers({
    yearplanEach() {
        return Agenda.find( { spirit: {$exists: true}}, {sort: {createdAt: -1}}); },

});



////////* yearplan Events *//////