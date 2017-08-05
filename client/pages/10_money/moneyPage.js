import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Agenda } from '../../../lib/collections/collections.js';

'./money.html'


///// HELPERS /////


Template.moneyPage.helpers({
    networthEach() {
        return Agenda.find( { networthitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    fireplanEach() {
        return Agenda.find( { fireplanitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    earningsrateEach() {
        return Agenda.find( { earningsrateitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    spendingrateEach() {
        return Agenda.find( { spendingrateitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    assetsEach() {
        return Agenda.find( { assetsitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    borrowdebtEach() {
        return Agenda.find( { borrowdebtitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    savingsrateEach() {
        return Agenda.find( { savingsrateitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    runrateEach() {
        return Agenda.find( { runrateitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    debttoequityEach() {
        return Agenda.find( { debttoequityitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    budgetEach() {
        return Agenda.find( { budgetitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    improveMoneypageEach() {
        return Agenda.find( { improveMoneypageitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
});






////////* Start of networth Events *//////


Template.addnetworthItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const networthitemName = target.networthitemName.value;
    
    // Insert a networth item into the collection
    Meteor.call('networthitemName.insert', networthitemName);

    // Clear form
    target.networthitemName.value = '';
    },
});

Template.networthItem.events({
    // events go here
    'click .delete-networthitem'(){
     Meteor.call('networthitemName.remove', this._id);
    },

    'keyup [name=networthItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var networthItem = $(event.target).val();
        Meteor.call('updatenetworthItem', documentId, networthItem);
        }
    },
});

////////* End of networth Events *//////

////////* Start of fireplan Events *//////


Template.addfireplanItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const fireplanitemName = target.fireplanitemName.value;
    
    // Insert a fireplan item into the collection
    Meteor.call('fireplanitemName.insert', fireplanitemName);

    // Clear form
    target.fireplanitemName.value = '';
    },
});

Template.fireplanItem.events({
    // events go here
    'click .delete-fireplanitem'(){
     Meteor.call('fireplanitemName.remove', this._id);
    },

    'keyup [name=fireplanItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var fireplanItem = $(event.target).val();
        Meteor.call('updatefireplanItem', documentId, fireplanItem);
        }
    },
});

////////* End of fireplan Events *//////

////////* Start of earningsrate Events *//////


Template.addearningsrateItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const earningsrateitemName = target.earningsrateitemName.value;
    
    // Insert a earningsrate item into the collection
    Meteor.call('earningsrateitemName.insert', earningsrateitemName);

    // Clear form
    target.earningsrateitemName.value = '';
    },
});

Template.earningsrateItem.events({
    // events go here
    'click .delete-earningsrateitem'(){
     Meteor.call('earningsrateitemName.remove', this._id);
    },

    'keyup [name=earningsrateItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var earningsrateItem = $(event.target).val();
        Meteor.call('updateearningsrateItem', documentId, earningsrateItem);
        }
    },
});

////////* End of earningsrate Events *//////

////////* Start of spendingrate Events *//////


Template.addspendingrateItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const spendingrateitemName = target.spendingrateitemName.value;
    
    // Insert a spendingrate item into the collection
    Meteor.call('spendingrateitemName.insert', spendingrateitemName);

    // Clear form
    target.spendingrateitemName.value = '';
    },
});

Template.spendingrateItem.events({
    // events go here
    'click .delete-spendingrateitem'(){
     Meteor.call('spendingrateitemName.remove', this._id);
    },

    'keyup [name=spendingrateItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var spendingrateItem = $(event.target).val();
        Meteor.call('updatespendingrateItem', documentId, spendingrateItem);
        }
    },
});

////////* End of spendingrate Events *//////

////////* Start of assets Events *//////


Template.addassetsItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const assetsitemName = target.assetsitemName.value;
    
    // Insert a assets item into the collection
    Meteor.call('assetsitemName.insert', assetsitemName);

    // Clear form
    target.assetsitemName.value = '';
    },
});

Template.assetsItem.events({
    // events go here
    'click .delete-assetsitem'(){
     Meteor.call('assetsitemName.remove', this._id);
    },

    'keyup [name=assetsItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var assetsItem = $(event.target).val();
        Meteor.call('updateassetsItem', documentId, assetsItem);
        }
    },
});

////////* End of assets Events *//////

////////* Start of borrowdebt Events *//////


Template.addborrowdebtItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const borrowdebtitemName = target.borrowdebtitemName.value;
    
    // Insert a borrowdebt item into the collection
    Meteor.call('borrowdebtitemName.insert', borrowdebtitemName);

    // Clear form
    target.borrowdebtitemName.value = '';
    },
});

Template.borrowdebtItem.events({
    // events go here
    'click .delete-borrowdebtitem'(){
     Meteor.call('borrowdebtitemName.remove', this._id);
    },

    'keyup [name=borrowdebtItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var borrowdebtItem = $(event.target).val();
        Meteor.call('updateborrowdebtItem', documentId, borrowdebtItem);
        }
    },
});

////////* End of borrowdebt Events *//////

////////* Start of savingsrate Events *//////


Template.addsavingsrateItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const savingsrateitemName = target.savingsrateitemName.value;
    
    // Insert a savingsrate item into the collection
    Meteor.call('savingsrateitemName.insert', savingsrateitemName);

    // Clear form
    target.savingsrateitemName.value = '';
    },
});

