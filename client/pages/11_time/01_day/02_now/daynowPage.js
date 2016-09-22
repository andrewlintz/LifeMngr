'./daynow.html'


///// HELPERS /////


///// EVENTS /////

// Life Journal events//
Template.daysStory.events({
    'submit #todaysstory2':function(e){
        e.preventDefault();
        var headline = $('#dayHeadline').val();
        var story = $('#dayStory').val();
    Agenda.insert({
        headline: headline,
        story: story,
        createdAt: new Date()
    });
   }
});

//Sleep events//

Template.sleepLogger.events({
    'submit #sleepLoggersubmitter':function(e){
        e.preventDefault();
        var howdidUsleep = $('#dnhowdidUsleep').val();
        Agenda.insert({
            howdidUsleep: howdidUsleep,
            createdAt: new Date()
        });
   },
   'submit #dndreamdiarysubmitter':function(e){
        e.preventDefault();
        var dreamDiary = $('#dndreamDiary').val();
        Agenda.insert({
            dreamDiary: dreamDiary,
            createdAt: new Date()
        });
   },
});