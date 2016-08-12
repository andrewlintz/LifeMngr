






Template.dayInput.events({
	'submit #blogForm':function(e){
		e.preventDefault();
		var headline = $('#dayHeadline').val();
		var story = $('#dayStory').val();
    Daily.insert({
		    headline: headline,
        story: story,
        createdAt: new Date()
    });
    console.log("You have just added " + headline + " " + story + " successfully!");
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