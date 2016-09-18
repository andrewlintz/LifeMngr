   './yearreview.html'


///// HELPERS /////


Template.yearreviewPage.helpers({
    yearreviewEach() {
        return Agenda.find( { spirit: {$exists: true}}, {sort: {createdAt: -1}}); },

});



////////* yearreview Events *//////