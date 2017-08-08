import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { DevTest } from '../../../lib/collections/collections.js';

'./pet.html'


///// HELPERS /////


Template.petPage.helpers({
    petlogEach() {
        return DevTest.find( { petlogitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    petbiometricsEach() {
        return DevTest.find( { petbiometricsitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    petMedhistEach() {
        return DevTest.find( { petMedhistitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    improvePetpageEach() {
        return DevTest.find( { improvePetpageitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
});


////////* Start of petlog Events *//////


Template.addpetlogItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const petlogitemName = target.petlogitemName.value;
    
    // Insert a petlog item into the collection
    Meteor.call('petlogitemName.insert', petlogitemName);

    // Clear form
    target.petlogitemName.value = '';
    },
});

Template.petlogItem.events({
    // events go here
    'click .delete-petlogitem'(){
     Meteor.call('petlogitemName.remove', this._id);
    },

    'keyup [name=petlogItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var petlogItem = $(event.target).val();
        Meteor.call('updatepetlogItem', documentId, petlogItem);
        }
    },
});

////////* End of petlog Events *//////

////////* Start of petbiometrics Events *//////


Template.addpetbiometricsItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const petbiometricsitemName = target.petbiometricsitemName.value;
    
    // Insert a petbiometrics item into the collection
    Meteor.call('petbiometricsitemName.insert', petbiometricsitemName);

    // Clear form
    target.petbiometricsitemName.value = '';
    },
});

Template.petbiometricsItem.events({
    // events go here
    'click .delete-petbiometricsitem'(){
     Meteor.call('petbiometricsitemName.remove', this._id);
    },

    'keyup [name=petbiometricsItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var petbiometricsItem = $(event.target).val();
        Meteor.call('updatepetbiometricsItem', documentId, petbiometricsItem);
        }
    },
});

////////* End of petbiometrics Events *//////

////////* Start of petMedhist Events *//////


Template.addpetMedhistItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const petMedhistitemName = target.petMedhistitemName.value;
    
    // Insert a petMedhist item into the collection
    Meteor.call('petMedhistitemName.insert', petMedhistitemName);

    // Clear form
    target.petMedhistitemName.value = '';
    },
});

Template.petMedhistItem.events({
    // events go here
    'click .delete-petMedhistitem'(){
     Meteor.call('petMedhistitemName.remove', this._id);
    },

    'keyup [name=petMedhistItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var petMedhistItem = $(event.target).val();
        Meteor.call('updatepetMedhistItem', documentId, petMedhistItem);
        }
    },
});

////////* End of petMedhist Events *//////

////////* Start of improvePetpage Events *//////


Template.addimprovePetpageItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const improvePetpageitemName = target.improvePetpageitemName.value;
    
    // Insert a improvePetpage item into the collection
    Meteor.call('improvePetpageitemName.insert', improvePetpageitemName);

    // Clear form
    target.improvePetpageitemName.value = '';
    },
});

Template.improvePetpageItem.events({
    // events go here
    'click .delete-improvePetpageitem'(){
     Meteor.call('improvePetpageitemName.remove', this._id);
    },

    'keyup [name=improvePetpageItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var improvePetpageItem = $(event.target).val();
        Meteor.call('updateimprovePetpageItem', documentId, improvePetpageItem);
        }
    },
});

////////* End of improvePetpage Events *//////


 