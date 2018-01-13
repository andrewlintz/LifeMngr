import './timeshifterinputter.html';


Template.timeshifterinputterPage.onRendered(function(){
		var $timeshifterinputterbuttonGroup = $('#timeshifterinputterbuttonGroup');
		$timeshifterinputterbuttonGroup.on('show.bs.collapse','.collapse', function() {
    		$timeshifterinputterbuttonGroup.find('.collapse.in').collapse('hide');
		});
});
