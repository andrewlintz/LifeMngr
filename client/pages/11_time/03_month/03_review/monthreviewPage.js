   './monthreview.html'


///// HELPERS /////


Template.monthreviewPage.helpers({
    monthreviewEach() {
        return Agenda.find( { spirit: {$exists: true}}, {sort: {createdAt: -1}}); },

});



////////* monthreview Events *//////