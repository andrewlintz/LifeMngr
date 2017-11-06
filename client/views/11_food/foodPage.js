import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { DevTest } from '../../../lib/collections/collections.js';

'./food.html'


///// HELPERS /////


Template.foodPage.helpers({
    eathistoryEach() {
        return DevTest.find( { eathistoryitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    drinkhistoryEach() {
        return DevTest.find( { drinkhistoryitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    alcohollogEach() {
        return DevTest.find( { alcohollogitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    druglogEach() {
        return DevTest.find( { druglogitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    ingredientinventoryEach() {
        return DevTest.find( { ingredientinventoryitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    shoppinglistEach() {
        return DevTest.find( { shoppinglistitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    menuEach() {
        return DevTest.find( { menuitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    menuplanEach() {
        return DevTest.find( { menuplanitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    improveFoodpageEach() {
        return DevTest.find( { improveFoodpageitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
});





////////* Start of eathistory Events *//////


Template.addeathistoryItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const eathistoryitemName = target.eathistoryitemName.value;
    
    // Insert a eathistory item into the collection
    Meteor.call('eathistoryitemName.insert', eathistoryitemName);

    // Clear form
    target.eathistoryitemName.value = '';
    },
});

Template.eathistoryItem.events({
    // events go here
    'click .delete-eathistoryitem'(){
     Meteor.call('eathistoryitemName.remove', this._id);
    },

    'keyup [name=eathistoryItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var eathistoryItem = $(event.target).val();
        Meteor.call('updateeathistoryItem', documentId, eathistoryItem);
        }
    },
});

////////* End of eathistory Events *//////

////////* Start of drinkhistory Events *//////


Template.adddrinkhistoryItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const drinkhistoryitemName = target.drinkhistoryitemName.value;
    
    // Insert a drinkhistory item into the collection
    Meteor.call('drinkhistoryitemName.insert', drinkhistoryitemName);

    // Clear form
    target.drinkhistoryitemName.value = '';
    },
});

Template.drinkhistoryItem.events({
    // events go here
    'click .delete-drinkhistoryitem'(){
     Meteor.call('drinkhistoryitemName.remove', this._id);
    },

    'keyup [name=drinkhistoryItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drinkhistoryItem = $(event.target).val();
        Meteor.call('updatedrinkhistoryItem', documentId, drinkhistoryItem);
        }
    },
});

////////* End of drinkhistory Events *//////

////////* Start of alcohollog Events *//////


Template.addalcohollogItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const alcohollogitemName = target.alcohollogitemName.value;
    
    // Insert a alcohollog item into the collection
    Meteor.call('alcohollogitemName.insert', alcohollogitemName);

    // Clear form
    target.alcohollogitemName.value = '';
    },
});

Template.alcohollogItem.events({
    // events go here
    'click .delete-alcohollogitem'(){
     Meteor.call('alcohollogitemName.remove', this._id);
    },

    'keyup [name=alcohollogItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var alcohollogItem = $(event.target).val();
        Meteor.call('updatealcohollogItem', documentId, alcohollogItem);
        }
    },
});

////////* End of alcohollog Events *//////

////////* Start of druglog Events *//////


Template.adddruglogItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const druglogitemName = target.druglogitemName.value;
    
    // Insert a druglog item into the collection
    Meteor.call('druglogitemName.insert', druglogitemName);

    // Clear form
    target.druglogitemName.value = '';
    },
});

Template.druglogItem.events({
    // events go here
    'click .delete-druglogitem'(){
     Meteor.call('druglogitemName.remove', this._id);
    },

    'keyup [name=druglogItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var druglogItem = $(event.target).val();
        Meteor.call('updatedruglogItem', documentId, druglogItem);
        }
    },
});

////////* End of druglog Events *//////

////////* Start of ingredientinventory Events *//////


Template.addingredientinventoryItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const ingredientinventoryitemName = target.ingredientinventoryitemName.value;
    
    // Insert a ingredientinventory item into the collection
    Meteor.call('ingredientinventoryitemName.insert', ingredientinventoryitemName);

    // Clear form
    target.ingredientinventoryitemName.value = '';
    },
});

Template.ingredientinventoryItem.events({
    // events go here
    'click .delete-ingredientinventoryitem'(){
     Meteor.call('ingredientinventoryitemName.remove', this._id);
    },

    'keyup [name=ingredientinventoryItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var ingredientinventoryItem = $(event.target).val();
        Meteor.call('updateingredientinventoryItem', documentId, ingredientinventoryItem);
        }
    },
});

////////* End of ingredientinventory Events *//////

////////* Start of shoppinglist Events *//////


Template.addshoppinglistItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const shoppinglistitemName = target.shoppinglistitemName.value;
    
    // Insert a shoppinglist item into the collection
    Meteor.call('shoppinglistitemName.insert', shoppinglistitemName);

    // Clear form
    target.shoppinglistitemName.value = '';
    },
});

Template.shoppinglistItem.events({
    // events go here
    'click .delete-shoppinglistitem'(){
     Meteor.call('shoppinglistitemName.remove', this._id);
    },

    'keyup [name=shoppinglistItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var shoppinglistItem = $(event.target).val();
        Meteor.call('updateshoppinglistItem', documentId, shoppinglistItem);
        }
    },
});

////////* End of shoppinglist Events *//////

////////* Start of menu Events *//////


Template.addmenuItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const menuitemName = target.menuitemName.value;
    
    // Insert a menu item into the collection
    Meteor.call('menuitemName.insert', menuitemName);

    // Clear form
    target.menuitemName.value = '';
    },
});

Template.menuItem.events({
    // events go here
    'click .delete-menuitem'(){
     Meteor.call('menuitemName.remove', this._id);
    },

    'keyup [name=menuItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var menuItem = $(event.target).val();
        Meteor.call('updatemenuItem', documentId, menuItem);
        }
    },
});

////////* End of menu Events *//////

////////* Start of menuplan Events *//////


Template.addmenuplanItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const menuplanitemName = target.menuplanitemName.value;
    
    // Insert a menuplan item into the collection
    Meteor.call('menuplanitemName.insert', menuplanitemName);

    // Clear form
    target.menuplanitemName.value = '';
    },
});

Template.menuplanItem.events({
    // events go here
    'click .delete-menuplanitem'(){
     Meteor.call('menuplanitemName.remove', this._id);
    },

    'keyup [name=menuplanItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var menuplanItem = $(event.target).val();
        Meteor.call('updatemenuplanItem', documentId, menuplanItem);
        }
    },
});

////////* End of menuplan Events *//////

////////* Start of improveFoodpage Events *//////


Template.addimproveFoodpageItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const improveFoodpageitemName = target.improveFoodpageitemName.value;
    
    // Insert a improveFoodpage item into the collection
    Meteor.call('improveFoodpageitemName.insert', improveFoodpageitemName);

    // Clear form
    target.improveFoodpageitemName.value = '';
    },
});

Template.improveFoodpageItem.events({
    // events go here
    'click .delete-improveFoodpageitem'(){
     Meteor.call('improveFoodpageitemName.remove', this._id);
    },

    'keyup [name=improveFoodpageItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var improveFoodpageItem = $(event.target).val();
        Meteor.call('updateimproveFoodpageItem', documentId, improveFoodpageItem);
        }
    },
});

////////* End of improveFoodpage Events *//////

