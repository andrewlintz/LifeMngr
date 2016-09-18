 './weekplan.html'


///// HELPERS /////


Template.weekplanPage.helpers({
    weekplanEach() {
        return Agenda.find( { spirit: {$exists: true}}, {sort: {createdAt: -1}}); },

});



////////* weekplan Events *//////