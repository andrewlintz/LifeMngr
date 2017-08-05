import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Agenda } from '../../../lib/collections/collections.js';

'./health.html'


///// HELPERS /////


Template.healthPage.helpers({
    biostatsEach() {
        return Agenda.find( { biostatsitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    familyMedhistEach() {
        return Agenda.find( { familyMedhistitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    allergiesEach() {
        return Agenda.find( { allergiesitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    symptomsEach() {
        return Agenda.find( { symptomsitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    bodyachelogEach() {
        return Agenda.find( { bodyachelogitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    sicklogEach() {
        return Agenda.find( { sicklogitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    medhistoryEach() {
        return Agenda.find( { medhistoryitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    medicineEach() {
        return Agenda.find( { medicineitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    dentallogEach() {
        return Agenda.find( { dentallogitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    dentistryhistEach() {
        return Agenda.find( { dentistryhistitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    visionhistEach() {
        return Agenda.find( { visionhistitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    pooplogEach() {
        return Agenda.find( { pooplogitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    peelogEach() {
        return Agenda.find( { peelogitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    improveHealthpageEach() {
        return Agenda.find( { improveHealthpageitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
});




///// EVENTS /////

////////* Start of biostats Events *//////


Template.addbiostatsItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const biostatsitemName = target.biostatsitemName.value;
    
    // Insert a biostats item into the collection
    Meteor.call('biostatsitemName.insert', biostatsitemName);

    // Clear form
    target.biostatsitemName.value = '';
    },
});

Template.biostatsItem.events({
    // events go here
    'click .delete-biostatsitem'(){
     Meteor.call('biostatsitemName.remove', this._id);
    },

    'keyup [name=biostatsItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var biostatsItem = $(event.target).val();
        Meteor.call('updatebiostatsItem', documentId, biostatsItem);
        }
    },
});

////////* End of biostats Events *//////

////////* Start of familyMedhist Events *//////


Template.addfamilyMedhistItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const familyMedhistitemName = target.familyMedhistitemName.value;
    
    // Insert a familyMedhist item into the collection
    Meteor.call('familyMedhistitemName.insert', familyMedhistitemName);

    // Clear form
    target.familyMedhistitemName.value = '';
    },
});

Template.familyMedhistItem.events({
    // events go here
    'click .delete-familyMedhistitem'(){
     Meteor.call('familyMedhistitemName.remove', this._id);
    },

    'keyup [name=familyMedhistItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var familyMedhistItem = $(event.target).val();
        Meteor.call('updatefamilyMedhistItem', documentId, familyMedhistItem);
        }
    },
});

////////* End of familyMedhist Events *//////

////////* Start of allergies Events *//////


Template.addallergiesItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const allergiesitemName = target.allergiesitemName.value;
    
    // Insert a allergies item into the collection
    Meteor.call('allergiesitemName.insert', allergiesitemName);

    // Clear form
    target.allergiesitemName.value = '';
    },
});

Template.allergiesItem.events({
    // events go here
    'click .delete-allergiesitem'(){
     Meteor.call('allergiesitemName.remove', this._id);
    },

    'keyup [name=allergiesItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var allergiesItem = $(event.target).val();
        Meteor.call('updateallergiesItem', documentId, allergiesItem);
        }
    },
});

////////* End of allergies Events *//////

////////* Start of symptoms Events *//////


Template.addsymptomsItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const symptomsitemName = target.symptomsitemName.value;
    
    // Insert a symptoms item into the collection
    Meteor.call('symptomsitemName.insert', symptomsitemName);

    // Clear form
    target.symptomsitemName.value = '';
    },
});

Template.symptomsItem.events({
    // events go here
    'click .delete-symptomsitem'(){
     Meteor.call('symptomsitemName.remove', this._id);
    },

    'keyup [name=symptomsItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var symptomsItem = $(event.target).val();
        Meteor.call('updatesymptomsItem', documentId, symptomsItem);
        }
    },
});

////////* End of symptoms Events *//////

////////* Start of bodyachelog Events *//////


Template.addbodyachelogItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const bodyachelogitemName = target.bodyachelogitemName.value;
    
    // Insert a bodyachelog item into the collection
    Meteor.call('bodyachelogitemName.insert', bodyachelogitemName);

    // Clear form
    target.bodyachelogitemName.value = '';
    },
});

Template.bodyachelogItem.events({
    // events go here
    'click .delete-bodyachelogitem'(){
     Meteor.call('bodyachelogitemName.remove', this._id);
    },

    'keyup [name=bodyachelogItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var bodyachelogItem = $(event.target).val();
        Meteor.call('updatebodyachelogItem', documentId, bodyachelogItem);
        }
    },
});

////////* End of bodyachelog Events *//////

////////* Start of sicklog Events *//////


Template.addsicklogItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const sicklogitemName = target.sicklogitemName.value;
    
    // Insert a sicklog item into the collection
    Meteor.call('sicklogitemName.insert', sicklogitemName);

    // Clear form
    target.sicklogitemName.value = '';
    },
});

Template.sicklogItem.events({
    // events go here
    'click .delete-sicklogitem'(){
     Meteor.call('sicklogitemName.remove', this._id);
    },

    'keyup [name=sicklogItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var sicklogItem = $(event.target).val();
        Meteor.call('updatesicklogItem', documentId, sicklogItem);
        }
    },
});

////////* End of sicklog Events *//////

////////* Start of medhistory Events *//////


Template.addmedhistoryItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const medhistoryitemName = target.medhistoryitemName.value;
    
    // Insert a medhistory item into the collection
    Meteor.call('medhistoryitemName.insert', medhistoryitemName);

    // Clear form
    target.medhistoryitemName.value = '';
    },
});

Template.medhistoryItem.events({
    // events go here
    'click .delete-medhistoryitem'(){
     Meteor.call('medhistoryitemName.remove', this._id);
    },

    'keyup [name=medhistoryItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var medhistoryItem = $(event.target).val();
        Meteor.call('updatemedhistoryItem', documentId, medhistoryItem);
        }
    },
});

////////* End of medhistory Events *//////

////////* Start of medicine Events *//////


Template.addmedicineItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const medicineitemName = target.medicineitemName.value;
    
    // Insert a medicine item into the collection
    Meteor.call('medicineitemName.insert', medicineitemName);

    // Clear form
    target.medicineitemName.value = '';
    },
});

Template.medicineItem.events({
    // events go here
    'click .delete-medicineitem'(){
     Meteor.call('medicineitemName.remove', this._id);
    },

    'keyup [name=medicineItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var medicineItem = $(event.target).val();
        Meteor.call('updatemedicineItem', documentId, medicineItem);
        }
    },
});

////////* End of medicine Events *//////

////////* Start of dentallog Events *//////


Template.adddentallogItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const dentallogitemName = target.dentallogitemName.value;
    
    // Insert a dentallog item into the collection
    Meteor.call('dentallogitemName.insert', dentallogitemName);

    // Clear form
    target.dentallogitemName.value = '';
    },
});

