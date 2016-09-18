   './threeyearnow.html'


///// HELPERS /////


Template.threeyearnowPage.helpers({
    threeyearnowEach() {
        return Agenda.find( { spirit: {$exists: true}}, {sort: {createdAt: -1}}); },

});



////////* threeyearnow Events *//////