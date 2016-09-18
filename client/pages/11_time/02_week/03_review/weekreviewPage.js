  './weekreview.html'


///// HELPERS /////


Template.weekreviewPage.helpers({
    weekreviewEach() {
        return Agenda.find( { spirit: {$exists: true}}, {sort: {createdAt: -1}}); },

});



////////* weekreview Events *//////