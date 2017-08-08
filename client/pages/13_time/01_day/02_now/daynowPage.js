'./daynow.html'


///// HELPERS /////


///// EVENTS /////

Template.tempName.onRendered(function() {
    this.$('.datetimepicker').datetimepicker();
});

// Life Journal events//
Template.daysStory.events({
    'submit #todaysstory2':function(e){
        e.preventDefault();
        var headline = $('#dayHeadline').val();
        var story = $('#dayStory').val();
    DevTest.insert({
        title: ("Day's Headline:" + " " + headline),
        allDay: true,
        start: Now,
        end: Now,
        description: ("Today's Story:" + " " + story),
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
        DevTest.insert({
            title: "How I Slept: ",
            start: Now,
            end: Now,
            description: howdidUsleep,
            howdidUsleep: howdidUsleep,
            createdAt: new Date(),
        });
   },
   'submit #dndreamdiarysubmitter':function(e){
        e.preventDefault();
        var dreamDiary = $('#dndreamDiary').val();
        DevTest.insert({
            title: "Dream Diary: ",
            start: Now,
            end: Now,
            description: dreamDiary,
            dreamDiary: dreamDiary,
            createdAt: new Date()
        });
   },
});
//Waking events//

Template.wakeLogger.events({
    'submit #dnwakeupSubmitter':function(e){
        e.preventDefault();
        var wakeuptime = $('#dnwakeuptime').val();
        DevTest.insert({
            title: "My Wakeup Time: ",
            start: Now,
            end: Now,
            description: wakeuptime,
            wakeuptime: wakeuptime,
            createdAt: new Date()
        });
    },
    'submit #dnoutofbedSubmitter':function(e){
        e.preventDefault();
        var outofBed = $('#dnoutofBed').val();
        DevTest.insert({
            title: "Out of Bed Time: ",
            start: Now,
            end: Now,
            description: outofBed,
            outofBed: outofBed,
            createdAt: new Date()
        });
    },
});