Template.savingsrateItem.events({
    // events go here
    'click .delete-savingsrateitem'(){
     Meteor.call('savingsrateitemName.remove', this._id);
    },

    'keyup [name=savingsrateItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var savingsrateItem = $(event.target).val();
        Meteor.call('updatesavingsrateItem', documentId, savingsrateItem);
        }
    },
});

////////* End of savingsrate Events *//////

////////* Start of runrate Events *//////


Template.addrunrateItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const runrateitemName = target.runrateitemName.value;
    
    // Insert a runrate item into the collection
    Meteor.call('runrateitemName.insert', runrateitemName);

    // Clear form
    target.runrateitemName.value = '';
    },
});

Template.runrateItem.events({
    // events go here
    'click .delete-runrateitem'(){
     Meteor.call('runrateitemName.remove', this._id);
    },

    'keyup [name=runrateItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var runrateItem = $(event.target).val();
        Meteor.call('updaterunrateItem', documentId, runrateItem);
        }
    },
});

////////* End of runrate Events *//////

////////* Start of debttoequity Events *//////


Template.adddebttoequityItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const debttoequityitemName = target.debttoequityitemName.value;
    
    // Insert a debttoequity item into the collection
    Meteor.call('debttoequityitemName.insert', debttoequityitemName);

    // Clear form
    target.debttoequityitemName.value = '';
    },
});

Template.debttoequityItem.events({
    // events go here
    'click .delete-debttoequityitem'(){
     Meteor.call('debttoequityitemName.remove', this._id);
    },

    'keyup [name=debttoequityItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var debttoequityItem = $(event.target).val();
        Meteor.call('updatedebttoequityItem', documentId, debttoequityItem);
        }
    },
});

////////* End of debttoequity Events *//////

////////* Start of budget Events *//////


Template.addbudgetItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const budgetitemName = target.budgetitemName.value;
    
    // Insert a budget item into the collection
    Meteor.call('budgetitemName.insert', budgetitemName);

    // Clear form
    target.budgetitemName.value = '';
    },
});

Template.budgetItem.events({
    // events go here
    'click .delete-budgetitem'(){
     Meteor.call('budgetitemName.remove', this._id);
    },

    'keyup [name=budgetItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var budgetItem = $(event.target).val();
        Meteor.call('updatebudgetItem', documentId, budgetItem);
        }
    },
});

////////* End of budget Events *//////

////////* Start of improveMoneypage Events *//////


Template.addimproveMoneypageItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const improveMoneypageitemName = target.improveMoneypageitemName.value;
    
    // Insert a improveMoneypage item into the collection
    Meteor.call('improveMoneypageitemName.insert', improveMoneypageitemName);

    // Clear form
    target.improveMoneypageitemName.value = '';
    },
});

Template.improveMoneypageItem.events({
    // events go here
    'click .delete-improveMoneypageitem'(){
     Meteor.call('improveMoneypageitemName.remove', this._id);
    },

    'keyup [name=improveMoneypageItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var improveMoneypageItem = $(event.target).val();
        Meteor.call('updateimproveMoneypageItem', documentId, improveMoneypageItem);
        }
    },
});

////////* End of improveMoneypage Events *//////






