import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Agenda } from '../../../lib/collections/collections.js';

'./place.html'


///// HELPERS /////


Template.placePage.helpers({
    placesbeenEach() {
        return Agenda.find( { placesbeenitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    placeswantEach() {
        return Agenda.find( { placeswantitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    placesplannerEach() {
        return Agenda.find( { placesplanneritemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    improveSpacepageEach() {
        return Agenda.find( { improveSpacepageitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
});




////////* Start of placesbeen Events *//////


Template.addplacesbeenItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const placesbeenitemName = target.placesbeenitemName.value;
    
    // Insert a placesbeen item into the collection
    Meteor.call('placesbeenitemName.insert', placesbeenitemName);

    // Clear form
    target.placesbeenitemName.value = '';
    },
});

Template.placesbeenItem.events({
    // events go here
    'click .delete-placesbeenitem'(){
     Meteor.call('placesbeenitemName.remove', this._id);
    },

    'keyup [name=placesbeenItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var placesbeenItem = $(event.target).val();
        Meteor.call('updateplacesbeenItem', documentId, placesbeenItem);
        }
    },
});

////////* End of placesbeen Events *//////

////////* Start of placeswant Events *//////


Template.addplaceswantItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const placeswantitemName = target.placeswantitemName.value;
    
    // Insert a placeswant item into the collection
    Meteor.call('placeswantitemName.insert', placeswantitemName);

    // Clear form
    target.placeswantitemName.value = '';
    },
});

Template.placeswantItem.events({
    // events go here
    'click .delete-placeswantitem'(){
     Meteor.call('placeswantitemName.remove', this._id);
    },

    'keyup [name=placeswantItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var placeswantItem = $(event.target).val();
        Meteor.call('updateplaceswantItem', documentId, placeswantItem);
        }
    },
});

////////* End of placeswant Events *//////

////////* Start of placesplanner Events *//////


Template.addplacesplannerItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const placesplanneritemName = target.placesplanneritemName.value;
    
    // Insert a placesplanner item into the collection
    Meteor.call('placesplanneritemName.insert', placesplanneritemName);

    // Clear form
    target.placesplanneritemName.value = '';
    },
});

Template.placesplannerItem.events({
    // events go here
    'click .delete-placesplanneritem'(){
     Meteor.call('placesplanneritemName.remove', this._id);
    },

    'keyup [name=placesplannerItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var placesplannerItem = $(event.target).val();
        Meteor.call('updateplacesplannerItem', documentId, placesplannerItem);
        }
    },
});

////////* End of placesplanner Events *//////

////////* Start of improveSpacepage Events *//////


Template.addimproveSpacepageItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const improveSpacepageitemName = target.improveSpacepageitemName.value;
    
    // Insert a improveSpacepage item into the collection
    Meteor.call('improveSpacepageitemName.insert', improveSpacepageitemName);

    // Clear form
    target.improveSpacepageitemName.value = '';
    },
});

Template.improveSpacepageItem.events({
    // events go here
    'click .delete-improveSpacepageitem'(){
     Meteor.call('improveSpacepageitemName.remove', this._id);
    },

    'keyup [name=improveSpacepageItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var improveSpacepageItem = $(event.target).val();
        Meteor.call('updateimproveSpacepageItem', documentId, improveSpacepageItem);
        }
    },
});

////////* End of improveSpacepage Events *//////


