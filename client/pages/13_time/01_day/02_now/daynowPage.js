'./daynow.html'


///// HELPERS /////


///// EVENTS /////

Template.tempName.onRendered(function() {
    this.$('.datetimepicker').datetimepicker();
});

Template.daynowPage.onRendered(function(){
		var $myGroup = $('#myGroup');
		$myGroup.on('show.bs.collapse','.collapse', function() {
    		$myGroup.find('.collapse.in').collapse('hide');
		});
}); 




