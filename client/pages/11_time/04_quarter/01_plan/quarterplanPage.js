  './quarterplan.html'


///// HELPERS /////


Template.quarterplanPage.helpers({
    quarterplanEach() {
        return Agenda.find( { spirit: {$exists: true}}, {sort: {createdAt: -1}}); },

});



////////* quarterplan Events *//////