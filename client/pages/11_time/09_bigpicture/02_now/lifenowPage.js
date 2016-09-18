'./lifenow.html'


///// HELPERS /////


Template.lifenowPage.helpers({
    lifenowEach() {
        return Agenda.find( { spirit: {$exists: true}}, {sort: {createdAt: -1}}); },

});



////////* lifenow Events *//////