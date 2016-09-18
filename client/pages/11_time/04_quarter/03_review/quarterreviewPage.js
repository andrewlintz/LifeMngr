   './quarterreview.html'


///// HELPERS /////


Template.quarterreviewPage.helpers({
    quarterreviewEach() {
        return Agenda.find( { spirit: {$exists: true}}, {sort: {createdAt: -1}}); },

});



////////* quarterreview Events *//////