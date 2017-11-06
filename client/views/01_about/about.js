import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Admindb } from '../../../lib/collections/collections.js';

import './about.html';

///// HELPERS /////

Template.aboutPage.helpers({
	LOSelevatorpitchEach() {
        return Admindb.find( { LOSelevatorpitchitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
	LOSsummaryEach() {
        return Admindb.find( { LOSsummaryitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
	LOSindepthEach() {
        return Admindb.find( { LOSindepthitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
	LOSproblemsolveEach() {
        return Admindb.find( { LOSproblemsolveitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
	LOSfeatureEach() {
        return Admindb.find( { LOSfeatureitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
	LOSbenefitEach() {
        return Admindb.find( { LOSbenefititemName: {$exists: true}}, {sort: {createdAt: -1}}); },
});

////////* Events *//////


////////* Start of LOSelevatorpitch Events *//////


Template.addLOSelevatorpitchItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const LOSelevatorpitchitemName = target.LOSelevatorpitchitemName.value;
    
    // Insert a LOSelevatorpitch item into the collection
    Meteor.call('LOSelevatorpitchitemName.insert', LOSelevatorpitchitemName);

    // Clear form
    target.LOSelevatorpitchitemName.value = '';
    },
});

Template.LOSelevatorpitchItem.events({
    // events go here
    'click .delete-LOSelevatorpitchitem'(){
     Meteor.call('LOSelevatorpitchitemName.remove', this._id);
    },

    'keyup [name=LOSelevatorpitchItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var LOSelevatorpitchItem = $(event.target).val();
        Meteor.call('updateLOSelevatorpitchItem', documentId, LOSelevatorpitchItem);
        }
    },
});

////////* End of LOSelevatorpitch Events *//////

////////* Start of LOSsummary Events *//////


Template.addLOSsummaryItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const LOSsummaryitemName = target.LOSsummaryitemName.value;
    
    // Insert a LOSsummary item into the collection
    Meteor.call('LOSsummaryitemName.insert', LOSsummaryitemName);

    // Clear form
    target.LOSsummaryitemName.value = '';
    },
});

Template.LOSsummaryItem.events({
    // events go here
    'click .delete-LOSsummaryitem'(){
     Meteor.call('LOSsummaryitemName.remove', this._id);
    },

    'keyup [name=LOSsummaryItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var LOSsummaryItem = $(event.target).val();
        Meteor.call('updateLOSsummaryItem', documentId, LOSsummaryItem);
        }
    },
});

////////* End of LOSsummary Events *//////

////////* Start of LOSindepth Events *//////


Template.addLOSindepthItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const LOSindepthitemName = target.LOSindepthitemName.value;
    
    // Insert a LOSindepth item into the collection
    Meteor.call('LOSindepthitemName.insert', LOSindepthitemName);

    // Clear form
    target.LOSindepthitemName.value = '';
    },
});

Template.LOSindepthItem.events({
    // events go here
    'click .delete-LOSindepthitem'(){
     Meteor.call('LOSindepthitemName.remove', this._id);
    },

    'keyup [name=LOSindepthItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var LOSindepthItem = $(event.target).val();
        Meteor.call('updateLOSindepthItem', documentId, LOSindepthItem);
        }
    },
});

////////* End of LOSindepth Events *//////

////////* Start of LOSproblemsolve Events *//////


Template.addLOSproblemsolveItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const LOSproblemsolveitemName = target.LOSproblemsolveitemName.value;
    
    // Insert a LOSproblemsolve item into the collection
    Meteor.call('LOSproblemsolveitemName.insert', LOSproblemsolveitemName);

    // Clear form
    target.LOSproblemsolveitemName.value = '';
    },
});

Template.LOSproblemsolveItem.events({
    // events go here
    'click .delete-LOSproblemsolveitem'(){
     Meteor.call('LOSproblemsolveitemName.remove', this._id);
    },

    'keyup [name=LOSproblemsolveItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var LOSproblemsolveItem = $(event.target).val();
        Meteor.call('updateLOSproblemsolveItem', documentId, LOSproblemsolveItem);
        }
    },
});

////////* End of LOSproblemsolve Events *//////

////////* Start of LOSfeature Events *//////


Template.addLOSfeatureItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const LOSfeatureitemName = target.LOSfeatureitemName.value;
    
    // Insert a LOSfeature item into the collection
    Meteor.call('LOSfeatureitemName.insert', LOSfeatureitemName);

    // Clear form
    target.LOSfeatureitemName.value = '';
    },
});

Template.LOSfeatureItem.events({
    // events go here
    'click .delete-LOSfeatureitem'(){
     Meteor.call('LOSfeatureitemName.remove', this._id);
    },

    'keyup [name=LOSfeatureItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var LOSfeatureItem = $(event.target).val();
        Meteor.call('updateLOSfeatureItem', documentId, LOSfeatureItem);
        }
    },
});

////////* End of LOSfeature Events *//////

////////* Start of LOSbenefit Events *//////


Template.addLOSbenefitItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const LOSbenefititemName = target.LOSbenefititemName.value;
    
    // Insert a LOSbenefit item into the collection
    Meteor.call('LOSbenefititemName.insert', LOSbenefititemName);

    // Clear form
    target.LOSbenefititemName.value = '';
    },
});

Template.LOSbenefitItem.events({
    // events go here
    'click .delete-LOSbenefititem'(){
     Meteor.call('LOSbenefititemName.remove', this._id);
    },

    'keyup [name=LOSbenefitItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var LOSbenefitItem = $(event.target).val();
        Meteor.call('updateLOSbenefitItem', documentId, LOSbenefitItem);
        }
    },
});

////////* End of LOSbenefit Events *//////