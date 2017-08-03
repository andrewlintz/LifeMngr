import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Agenda } from '../../../lib/collections/collections.js';

import './agenda.html';


///// HELPERS /////


Template.agendaPage.helpers({
    visionEach() {
        return Agenda.find( { visionitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    missionEach() {
        return Agenda.find( { missionitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    valuesEach() {
        return Agenda.find( { valuesitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    goalsEach() {
        return Agenda.find( { goalsitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    accomplishmentsEach() {
        return Agenda.find( { accomplishmentsitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    successesEach() {
        return Agenda.find( { successesitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    failureEach() {
        return Agenda.find( { failureitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    goodhabitsEach() {
        return Agenda.find( { goodhabitsitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    badhabitsEach() {
        return Agenda.find( { badhabitsitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    strengthsEach() {
        return Agenda.find( { strengthsitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    weaknessesEach() {
        return Agenda.find( { weaknessesitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    careerEach() {
        return Agenda.find( { careeritemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    projectsEach() {
        return Agenda.find( { projectsitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    todosEach() {
        return Agenda.find( { todositemName: {$exists: true}}, {sort: {createdAt: -1}}); },
});


///// EVENTS /////








/////// cards //////


////////* vision Events *//////


Template.addvisionItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    console.log('yo');

    // Get value from form element
    const target = event.target;
    const visionitemName = target.visionitemName.value;
    
    // Insert a vision item into the collection
    Meteor.call('visionitemName.insert', visionitemName);

    // Clear form
    target.visionitemName.value = '';
    },
});

Template.visionItem.events({
    // events go here
    'click .delete-visionitem'(){
     Meteor.call('visionitemName.remove', this._id);
    },

    'keyup [name=visionItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var visionItem = $(event.target).val();
        Meteor.call('updateListItem', documentId, visionItem);
        }
    },
});
////////* End of Vision Events *//////

////////* Start of mission Events *//////


Template.addmissionItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const missionitemName = target.missionitemName.value;
    
    // Insert a mission item into the collection
    Meteor.call('missionitemName.insert', missionitemName);

    // Clear form
    target.missionitemName.value = '';
    },
});

Template.missionItem.events({
    // events go here
    'click .delete-missionitem'(){
     Meteor.call('missionitemName.remove', this._id);
    },

    'keyup [name=missionItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var missionItem = $(event.target).val();
        Meteor.call('updateListItem', documentId, missionItem);
        }
    },
});

////////* End of mission Events *//////

////////* Start of values Events *//////


Template.addvaluesItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const valuesitemName = target.valuesitemName.value;
    
    // Insert a values item into the collection
    Meteor.call('valuesitemName.insert', valuesitemName);

    // Clear form
    target.valuesitemName.value = '';
    },
});

Template.valuesItem.events({
    // events go here
    'click .delete-valuesitem'(){
     Meteor.call('valuesitemName.remove', this._id);
    },

    'keyup [name=valuesItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var valuesItem = $(event.target).val();
        Meteor.call('updateListItem', documentId, valuesItem);
        }
    },
});

////////* End of values Events *//////

////////* Start of goals Events *//////


Template.addgoalsItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const goalsitemName = target.goalsitemName.value;
    
    // Insert a goals item into the collection
    Meteor.call('goalsitemName.insert', goalsitemName);

    // Clear form
    target.goalsitemName.value = '';
    },
});

Template.goalsItem.events({
    // events go here
    'click .delete-goalsitem'(){
     Meteor.call('goalsitemName.remove', this._id);
    },

    'keyup [name=goalsItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var goalsItem = $(event.target).val();
        Meteor.call('updateListItem', documentId, goalsItem);
        }
    },
});

////////* End of goals Events *//////

////////* Start of accomplishments Events *//////


Template.addaccomplishmentsItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const accomplishmentsitemName = target.accomplishmentsitemName.value;
    
    // Insert a accomplishments item into the collection
    Meteor.call('accomplishmentsitemName.insert', accomplishmentsitemName);

    // Clear form
    target.accomplishmentsitemName.value = '';
    },
});

Template.accomplishmentsItem.events({
    // events go here
    'click .delete-accomplishmentsitem'(){
     Meteor.call('accomplishmentsitemName.remove', this._id);
    },

    'keyup [name=accomplishmentsItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var accomplishmentsItem = $(event.target).val();
        Meteor.call('updateListItem', documentId, accomplishmentsItem);
        }
    },
});

////////* End of accomplishments Events *//////

////////* Start of successes Events *//////


Template.addsuccessesItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const successesitemName = target.successesitemName.value;
    
    // Insert a successes item into the collection
    Meteor.call('successesitemName.insert', successesitemName);

    // Clear form
    target.successesitemName.value = '';
    },
});

Template.successesItem.events({
    // events go here
    'click .delete-successesitem'(){
     Meteor.call('successesitemName.remove', this._id);
    },

    'keyup [name=successesItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var successesItem = $(event.target).val();
        Meteor.call('updateListItem', documentId, successesItem);
        }
    },
});

////////* End of successes Events *//////

////////* Start of failure Events *//////


Template.addfailureItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const failureitemName = target.failureitemName.value;
    
    // Insert a failure item into the collection
    Meteor.call('failureitemName.insert', failureitemName);

    // Clear form
    target.failureitemName.value = '';
    },
});

Template.failureItem.events({
    // events go here
    'click .delete-failureitem'(){
     Meteor.call('failureitemName.remove', this._id);
    },

    'keyup [name=failureItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var failureItem = $(event.target).val();
        Meteor.call('updateListItem', documentId, failureItem);
        }
    },
});

////////* End of failure Events *//////

////////* Start of goodhabits Events *//////


Template.addgoodhabitsItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const goodhabitsitemName = target.goodhabitsitemName.value;
    
    // Insert a goodhabits item into the collection
    Meteor.call('goodhabitsitemName.insert', goodhabitsitemName);

    // Clear form
    target.goodhabitsitemName.value = '';
    },
});

Template.goodhabitsItem.events({
    // events go here
    'click .delete-goodhabitsitem'(){
     Meteor.call('goodhabitsitemName.remove', this._id);
    },

    'keyup [name=goodhabitsItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var goodhabitsItem = $(event.target).val();
        Meteor.call('updateListItem', documentId, goodhabitsItem);
        }
    },
});

