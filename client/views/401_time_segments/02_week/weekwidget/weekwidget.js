import './weekwidget.html';


Template.weekwidget.onRendered(function(){
		var $wkwidgetGroup = $('#wkwidgetGroup');
		$wkwidgetGroup.on('hide.bs.collapse','.collapse', function() {
    		$wkwidgetGroup.find('.collapse.in').collapse('hide');
		});
});
