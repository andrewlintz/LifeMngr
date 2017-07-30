import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Agenda } from '../../../lib/collections/collections.js';

'./spirit.html'


///// HELPERS /////


Template.spiritPage.helpers({
    spiritEach() {
        return Agenda.find( { spirititemName: {$exists: true}}, {sort: {createdAt: -1}}); },
});



////////* Spirit Events *//////


Template.addspiritItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    console.log('yo');

    // Get value from form element
    const target = event.target;
    const spirititemName = target.spirititemName.value;
    
    // Insert a spirit item into the collection
    Meteor.call('spirititemName.insert', spirititemName);

    // Clear form
    target.spirititemName.value = '';
    },
});

Template.spiritItem.events({
    // events go here
    'click .delete-spirititem'(){
     Meteor.call('spirititemName.remove', this._id);
    },

    'keyup [name=spiritItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var spiritItem = $(event.target).val();
        Meteor.call('updateListItem', documentId, spiritItem);
        }
    },
});