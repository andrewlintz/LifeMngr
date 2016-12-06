import './cal.html';

Template.body.rendered = function () {
    var fc = this.$('.fc');
    this.autorun(function () {
        Agenda.find();
        fc.fullCalendar('refetchEvents');
    });
};

Template.calendarEdit.helpers({
    events: function(){
        var fc = $('.fc');
        return function (start, end, tz, callback) {
            //subscribe only to specified date range
            Meteor.subscribe('events', start, end, function () {
                //trigger event rendering when collection is downloaded
                fc.fullCalendar('refetchEvents');
            });

            //find all, because we've already subscribed to a specific range
            var events = Agenda.find().map(function (it) {
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
            allDaySlot: false,
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            axisFormat: 'h:mm a',
            timeFormat: {
                agenda: 'h:mm a',
                month: 'h:mm a',
                agendaWeek: 'h:mm a'
            },
            firstHour: 7,
            editable: true,
            eventLimit: false,

        //START from https://usingfullcalendar.wordpress.com/2016/03/31/creating-a-fullcalendar-event-interactively/

            selectable: true,
       	// My tweaking over what is below

       		select: function(e) {
       			
        		$("#createEvent").modal("show");
    		},
        /* 
            select: function(start, end, jsEvent, view) {
 
     			// Ask for a title. If empty it will default to "New event"
     			var title = prompt("Enter a title for this event", "New event");
 
     			// If did not pressed Cancel button
     			if (title != null) {
      				// Create event
      				var event = {
    				   title: title.trim() != "" ? title : "New event",
    				   start: start,
    				   end: end
    				  };
 
    				  // Push event into fullCalendar's array of events
    				  // and displays it. The last argument is the
    				  // "stick" value. If set to true the event
    				  // will "stick" even after you move to other
    				  // year, month, day or week.
 				
    				  $calendar.fullCalendar("renderEvent", event, true);
    				 };
    				 // Whatever happens, unselect selection
    				 $calendar.fullCalendar("unselect");
 				
    				}, // End select callback

    				// Callback triggered when we click on an event
 
    		eventClick: function(event, jsEvent, view){
    		 // Ask for a title. If empty it will default to "New event"
    		 var newTitle = prompt("Enter a new title for this event", event.title);
 
    		 // If did not pressed Cancel button
    		 if (newTitle != null) {
    		      // Update event
    		      event.title = newTitle.trim() != "" ? newTitle : event.title;
 
    		      // Call the "updateEvent" method
    		      $calendar.fullCalendar("updateEvent", event);
 
    		    }
    		}, // End callback eventClick
	*/
    	//END of Web Tutorial

            events: function (start, end, timezone, callback) {
                callback(Agenda.find({}).fetch());
            },
            defaultView: 'month'
        };
    }
});

Template.calPage.onRendered(function(){
    var fc = this.$('.fc');
    this.autorun(function () {
        //1) trigger event re-rendering when the collection is changed in any way
        //2) find all, because we've already subscribed to a specific range
        Agenda.find();
        fc.fullCalendar('refetchEvents');
    });
    this.$('.datetimepicker').datetimepicker({
        format: 'YYYY-MM-DD H:mm:ss'
    });
});

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

Template.calPage.helpers({
    event: function(){
        return Agenda.find();
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
        //Session.$set("eventInfo", {id: this._id, title: this.title, start: this.start, end: this.end, description: this.description});
    }
});