import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { DevTest } from '../../../lib/collections/collections.js';

import './sleep.html';


///// HELPERS /////

Template.sleepPage.helpers({
	howUsleepEach() {
        return DevTest.find( { howUsleepitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
	dreamDiaryEach() {
        return DevTest.find( { dreamDiaryitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
	napEach() {
        return DevTest.find( { napitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
	wentToBedEach() {
        return DevTest.find( { wentToBeditemName: {$exists: true}}, {sort: {createdAt: -1}}); },
});

///// EVENTS /////


	////////* Start of howUsleep Events *//////


Template.addhowUsleepItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const howUsleepitemName = target.howUsleepitemName.value;
    
    // Insert a howUsleep item into the collection
    Meteor.call('howUsleepitemName.insert', howUsleepitemName);

    // Clear form
    target.howUsleepitemName.value = '';
    },
});

Template.howUsleepItem.events({
    // events go here
    'click .delete-howUsleepitem'(){
     Meteor.call('howUsleepitemName.remove', this._id);
    },

    'keyup [name=howUsleepItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var howUsleepItem = $(event.target).val();
        Meteor.call('updatehowUsleepItem', documentId, howUsleepItem);
        }
    },
});

////////* End of howUsleep Events *//////

////////* Start of dreamDiary Events *//////


Template.adddreamDiaryItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const dreamDiaryitemName = target.dreamDiaryitemName.value;
    
    // Insert a dreamDiary item into the collection
    Meteor.call('dreamDiaryitemName.insert', dreamDiaryitemName);

    // Clear form
    target.dreamDiaryitemName.value = '';
    },
});

Template.dreamDiaryItem.events({
    // events go here
    'click .delete-dreamDiaryitem'(){
     Meteor.call('dreamDiaryitemName.remove', this._id);
    },

    'keyup [name=dreamDiaryItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var dreamDiaryItem = $(event.target).val();
        Meteor.call('updatedreamDiaryItem', documentId, dreamDiaryItem);
        }
    },
});

////////* End of dreamDiary Events *//////

////////* Start of nap Events *//////


Template.addnapItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const napitemName = target.napitemName.value;
    
    // Insert a nap item into the collection
    Meteor.call('napitemName.insert', napitemName);

    // Clear form
    target.napitemName.value = '';
    },
});

Template.napItem.events({
    // events go here
    'click .delete-napitem'(){
     Meteor.call('napitemName.remove', this._id);
    },

    'keyup [name=napItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var napItem = $(event.target).val();
        Meteor.call('updatenapItem', documentId, napItem);
        }
    },
});

////////* End of nap Events *//////

////////* Start of wentToBed Events *//////


Template.addwentToBedItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const wentToBeditemName = target.wentToBeditemName.value;
    
    // Insert a wentToBed item into the collection
    Meteor.call('wentToBeditemName.insert', wentToBeditemName);

    // Clear form
    target.wentToBeditemName.value = '';
    },
});

Template.wentToBedItem.events({
    // events go here
    'click .delete-wentToBeditem'(){
     Meteor.call('wentToBeditemName.remove', this._id);
    },

    'keyup [name=wentToBedItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var wentToBedItem = $(event.target).val();
        Meteor.call('updatewentToBedItem', documentId, wentToBedItem);
        }
    },
});

////////* End of wentToBed Events *//////
