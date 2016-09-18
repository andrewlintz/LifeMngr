   './yearpast.html'


///// HELPERS /////


Template.yearpastPage.helpers({
    yearpastEach() {
        return Agenda.find( { spirit: {$exists: true}}, {sort: {createdAt: -1}}); },

});



////////* yearpast Events *//////