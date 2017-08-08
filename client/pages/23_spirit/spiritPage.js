import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { DevTest } from '../../../lib/collections/collections.js';

'./spirit.html'


///// HELPERS /////


Template.spiritPage.helpers({
    spiritEach() {
        return DevTest.find( { spirititemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    mantrasEach() {
        return DevTest.find( { mantrasitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    improveSpiritpageEach() {
        return DevTest.find( { improveSpiritpageitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
});

////////* Spirit Events *//////


Template.addspiritItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const spirititemName = target.spirititemName.value;
    
    // Insert a spirit item into the collection
    Meteor.call('spirititemName.insert', spirititemName);

    // Clear form
    target.spirititemName.value = '';
    },
});

Template.spiritItem.events({
    // events go here
    'click .delete-spirititem'(){
     Meteor.call('spirititemName.remove', this._id);
    },

    'keyup [name=spiritItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var spiritItem = $(event.target).val();
        Meteor.call('updatespiritItem', documentId, spiritItem);
        }
    },
});

////////* End of Spirits Events *//////

////////* Start of mantras Events *//////


Template.addmantrasItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const mantrasitemName = target.mantrasitemName.value;
    
    // Insert a mantras item into the collection
    Meteor.call('mantrasitemName.insert', mantrasitemName);

    // Clear form
    target.mantrasitemName.value = '';
    },
});

Template.mantrasItem.events({
    // events go here
    'click .delete-mantrasitem'(){
     Meteor.call('mantrasitemName.remove', this._id);
    },

    'keyup [name=mantrasItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var mantrasItem = $(event.target).val();
        Meteor.call('updateMantrasItem', documentId, mantrasItem);
        }
    },
});

////////* End of mantras Events *//////

////////* Start of improveSpiritpage Events *//////


Template.addimproveSpiritpageItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const improveSpiritpageitemName = target.improveSpiritpageitemName.value;
    
    // Insert a improveSpiritpage item into the collection
    Meteor.call('improveSpiritpageitemName.insert', improveSpiritpageitemName);

    // Clear form
    target.improveSpiritpageitemName.value = '';
    },
});

Template.improveSpiritpageItem.events({
    // events go here
    'click .delete-improveSpiritpageitem'(){
     Meteor.call('improveSpiritpageitemName.remove', this._id);
    },

    'keyup [name=improveSpiritpageItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var improveSpiritpageItem = $(event.target).val();
        Meteor.call('updateimproveSpiritItem', documentId, improveSpiritpageItem);
        }
    },
});

////////* End of improveSpiritpage Events *//////

