Template.dayPage.onCreated(function dayPageOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.dayPage.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.dayPage.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});