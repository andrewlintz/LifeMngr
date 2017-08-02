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

// ---- Agenda Block ---- //

// Start of vision Methods Block //
  'visionitemName.insert'(visionitemName) {
   check(visionitemName, String);
    console.log('yo2');
 
    // Make sure the user is logged in before inserting a vision item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: visionitemName,
      description: visionitemName,
      visionitemName: visionitemName,
      start: new Date(),
      end: new Date(),
      allDay: false,
      createdAt: new Date(),
      editedAt: new Date(),
      private: true,
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });
  }, 


  'visionitemName.remove'(documentId) {
    check(documentId, String);

    const vision = Agenda.findOne(documentId);
    if (vision.private && vision.owner !== Meteor.userId()) {
      // If the vision item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, visionItem){
    check(visionItem, String); 

    // Make sure the user is logged in before inserting a vision item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { visionitemName : visionItem, title : visionItem, description : visionItem }});
  },

// - End of vision Methods Block - //

// Start of mission2 Methods Block //
  'mission2itemName.insert'(mission2itemName) {
   check(mission2itemName, String);
    console.log('yo2');
 
    // Make sure the user is logged in before inserting a mission2 item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: mission2itemName,
      description: mission2itemName,
      mission2itemName: mission2itemName,
      start: new Date(),
      end: new Date(),
      allDay: false,
      createdAt: new Date(),
      editedAt: new Date(),
      private: true,
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });
  }, 


  'mission2itemName.remove'(documentId) {
    check(documentId, String);

    const mission2 = Agenda.findOne(documentId);
    if (mission2.private && mission2.owner !== Meteor.userId()) {
      // If the mission2 item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, mission2Item){
    check(mission2Item, String); 

    // Make sure the user is logged in before inserting a mission2 item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { mission2itemName : mission2Item, title : mission2Item, description : mission2Item }});
  },



// - End of mission2 Methods Block - //



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
      description: spirititemName,
      spirititemName: spirititemName,
      start: new Date(),
      end: new Date(),
      allDay: false,
      createdAt: new Date(),
      editedAt: new Date(),
      private: true,
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
