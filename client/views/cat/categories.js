import './categories.html';


Template.categoriesPage.onRendered(function(){
		var $myGroup = $('#myGroup');
		$myGroup.on('show.bs.collapse','.collapse', function() {
    		$myGroup.find('.collapse.in').collapse('hide');
		});
});