////////* End of goodhabits Events *//////

////////* Start of badhabits Events *//////


Template.addbadhabitsItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const badhabitsitemName = target.badhabitsitemName.value;
    
    // Insert a badhabits item into the collection
    Meteor.call('badhabitsitemName.insert', badhabitsitemName);

    // Clear form
    target.badhabitsitemName.value = '';
    },
});

Template.badhabitsItem.events({
    // events go here
    'click .delete-badhabitsitem'(){
     Meteor.call('badhabitsitemName.remove', this._id);
    },

    'keyup [name=badhabitsItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var badhabitsItem = $(event.target).val();
        Meteor.call('updateListItem', documentId, badhabitsItem);
        }
    },
});

////////* End of badhabits Events *//////

////////* Start of strengths Events *//////


Template.addstrengthsItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const strengthsitemName = target.strengthsitemName.value;
    
    // Insert a strengths item into the collection
    Meteor.call('strengthsitemName.insert', strengthsitemName);

    // Clear form
    target.strengthsitemName.value = '';
    },
});

Template.strengthsItem.events({
    // events go here
    'click .delete-strengthsitem'(){
     Meteor.call('strengthsitemName.remove', this._id);
    },

    'keyup [name=strengthsItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var strengthsItem = $(event.target).val();
        Meteor.call('updateListItem', documentId, strengthsItem);
        }
    },
});

////////* End of strengths Events *//////

////////* Start of weaknesses Events *//////


Template.addweaknessesItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const weaknessesitemName = target.weaknessesitemName.value;
    
    // Insert a weaknesses item into the collection
    Meteor.call('weaknessesitemName.insert', weaknessesitemName);

    // Clear form
    target.weaknessesitemName.value = '';
    },
});

Template.weaknessesItem.events({
    // events go here
    'click .delete-weaknessesitem'(){
     Meteor.call('weaknessesitemName.remove', this._id);
    },

    'keyup [name=weaknessesItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var weaknessesItem = $(event.target).val();
        Meteor.call('updateListItem', documentId, weaknessesItem);
        }
    },
});

////////* End of weaknesses Events *//////

////////* Start of career Events *//////


Template.addcareerItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const careeritemName = target.careeritemName.value;
    
    // Insert a career item into the collection
    Meteor.call('careeritemName.insert', careeritemName);

    // Clear form
    target.careeritemName.value = '';
    },
});

Template.careerItem.events({
    // events go here
    'click .delete-careeritem'(){
     Meteor.call('careeritemName.remove', this._id);
    },

    'keyup [name=careerItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var careerItem = $(event.target).val();
        Meteor.call('updateListItem', documentId, careerItem);
        }
    },
});

////////* End of career Events *//////

////////* Start of projects Events *//////


Template.addprojectsItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const projectsitemName = target.projectsitemName.value;
    
    // Insert a projects item into the collection
    Meteor.call('projectsitemName.insert', projectsitemName);

    // Clear form
    target.projectsitemName.value = '';
    },
});

Template.projectsItem.events({
    // events go here
    'click .delete-projectsitem'(){
     Meteor.call('projectsitemName.remove', this._id);
    },

    'keyup [name=projectsItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var projectsItem = $(event.target).val();
        Meteor.call('updateListItem', documentId, projectsItem);
        }
    },
});

////////* End of projects Events *//////

////////* Start of todos Events *//////


Template.addtodosItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const todositemName = target.todositemName.value;
    
    // Insert a todos item into the collection
    Meteor.call('todositemName.insert', todositemName);

    // Clear form
    target.todositemName.value = '';
    },
});

Template.todosItem.events({
    // events go here
    'click .delete-todositem'(){
     Meteor.call('todositemName.remove', this._id);
    },

    'keyup [name=todosItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var todosItem = $(event.target).val();
        Meteor.call('updateListItem', documentId, todosItem);
        }
    },
});

////////* End of todos Events *//////


