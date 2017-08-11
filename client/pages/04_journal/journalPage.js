import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { DevTest } from '../../../lib/collections/collections.js';

import './life.html';


///// HELPERS /////


Template.pastdayslogger.helpers({
    dayHeadlineEach() {
        return DevTest.find( { dayHeadlineitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    dayStoryEach() {
        return DevTest.find( { dayStoryitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
});


///// EVENTS /////

////////* Start of dayHeadline Events *//////


Template.adddayHeadlineItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const dayHeadlineitemName = target.dayHeadlineitemName.value;
    
    // Insert a dayHeadline item into the collection
    Meteor.call('dayHeadlineitemName.insert', dayHeadlineitemName);

    // Clear form
    target.dayHeadlineitemName.value = '';
    },
});

Template.dayHeadlineItem.events({
    // events go here
    'click .delete-dayHeadlineitem'(){
     Meteor.call('dayHeadlineitemName.remove', this._id);
    },

    'keyup [name=dayHeadlineItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var dayHeadlineItem = $(event.target).val();
        Meteor.call('updatedayHeadlineItem', documentId, dayHeadlineItem);
        }
    },
});

////////* End of dayHeadline Events *//////

////////* Start of dayStory Events *//////


Template.adddayStoryItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const dayStoryitemName = target.dayStoryitemName.value;
    
    // Insert a dayStory item into the collection
    Meteor.call('dayStoryitemName.insert', dayStoryitemName);

    // Clear form
    target.dayStoryitemName.value = '';
    },
});

Template.dayStoryItem.events({
    // events go here
    'click .delete-dayStoryitem'(){
     Meteor.call('dayStoryitemName.remove', this._id);
    },

    'keyup [name=dayStoryItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var dayStoryItem = $(event.target).val();
        Meteor.call('updatedayStoryItem', documentId, dayStoryItem);
        }
    },
});

////////* End of dayStory Events *//////



