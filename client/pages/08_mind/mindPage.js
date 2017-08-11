import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { DevTest } from '../../../lib/collections/collections.js';

import './mind.html'; 


///// HELPERS /////


Template.mindPage.helpers({
  moodEach() {
        return DevTest.find( { mooditemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    creativeartideasEach() {
        return DevTest.find( { creativeartideasitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    jokesEach() {
        return DevTest.find( { jokesitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    inventionEach() {
        return DevTest.find( { inventionitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    entreprenuerialideaEach() {
        return DevTest.find( { entreprenuerialideaitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    opinionEach() {
        return DevTest.find( { opinionitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    improveMindpageEach() {
        return DevTest.find( { improveMindpageitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
});



///// EVENTS /////



////////* Start of mood Events *//////


Template.addmoodItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const mooditemName = target.mooditemName.value;
    
    // Insert a mood item into the collection
    Meteor.call('mooditemName.insert', mooditemName);

    // Clear form
    target.mooditemName.value = '';
    },
});

Template.moodItem.events({
    // events go here
    'click .delete-mooditem'(){
     Meteor.call('mooditemName.remove', this._id);
    },

    'keyup [name=moodItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var moodItem = $(event.target).val();
        Meteor.call('updatemoodItem', documentId, moodItem);
        }
    },
});

////////* End of mood Events *//////

////////* Start of creativeartideas Events *//////


Template.addcreativeartideasItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const creativeartideasitemName = target.creativeartideasitemName.value;
    
    // Insert a creativeartideas item into the collection
    Meteor.call('creativeartideasitemName.insert', creativeartideasitemName);

    // Clear form
    target.creativeartideasitemName.value = '';
    },
});

Template.creativeartideasItem.events({
    // events go here
    'click .delete-creativeartideasitem'(){
     Meteor.call('creativeartideasitemName.remove', this._id);
    },

    'keyup [name=creativeartideasItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var creativeartideasItem = $(event.target).val();
        Meteor.call('updatecreativeartideasItem', documentId, creativeartideasItem);
        }
    },
});

////////* End of creativeartideas Events *//////

////////* Start of jokes Events *//////


Template.addjokesItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const jokesitemName = target.jokesitemName.value;
    
    // Insert a jokes item into the collection
    Meteor.call('jokesitemName.insert', jokesitemName);

    // Clear form
    target.jokesitemName.value = '';
    },
});

Template.jokesItem.events({
    // events go here
    'click .delete-jokesitem'(){
     Meteor.call('jokesitemName.remove', this._id);
    },

    'keyup [name=jokesItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var jokesItem = $(event.target).val();
        Meteor.call('updatejokesItem', documentId, jokesItem);
        }
    },
});

////////* End of jokes Events *//////

////////* Start of invention Events *//////


Template.addinventionItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const inventionitemName = target.inventionitemName.value;
    
    // Insert a invention item into the collection
    Meteor.call('inventionitemName.insert', inventionitemName);

    // Clear form
    target.inventionitemName.value = '';
    },
});

Template.inventionItem.events({
    // events go here
    'click .delete-inventionitem'(){
     Meteor.call('inventionitemName.remove', this._id);
    },

    'keyup [name=inventionItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var inventionItem = $(event.target).val();
        Meteor.call('updateinventionItem', documentId, inventionItem);
        }
    },
});

////////* End of invention Events *//////

////////* Start of entreprenuerialidea Events *//////


Template.addentreprenuerialideaItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const entreprenuerialideaitemName = target.entreprenuerialideaitemName.value;
    
    // Insert a entreprenuerialidea item into the collection
    Meteor.call('entreprenuerialideaitemName.insert', entreprenuerialideaitemName);

    // Clear form
    target.entreprenuerialideaitemName.value = '';
    },
});

Template.entreprenuerialideaItem.events({
    // events go here
    'click .delete-entreprenuerialideaitem'(){
     Meteor.call('entreprenuerialideaitemName.remove', this._id);
    },

    'keyup [name=entreprenuerialideaItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var entreprenuerialideaItem = $(event.target).val();
        Meteor.call('updateentreprenuerialideaItem', documentId, entreprenuerialideaItem);
        }
    },
});

////////* End of entreprenuerialidea Events *//////


////////* Start of improveMindpage Events *//////


Template.addimproveMindpageItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const improveMindpageitemName = target.improveMindpageitemName.value;
    
    // Insert a improveMindpage item into the collection
    Meteor.call('improveMindpageitemName.insert', improveMindpageitemName);

    // Clear form
    target.improveMindpageitemName.value = '';
    },
});

Template.improveMindpageItem.events({
    // events go here
    'click .delete-improveMindpageitem'(){
     Meteor.call('improveMindpageitemName.remove', this._id);
    },

    'keyup [name=improveMindpageItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var improveMindpageItem = $(event.target).val();
        Meteor.call('updateimproveMindpageItem', documentId, improveMindpageItem);
        }
    },
});

////////* End of improveMindpage Events *//////



