'./dayreview.html'


///// HELPERS ///// 


Template.mysoPage.helpers({
    mysoEach() {
        return Agenda.find( { spirit: {$exists: true}}, {sort: {createdAt: -1}}); },

});



////////* dayreview Events *//////