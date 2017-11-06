import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Agenda } from '../../../../lib/collections/collections.js';

'./crud.html'


///// HELPERS /////


Template.keywordPage.helpers({
    keywordEach() {
        return Agenda.find( { keyworditemName: {$exists: true}}, {sort: {createdAt: -1}}); },
});

////////* keyword Events *//////


Template.addkeywordItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    console.log('yo');

    // Get value from form element
    const target = event.target;
    const keyworditemName = target.keyworditemName.value;
    
    // Insert a keyword item into the collection
    Meteor.call('keyworditemName.insert', keyworditemName);

    // Clear form
    target.keyworditemName.value = '';
    },
});

Template.keywordItem.events({
    // events go here
    'click .delete-keyworditem'(){
     Meteor.call('keyworditemName.remove', this._id);
    },

    'keyup [name=keywordItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var keywordItem = $(event.target).val();
        Meteor.call('updateListItem', documentId, keywordItem);
        }
    },
});