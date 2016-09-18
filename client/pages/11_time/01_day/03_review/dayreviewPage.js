'./dayreview.html'


///// HELPERS /////


Template.dayreviewPage.helpers({
    dayreviewEach() {
        return Agenda.find( { spirit: {$exists: true}}, {sort: {createdAt: -1}}); },

});



////////* dayreview Events *//////