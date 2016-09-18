   './threeyearpast.html'


///// HELPERS /////


Template.threeyearpastPage.helpers({
    threeyearpastEach() {
        return Agenda.find( { spirit: {$exists: true}}, {sort: {createdAt: -1}}); },

});



////////* threeyearpast Events *//////