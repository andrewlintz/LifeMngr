   './monthpast.html'


///// HELPERS /////


Template.monthpastPage.helpers({
    monthpastEach() {
        return Agenda.find( { spirit: {$exists: true}}, {sort: {createdAt: -1}}); },

});



////////* monthpast Events *//////