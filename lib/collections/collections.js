import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Agenda = new Mongo.Collection('agenda');
Daily = new Mongo.Collection('daily');


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

// below is task methods from tutorial //

Meteor.methods({
// Spirited //
  'spirititemName.insert'(spirititemName) {
   check(spirititemName, String);
    console.log('yo2');
 
    // Make sure the user is logged in before inserting a Spirit item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: spirititemName,
      start: new Date(),
      end: new Date(),
      description: spirititemName,
      spirititemName: spirititemName,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });
  }, 


  'spirititemName.remove'(documentId) {
    check(documentId, String);

    const spirit = Agenda.findOne(documentId);
    if (spirit.private && spirit.owner !== Meteor.userId()) {
      // If the spirit item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, spiritItem){
    check(spiritItem, String); 

    // Make sure the user is logged in before inserting a spirit item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { spirititemName : spiritItem, title : spiritItem, description : spiritItem }});
  },



// - End of Spirited - //

});