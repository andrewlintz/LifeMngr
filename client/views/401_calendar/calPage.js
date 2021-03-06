import { DevTest } from '../../../lib/collections/collections.js';

import './cal.html';



//////////////////////////////////////////////////////
// BELOW Manages Data Displayed onto the  CALENDAR  //
//////////////////////////////////////////////////////

Template.calPage.onRendered(function(){
    var fc = this.$('.fc');
    this.autorun(function () {
        //1) trigger event re-rendering when the collection is changed in any way
        //2) find all, because we've already subscribed to a specific range
        DevTest.find();
        fc.fullCalendar('refetchEvents');
    });
});

////////////////////////////////////////
// BELOW IS THE CALENDAR VIEW HELPERS //
////////////////////////////////////////

Template.calendarView.helpers({
    events: function(){
        var fc = $('.fc');
        return function (title, start, end, tz, callback) {
            //subscribe only to specified date range
            Meteor.subscribe('events', title, start, end, allDay, function () {
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



    // Start of calendar options
    options: function() {
        return {
            id: 'myid2',
            class: 'myCalendars',
            lang: 'en',
            allDaySlot: true,
            header: {
                left: 'prev,today,next',
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
            weekNumbers: true,

        // ScrollTime: Determines how far down the scroll pane is initially scrolled down
            scrollTime: '12:00:00',
            theme: false,
            editable: true,
            eventLimit: true,
        // SlotDuration is the resolution of the calendar view.   
            slotDuration: '00:15:00',
            forceEventDuration: true, 
        //  defaultTimedEventDuration sets the default length of event time added.
            defaultTimedEventDuration: '00:15:00', 
        //START from https://usingfullcalendar.wordpress.com/2016/03/31/creating-a-fullcalendar-event-interactively/

        // Make possible to respond to clicks and selections
            selectable: true,
            selectHelper: true,

       	// This is the callback that will be triggered when a selection is made.
        // It gets start and end date/time as part of its arguments
       		select: function(start, end, event, allDay, jsEvent, view) {
       	// Ties Click time/date to the DateTimePicker Input Field	
       	// Specifically helped by http://jsfiddle.net/mccannf/AzmJv/16/	
        
        // Below is the Trick that correctly return whether or not user selects allDay or specific time on the calendar
        // Answer sourced from here: https://stackoverflow.com/questions/29780273/fullcalendar-select-check-if-allday
                var allDay2 = !start.hasTime() && !end.hasTime();
                    console.log("This is " + allDay2);

        /* switch string to boolean : https://stackoverflow.com/questions/14757994/jquery-fullcalendar-change-allday-criteria-to-check-for-string-instead-of-bool
                if(event.allDay === true){
                    console.log("true");
                }
                else{
                    console.log("false");
                }
        */

                    $('#createEvent #startTime').val(start);
                    $('#createEvent #endTime').val(end);
                    $('#createEvent #apptAllDay').val(allDay2);
                    $("#createEvent").modal("show");
                    //console.log($('#apptAllDay').val());
                    //console.log(allDay);
        		
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

            eventClick: function(title, start, end, allDay, jsEvent, element) {    
                $('#eventTitle').val(title.title);
                $('#startTime').val(title.start);
                $('#endTime').val(title.end); 

                $('#eventDescription').val(title.description); 
                $('.updateModal').modal('show');
                $('#calendar').fullCalendar('updateEvent', event);
                console.log(title._id);    
            },
        };
    }
});



//////////////////////////////////////////////////////
// BELOW IS THE CREATE EVENT MODAL LAUNCHING BUTTON //
//////////////////////////////////////////////////////

Template.calPage.events({
    'submit #new-event': function(event){
        // Prevent default browser form submit
        event.preventDefault();

        // Get value from form element
        var title = event.target.title.value;
        var start = event.target.start.value;
        var end = event.target.end.value;
// convert string to boolean https://stackoverflow.com/questions/263965/how-can-i-convert-a-string-to-boolean-in-javascript
        var allDay3 = (event.target.apptAllDay.value == 'true');
        var description = event.target.description.value;


        console.log("client says: you created an event at "+start+' and ended at '+end)


        // Insert a spirit item into the collection
    //Meteor.call('addEvent.insert', title, allDay3, description);
        
        // Clear form & closes modal
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
        return DevTest.find({"createdAt":{$gt:new Date(Date.now() - 24*60*60 * 1000)}}, {sort:{start: -1}});

        //below is the code to fetch all the entries in the past 24hrs in starting oldest first //
        //return DevTest.find({"createdAt":{$gt:new Date(Date.now() - 24*60*60 * 1000)}});

        // below is the code to fetch all, and correctly limiting the results to 5 //
        // return DevTest.find({}, {sort:{createdAt: -1}, limit: 5});  //
        },
    });

Template.eventList.events({
    'click .delete-event': function(event){
        event.preventDefault();
        var documentId = this._id;
        Meteor.call('deleteEvent.remove', documentId);
    },

    'click .update': function(title, start, end, jsEvent, element){
        event.preventDefault();
        $('#eventTitle').val(this.title);
        $('#startTime').val(this.start);
        $('#endTime').val(this.end); 
        $('#eventDescription').val(this.description); 
        $(".updateModal").modal("show");
        console.log("Client says you updated");
       // Session.$set("eventInfo", {id: this._id, title: this.title, start: this.start, end: this.end, description: this.description});
    }
});


/////////////////////////////////////
// BELOW IS THE UPDATE EVENT MODAL //
/////////////////////////////////////


Template.calPage.events({
    'submit #update-event': function(event, title, _id){
        // Prevent default browser form submit
        event.preventDefault();
        var tid = $('#eventTitle').data(this.id);
        
        // Get value from form element
        console.log("2nd "+this._id);
        var updatetitle = event.target.updatetitle.value;
        //var start = event.target.start.value;
        //var end = event.target.end.value;
        var updatedescription = event.target.updatedescription.value;

        // Insert a spirit item into the collection
        Meteor.call("updateEvent", updatetitle, updatedescription);
        
        // Clear form & closes modal
        event.target.updatetitle.value = "";
        //event.target.start.value = "";
        //event.target.end.value = "";
        event.target.updatedescription.value = "";
        $(".updateModal").modal("hide");
    },
});