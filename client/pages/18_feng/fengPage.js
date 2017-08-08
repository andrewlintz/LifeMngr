import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { DevTest } from '../../../lib/collections/collections.js';

'./feng.html'


///// HELPERS /////


Template.fengPage.helpers({
    choreslogEach() {
        return DevTest.find( { choreslogitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    chorestodoEach() {
        return DevTest.find( { chorestodoitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    homemessEach() {
        return DevTest.find( { homemessitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    hometightinessEach() {
        return DevTest.find( { hometightinessitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    carmessEach() {
        return DevTest.find( { carmessitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    cartightinessEach() {
        return DevTest.find( { cartightinessitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    workmessEach() {
        return DevTest.find( { workmessitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    workspacetightinesEach() {
        return DevTest.find( { workspacetightinesitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    improveFengpageEach() {
        return DevTest.find( { improveFengpageitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
});





////////* Start of choreslog Events *//////


Template.addchoreslogItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const choreslogitemName = target.choreslogitemName.value;
    
    // Insert a choreslog item into the collection
    Meteor.call('choreslogitemName.insert', choreslogitemName);

    // Clear form
    target.choreslogitemName.value = '';
    },
});

Template.choreslogItem.events({
    // events go here
    'click .delete-choreslogitem'(){
     Meteor.call('choreslogitemName.remove', this._id);
    },

    'keyup [name=choreslogItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var choreslogItem = $(event.target).val();
        Meteor.call('updatechoreslogItem', documentId, choreslogItem);
        }
    },
});

////////* End of choreslog Events *//////

////////* Start of chorestodo Events *//////


Template.addchorestodoItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const chorestodoitemName = target.chorestodoitemName.value;
    
    // Insert a chorestodo item into the collection
    Meteor.call('chorestodoitemName.insert', chorestodoitemName);

    // Clear form
    target.chorestodoitemName.value = '';
    },
});

Template.chorestodoItem.events({
    // events go here
    'click .delete-chorestodoitem'(){
     Meteor.call('chorestodoitemName.remove', this._id);
    },

    'keyup [name=chorestodoItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var chorestodoItem = $(event.target).val();
        Meteor.call('updatechorestodoItem', documentId, chorestodoItem);
        }
    },
});

////////* End of chorestodo Events *//////

////////* Start of homemess Events *//////


Template.addhomemessItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const homemessitemName = target.homemessitemName.value;
    
    // Insert a homemess item into the collection
    Meteor.call('homemessitemName.insert', homemessitemName);

    // Clear form
    target.homemessitemName.value = '';
    },
});

Template.homemessItem.events({
    // events go here
    'click .delete-homemessitem'(){
     Meteor.call('homemessitemName.remove', this._id);
    },

    'keyup [name=homemessItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var homemessItem = $(event.target).val();
        Meteor.call('updatehomemessItem', documentId, homemessItem);
        }
    },
});

////////* End of homemess Events *//////

////////* Start of hometightiness Events *//////


Template.addhometightinessItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const hometightinessitemName = target.hometightinessitemName.value;
    
    // Insert a hometightiness item into the collection
    Meteor.call('hometightinessitemName.insert', hometightinessitemName);

    // Clear form
    target.hometightinessitemName.value = '';
    },
});

Template.hometightinessItem.events({
    // events go here
    'click .delete-hometightinessitem'(){
     Meteor.call('hometightinessitemName.remove', this._id);
    },

    'keyup [name=hometightinessItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var hometightinessItem = $(event.target).val();
        Meteor.call('updatehometightinessItem', documentId, hometightinessItem);
        }
    },
});

////////* End of hometightiness Events *//////

////////* Start of carmess Events *//////


Template.addcarmessItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const carmessitemName = target.carmessitemName.value;
    
    // Insert a carmess item into the collection
    Meteor.call('carmessitemName.insert', carmessitemName);

    // Clear form
    target.carmessitemName.value = '';
    },
});

Template.carmessItem.events({
    // events go here
    'click .delete-carmessitem'(){
     Meteor.call('carmessitemName.remove', this._id);
    },

    'keyup [name=carmessItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var carmessItem = $(event.target).val();
        Meteor.call('updatecarmessItem', documentId, carmessItem);
        }
    },
});

////////* End of carmess Events *//////

////////* Start of cartightiness Events *//////


Template.addcartightinessItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const cartightinessitemName = target.cartightinessitemName.value;
    
    // Insert a cartightiness item into the collection
    Meteor.call('cartightinessitemName.insert', cartightinessitemName);

    // Clear form
    target.cartightinessitemName.value = '';
    },
});

Template.cartightinessItem.events({
    // events go here
    'click .delete-cartightinessitem'(){
     Meteor.call('cartightinessitemName.remove', this._id);
    },

    'keyup [name=cartightinessItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var cartightinessItem = $(event.target).val();
        Meteor.call('updatecartightinessItem', documentId, cartightinessItem);
        }
    },
});

////////* End of cartightiness Events *//////

////////* Start of workmess Events *//////


Template.addworkmessItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const workmessitemName = target.workmessitemName.value;
    
    // Insert a workmess item into the collection
    Meteor.call('workmessitemName.insert', workmessitemName);

    // Clear form
    target.workmessitemName.value = '';
    },
});

Template.workmessItem.events({
    // events go here
    'click .delete-workmessitem'(){
     Meteor.call('workmessitemName.remove', this._id);
    },

    'keyup [name=workmessItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var workmessItem = $(event.target).val();
        Meteor.call('updateworkmessItem', documentId, workmessItem);
        }
    },
});

////////* End of workmess Events *//////

////////* Start of workspacetightines Events *//////


Template.addworkspacetightinesItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const workspacetightinesitemName = target.workspacetightinesitemName.value;
    
    // Insert a workspacetightines item into the collection
    Meteor.call('workspacetightinesitemName.insert', workspacetightinesitemName);

    // Clear form
    target.workspacetightinesitemName.value = '';
    },
});

Template.workspacetightinesItem.events({
    // events go here
    'click .delete-workspacetightinesitem'(){
     Meteor.call('workspacetightinesitemName.remove', this._id);
    },

    'keyup [name=workspacetightinesItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var workspacetightinesItem = $(event.target).val();
        Meteor.call('updateworkspacetightinesItem', documentId, workspacetightinesItem);
        }
    },
});

////////* End of workspacetightines Events *//////

////////* Start of improveFengpage Events *//////


Template.addimproveFengpageItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const improveFengpageitemName = target.improveFengpageitemName.value;
    
    // Insert a improveFengpage item into the collection
    Meteor.call('improveFengpageitemName.insert', improveFengpageitemName);

    // Clear form
    target.improveFengpageitemName.value = '';
    },
});

Template.improveFengpageItem.events({
    // events go here
    'click .delete-improveFengpageitem'(){
     Meteor.call('improveFengpageitemName.remove', this._id);
    },

    'keyup [name=improveFengpageItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var improveFengpageItem = $(event.target).val();
        Meteor.call('updateimproveFengpageItem', documentId, improveFengpageItem);
        }
    },
});

////////* End of improveFengpage Events *//////

