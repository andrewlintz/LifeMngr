   './seasonnow.html'


///// HELPERS /////


Template.seasonnowPage.helpers({
    seasonnowEach() {
        return DevTest.find( { spirit: {$exists: true}}, {sort: {createdAt: -1}}); },

});



////////* seasonnow Events *//////