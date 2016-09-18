'./lifereview.html'


///// HELPERS /////


Template.lifereviewPage.helpers({
    lifereviewEach() {
        return Agenda.find( { spirit: {$exists: true}}, {sort: {createdAt: -1}}); },

});



////////* lifereview Events *//////