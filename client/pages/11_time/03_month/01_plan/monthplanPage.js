  './monthplan.html'


///// HELPERS /////


Template.monthplanPage.helpers({
    monthplanEach() {
        return Agenda.find( { spirit: {$exists: true}}, {sort: {createdAt: -1}}); },

});



////////* monthplan Events *//////