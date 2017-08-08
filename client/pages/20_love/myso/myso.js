'./dayreview.html'


///// HELPERS ///// 


Template.mysoPage.helpers({
    mysoEach() {
        return DevTest.find( { spirit: {$exists: true}}, {sort: {createdAt: -1}}); },

});



////////* dayreview Events *//////