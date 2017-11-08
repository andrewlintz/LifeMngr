import '../components/updateModal.html';
import '../calPage.js';

Template.updateModal.onRendered(function() {
    $('#datetimepicker9').datetimepicker({
        viewMode: 'years',
    });
});

/* Throwing Error? 
Template.updateModal.helpers({
    title() {
        return DevTest.find(); },
});


Template.updateModal.helpers({     
    myEventClick: function() {
        return function(title, start, end, timezone, jsEvent, element) {
        	$('.updateEvent #eventTitle').val(title);
        	$('.updateEvent #startTime').val(start);
            $('.updateEvent #endTime').val(end);
            console.log("Event clicked: "+calEvent.title);
        };
    },
});

*/