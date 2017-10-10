import { DevTest } from '../../../lib/collections/collections.js';

import './cal.html';

////////////////////////////////
// BELOW IS THE CALENDAR VIEW //
////////////////////////////////

Template.body.rendered = function () {
    var fc = this.$('.fc');
    this.autorun(function () {
        DevTest.find();
        fc.fullCalendar('refetchEvents');
    });
};

////////////////////////////////////////
// BELOW IS THE CALENDAR VIEW HELPERS //
////////////////////////////////////////

Template.calendarView.helpers({
    events: function(){
        var fc = $('.fc');
        return function (start, end, tz, callback) {
            //subscribe only to specified date range
            Meteor.subscribe('events', start, end, function () {
                //trigger event rendering when collection is downloaded
                fc.fullCalendar('refetchEvents');
            });

            //find all, because we've already subscribed to a specific range
            var events = DevTest.find().map(function (it) {
                return {
                    title: it.date,
                    start: it.date,
                    allDay: false
                };
            });
            callback(events);
        };
    },

    options: function() {
        return {
            id: 'myid2',
            class: 'myCalendars',
            lang: 'en',
            allDaySlot: true,
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            height: 600,
            axisFormat: 'h:mm a',
            timeFormat: {
                agenda: 'h:mm a',
                month: 'h:mm a',
                agendaWeek: 'h:mm a'
            },
            scrollTime: '12:00:00',
            theme: false,
            editable: true,
            eventLimit: true,
            slotDuration: '00:15:00',
            forceEventDuration: true, 
            defaultTimedEventDuration: '00:15:00', 
        //START from https://usingfullcalendar.wordpress.com/2016/03/31/creating-a-fullcalendar-event-interactively/

            selectable: true,
            selectHelper: true,

       	// My tweaking over what is below
       		select: function(start, end, jsEvent, view) {
       	// Ties Click time/date to the DateTimePicker Input Field	
       	// Specifically helped by http://jsfiddle.net/mccannf/AzmJv/16/	
       			
          			$('#createEvent #startTime').val(start);
          			$('#createEvent #endTime').val(end);
        			$("#createEvent").modal("show");
        		
    		},
            events: function (start, end, timezone, callback) {
                callback(DevTest.find({}).fetch());
            },
            defaultView: 'agendaDay',
            nowIndicator: true,

            dayClick: function(date, jsEvent, view) {
            	if (view.name === "month") {
                $('#calendar').fullCalendar('gotoDate', date);
                $('#calendar').fullCalendar('changeView', 'agendaDay');
            	}
    		},
    		eventClick: function(event, element) {
        		$('.updateModal').modal('show');
        		$('#calendar').fullCalendar('updateEvent', event);
    		},
        };
    }
});

Template.calPage.onRendered(function(){
    var fc = this.$('.fc');
    this.autorun(function () {
        //1) trigger event re-rendering when the collection is changed in any way
        //2) find all, because we've already subscribed to a specific range
        DevTest.find();
        fc.fullCalendar('refetchEvents');
    });
    this.$('.datetimepicker').datetimepicker({
        format: 'YYYY-MM-DD H:mm:ss'
    });
});

//////////////////////////////////////////////////////
// BELOW IS THE CREATE EVENT MODAL LAUNCHING BUTTON //
//////////////////////////////////////////////////////

Template.calPage.events({
    'submit #new-event': function(event){
        event.preventDefault();
        var title = event.target.title.value;
        var start = event.target.start.value;
        var end = event.target.end.value;
        var description = event.target.description.value;

        Meteor.call("addEvent", title, start, end, description);
        event.target.title.value = "";
        event.target.start.value = "";
        event.target.end.value = "";
        event.target.description.value = "";
        $("#createEvent").modal("hide");
    },


    'click .refresh': function (e, template) {
        //template.$('#myid2').fullCalendar('refetchEvents');
        template.$('.myCalendars').fullCalendar('refetchEvents');
    },

    'click .create': function(e){
        e.preventDefault();
        $("#createEvent").modal("show");
    }
});

//////////////////////////////////
// BELOW IS THE EVENTS LIST APP //
//////////////////////////////////

Template.calPage.helpers({
    event: function(){
        //below is the code that retrieves the last 24hrs && sorting in decending order //
        return DevTest.find({"createdAt":{$gt:new Date(Date.now() - 24*60*60 * 1000)}}, {sort:{createdAt: -1}});

        //below is the code to fetch all the entries in the past 24hrs in starting oldest first //
        //return DevTest.find({"createdAt":{$gt:new Date(Date.now() - 24*60*60 * 1000)}});

        // below is the code to fetch all, and correctly limiting the results to 5 //
        // return DevTest.find({}, {sort:{createdAt: -1}, limit: 5});  //
    }
});

Template.eventList.events({
    'click .delete': function(event){
        event.preventDefault();
        id = this._id;
        Meteor.call('deleteEvent', id);
    },

    'click .update': function(e){
        e.preventDefault();
        $(".updateModal").show();
        Session.$set("eventInfo", {id: this._id, title: this.title, start: this.start, end: this.end, description: this.description});
    }
});


/////////////////////////////////////
// BELOW IS THE UPDATE EVENT MODAL //
/////////////////////////////////////

Template.calPage.events({
    'submit #update-event': function(event){
        event.preventDefault();
        var title = event.target.title.value;
        var start = event.target.start.value;
        var end = event.target.end.value;
        var description = event.target.description.value;

        Meteor.call("updateEvent", title, start, end, description);
        event.target.title.value = "";
        event.target.start.value = "";
        event.target.end.value = "";
        event.target.description.value = "";
        $("#uModal").modal("hide");
    },
});