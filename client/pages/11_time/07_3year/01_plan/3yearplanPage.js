  './threeyearplan.html'


///// HELPERS /////


Template.threeyearplanPage.helpers({
    threeyearplanEach() {
        return Agenda.find( { spirit: {$exists: true}}, {sort: {createdAt: -1}}); },

});



////////* threeyearplan Events *//////