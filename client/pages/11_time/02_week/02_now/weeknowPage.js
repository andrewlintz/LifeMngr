  './weeknow.html'


///// HELPERS /////


Template.weeknowPage.helpers({
    weeknowEach() {
        return Agenda.find( { spirit: {$exists: true}}, {sort: {createdAt: -1}}); },

});



////////* weeknow Events *//////