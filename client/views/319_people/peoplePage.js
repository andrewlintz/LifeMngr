import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { DevTest } from '../../../lib/collections/collections.js';

'./people.html'


///// HELPERS /////


Template.peoplePage.helpers({
    pplengagedwithEach() {
        return DevTest.find( { pplengagedwithitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    pplscontactEach() {
        return DevTest.find( { pplscontactitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    pplGiftideasEach() {
        return DevTest.find( { pplGiftideasitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    improvePeoplepageEach() {
        return DevTest.find( { improvePeoplepageitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
});




////////* Start of pplengagedwith Events *//////


Template.addpplengagedwithItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const pplengagedwithitemName = target.pplengagedwithitemName.value;
    
    // Insert a pplengagedwith item into the collection
    Meteor.call('pplengagedwithitemName.insert', pplengagedwithitemName);

    // Clear form
    target.pplengagedwithitemName.value = '';
    },
});

Template.pplengagedwithItem.events({
    // events go here
    'click .delete-pplengagedwithitem'(){
     Meteor.call('pplengagedwithitemName.remove', this._id);
    },

    'keyup [name=pplengagedwithItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var pplengagedwithItem = $(event.target).val();
        Meteor.call('updatepplengagedwithItem', documentId, pplengagedwithItem);
        }
    },
});

////////* End of pplengagedwith Events *//////

////////* Start of pplscontact Events *//////


Template.addpplscontactItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const pplscontactitemName = target.pplscontactitemName.value;
    
    // Insert a pplscontact item into the collection
    Meteor.call('pplscontactitemName.insert', pplscontactitemName);

    // Clear form
    target.pplscontactitemName.value = '';
    },
});

Template.pplscontactItem.events({
    // events go here
    'click .delete-pplscontactitem'(){
     Meteor.call('pplscontactitemName.remove', this._id);
    },

    'keyup [name=pplscontactItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var pplscontactItem = $(event.target).val();
        Meteor.call('updatepplscontactItem', documentId, pplscontactItem);
        }
    },
});

////////* End of pplscontact Events *//////

////////* Start of pplGiftideas Events *//////


Template.addpplGiftideasItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const pplGiftideasitemName = target.pplGiftideasitemName.value;
    
    // Insert a pplGiftideas item into the collection
    Meteor.call('pplGiftideasitemName.insert', pplGiftideasitemName);

    // Clear form
    target.pplGiftideasitemName.value = '';
    },
});

Template.pplGiftideasItem.events({
    // events go here
    'click .delete-pplGiftideasitem'(){
     Meteor.call('pplGiftideasitemName.remove', this._id);
    },

    'keyup [name=pplGiftideasItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var pplGiftideasItem = $(event.target).val();
        Meteor.call('updatepplGiftideasItem', documentId, pplGiftideasItem);
        }
    },
});

////////* End of pplGiftideas Events *//////

////////* Start of improvePeoplepage Events *//////


Template.addimprovePeoplepageItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const improvePeoplepageitemName = target.improvePeoplepageitemName.value;
    
    // Insert a improvePeoplepage item into the collection
    Meteor.call('improvePeoplepageitemName.insert', improvePeoplepageitemName);

    // Clear form
    target.improvePeoplepageitemName.value = '';
    },
});

Template.improvePeoplepageItem.events({
    // events go here
    'click .delete-improvePeoplepageitem'(){
     Meteor.call('improvePeoplepageitemName.remove', this._id);
    },

    'keyup [name=improvePeoplepageItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var improvePeoplepageItem = $(event.target).val();
        Meteor.call('updateimprovePeoplepageItem', documentId, improvePeoplepageItem);
        }
    },
});

////////* End of improvePeoplepage Events *//////


