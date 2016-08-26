/*

Template.dayheadlineNstory.events({
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

*/

Template.collapseCity.events({
    'submit #todaysstory':function(e){
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

