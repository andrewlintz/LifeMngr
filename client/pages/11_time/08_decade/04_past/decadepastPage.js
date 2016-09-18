   './decadepast.html'


///// HELPERS /////


Template.decadepastPage.helpers({
    decadepastEach() {
        return Agenda.find( { spirit: {$exists: true}}, {sort: {createdAt: -1}}); },

});



////////* decadepast Events *//////