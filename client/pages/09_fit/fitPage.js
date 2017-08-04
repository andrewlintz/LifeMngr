'./fit.html'


///// HELPERS /////


Template.fitPage.helpers({
    fitnesslogEach() {
        return Agenda.find( { fitnesslogitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    fitnessprogramEach() {
        return Agenda.find( { fitnessprogramitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    improveFitpageEach() {
        return Agenda.find( { improveFitpageitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
});





////////* Start of fitnesslog Events *//////


Template.addfitnesslogItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const fitnesslogitemName = target.fitnesslogitemName.value;
    
    // Insert a fitnesslog item into the collection
    Meteor.call('fitnesslogitemName.insert', fitnesslogitemName);

    // Clear form
    target.fitnesslogitemName.value = '';
    },
});

Template.fitnesslogItem.events({
    // events go here
    'click .delete-fitnesslogitem'(){
     Meteor.call('fitnesslogitemName.remove', this._id);
    },

    'keyup [name=fitnesslogItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var fitnesslogItem = $(event.target).val();
        Meteor.call('updateListItem', documentId, fitnesslogItem);
        }
    },
});

////////* End of fitnesslog Events *//////

////////* Start of fitnessprogram Events *//////


Template.addfitnessprogramItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const fitnessprogramitemName = target.fitnessprogramitemName.value;
    
    // Insert a fitnessprogram item into the collection
    Meteor.call('fitnessprogramitemName.insert', fitnessprogramitemName);

    // Clear form
    target.fitnessprogramitemName.value = '';
    },
});

Template.fitnessprogramItem.events({
    // events go here
    'click .delete-fitnessprogramitem'(){
     Meteor.call('fitnessprogramitemName.remove', this._id);
    },

    'keyup [name=fitnessprogramItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var fitnessprogramItem = $(event.target).val();
        Meteor.call('updateListItem', documentId, fitnessprogramItem);
        }
    },
});

////////* End of fitnessprogram Events *//////

////////* Start of improveFitpage Events *//////


Template.addimproveFitpageItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const improveFitpageitemName = target.improveFitpageitemName.value;
    
    // Insert a improveFitpage item into the collection
    Meteor.call('improveFitpageitemName.insert', improveFitpageitemName);

    // Clear form
    target.improveFitpageitemName.value = '';
    },
});

Template.improveFitpageItem.events({
    // events go here
    'click .delete-improveFitpageitem'(){
     Meteor.call('improveFitpageitemName.remove', this._id);
    },

    'keyup [name=improveFitpageItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var improveFitpageItem = $(event.target).val();
        Meteor.call('updateListItem', documentId, improveFitpageItem);
        }
    },
});

////////* End of improveFitpage Events *//////



