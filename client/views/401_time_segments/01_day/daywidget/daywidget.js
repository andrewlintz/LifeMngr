import { DevTest } from '../../../../../lib/collections/collections.js';

import './daywidget.html';


Template.daywidget.helpers({
    visionEach() {
        return DevTest.find( { visionitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    opportunityEach() {
        return DevTest.find( { opportunityitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    missionEach() {
        return DevTest.find( { missionitemName: {$exists: true}}, {sort: {createdAt: -1}, limit: 1}); },
});

Template.daywidget.onRendered(function(){
	$(document).on('click', '.panel-heading span.clickable', function(e) {
  var $this = $(this);
  if (!$this.hasClass('panel-collapsed')) {
    $this.closest('.panel').find('.panel-body').slideUp();
    $this.addClass('panel-collapsed');
    $this.find('i').removeClass('glyphicon-minus').addClass('glyphicon-plus');
  } else {
    $this.closest('.panel').find('.panel-body').slideDown();
    $this.removeClass('panel-collapsed');
    $this.find('i').removeClass('glyphicon-plus').addClass('glyphicon-minus');
  }
});
$(document).on('click', '.panel div.clickable', function(e) {
  var $this = $(this);
  if (!$this.hasClass('panel-collapsed')) {
    $this.closest('.panel').find('.panel-body').slideUp();
    $this.addClass('panel-collapsed');
    $this.find('i').removeClass('glyphicon-minus').addClass('glyphicon-plus');
  } else {
    $this.closest('.panel').find('.panel-body').slideDown();
    $this.removeClass('panel-collapsed');
    $this.find('i').removeClass('glyphicon-plus').addClass('glyphicon-minus');
  }
});
$(document).ready(function() {
  $('.panel-heading span.clickable').click();
  $('.panel div.clickable').click();
});

});


Template.daywidget.onRendered(function(){
		var $daywidgetGroup = $('#daywidgetGroup');
		$daywidgetGroup.on('hide.bs.collapse','.collapse', function() {
    		$daywidgetGroup.find('.collapse.in').collapse('hide');
		});
});