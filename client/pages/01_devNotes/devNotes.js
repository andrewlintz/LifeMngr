import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { DevNotes } from '../../../lib/collections/collections.js';

import './devNotes.html';

///// HELPERS /////

Template.devNotesPage.helpers({
	LOSbuglogEach() {
        return DevNotes.find( { LOSbuglogitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
	LOSdevTodoEach() {
        return DevNotes.find( { LOSdevTodoitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
	LOSfeatureRequestEach() {
        return DevNotes.find( { LOSfeatureRequestitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
});






////////* Events *//////

////////* Start of LOSbuglog Events *//////


Template.addLOSbuglogItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const LOSbuglogitemName = target.LOSbuglogitemName.value;
    
    // Insert a LOSbuglog item into the collection
    Meteor.call('LOSbuglogitemName.insert', LOSbuglogitemName);

    // Clear form
    target.LOSbuglogitemName.value = '';
    },
});

Template.LOSbuglogItem.events({
    // events go here
    'click .delete-LOSbuglogitem'(){
     Meteor.call('LOSbuglogitemName.remove', this._id);
    },

    'keyup [name=LOSbuglogItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var LOSbuglogItem = $(event.target).val();
        Meteor.call('updateLOSbuglogItem', documentId, LOSbuglogItem);
        }
    },
});

////////* End of LOSbuglog Events *//////

////////* Start of LOSdevTodo Events *//////


Template.addLOSdevTodoItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const LOSdevTodoitemName = target.LOSdevTodoitemName.value;
    
    // Insert a LOSdevTodo item into the collection
    Meteor.call('LOSdevTodoitemName.insert', LOSdevTodoitemName);

    // Clear form
    target.LOSdevTodoitemName.value = '';
    },
});

Template.LOSdevTodoItem.events({
    // events go here
    'click .delete-LOSdevTodoitem'(){
     Meteor.call('LOSdevTodoitemName.remove', this._id);
    },

    'keyup [name=LOSdevTodoItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var LOSdevTodoItem = $(event.target).val();
        Meteor.call('updateLOSdevTodoItem', documentId, LOSdevTodoItem);
        }
    },
});

////////* End of LOSdevTodo Events *//////

////////* Start of LOSfeatureRequest Events *//////


Template.addLOSfeatureRequestItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const LOSfeatureRequestitemName = target.LOSfeatureRequestitemName.value;
    
    // Insert a LOSfeatureRequest item into the collection
    Meteor.call('LOSfeatureRequestitemName.insert', LOSfeatureRequestitemName);

    // Clear form
    target.LOSfeatureRequestitemName.value = '';
    },
});

Template.LOSfeatureRequestItem.events({
    // events go here
    'click .delete-LOSfeatureRequestitem'(){
     Meteor.call('LOSfeatureRequestitemName.remove', this._id);
    },

    'keyup [name=LOSfeatureRequestItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var LOSfeatureRequestItem = $(event.target).val();
        Meteor.call('updateLOSfeatureRequestItem', documentId, LOSfeatureRequestItem);
        }
    },
});

////////* End of LOSfeatureRequest Events *//////