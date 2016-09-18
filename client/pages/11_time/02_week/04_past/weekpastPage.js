  './weekpast.html'


///// HELPERS /////


Template.weekpastPage.helpers({
    weekpastEach() {
        return Agenda.find( { spirit: {$exists: true}}, {sort: {createdAt: -1}}); },

});



////////* weekpast Events *//////