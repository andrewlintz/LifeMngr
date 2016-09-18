'./lifepast.html'


///// HELPERS /////


Template.lifepastPage.helpers({
    lifepastEach() {
        return Agenda.find( { spirit: {$exists: true}}, {sort: {createdAt: -1}}); },

});



////////* lifepast Events *//////