Template.dentallogItem.events({
    // events go here
    'click .delete-dentallogitem'(){
     Meteor.call('dentallogitemName.remove', this._id);
    },

    'keyup [name=dentallogItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var dentallogItem = $(event.target).val();
        Meteor.call('updatedentallogItem', documentId, dentallogItem);
        }
    },
});

////////* End of dentallog Events *//////

////////* Start of dentistryhist Events *//////


Template.adddentistryhistItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const dentistryhistitemName = target.dentistryhistitemName.value;
    
    // Insert a dentistryhist item into the collection
    Meteor.call('dentistryhistitemName.insert', dentistryhistitemName);

    // Clear form
    target.dentistryhistitemName.value = '';
    },
});

Template.dentistryhistItem.events({
    // events go here
    'click .delete-dentistryhistitem'(){
     Meteor.call('dentistryhistitemName.remove', this._id);
    },

    'keyup [name=dentistryhistItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var dentistryhistItem = $(event.target).val();
        Meteor.call('updatedentistryhistItem', documentId, dentistryhistItem);
        }
    },
});

////////* End of dentistryhist Events *//////

////////* Start of visionhist Events *//////


Template.addvisionhistItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const visionhistitemName = target.visionhistitemName.value;
    
    // Insert a visionhist item into the collection
    Meteor.call('visionhistitemName.insert', visionhistitemName);

    // Clear form
    target.visionhistitemName.value = '';
    },
});

Template.visionhistItem.events({
    // events go here
    'click .delete-visionhistitem'(){
     Meteor.call('visionhistitemName.remove', this._id);
    },

    'keyup [name=visionhistItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var visionhistItem = $(event.target).val();
        Meteor.call('updatevisionhistItem', documentId, visionhistItem);
        }
    },
});

////////* End of visionhist Events *//////

////////* Start of pooplog Events *//////


Template.addpooplogItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const pooplogitemName = target.pooplogitemName.value;
    
    // Insert a pooplog item into the collection
    Meteor.call('pooplogitemName.insert', pooplogitemName);

    // Clear form
    target.pooplogitemName.value = '';
    },
});

Template.pooplogItem.events({
    // events go here
    'click .delete-pooplogitem'(){
     Meteor.call('pooplogitemName.remove', this._id);
    },

    'keyup [name=pooplogItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var pooplogItem = $(event.target).val();
        Meteor.call('updatepooplogItem', documentId, pooplogItem);
        }
    },
});

////////* End of pooplog Events *//////

////////* Start of peelog Events *//////


Template.addpeelogItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const peelogitemName = target.peelogitemName.value;
    
    // Insert a peelog item into the collection
    Meteor.call('peelogitemName.insert', peelogitemName);

    // Clear form
    target.peelogitemName.value = '';
    },
});

Template.peelogItem.events({
    // events go here
    'click .delete-peelogitem'(){
     Meteor.call('peelogitemName.remove', this._id);
    },

    'keyup [name=peelogItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var peelogItem = $(event.target).val();
        Meteor.call('updatepeelogItem', documentId, peelogItem);
        }
    },
});

////////* End of peelog Events *//////

////////* Start of improveHealthpage Events *//////


Template.addimproveHealthpageItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const improveHealthpageitemName = target.improveHealthpageitemName.value;
    
    // Insert a improveHealthpage item into the collection
    Meteor.call('improveHealthpageitemName.insert', improveHealthpageitemName);

    // Clear form
    target.improveHealthpageitemName.value = '';
    },
});

Template.improveHealthpageItem.events({
    // events go here
    'click .delete-improveHealthpageitem'(){
     Meteor.call('improveHealthpageitemName.remove', this._id);
    },

    'keyup [name=improveHealthpageItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var improveHealthpageItem = $(event.target).val();
        Meteor.call('updateimproveHealthpageItem', documentId, improveHealthpageItem);
        }
    },
});

////////* End of improveHealthpage Events *//////




