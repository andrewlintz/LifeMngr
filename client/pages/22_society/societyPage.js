import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { DevTest } from '../../../lib/collections/collections.js';

'./society.html'


///// HELPERS /////


Template.societyPage.helpers({
    govtEach() {
        return DevTest.find( { govtitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    policiesEach() {
        return DevTest.find( { policiesitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    voteEach() {
        return DevTest.find( { voteitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    improveSocietypageEach() {
        return DevTest.find( { improveSocietypageitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
});







////////* Start of govt Events *//////


Template.addgovtItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const govtitemName = target.govtitemName.value;
    
    // Insert a govt item into the collection
    Meteor.call('govtitemName.insert', govtitemName);

    // Clear form
    target.govtitemName.value = '';
    },
});

Template.govtItem.events({
    // events go here
    'click .delete-govtitem'(){
     Meteor.call('govtitemName.remove', this._id);
    },

    'keyup [name=govtItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var govtItem = $(event.target).val();
        Meteor.call('updategovtItem', documentId, govtItem);
        }
    },
});

////////* End of govt Events *//////

////////* Start of policies Events *//////


Template.addpoliciesItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const policiesitemName = target.policiesitemName.value;
    
    // Insert a policies item into the collection
    Meteor.call('policiesitemName.insert', policiesitemName);

    // Clear form
    target.policiesitemName.value = '';
    },
});

Template.policiesItem.events({
    // events go here
    'click .delete-policiesitem'(){
     Meteor.call('policiesitemName.remove', this._id);
    },

    'keyup [name=policiesItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var policiesItem = $(event.target).val();
        Meteor.call('updatepoliciesItem', documentId, policiesItem);
        }
    },
});

////////* End of policies Events *//////

////////* Start of vote Events *//////


Template.addvoteItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const voteitemName = target.voteitemName.value;
    
    // Insert a vote item into the collection
    Meteor.call('voteitemName.insert', voteitemName);

    // Clear form
    target.voteitemName.value = '';
    },
});

Template.voteItem.events({
    // events go here
    'click .delete-voteitem'(){
     Meteor.call('voteitemName.remove', this._id);
    },

    'keyup [name=voteItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var voteItem = $(event.target).val();
        Meteor.call('updatevoteItem', documentId, voteItem);
        }
    },
});

////////* End of vote Events *//////

////////* Start of improveSocietypage Events *//////


Template.addimproveSocietypageItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const improveSocietypageitemName = target.improveSocietypageitemName.value;
    
    // Insert a improveSocietypage item into the collection
    Meteor.call('improveSocietypageitemName.insert', improveSocietypageitemName);

    // Clear form
    target.improveSocietypageitemName.value = '';
    },
});

Template.improveSocietypageItem.events({
    // events go here
    'click .delete-improveSocietypageitem'(){
     Meteor.call('improveSocietypageitemName.remove', this._id);
    },

    'keyup [name=improveSocietypageItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var improveSocietypageItem = $(event.target).val();
        Meteor.call('updateimproveSocietypageItem', documentId, improveSocietypageItem);
        }
    },
});

////////* End of improveSocietypage Events *//////

