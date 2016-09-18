   './decadereview.html'


///// HELPERS /////


Template.decadereviewPage.helpers({
    decadereviewEach() {
        return Agenda.find( { spirit: {$exists: true}}, {sort: {createdAt: -1}}); },

});



////////* decadereview Events *//////