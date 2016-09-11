'./food.html'


///// HELPERS /////


Template.foodPage.helpers({
  agenda() {
    return Agenda.find({}, {sort: {createdAt: -1}});  },
});

