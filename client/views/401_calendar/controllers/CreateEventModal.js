import '../components/CreateEventModal.html'

Template.createEvent.helpers({

});

Template.createEvent.events({
    'focus input'(event, instance){  
        $(function() {
            $('input[name="daterangeStart"]').daterangepicker({
                "singleDatePicker": true,
                "showWeekNumbers": true,
                "timePicker": true,
                "timePicker24Hour": true,
                "locale": {
                    "format": "MM/DD/YYYY HH:mm",
                    "separator": " - ",
                    "applyLabel": "Apply",
                    "cancelLabel": "Cancel",
                    "fromLabel": "From",
                    "toLabel": "To",
                    "customRangeLabel": "Custom",
                    "weekLabel": "W",
                    "daysOfWeek": [
                        "Su",
                        "Mo",
                        "Tu",
                        "We",
                        "Th",
                        "Fr",
                        "Sa"
                    ],
                    "monthNames": [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December"
                    ],
                    "firstDay": 0
                }            
            });
            $('input[name="daterangeEnd"]').daterangepicker({
                "singleDatePicker": true,
                "showWeekNumbers": true,
                "timePicker": true,
                "timePicker24Hour": true,
                "locale": {
                    "format": "MM/DD/YYYY HH:mm",
                    "separator": " - ",
                    "applyLabel": "Apply",
                    "cancelLabel": "Cancel",
                    "fromLabel": "From",
                    "toLabel": "To",
                    "customRangeLabel": "Custom",
                    "weekLabel": "W",
                    "daysOfWeek": [
                        "Su",
                        "Mo",
                        "Tu",
                        "We",
                        "Th",
                        "Fr",
                        "Sa"
                    ],
                    "monthNames": [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December"
                    ],
                    "firstDay": 0
                },
                "opens": "left"
            });
        }); 
    },
});


