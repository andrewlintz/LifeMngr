   './decadenow.html'


///// HELPERS /////


Template.decadenowPage.helpers({
    decadenowEach() {
        return Agenda.find( { spirit: {$exists: true}}, {sort: {createdAt: -1}}); },

});



////////* decadenow Events *//////