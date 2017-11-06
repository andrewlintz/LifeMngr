import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { DevTest } from '../../../lib/collections/collections.js';

import './agenda.html';


///// HELPERS /////


Template.agendaPage.helpers({
    visionEach() {
        return DevTest.find( { visionitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    opportunityEach() {
        return DevTest.find( { opportunityitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    missionEach() {
        return DevTest.find( { missionitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    goalEach() {
        return DevTest.find( { goalitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    strategyEach() {
        return DevTest.find( { strategyitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    todosEach() {
        return DevTest.find( { todositemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    accomplishmentsEach() {
        return DevTest.find( { accomplishmentsitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    successesEach() {
        return DevTest.find( { successesitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    failureEach() {
        return DevTest.find( { failureitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    strengthsEach() {
        return DevTest.find( { strengthsitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    weaknessesEach() {
        return DevTest.find( { weaknessesitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    goodhabitsEach() {
        return DevTest.find( { goodhabitsitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    badhabitsEach() {
        return DevTest.find( { badhabitsitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    valuesEach() {
        return DevTest.find( { valuesitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    wantsEach() {
        return DevTest.find( { wantsitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    problemsEach() {
        return DevTest.find( { problemsitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    careerEach() {
        return DevTest.find( { careeritemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    projectsEach() {
        return DevTest.find( { projectsitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    improveAgendapageEach() {
        return DevTest.find( { improveAgendapageitemName: {$exists: true}}, {sort: {createdAt: -1}}); },

});


///// EVENTS /////








/////// cards //////


////////* vision Events *//////


Template.addvisionItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();

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
        Meteor.call('updatevisionItem', documentId, visionItem);
        }
    },
});
////////* End of Vision Events *//////

////////* Start of opportunity Events *//////


Template.addopportunityItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const opportunityitemName = target.opportunityitemName.value;
    
    // Insert a opportunity item into the collection
    Meteor.call('opportunityitemName.insert', opportunityitemName);

    // Clear form
    target.opportunityitemName.value = '';
    },
});

Template.opportunityItem.events({
    // events go here
    'click .delete-opportunityitem'(){
     Meteor.call('opportunityitemName.remove', this._id);
    },

    'keyup [name=opportunityItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var opportunityItem = $(event.target).val();
        Meteor.call('updateopportunityItem', documentId, opportunityItem);
        }
    },
});

////////* End of opportunity Events *//////

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
        Meteor.call('updatemissionItem', documentId, missionItem);
        }
    },
});

////////* End of mission Events *//////

////////* Start of goal Events *//////


Template.addgoalItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const goalitemName = target.goalitemName.value;
    
    // Insert a goal item into the collection
    Meteor.call('goalitemName.insert', goalitemName);

    // Clear form
    target.goalitemName.value = '';
    },
});

Template.goalItem.events({
    // events go here
    'click .delete-goalitem'(){
     Meteor.call('goalitemName.remove', this._id);
    },

    'keyup [name=goalItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var goalItem = $(event.target).val();
        Meteor.call('updategoalItem', documentId, goalItem);
        }
    },
});

////////* End of goal Events *//////

////////* Start of strategy Events *//////


Template.addstrategyItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const strategyitemName = target.strategyitemName.value;
    
    // Insert a strategy item into the collection
    Meteor.call('strategyitemName.insert', strategyitemName);

    // Clear form
    target.strategyitemName.value = '';
    },
});

Template.strategyItem.events({
    // events go here
    'click .delete-strategyitem'(){
     Meteor.call('strategyitemName.remove', this._id);
    },

    'keyup [name=strategyItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var strategyItem = $(event.target).val();
        Meteor.call('updatestrategyItem', documentId, strategyItem);
        }
    },
});

////////* End of strategy Events *//////

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
        Meteor.call('updatetodosItem', documentId, todosItem);
        }
    },
});

////////* End of todos Events *//////

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
        Meteor.call('updateaccomplishmentsItem', documentId, accomplishmentsItem);
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
        Meteor.call('updatesuccessesItem', documentId, successesItem);
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
        Meteor.call('updatefailureItem', documentId, failureItem);
        }
    },
});

////////* End of failure Events *//////

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
        Meteor.call('updatestrengthsItem', documentId, strengthsItem);
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
        Meteor.call('updateweaknessesItem', documentId, weaknessesItem);
        }
    },
});

////////* End of weaknesses Events *//////

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
        Meteor.call('updategoodhabitsItem', documentId, goodhabitsItem);
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
        Meteor.call('updatebadhabitsItem', documentId, badhabitsItem);
        }
    },
});

////////* End of badhabits Events *//////

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
        Meteor.call('updatevaluesItem', documentId, valuesItem);
        }
    },
});

////////* End of values Events *//////

////////* Start of wants Events *//////


Template.addwantsItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const wantsitemName = target.wantsitemName.value;
    
    // Insert a wants item into the collection
    Meteor.call('wantsitemName.insert', wantsitemName);

    // Clear form
    target.wantsitemName.value = '';
    },
});

Template.wantsItem.events({
    // events go here
    'click .delete-wantsitem'(){
     Meteor.call('wantsitemName.remove', this._id);
    },

    'keyup [name=wantsItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var wantsItem = $(event.target).val();
        Meteor.call('updatewantsItem', documentId, wantsItem);
        }
    },
});

////////* End of wants Events *//////

////////* Start of problems Events *//////


Template.addproblemsItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const problemsitemName = target.problemsitemName.value;
    
    // Insert a problems item into the collection
    Meteor.call('problemsitemName.insert', problemsitemName);

    // Clear form
    target.problemsitemName.value = '';
    },
});

Template.problemsItem.events({
    // events go here
    'click .delete-problemsitem'(){
     Meteor.call('problemsitemName.remove', this._id);
    },

    'keyup [name=problemsItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var problemsItem = $(event.target).val();
        Meteor.call('updateproblemsItem', documentId, problemsItem);
        }
    },
});

////////* End of problems Events *//////

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
        Meteor.call('updatecareerItem', documentId, careerItem);
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
        Meteor.call('updateprojectsItem', documentId, projectsItem);
        }
    },
});

////////* End of projects Events *//////

////////* Start of improveAgendapage Events *//////


Template.addimproveAgendapageItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const improveAgendapageitemName = target.improveAgendapageitemName.value;
    
    // Insert a improveAgendapage item into the collection
    Meteor.call('improveAgendapageitemName.insert', improveAgendapageitemName);

    // Clear form
    target.improveAgendapageitemName.value = '';
    },
});

Template.improveAgendapageItem.events({
    // events go here
    'click .delete-improveAgendapageitem'(){
     Meteor.call('improveAgendapageitemName.remove', this._id);
    },

    'keyup [name=improveAgendapageItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var improveAgendapageItem = $(event.target).val();
        Meteor.call('updateimproveAgendapageItem', documentId, improveAgendapageItem);
        }
    },
});

////////* End of improveAgendapage Events *//////




