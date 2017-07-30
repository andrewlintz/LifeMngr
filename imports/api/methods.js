/*
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import '../../lib/collections/collections.js';


if (Meteor.isServer) {
  // This code only runs on the server
  // Only publish tasks that are public or belong to the current user
  Meteor.publish('agenda', function agendaPublication() {
    return Agenda.find({
      $or: [
        { private: { $ne: true } },
        { owner: this.userId },
      ],
    });
  });
}


Meteor.methods({

// Spirited //

  'spirititemName.insert'(spirititemName) {

    console.log('yo2');
 
    // Make sure the user is logged in before inserting a Spirit item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      spirititemName: spirititemName,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });
  }, 
  'spirititemName.remove'(taskId) {
    check(taskId, String);

    const spirt = Agenda.findOne(taskId);
    if (spirit.private && spirit.owner !== Meteor.userId()) {
      // If the spirit item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(taskId);
  },
  'updateListItem': function(documentId, spiritItem){
    check(spiritItem, String); 

    // Make sure the user is logged in before inserting a spirit item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { spirititemName : spiritItem }});
  },

// - End of Spirited - //

});

*/
