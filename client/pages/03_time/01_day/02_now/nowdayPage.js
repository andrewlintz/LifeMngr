Template.dayInput.events({
	'submit #blogForm':function(e){
		e.preventDefault();
		var headline = $('#dayHeadline').val();
		var story = $('#dayStory').val();
		Meteor.call = $('#submitPost', headline, story);
		alert(headline + " " + story);
	}
});

Template.daycounter.onCreated(function daycounterOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(10);
});

Template.daycounter.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.daycounter.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});