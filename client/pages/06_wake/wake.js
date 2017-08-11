import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { DevTest } from '../../../lib/collections/collections.js';

import './wake.html';

///// HELPERS /////

Template.wakePage.helpers({
	whenWokeEach() {
        return DevTest.find( { wakeuptime: {$exists: true}}, {sort: {createdAt: -1}}); },
	outofBedEach() {
        return DevTest.find( { outofBedtime: {$exists: true}}, {sort: {createdAt: -1}}); },
});

///// EVENTS /////

////////* Start of whenWoke Events *//////


Template.addwhenWokeItem.events({
	'submit #dnwakeupSubmitter':function(e){
		// Prevent default browser form submit
        e.preventDefault();
        
        // Get value from form element
        const wakeuptime = $('#dnwakeuptime').val();
        const target = event.target;
        const howWakeitemName = target.howWakeitemName.value;
    	
    	// Insert a whenWoke item into the collection
    	Meteor.call('wakeuptime.insert', wakeuptime, howWakeitemName);

    	// Clear form
    	target.howWakeitemName.value = '';
    },
});

Template.whenWokeItem.events({
    // Edit Update Document Entry
    'keyup [name=whenWokeItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var whenWokeItem = $(event.target).val();
        Meteor.call('updatewhenWokeItem', documentId, whenWokeItem);
        }
    },

    // Delete Document Entry
    'click .delete-wakeuptimeitem'(){
     Meteor.call('wakeupitemName.remove', this._id);
    },
});

////////* End of whenWoke Events *//////

////////* Start of outofBed Events *//////


Template.addoutofBedItem.events({
	'submit #dnoutofBedSubmitter':function(e){
        e.preventDefault();
        
        const outofBedtime = $('#dnoutofBedtime').val();
        const target = event.target;
        const howoutofBeditemName = target.howoutofBeditemName.value;
    	
    	Meteor.call('outofBedtime.insert', outofBedtime, howoutofBeditemName);

    	// Clear form
    	target.howoutofBeditemName.value = '';
    },
});

Template.outofBedItem.events({
    // events go here
    'click .delete-outofBeditem'(){
     Meteor.call('outofBeditemName.remove', this._id);
    },

    'keyup [name=outofBedItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var outofBedItem = $(event.target).val();
        Meteor.call('updateoutofBedItem', documentId, outofBedItem);
        }
    },
});

////////* End of outofBed Events *//////
