   './monthnow.html'


///// HELPERS /////


Template.monthnowPage.helpers({
    monthnowEach() {
        return Agenda.find( { spirit: {$exists: true}}, {sort: {createdAt: -1}}); },

});



////////* monthnow Events *//////