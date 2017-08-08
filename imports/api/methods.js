/*
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';


Daily = new Mongo.Collection('daily');


if (Meteor.isServer) {
  // This code only runs on the server
  // Only publish tasks that are public or belong to the current user
  Meteor.publish('devTest', function devTestPublication() {
    return DevTest.find({
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

    DevTest.insert({
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

    const spirit = DevTest.findOne(documentId);
    if (spirit.private && spirit.owner !== Meteor.userId()) {
      // If the spirit item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updateListItem': function(documentId, spiritItem){
    check(spiritItem, String); 

    // Make sure the user is logged in before inserting a spirit item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { spirititemName : spiritItem, title : spiritItem, description : spiritItem }});
  },



// - End of Spirited - //

});
*/