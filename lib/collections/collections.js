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

// Start of mission Methods Block //

  'missionitemName.insert'(missionitemName) {
   check(missionitemName, String);
 
    // Make sure the user is logged in before inserting a mission item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: missionitemName,
      description: missionitemName,
      missionitemName: missionitemName,
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


  'missionitemName.remove'(documentId) {
    check(documentId, String);

    const mission = Agenda.findOne(documentId);
    if (mission.private && mission.owner !== Meteor.userId()) {
      // If the mission item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, missionItem){
    check(missionItem, String); 

    // Make sure the user is logged in before inserting a mission item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { missionitemName : missionItem, title : missionItem, description : missionItem }});
  },

// - End of mission Methods Block - //

// Start of values Methods Block //

  'valuesitemName.insert'(valuesitemName) {
   check(valuesitemName, String);
 
    // Make sure the user is logged in before inserting a values item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: valuesitemName,
      description: valuesitemName,
      valuesitemName: valuesitemName,
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


  'valuesitemName.remove'(documentId) {
    check(documentId, String);

    const values = Agenda.findOne(documentId);
    if (values.private && values.owner !== Meteor.userId()) {
      // If the values item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, valuesItem){
    check(valuesItem, String); 

    // Make sure the user is logged in before inserting a values item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { valuesitemName : valuesItem, title : valuesItem, description : valuesItem }});
  },

// - End of values Methods Block - //

// Start of goals Methods Block //

  'goalsitemName.insert'(goalsitemName) {
   check(goalsitemName, String);
 
    // Make sure the user is logged in before inserting a goals item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: goalsitemName,
      description: goalsitemName,
      goalsitemName: goalsitemName,
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


  'goalsitemName.remove'(documentId) {
    check(documentId, String);

    const goals = Agenda.findOne(documentId);
    if (goals.private && goals.owner !== Meteor.userId()) {
      // If the goals item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, goalsItem){
    check(goalsItem, String); 

    // Make sure the user is logged in before inserting a goals item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { goalsitemName : goalsItem, title : goalsItem, description : goalsItem }});
  },

// - End of goals Methods Block - //

// Start of accomplishments Methods Block //

  'accomplishmentsitemName.insert'(accomplishmentsitemName) {
   check(accomplishmentsitemName, String);
 
    // Make sure the user is logged in before inserting a accomplishments item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: accomplishmentsitemName,
      description: accomplishmentsitemName,
      accomplishmentsitemName: accomplishmentsitemName,
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


  'accomplishmentsitemName.remove'(documentId) {
    check(documentId, String);

    const accomplishments = Agenda.findOne(documentId);
    if (accomplishments.private && accomplishments.owner !== Meteor.userId()) {
      // If the accomplishments item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, accomplishmentsItem){
    check(accomplishmentsItem, String); 

    // Make sure the user is logged in before inserting a accomplishments item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { accomplishmentsitemName : accomplishmentsItem, title : accomplishmentsItem, description : accomplishmentsItem }});
  },

// - End of accomplishments Methods Block - //

// Start of successes Methods Block //

  'successesitemName.insert'(successesitemName) {
   check(successesitemName, String);
 
    // Make sure the user is logged in before inserting a successes item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: successesitemName,
      description: successesitemName,
      successesitemName: successesitemName,
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


  'successesitemName.remove'(documentId) {
    check(documentId, String);

    const successes = Agenda.findOne(documentId);
    if (successes.private && successes.owner !== Meteor.userId()) {
      // If the successes item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, successesItem){
    check(successesItem, String); 

    // Make sure the user is logged in before inserting a successes item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { successesitemName : successesItem, title : successesItem, description : successesItem }});
  },

// - End of successes Methods Block - //

// Start of failure Methods Block //

  'failureitemName.insert'(failureitemName) {
   check(failureitemName, String);
 
    // Make sure the user is logged in before inserting a failure item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: failureitemName,
      description: failureitemName,
      failureitemName: failureitemName,
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


  'failureitemName.remove'(documentId) {
    check(documentId, String);

    const failure = Agenda.findOne(documentId);
    if (failure.private && failure.owner !== Meteor.userId()) {
      // If the failure item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, failureItem){
    check(failureItem, String); 

    // Make sure the user is logged in before inserting a failure item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { failureitemName : failureItem, title : failureItem, description : failureItem }});
  },

// - End of failure Methods Block - //

// Start of goodhabits Methods Block //

  'goodhabitsitemName.insert'(goodhabitsitemName) {
   check(goodhabitsitemName, String);
 
    // Make sure the user is logged in before inserting a goodhabits item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: goodhabitsitemName,
      description: goodhabitsitemName,
      goodhabitsitemName: goodhabitsitemName,
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


  'goodhabitsitemName.remove'(documentId) {
    check(documentId, String);

    const goodhabits = Agenda.findOne(documentId);
    if (goodhabits.private && goodhabits.owner !== Meteor.userId()) {
      // If the goodhabits item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, goodhabitsItem){
    check(goodhabitsItem, String); 

    // Make sure the user is logged in before inserting a goodhabits item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { goodhabitsitemName : goodhabitsItem, title : goodhabitsItem, description : goodhabitsItem }});
  },

// - End of goodhabits Methods Block - //

// Start of badhabits Methods Block //

  'badhabitsitemName.insert'(badhabitsitemName) {
   check(badhabitsitemName, String);
 
    // Make sure the user is logged in before inserting a badhabits item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: badhabitsitemName,
      description: badhabitsitemName,
      badhabitsitemName: badhabitsitemName,
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


  'badhabitsitemName.remove'(documentId) {
    check(documentId, String);

    const badhabits = Agenda.findOne(documentId);
    if (badhabits.private && badhabits.owner !== Meteor.userId()) {
      // If the badhabits item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, badhabitsItem){
    check(badhabitsItem, String); 

    // Make sure the user is logged in before inserting a badhabits item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { badhabitsitemName : badhabitsItem, title : badhabitsItem, description : badhabitsItem }});
  },

// - End of badhabits Methods Block - //

// Start of strengths Methods Block //

  'strengthsitemName.insert'(strengthsitemName) {
   check(strengthsitemName, String);
 
    // Make sure the user is logged in before inserting a strengths item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: strengthsitemName,
      description: strengthsitemName,
      strengthsitemName: strengthsitemName,
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


  'strengthsitemName.remove'(documentId) {
    check(documentId, String);

    const strengths = Agenda.findOne(documentId);
    if (strengths.private && strengths.owner !== Meteor.userId()) {
      // If the strengths item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, strengthsItem){
    check(strengthsItem, String); 

    // Make sure the user is logged in before inserting a strengths item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { strengthsitemName : strengthsItem, title : strengthsItem, description : strengthsItem }});
  },

// - End of strengths Methods Block - //

// Start of weaknesses Methods Block //

  'weaknessesitemName.insert'(weaknessesitemName) {
   check(weaknessesitemName, String);
 
    // Make sure the user is logged in before inserting a weaknesses item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: weaknessesitemName,
      description: weaknessesitemName,
      weaknessesitemName: weaknessesitemName,
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


  'weaknessesitemName.remove'(documentId) {
    check(documentId, String);

    const weaknesses = Agenda.findOne(documentId);
    if (weaknesses.private && weaknesses.owner !== Meteor.userId()) {
      // If the weaknesses item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, weaknessesItem){
    check(weaknessesItem, String); 

    // Make sure the user is logged in before inserting a weaknesses item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { weaknessesitemName : weaknessesItem, title : weaknessesItem, description : weaknessesItem }});
  },

// - End of weaknesses Methods Block - //

// Start of career Methods Block //

  'careeritemName.insert'(careeritemName) {
   check(careeritemName, String);
 
    // Make sure the user is logged in before inserting a career item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: careeritemName,
      description: careeritemName,
      careeritemName: careeritemName,
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


  'careeritemName.remove'(documentId) {
    check(documentId, String);

    const career = Agenda.findOne(documentId);
    if (career.private && career.owner !== Meteor.userId()) {
      // If the career item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, careerItem){
    check(careerItem, String); 

    // Make sure the user is logged in before inserting a career item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { careeritemName : careerItem, title : careerItem, description : careerItem }});
  },

// - End of career Methods Block - //

// Start of projects Methods Block //

  'projectsitemName.insert'(projectsitemName) {
   check(projectsitemName, String);
 
    // Make sure the user is logged in before inserting a projects item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: projectsitemName,
      description: projectsitemName,
      projectsitemName: projectsitemName,
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


  'projectsitemName.remove'(documentId) {
    check(documentId, String);

    const projects = Agenda.findOne(documentId);
    if (projects.private && projects.owner !== Meteor.userId()) {
      // If the projects item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, projectsItem){
    check(projectsItem, String); 

    // Make sure the user is logged in before inserting a projects item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { projectsitemName : projectsItem, title : projectsItem, description : projectsItem }});
  },

// - End of projects Methods Block - //

// Start of todos Methods Block //

  'todositemName.insert'(todositemName) {
   check(todositemName, String);
 
    // Make sure the user is logged in before inserting a todos item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: todositemName,
      description: todositemName,
      todositemName: todositemName,
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


  'todositemName.remove'(documentId) {
    check(documentId, String);

    const todos = Agenda.findOne(documentId);
    if (todos.private && todos.owner !== Meteor.userId()) {
      // If the todos item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, todosItem){
    check(todosItem, String); 

    // Make sure the user is logged in before inserting a todos item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { todositemName : todosItem, title : todosItem, description : todosItem }});
  },

// - End of todos Methods Block - //





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
