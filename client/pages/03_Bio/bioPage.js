import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { DevTest } from '../../../lib/collections/collections.js';

import './bio.html';

///// HELPERS /////


Template.bioPage.helpers({
	ProfilePicEach() {
        return DevTest.find( { ProfilePicitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
	userFirstNameEach() {
        return DevTest.find( { userFirstNameitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
	userMiddleNameEach() {
        return DevTest.find( { userMiddleNameitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
	userLastNameEach() {
        return DevTest.find( { userLastNameitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
	userbirthdayEach() {
        return DevTest.find( { userbirthdayitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
});

////////* Events *//////



////////* Start of ProfilePic Events *//////


Template.addProfilePicItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const ProfilePicitemName = target.ProfilePicitemName.value;
    
    // Insert a ProfilePic item into the collection
    Meteor.call('ProfilePicitemName.insert', ProfilePicitemName);

    // Clear form
    target.ProfilePicitemName.value = '';
    },
});

Template.ProfilePicItem.events({
    // events go here
    'click .delete-ProfilePicitem'(){
     Meteor.call('ProfilePicitemName.remove', this._id);
    },

    'keyup [name=ProfilePicItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var ProfilePicItem = $(event.target).val();
        Meteor.call('updateProfilePicItem', documentId, ProfilePicItem);
        }
    },
});

////////* End of ProfilePic Events *//////

////////* Start of userFirstName Events *//////


Template.adduserFirstNameItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const userFirstNameitemName = target.userFirstNameitemName.value;
    
    // Insert a userFirstName item into the collection
    Meteor.call('userFirstNameitemName.insert', userFirstNameitemName);

    // Clear form
    target.userFirstNameitemName.value = '';
    },
});

Template.userFirstNameItem.events({
    // events go here
    'click .delete-userFirstNameitem'(){
     Meteor.call('userFirstNameitemName.remove', this._id);
    },

    'keyup [name=userFirstNameItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var userFirstNameItem = $(event.target).val();
        Meteor.call('updateuserFirstNameItem', documentId, userFirstNameItem);
        }
    },
});

////////* End of userFirstName Events *//////

////////* Start of userMiddleName Events *//////


Template.adduserMiddleNameItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const userMiddleNameitemName = target.userMiddleNameitemName.value;
    
    // Insert a userMiddleName item into the collection
    Meteor.call('userMiddleNameitemName.insert', userMiddleNameitemName);

    // Clear form
    target.userMiddleNameitemName.value = '';
    },
});

Template.userMiddleNameItem.events({
    // events go here
    'click .delete-userMiddleNameitem'(){
     Meteor.call('userMiddleNameitemName.remove', this._id);
    },

    'keyup [name=userMiddleNameItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var userMiddleNameItem = $(event.target).val();
        Meteor.call('updateuserMiddleNameItem', documentId, userMiddleNameItem);
        }
    },
});

////////* End of userMiddleName Events *//////

////////* Start of userLastName Events *//////


Template.adduserLastNameItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const userLastNameitemName = target.userLastNameitemName.value;
    
    // Insert a userLastName item into the collection
    Meteor.call('userLastNameitemName.insert', userLastNameitemName);

    // Clear form
    target.userLastNameitemName.value = '';
    },
});

Template.userLastNameItem.events({
    // events go here
    'click .delete-userLastNameitem'(){
     Meteor.call('userLastNameitemName.remove', this._id);
    },

    'keyup [name=userLastNameItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var userLastNameItem = $(event.target).val();
        Meteor.call('updateuserLastNameItem', documentId, userLastNameItem);
        }
    },
});

////////* End of userLastName Events *//////

////////* Start of userbirthday Events *//////


Template.adduserbirthdayItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const userbirthdayitemName = target.userbirthdayitemName.value;
    
    // Insert a userbirthday item into the collection
    Meteor.call('userbirthdayitemName.insert', userbirthdayitemName);

    // Clear form
    target.userbirthdayitemName.value = '';
    },
});

Template.userbirthdayItem.events({
    // events go here
    'click .delete-userbirthdayitem'(){
     Meteor.call('userbirthdayitemName.remove', this._id);
    },

    'keyup [name=userbirthdayItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var userbirthdayItem = $(event.target).val();
        Meteor.call('updateuserbirthdayItem', documentId, userbirthdayItem);
        }
    },
});

////////* End of userbirthday Events *//////
