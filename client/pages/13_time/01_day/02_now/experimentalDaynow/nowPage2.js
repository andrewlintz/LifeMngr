'./daynow2.html'


///// HELPERS /////




///// EVENTS /////



Template.daynowPage2.onRendered(function(){
		var $myGroup = $('#myGroup');
		$myGroup.on('show.bs.collapse','.collapse', function() {
    		$myGroup.find('.collapse.in').collapse('hide');
		});
}); 
