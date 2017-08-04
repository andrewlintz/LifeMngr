'./people.html'


///// HELPERS /////


Template.peoplePage.helpers({
    pplengagedwithEach() {
        return Agenda.find( { pplengagedwithitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    pplconstactEach() {
        return Agenda.find( { pplconstactitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    pplGiftideasEach() {
        return Agenda.find( { pplGiftideasitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    improvePeoplepageEach() {
        return Agenda.find( { improvePeoplepageitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
});




////////* Start of pplengagedwith Events *//////


Template.addpplengagedwithItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const pplengagedwithitemName = target.pplengagedwithitemName.value;
    
    // Insert a pplengagedwith item into the collection
    Meteor.call('pplengagedwithitemName.insert', pplengagedwithitemName);

    // Clear form
    target.pplengagedwithitemName.value = '';
    },
});

Template.pplengagedwithItem.events({
    // events go here
    'click .delete-pplengagedwithitem'(){
     Meteor.call('pplengagedwithitemName.remove', this._id);
    },

    'keyup [name=pplengagedwithItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var pplengagedwithItem = $(event.target).val();
        Meteor.call('updateListItem', documentId, pplengagedwithItem);
        }
    },
});

////////* End of pplengagedwith Events *//////

////////* Start of pplconstact Events *//////


Template.addpplconstactItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const pplconstactitemName = target.pplconstactitemName.value;
    
    // Insert a pplconstact item into the collection
    Meteor.call('pplconstactitemName.insert', pplconstactitemName);

    // Clear form
    target.pplconstactitemName.value = '';
    },
});

Template.pplconstactItem.events({
    // events go here
    'click .delete-pplconstactitem'(){
     Meteor.call('pplconstactitemName.remove', this._id);
    },

    'keyup [name=pplconstactItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var pplconstactItem = $(event.target).val();
        Meteor.call('updateListItem', documentId, pplconstactItem);
        }
    },
});

////////* End of pplconstact Events *//////

////////* Start of pplGiftideas Events *//////


Template.addpplGiftideasItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const pplGiftideasitemName = target.pplGiftideasitemName.value;
    
    // Insert a pplGiftideas item into the collection
    Meteor.call('pplGiftideasitemName.insert', pplGiftideasitemName);

    // Clear form
    target.pplGiftideasitemName.value = '';
    },
});

Template.pplGiftideasItem.events({
    // events go here
    'click .delete-pplGiftideasitem'(){
     Meteor.call('pplGiftideasitemName.remove', this._id);
    },

    'keyup [name=pplGiftideasItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var pplGiftideasItem = $(event.target).val();
        Meteor.call('updateListItem', documentId, pplGiftideasItem);
        }
    },
});

////////* End of pplGiftideas Events *//////

////////* Start of improvePeoplepage Events *//////


Template.addimprovePeoplepageItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const improvePeoplepageitemName = target.improvePeoplepageitemName.value;
    
    // Insert a improvePeoplepage item into the collection
    Meteor.call('improvePeoplepageitemName.insert', improvePeoplepageitemName);

    // Clear form
    target.improvePeoplepageitemName.value = '';
    },
});

Template.improvePeoplepageItem.events({
    // events go here
    'click .delete-improvePeoplepageitem'(){
     Meteor.call('improvePeoplepageitemName.remove', this._id);
    },

    'keyup [name=improvePeoplepageItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var improvePeoplepageItem = $(event.target).val();
        Meteor.call('updateListItem', documentId, improvePeoplepageItem);
        }
    },
});

////////* End of improvePeoplepage Events *//////


