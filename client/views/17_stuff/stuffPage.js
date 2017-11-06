import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { DevTest } from '../../../lib/collections/collections.js';

'./stuff.html'


///// HELPERS /////


Template.stuffPage.helpers({
    stuffhaveEach() {
        return DevTest.find( { stuffhaveitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    stufflostEach() {
        return DevTest.find( { stufflostitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    stufflentEach() {
        return DevTest.find( { stufflentitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    stuffborrowedEach() {
        return DevTest.find( { stuffborroweditemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    stuffwantEach() {
        return DevTest.find( { stuffwantitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    stuffplannerEach() {
        return DevTest.find( { stuffplanneritemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    improveStuffpageEach() {
        return DevTest.find( { improveStuffpageitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
});




////////* Start of stuffhave Events *//////


Template.addstuffhaveItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const stuffhaveitemName = target.stuffhaveitemName.value;
    
    // Insert a stuffhave item into the collection
    Meteor.call('stuffhaveitemName.insert', stuffhaveitemName);

    // Clear form
    target.stuffhaveitemName.value = '';
    },
});

Template.stuffhaveItem.events({
    // events go here
    'click .delete-stuffhaveitem'(){
     Meteor.call('stuffhaveitemName.remove', this._id);
    },

    'keyup [name=stuffhaveItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var stuffhaveItem = $(event.target).val();
        Meteor.call('updatestuffhaveItem', documentId, stuffhaveItem);
        }
    },
});

////////* End of stuffhave Events *//////

////////* Start of stufflost Events *//////


Template.addstufflostItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const stufflostitemName = target.stufflostitemName.value;
    
    // Insert a stufflost item into the collection
    Meteor.call('stufflostitemName.insert', stufflostitemName);

    // Clear form
    target.stufflostitemName.value = '';
    },
});

Template.stufflostItem.events({
    // events go here
    'click .delete-stufflostitem'(){
     Meteor.call('stufflostitemName.remove', this._id);
    },

    'keyup [name=stufflostItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var stufflostItem = $(event.target).val();
        Meteor.call('updatestufflostItem', documentId, stufflostItem);
        }
    },
});

////////* End of stufflost Events *//////

////////* Start of stufflent Events *//////


Template.addstufflentItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const stufflentitemName = target.stufflentitemName.value;
    
    // Insert a stufflent item into the collection
    Meteor.call('stufflentitemName.insert', stufflentitemName);

    // Clear form
    target.stufflentitemName.value = '';
    },
});

Template.stufflentItem.events({
    // events go here
    'click .delete-stufflentitem'(){
     Meteor.call('stufflentitemName.remove', this._id);
    },

    'keyup [name=stufflentItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var stufflentItem = $(event.target).val();
        Meteor.call('updatestufflentItem', documentId, stufflentItem);
        }
    },
});

////////* End of stufflent Events *//////

////////* Start of stuffborrowed Events *//////


Template.addstuffborrowedItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const stuffborroweditemName = target.stuffborroweditemName.value;
    
    // Insert a stuffborrowed item into the collection
    Meteor.call('stuffborroweditemName.insert', stuffborroweditemName);

    // Clear form
    target.stuffborroweditemName.value = '';
    },
});

Template.stuffborrowedItem.events({
    // events go here
    'click .delete-stuffborroweditem'(){
     Meteor.call('stuffborroweditemName.remove', this._id);
    },

    'keyup [name=stuffborrowedItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var stuffborrowedItem = $(event.target).val();
        Meteor.call('updatestuffborrowedItem', documentId, stuffborrowedItem);
        }
    },
});

////////* End of stuffborrowed Events *//////

////////* Start of stuffwant Events *//////


Template.addstuffwantItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const stuffwantitemName = target.stuffwantitemName.value;
    
    // Insert a stuffwant item into the collection
    Meteor.call('stuffwantitemName.insert', stuffwantitemName);

    // Clear form
    target.stuffwantitemName.value = '';
    },
});

Template.stuffwantItem.events({
    // events go here
    'click .delete-stuffwantitem'(){
     Meteor.call('stuffwantitemName.remove', this._id);
    },

    'keyup [name=stuffwantItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var stuffwantItem = $(event.target).val();
        Meteor.call('updatestuffwantItem', documentId, stuffwantItem);
        }
    },
});

////////* End of stuffwant Events *//////

////////* Start of stuffplanner Events *//////


Template.addstuffplannerItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const stuffplanneritemName = target.stuffplanneritemName.value;
    
    // Insert a stuffplanner item into the collection
    Meteor.call('stuffplanneritemName.insert', stuffplanneritemName);

    // Clear form
    target.stuffplanneritemName.value = '';
    },
});

Template.stuffplannerItem.events({
    // events go here
    'click .delete-stuffplanneritem'(){
     Meteor.call('stuffplanneritemName.remove', this._id);
    },

    'keyup [name=stuffplannerItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var stuffplannerItem = $(event.target).val();
        Meteor.call('updatestuffplannerItem', documentId, stuffplannerItem);
        }
    },
});

////////* End of stuffplanner Events *//////

////////* Start of improveStuffpage Events *//////


Template.addimproveStuffpageItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const improveStuffpageitemName = target.improveStuffpageitemName.value;
    
    // Insert a improveStuffpage item into the collection
    Meteor.call('improveStuffpageitemName.insert', improveStuffpageitemName);

    // Clear form
    target.improveStuffpageitemName.value = '';
    },
});

Template.improveStuffpageItem.events({
    // events go here
    'click .delete-improveStuffpageitem'(){
     Meteor.call('improveStuffpageitemName.remove', this._id);
    },

    'keyup [name=improveStuffpageItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var improveStuffpageItem = $(event.target).val();
        Meteor.call('updateimproveStuffpageItem', documentId, improveStuffpageItem);
        }
    },
});

////////* End of improveStuffpage Events *//////


