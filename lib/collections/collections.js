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



Meteor.methods({
//************************************************//
//************************************************//
//************************************************//
//************************************************//
//************************************************//
//***********   AGENDA PAGE         **************//
//************************************************//
//************************************************//
//************************************************//
//************************************************//
//************************************************//

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

// Start of opportunity Methods Block //

  'opportunityitemName.insert'(opportunityitemName) {
   check(opportunityitemName, String);
 
    // Make sure the user is logged in before inserting a opportunity item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: opportunityitemName,
      description: opportunityitemName,
      opportunityitemName: opportunityitemName,
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


  'opportunityitemName.remove'(documentId) {
    check(documentId, String);

    const opportunity = Agenda.findOne(documentId);
    if (opportunity.private && opportunity.owner !== Meteor.userId()) {
      // If the opportunity item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, opportunityItem){
    check(opportunityItem, String); 

    // Make sure the user is logged in before inserting a opportunity item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { opportunityitemName : opportunityItem, title : opportunityItem, description : opportunityItem }});
  },

// - End of opportunity Methods Block - //

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

// Start of goal Methods Block //

  'goalitemName.insert'(goalitemName) {
   check(goalitemName, String);
 
    // Make sure the user is logged in before inserting a goal item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: goalitemName,
      description: goalitemName,
      goalitemName: goalitemName,
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


  'goalitemName.remove'(documentId) {
    check(documentId, String);

    const goal = Agenda.findOne(documentId);
    if (goal.private && goal.owner !== Meteor.userId()) {
      // If the goal item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, goalItem){
    check(goalItem, String); 

    // Make sure the user is logged in before inserting a goal item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { goalitemName : goalItem, title : goalItem, description : goalItem }});
  },

// - End of goal Methods Block - //

// Start of strategy Methods Block //

  'strategyitemName.insert'(strategyitemName) {
   check(strategyitemName, String);
 
    // Make sure the user is logged in before inserting a strategy item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: strategyitemName,
      description: strategyitemName,
      strategyitemName: strategyitemName,
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


  'strategyitemName.remove'(documentId) {
    check(documentId, String);

    const strategy = Agenda.findOne(documentId);
    if (strategy.private && strategy.owner !== Meteor.userId()) {
      // If the strategy item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, strategyItem){
    check(strategyItem, String); 

    // Make sure the user is logged in before inserting a strategy item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { strategyitemName : strategyItem, title : strategyItem, description : strategyItem }});
  },

// - End of strategy Methods Block - //

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

// Start of wants Methods Block //

  'wantsitemName.insert'(wantsitemName) {
   check(wantsitemName, String);
 
    // Make sure the user is logged in before inserting a wants item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: wantsitemName,
      description: wantsitemName,
      wantsitemName: wantsitemName,
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


  'wantsitemName.remove'(documentId) {
    check(documentId, String);

    const wants = Agenda.findOne(documentId);
    if (wants.private && wants.owner !== Meteor.userId()) {
      // If the wants item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, wantsItem){
    check(wantsItem, String); 

    // Make sure the user is logged in before inserting a wants item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { wantsitemName : wantsItem, title : wantsItem, description : wantsItem }});
  },

// - End of wants Methods Block - //

// Start of problems Methods Block //

  'problemsitemName.insert'(problemsitemName) {
   check(problemsitemName, String);
 
    // Make sure the user is logged in before inserting a problems item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: problemsitemName,
      description: problemsitemName,
      problemsitemName: problemsitemName,
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


  'problemsitemName.remove'(documentId) {
    check(documentId, String);

    const problems = Agenda.findOne(documentId);
    if (problems.private && problems.owner !== Meteor.userId()) {
      // If the problems item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, problemsItem){
    check(problemsItem, String); 

    // Make sure the user is logged in before inserting a problems item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { problemsitemName : problemsItem, title : problemsItem, description : problemsItem }});
  },

// - End of problems Methods Block - //

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

// Start of improveAgendapage Methods Block //

  'improveAgendapageitemName.insert'(improveAgendapageitemName) {
   check(improveAgendapageitemName, String);
 
    // Make sure the user is logged in before inserting a improveAgendapage item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: improveAgendapageitemName,
      description: improveAgendapageitemName,
      improveAgendapageitemName: improveAgendapageitemName,
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


  'improveAgendapageitemName.remove'(documentId) {
    check(documentId, String);

    const improveAgendapage = Agenda.findOne(documentId);
    if (improveAgendapage.private && improveAgendapage.owner !== Meteor.userId()) {
      // If the improveAgendapage item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, improveAgendapageItem){
    check(improveAgendapageItem, String); 

    // Make sure the user is logged in before inserting a improveAgendapage item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { improveAgendapageitemName : improveAgendapageItem, title : improveAgendapageItem, description : improveAgendapageItem }});
  },

// - End of improveAgendapage Methods Block - //



//************************************************//
//************************************************//
//************************************************//
//************************************************//
//************************************************//
//***********   MIND PAGE               **********//
//************************************************//
//************************************************//
//************************************************//
//************************************************//
//************************************************//

// Start of mood Methods Block //

  'mooditemName.insert'(mooditemName) {
   check(mooditemName, String);
 
    // Make sure the user is logged in before inserting a mood item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: mooditemName,
      description: mooditemName,
      mooditemName: mooditemName,
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


  'mooditemName.remove'(documentId) {
    check(documentId, String);

    const mood = Agenda.findOne(documentId);
    if (mood.private && mood.owner !== Meteor.userId()) {
      // If the mood item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, moodItem){
    check(moodItem, String); 

    // Make sure the user is logged in before inserting a mood item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { mooditemName : moodItem, title : moodItem, description : moodItem }});
  },

// - End of mood Methods Block - //

// Start of creativeartideas Methods Block //

  'creativeartideasitemName.insert'(creativeartideasitemName) {
   check(creativeartideasitemName, String);
 
    // Make sure the user is logged in before inserting a creativeartideas item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: creativeartideasitemName,
      description: creativeartideasitemName,
      creativeartideasitemName: creativeartideasitemName,
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


  'creativeartideasitemName.remove'(documentId) {
    check(documentId, String);

    const creativeartideas = Agenda.findOne(documentId);
    if (creativeartideas.private && creativeartideas.owner !== Meteor.userId()) {
      // If the creativeartideas item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, creativeartideasItem){
    check(creativeartideasItem, String); 

    // Make sure the user is logged in before inserting a creativeartideas item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { creativeartideasitemName : creativeartideasItem, title : creativeartideasItem, description : creativeartideasItem }});
  },

// - End of creativeartideas Methods Block - //

// Start of jokes Methods Block //

  'jokesitemName.insert'(jokesitemName) {
   check(jokesitemName, String);
 
    // Make sure the user is logged in before inserting a jokes item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: jokesitemName,
      description: jokesitemName,
      jokesitemName: jokesitemName,
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


  'jokesitemName.remove'(documentId) {
    check(documentId, String);

    const jokes = Agenda.findOne(documentId);
    if (jokes.private && jokes.owner !== Meteor.userId()) {
      // If the jokes item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, jokesItem){
    check(jokesItem, String); 

    // Make sure the user is logged in before inserting a jokes item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { jokesitemName : jokesItem, title : jokesItem, description : jokesItem }});
  },

// - End of jokes Methods Block - //

// Start of invention Methods Block //

  'inventionitemName.insert'(inventionitemName) {
   check(inventionitemName, String);
 
    // Make sure the user is logged in before inserting a invention item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: inventionitemName,
      description: inventionitemName,
      inventionitemName: inventionitemName,
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


  'inventionitemName.remove'(documentId) {
    check(documentId, String);

    const invention = Agenda.findOne(documentId);
    if (invention.private && invention.owner !== Meteor.userId()) {
      // If the invention item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, inventionItem){
    check(inventionItem, String); 

    // Make sure the user is logged in before inserting a invention item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { inventionitemName : inventionItem, title : inventionItem, description : inventionItem }});
  },

// - End of invention Methods Block - //

// Start of entreprenuerialidea Methods Block //

  'entreprenuerialideaitemName.insert'(entreprenuerialideaitemName) {
   check(entreprenuerialideaitemName, String);
 
    // Make sure the user is logged in before inserting a entreprenuerialidea item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: entreprenuerialideaitemName,
      description: entreprenuerialideaitemName,
      entreprenuerialideaitemName: entreprenuerialideaitemName,
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


  'entreprenuerialideaitemName.remove'(documentId) {
    check(documentId, String);

    const entreprenuerialidea = Agenda.findOne(documentId);
    if (entreprenuerialidea.private && entreprenuerialidea.owner !== Meteor.userId()) {
      // If the entreprenuerialidea item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, entreprenuerialideaItem){
    check(entreprenuerialideaItem, String); 

    // Make sure the user is logged in before inserting a entreprenuerialidea item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { entreprenuerialideaitemName : entreprenuerialideaItem, title : entreprenuerialideaItem, description : entreprenuerialideaItem }});
  },

// - End of entreprenuerialidea Methods Block - //

// Start of opinion Methods Block //

  'opinionitemName.insert'(opinionitemName) {
   check(opinionitemName, String);
 
    // Make sure the user is logged in before inserting a opinion item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: opinionitemName,
      description: opinionitemName,
      opinionitemName: opinionitemName,
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


  'opinionitemName.remove'(documentId) {
    check(documentId, String);

    const opinion = Agenda.findOne(documentId);
    if (opinion.private && opinion.owner !== Meteor.userId()) {
      // If the opinion item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, opinionItem){
    check(opinionItem, String); 

    // Make sure the user is logged in before inserting a opinion item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { opinionitemName : opinionItem, title : opinionItem, description : opinionItem }});
  },

// - End of opinion Methods Block - //

// Start of improveMindpage Methods Block //

  'improveMindpageitemName.insert'(improveMindpageitemName) {
   check(improveMindpageitemName, String);
 
    // Make sure the user is logged in before inserting a improveMindpage item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: improveMindpageitemName,
      description: improveMindpageitemName,
      improveMindpageitemName: improveMindpageitemName,
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


  'improveMindpageitemName.remove'(documentId) {
    check(documentId, String);

    const improveMindpage = Agenda.findOne(documentId);
    if (improveMindpage.private && improveMindpage.owner !== Meteor.userId()) {
      // If the improveMindpage item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, improveMindpageItem){
    check(improveMindpageItem, String); 

    // Make sure the user is logged in before inserting a improveMindpage item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { improveMindpageitemName : improveMindpageItem, title : improveMindpageItem, description : improveMindpageItem }});
  },

// - End of improveMindpage Methods Block - //



//************************************************//
//************************************************//
//************************************************//
//************************************************//
//************************************************//
//***********   HEALTH PAGE               ********//
//************************************************//
//************************************************//
//************************************************//
//************************************************//
//************************************************//

// Start of biostats Methods Block //

  'biostatsitemName.insert'(biostatsitemName) {
   check(biostatsitemName, String);
 
    // Make sure the user is logged in before inserting a biostats item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: biostatsitemName,
      description: biostatsitemName,
      biostatsitemName: biostatsitemName,
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


  'biostatsitemName.remove'(documentId) {
    check(documentId, String);

    const biostats = Agenda.findOne(documentId);
    if (biostats.private && biostats.owner !== Meteor.userId()) {
      // If the biostats item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, biostatsItem){
    check(biostatsItem, String); 

    // Make sure the user is logged in before inserting a biostats item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { biostatsitemName : biostatsItem, title : biostatsItem, description : biostatsItem }});
  },

// - End of biostats Methods Block - //

// Start of familyMedhist Methods Block //

  'familyMedhistitemName.insert'(familyMedhistitemName) {
   check(familyMedhistitemName, String);
 
    // Make sure the user is logged in before inserting a familyMedhist item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: familyMedhistitemName,
      description: familyMedhistitemName,
      familyMedhistitemName: familyMedhistitemName,
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


  'familyMedhistitemName.remove'(documentId) {
    check(documentId, String);

    const familyMedhist = Agenda.findOne(documentId);
    if (familyMedhist.private && familyMedhist.owner !== Meteor.userId()) {
      // If the familyMedhist item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, familyMedhistItem){
    check(familyMedhistItem, String); 

    // Make sure the user is logged in before inserting a familyMedhist item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { familyMedhistitemName : familyMedhistItem, title : familyMedhistItem, description : familyMedhistItem }});
  },

// - End of familyMedhist Methods Block - //

// Start of allergies Methods Block //

  'allergiesitemName.insert'(allergiesitemName) {
   check(allergiesitemName, String);
 
    // Make sure the user is logged in before inserting a allergies item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: allergiesitemName,
      description: allergiesitemName,
      allergiesitemName: allergiesitemName,
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


  'allergiesitemName.remove'(documentId) {
    check(documentId, String);

    const allergies = Agenda.findOne(documentId);
    if (allergies.private && allergies.owner !== Meteor.userId()) {
      // If the allergies item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, allergiesItem){
    check(allergiesItem, String); 

    // Make sure the user is logged in before inserting a allergies item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { allergiesitemName : allergiesItem, title : allergiesItem, description : allergiesItem }});
  },

// - End of allergies Methods Block - //

// Start of symptoms Methods Block //

  'symptomsitemName.insert'(symptomsitemName) {
   check(symptomsitemName, String);
 
    // Make sure the user is logged in before inserting a symptoms item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: symptomsitemName,
      description: symptomsitemName,
      symptomsitemName: symptomsitemName,
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


  'symptomsitemName.remove'(documentId) {
    check(documentId, String);

    const symptoms = Agenda.findOne(documentId);
    if (symptoms.private && symptoms.owner !== Meteor.userId()) {
      // If the symptoms item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, symptomsItem){
    check(symptomsItem, String); 

    // Make sure the user is logged in before inserting a symptoms item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { symptomsitemName : symptomsItem, title : symptomsItem, description : symptomsItem }});
  },

// - End of symptoms Methods Block - //

// Start of bodyachelog Methods Block //

  'bodyachelogitemName.insert'(bodyachelogitemName) {
   check(bodyachelogitemName, String);
 
    // Make sure the user is logged in before inserting a bodyachelog item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: bodyachelogitemName,
      description: bodyachelogitemName,
      bodyachelogitemName: bodyachelogitemName,
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


  'bodyachelogitemName.remove'(documentId) {
    check(documentId, String);

    const bodyachelog = Agenda.findOne(documentId);
    if (bodyachelog.private && bodyachelog.owner !== Meteor.userId()) {
      // If the bodyachelog item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, bodyachelogItem){
    check(bodyachelogItem, String); 

    // Make sure the user is logged in before inserting a bodyachelog item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { bodyachelogitemName : bodyachelogItem, title : bodyachelogItem, description : bodyachelogItem }});
  },

// - End of bodyachelog Methods Block - //

// Start of sicklog Methods Block //

  'sicklogitemName.insert'(sicklogitemName) {
   check(sicklogitemName, String);
 
    // Make sure the user is logged in before inserting a sicklog item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: sicklogitemName,
      description: sicklogitemName,
      sicklogitemName: sicklogitemName,
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


  'sicklogitemName.remove'(documentId) {
    check(documentId, String);

    const sicklog = Agenda.findOne(documentId);
    if (sicklog.private && sicklog.owner !== Meteor.userId()) {
      // If the sicklog item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, sicklogItem){
    check(sicklogItem, String); 

    // Make sure the user is logged in before inserting a sicklog item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { sicklogitemName : sicklogItem, title : sicklogItem, description : sicklogItem }});
  },

// - End of sicklog Methods Block - //

// Start of medhistory Methods Block //

  'medhistoryitemName.insert'(medhistoryitemName) {
   check(medhistoryitemName, String);
 
    // Make sure the user is logged in before inserting a medhistory item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: medhistoryitemName,
      description: medhistoryitemName,
      medhistoryitemName: medhistoryitemName,
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


  'medhistoryitemName.remove'(documentId) {
    check(documentId, String);

    const medhistory = Agenda.findOne(documentId);
    if (medhistory.private && medhistory.owner !== Meteor.userId()) {
      // If the medhistory item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, medhistoryItem){
    check(medhistoryItem, String); 

    // Make sure the user is logged in before inserting a medhistory item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { medhistoryitemName : medhistoryItem, title : medhistoryItem, description : medhistoryItem }});
  },

// - End of medhistory Methods Block - //

// Start of medicine Methods Block //

  'medicineitemName.insert'(medicineitemName) {
   check(medicineitemName, String);
 
    // Make sure the user is logged in before inserting a medicine item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: medicineitemName,
      description: medicineitemName,
      medicineitemName: medicineitemName,
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


  'medicineitemName.remove'(documentId) {
    check(documentId, String);

    const medicine = Agenda.findOne(documentId);
    if (medicine.private && medicine.owner !== Meteor.userId()) {
      // If the medicine item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, medicineItem){
    check(medicineItem, String); 

    // Make sure the user is logged in before inserting a medicine item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { medicineitemName : medicineItem, title : medicineItem, description : medicineItem }});
  },

// - End of medicine Methods Block - //

// Start of dentallog Methods Block //

  'dentallogitemName.insert'(dentallogitemName) {
   check(dentallogitemName, String);
 
    // Make sure the user is logged in before inserting a dentallog item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: dentallogitemName,
      description: dentallogitemName,
      dentallogitemName: dentallogitemName,
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


  'dentallogitemName.remove'(documentId) {
    check(documentId, String);

    const dentallog = Agenda.findOne(documentId);
    if (dentallog.private && dentallog.owner !== Meteor.userId()) {
      // If the dentallog item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, dentallogItem){
    check(dentallogItem, String); 

    // Make sure the user is logged in before inserting a dentallog item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { dentallogitemName : dentallogItem, title : dentallogItem, description : dentallogItem }});
  },

// - End of dentallog Methods Block - //

// Start of dentistryhist Methods Block //

  'dentistryhistitemName.insert'(dentistryhistitemName) {
   check(dentistryhistitemName, String);
 
    // Make sure the user is logged in before inserting a dentistryhist item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: dentistryhistitemName,
      description: dentistryhistitemName,
      dentistryhistitemName: dentistryhistitemName,
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


  'dentistryhistitemName.remove'(documentId) {
    check(documentId, String);

    const dentistryhist = Agenda.findOne(documentId);
    if (dentistryhist.private && dentistryhist.owner !== Meteor.userId()) {
      // If the dentistryhist item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, dentistryhistItem){
    check(dentistryhistItem, String); 

    // Make sure the user is logged in before inserting a dentistryhist item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { dentistryhistitemName : dentistryhistItem, title : dentistryhistItem, description : dentistryhistItem }});
  },

// - End of dentistryhist Methods Block - //

// Start of visionhist Methods Block //

  'visionhistitemName.insert'(visionhistitemName) {
   check(visionhistitemName, String);
 
    // Make sure the user is logged in before inserting a visionhist item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: visionhistitemName,
      description: visionhistitemName,
      visionhistitemName: visionhistitemName,
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


  'visionhistitemName.remove'(documentId) {
    check(documentId, String);

    const visionhist = Agenda.findOne(documentId);
    if (visionhist.private && visionhist.owner !== Meteor.userId()) {
      // If the visionhist item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, visionhistItem){
    check(visionhistItem, String); 

    // Make sure the user is logged in before inserting a visionhist item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { visionhistitemName : visionhistItem, title : visionhistItem, description : visionhistItem }});
  },

// - End of visionhist Methods Block - //

// Start of pooplog Methods Block //

  'pooplogitemName.insert'(pooplogitemName) {
   check(pooplogitemName, String);
 
    // Make sure the user is logged in before inserting a pooplog item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: pooplogitemName,
      description: pooplogitemName,
      pooplogitemName: pooplogitemName,
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


  'pooplogitemName.remove'(documentId) {
    check(documentId, String);

    const pooplog = Agenda.findOne(documentId);
    if (pooplog.private && pooplog.owner !== Meteor.userId()) {
      // If the pooplog item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, pooplogItem){
    check(pooplogItem, String); 

    // Make sure the user is logged in before inserting a pooplog item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { pooplogitemName : pooplogItem, title : pooplogItem, description : pooplogItem }});
  },

// - End of pooplog Methods Block - //

// Start of peelog Methods Block //

  'peelogitemName.insert'(peelogitemName) {
   check(peelogitemName, String);
 
    // Make sure the user is logged in before inserting a peelog item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: peelogitemName,
      description: peelogitemName,
      peelogitemName: peelogitemName,
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


  'peelogitemName.remove'(documentId) {
    check(documentId, String);

    const peelog = Agenda.findOne(documentId);
    if (peelog.private && peelog.owner !== Meteor.userId()) {
      // If the peelog item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, peelogItem){
    check(peelogItem, String); 

    // Make sure the user is logged in before inserting a peelog item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { peelogitemName : peelogItem, title : peelogItem, description : peelogItem }});
  },

// - End of peelog Methods Block - //

// Start of improveHealthpage Methods Block //

  'improveHealthpageitemName.insert'(improveHealthpageitemName) {
   check(improveHealthpageitemName, String);
 
    // Make sure the user is logged in before inserting a improveHealthpage item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: improveHealthpageitemName,
      description: improveHealthpageitemName,
      improveHealthpageitemName: improveHealthpageitemName,
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


  'improveHealthpageitemName.remove'(documentId) {
    check(documentId, String);

    const improveHealthpage = Agenda.findOne(documentId);
    if (improveHealthpage.private && improveHealthpage.owner !== Meteor.userId()) {
      // If the improveHealthpage item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, improveHealthpageItem){
    check(improveHealthpageItem, String); 

    // Make sure the user is logged in before inserting a improveHealthpage item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { improveHealthpageitemName : improveHealthpageItem, title : improveHealthpageItem, description : improveHealthpageItem }});
  },

// - End of improveHealthpage Methods Block - //



//************************************************//
//************************************************//
//************************************************//
//************************************************//
//************************************************//
//***********    Hygiene PAGE               ******//
//************************************************//
//************************************************//
//************************************************//
//************************************************//
//************************************************//

// Start of shower Methods Block //

  'showeritemName.insert'(showeritemName) {
   check(showeritemName, String);
 
    // Make sure the user is logged in before inserting a shower item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: showeritemName,
      description: showeritemName,
      showeritemName: showeritemName,
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


  'showeritemName.remove'(documentId) {
    check(documentId, String);

    const shower = Agenda.findOne(documentId);
    if (shower.private && shower.owner !== Meteor.userId()) {
      // If the shower item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, showerItem){
    check(showerItem, String); 

    // Make sure the user is logged in before inserting a shower item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { showeritemName : showerItem, title : showerItem, description : showerItem }});
  },

// - End of shower Methods Block - //

// Start of bath Methods Block //

  'bathitemName.insert'(bathitemName) {
   check(bathitemName, String);
 
    // Make sure the user is logged in before inserting a bath item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: bathitemName,
      description: bathitemName,
      bathitemName: bathitemName,
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


  'bathitemName.remove'(documentId) {
    check(documentId, String);

    const bath = Agenda.findOne(documentId);
    if (bath.private && bath.owner !== Meteor.userId()) {
      // If the bath item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, bathItem){
    check(bathItem, String); 

    // Make sure the user is logged in before inserting a bath item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { bathitemName : bathItem, title : bathItem, description : bathItem }});
  },

// - End of bath Methods Block - //

// Start of shave Methods Block //

  'shaveitemName.insert'(shaveitemName) {
   check(shaveitemName, String);
 
    // Make sure the user is logged in before inserting a shave item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: shaveitemName,
      description: shaveitemName,
      shaveitemName: shaveitemName,
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


  'shaveitemName.remove'(documentId) {
    check(documentId, String);

    const shave = Agenda.findOne(documentId);
    if (shave.private && shave.owner !== Meteor.userId()) {
      // If the shave item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, shaveItem){
    check(shaveItem, String); 

    // Make sure the user is logged in before inserting a shave item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { shaveitemName : shaveItem, title : shaveItem, description : shaveItem }});
  },

// - End of shave Methods Block - //

// Start of nails Methods Block //

  'nailsitemName.insert'(nailsitemName) {
   check(nailsitemName, String);
 
    // Make sure the user is logged in before inserting a nails item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: nailsitemName,
      description: nailsitemName,
      nailsitemName: nailsitemName,
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


  'nailsitemName.remove'(documentId) {
    check(documentId, String);

    const nails = Agenda.findOne(documentId);
    if (nails.private && nails.owner !== Meteor.userId()) {
      // If the nails item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, nailsItem){
    check(nailsItem, String); 

    // Make sure the user is logged in before inserting a nails item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { nailsitemName : nailsItem, title : nailsItem, description : nailsItem }});
  },

// - End of nails Methods Block - //

// Start of hair Methods Block //

  'hairitemName.insert'(hairitemName) {
   check(hairitemName, String);
 
    // Make sure the user is logged in before inserting a hair item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: hairitemName,
      description: hairitemName,
      hairitemName: hairitemName,
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


  'hairitemName.remove'(documentId) {
    check(documentId, String);

    const hair = Agenda.findOne(documentId);
    if (hair.private && hair.owner !== Meteor.userId()) {
      // If the hair item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, hairItem){
    check(hairItem, String); 

    // Make sure the user is logged in before inserting a hair item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { hairitemName : hairItem, title : hairItem, description : hairItem }});
  },

// - End of hair Methods Block - //

// Start of haircondition Methods Block //

  'hairconditionitemName.insert'(hairconditionitemName) {
   check(hairconditionitemName, String);
 
    // Make sure the user is logged in before inserting a haircondition item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: hairconditionitemName,
      description: hairconditionitemName,
      hairconditionitemName: hairconditionitemName,
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


  'hairconditionitemName.remove'(documentId) {
    check(documentId, String);

    const haircondition = Agenda.findOne(documentId);
    if (haircondition.private && haircondition.owner !== Meteor.userId()) {
      // If the haircondition item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, hairconditionItem){
    check(hairconditionItem, String); 

    // Make sure the user is logged in before inserting a haircondition item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { hairconditionitemName : hairconditionItem, title : hairconditionItem, description : hairconditionItem }});
  },

// - End of haircondition Methods Block - //

// Start of brushedteeth Methods Block //

  'brushedteethitemName.insert'(brushedteethitemName) {
   check(brushedteethitemName, String);
 
    // Make sure the user is logged in before inserting a brushedteeth item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: brushedteethitemName,
      description: brushedteethitemName,
      brushedteethitemName: brushedteethitemName,
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


  'brushedteethitemName.remove'(documentId) {
    check(documentId, String);

    const brushedteeth = Agenda.findOne(documentId);
    if (brushedteeth.private && brushedteeth.owner !== Meteor.userId()) {
      // If the brushedteeth item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, brushedteethItem){
    check(brushedteethItem, String); 

    // Make sure the user is logged in before inserting a brushedteeth item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { brushedteethitemName : brushedteethItem, title : brushedteethItem, description : brushedteethItem }});
  },

// - End of brushedteeth Methods Block - //

// Start of flossed Methods Block //

  'flosseditemName.insert'(flosseditemName) {
   check(flosseditemName, String);
 
    // Make sure the user is logged in before inserting a flossed item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: flosseditemName,
      description: flosseditemName,
      flosseditemName: flosseditemName,
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


  'flosseditemName.remove'(documentId) {
    check(documentId, String);

    const flossed = Agenda.findOne(documentId);
    if (flossed.private && flossed.owner !== Meteor.userId()) {
      // If the flossed item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, flossedItem){
    check(flossedItem, String); 

    // Make sure the user is logged in before inserting a flossed item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { flosseditemName : flossedItem, title : flossedItem, description : flossedItem }});
  },

// - End of flossed Methods Block - //

// Start of deoderant Methods Block //

  'deoderantitemName.insert'(deoderantitemName) {
   check(deoderantitemName, String);
 
    // Make sure the user is logged in before inserting a deoderant item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: deoderantitemName,
      description: deoderantitemName,
      deoderantitemName: deoderantitemName,
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


  'deoderantitemName.remove'(documentId) {
    check(documentId, String);

    const deoderant = Agenda.findOne(documentId);
    if (deoderant.private && deoderant.owner !== Meteor.userId()) {
      // If the deoderant item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, deoderantItem){
    check(deoderantItem, String); 

    // Make sure the user is logged in before inserting a deoderant item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { deoderantitemName : deoderantItem, title : deoderantItem, description : deoderantItem }});
  },

// - End of deoderant Methods Block - //

// Start of dressedlog Methods Block //

  'dressedlogitemName.insert'(dressedlogitemName) {
   check(dressedlogitemName, String);
 
    // Make sure the user is logged in before inserting a dressedlog item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: dressedlogitemName,
      description: dressedlogitemName,
      dressedlogitemName: dressedlogitemName,
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


  'dressedlogitemName.remove'(documentId) {
    check(documentId, String);

    const dressedlog = Agenda.findOne(documentId);
    if (dressedlog.private && dressedlog.owner !== Meteor.userId()) {
      // If the dressedlog item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, dressedlogItem){
    check(dressedlogItem, String); 

    // Make sure the user is logged in before inserting a dressedlog item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { dressedlogitemName : dressedlogItem, title : dressedlogItem, description : dressedlogItem }});
  },

// - End of dressedlog Methods Block - //

// Start of improveHygienepage Methods Block //

  'improveHygienepageitemName.insert'(improveHygienepageitemName) {
   check(improveHygienepageitemName, String);
 
    // Make sure the user is logged in before inserting a improveHygienepage item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: improveHygienepageitemName,
      description: improveHygienepageitemName,
      improveHygienepageitemName: improveHygienepageitemName,
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


  'improveHygienepageitemName.remove'(documentId) {
    check(documentId, String);

    const improveHygienepage = Agenda.findOne(documentId);
    if (improveHygienepage.private && improveHygienepage.owner !== Meteor.userId()) {
      // If the improveHygienepage item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, improveHygienepageItem){
    check(improveHygienepageItem, String); 

    // Make sure the user is logged in before inserting a improveHygienepage item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { improveHygienepageitemName : improveHygienepageItem, title : improveHygienepageItem, description : improveHygienepageItem }});
  },

// - End of improveHygienepage Methods Block - //



//************************************************//
//************************************************//
//************************************************//
//************************************************//
//************************************************//
//***********    Feng PAGE               *********//
//************************************************//
//************************************************//
//************************************************//
//************************************************//
//************************************************//

// Start of choreslog Methods Block //

  'choreslogitemName.insert'(choreslogitemName) {
   check(choreslogitemName, String);
 
    // Make sure the user is logged in before inserting a choreslog item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: choreslogitemName,
      description: choreslogitemName,
      choreslogitemName: choreslogitemName,
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


  'choreslogitemName.remove'(documentId) {
    check(documentId, String);

    const choreslog = Agenda.findOne(documentId);
    if (choreslog.private && choreslog.owner !== Meteor.userId()) {
      // If the choreslog item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, choreslogItem){
    check(choreslogItem, String); 

    // Make sure the user is logged in before inserting a choreslog item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { choreslogitemName : choreslogItem, title : choreslogItem, description : choreslogItem }});
  },

// - End of choreslog Methods Block - //

// Start of chorestodo Methods Block //

  'chorestodoitemName.insert'(chorestodoitemName) {
   check(chorestodoitemName, String);
 
    // Make sure the user is logged in before inserting a chorestodo item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: chorestodoitemName,
      description: chorestodoitemName,
      chorestodoitemName: chorestodoitemName,
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


  'chorestodoitemName.remove'(documentId) {
    check(documentId, String);

    const chorestodo = Agenda.findOne(documentId);
    if (chorestodo.private && chorestodo.owner !== Meteor.userId()) {
      // If the chorestodo item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, chorestodoItem){
    check(chorestodoItem, String); 

    // Make sure the user is logged in before inserting a chorestodo item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { chorestodoitemName : chorestodoItem, title : chorestodoItem, description : chorestodoItem }});
  },

// - End of chorestodo Methods Block - //

// Start of homemess Methods Block //

  'homemessitemName.insert'(homemessitemName) {
   check(homemessitemName, String);
 
    // Make sure the user is logged in before inserting a homemess item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: homemessitemName,
      description: homemessitemName,
      homemessitemName: homemessitemName,
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


  'homemessitemName.remove'(documentId) {
    check(documentId, String);

    const homemess = Agenda.findOne(documentId);
    if (homemess.private && homemess.owner !== Meteor.userId()) {
      // If the homemess item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, homemessItem){
    check(homemessItem, String); 

    // Make sure the user is logged in before inserting a homemess item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { homemessitemName : homemessItem, title : homemessItem, description : homemessItem }});
  },

// - End of homemess Methods Block - //

// Start of hometightiness Methods Block //

  'hometightinessitemName.insert'(hometightinessitemName) {
   check(hometightinessitemName, String);
 
    // Make sure the user is logged in before inserting a hometightiness item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: hometightinessitemName,
      description: hometightinessitemName,
      hometightinessitemName: hometightinessitemName,
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


  'hometightinessitemName.remove'(documentId) {
    check(documentId, String);

    const hometightiness = Agenda.findOne(documentId);
    if (hometightiness.private && hometightiness.owner !== Meteor.userId()) {
      // If the hometightiness item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, hometightinessItem){
    check(hometightinessItem, String); 

    // Make sure the user is logged in before inserting a hometightiness item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { hometightinessitemName : hometightinessItem, title : hometightinessItem, description : hometightinessItem }});
  },

// - End of hometightiness Methods Block - //

// Start of carmess Methods Block //

  'carmessitemName.insert'(carmessitemName) {
   check(carmessitemName, String);
 
    // Make sure the user is logged in before inserting a carmess item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: carmessitemName,
      description: carmessitemName,
      carmessitemName: carmessitemName,
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


  'carmessitemName.remove'(documentId) {
    check(documentId, String);

    const carmess = Agenda.findOne(documentId);
    if (carmess.private && carmess.owner !== Meteor.userId()) {
      // If the carmess item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, carmessItem){
    check(carmessItem, String); 

    // Make sure the user is logged in before inserting a carmess item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { carmessitemName : carmessItem, title : carmessItem, description : carmessItem }});
  },

// - End of carmess Methods Block - //

// Start of cartightiness Methods Block //

  'cartightinessitemName.insert'(cartightinessitemName) {
   check(cartightinessitemName, String);
 
    // Make sure the user is logged in before inserting a cartightiness item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: cartightinessitemName,
      description: cartightinessitemName,
      cartightinessitemName: cartightinessitemName,
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


  'cartightinessitemName.remove'(documentId) {
    check(documentId, String);

    const cartightiness = Agenda.findOne(documentId);
    if (cartightiness.private && cartightiness.owner !== Meteor.userId()) {
      // If the cartightiness item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, cartightinessItem){
    check(cartightinessItem, String); 

    // Make sure the user is logged in before inserting a cartightiness item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { cartightinessitemName : cartightinessItem, title : cartightinessItem, description : cartightinessItem }});
  },

// - End of cartightiness Methods Block - //

// Start of workmess Methods Block //

  'workmessitemName.insert'(workmessitemName) {
   check(workmessitemName, String);
 
    // Make sure the user is logged in before inserting a workmess item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: workmessitemName,
      description: workmessitemName,
      workmessitemName: workmessitemName,
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


  'workmessitemName.remove'(documentId) {
    check(documentId, String);

    const workmess = Agenda.findOne(documentId);
    if (workmess.private && workmess.owner !== Meteor.userId()) {
      // If the workmess item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, workmessItem){
    check(workmessItem, String); 

    // Make sure the user is logged in before inserting a workmess item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { workmessitemName : workmessItem, title : workmessItem, description : workmessItem }});
  },

// - End of workmess Methods Block - //

// Start of workspacetightines Methods Block //

  'workspacetightinesitemName.insert'(workspacetightinesitemName) {
   check(workspacetightinesitemName, String);
 
    // Make sure the user is logged in before inserting a workspacetightines item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: workspacetightinesitemName,
      description: workspacetightinesitemName,
      workspacetightinesitemName: workspacetightinesitemName,
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


  'workspacetightinesitemName.remove'(documentId) {
    check(documentId, String);

    const workspacetightines = Agenda.findOne(documentId);
    if (workspacetightines.private && workspacetightines.owner !== Meteor.userId()) {
      // If the workspacetightines item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, workspacetightinesItem){
    check(workspacetightinesItem, String); 

    // Make sure the user is logged in before inserting a workspacetightines item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { workspacetightinesitemName : workspacetightinesItem, title : workspacetightinesItem, description : workspacetightinesItem }});
  },

// - End of workspacetightines Methods Block - //

// Start of improveFengpage Methods Block //

  'improveFengpageitemName.insert'(improveFengpageitemName) {
   check(improveFengpageitemName, String);
 
    // Make sure the user is logged in before inserting a improveFengpage item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: improveFengpageitemName,
      description: improveFengpageitemName,
      improveFengpageitemName: improveFengpageitemName,
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


  'improveFengpageitemName.remove'(documentId) {
    check(documentId, String);

    const improveFengpage = Agenda.findOne(documentId);
    if (improveFengpage.private && improveFengpage.owner !== Meteor.userId()) {
      // If the improveFengpage item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, improveFengpageItem){
    check(improveFengpageItem, String); 

    // Make sure the user is logged in before inserting a improveFengpage item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { improveFengpageitemName : improveFengpageItem, title : improveFengpageItem, description : improveFengpageItem }});
  },

// - End of improveFengpage Methods Block - //



//************************************************//
//************************************************//
//************************************************//
//************************************************//
//************************************************//
//***********    FIT PAGE               **********//
//************************************************//
//************************************************//
//************************************************//
//************************************************//
//************************************************//

// Start of fitnesslog Methods Block //

  'fitnesslogitemName.insert'(fitnesslogitemName) {
   check(fitnesslogitemName, String);
 
    // Make sure the user is logged in before inserting a fitnesslog item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: fitnesslogitemName,
      description: fitnesslogitemName,
      fitnesslogitemName: fitnesslogitemName,
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


  'fitnesslogitemName.remove'(documentId) {
    check(documentId, String);

    const fitnesslog = Agenda.findOne(documentId);
    if (fitnesslog.private && fitnesslog.owner !== Meteor.userId()) {
      // If the fitnesslog item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, fitnesslogItem){
    check(fitnesslogItem, String); 

    // Make sure the user is logged in before inserting a fitnesslog item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { fitnesslogitemName : fitnesslogItem, title : fitnesslogItem, description : fitnesslogItem }});
  },

// - End of fitnesslog Methods Block - //

// Start of fitnessprogram Methods Block //

  'fitnessprogramitemName.insert'(fitnessprogramitemName) {
   check(fitnessprogramitemName, String);
 
    // Make sure the user is logged in before inserting a fitnessprogram item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: fitnessprogramitemName,
      description: fitnessprogramitemName,
      fitnessprogramitemName: fitnessprogramitemName,
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


  'fitnessprogramitemName.remove'(documentId) {
    check(documentId, String);

    const fitnessprogram = Agenda.findOne(documentId);
    if (fitnessprogram.private && fitnessprogram.owner !== Meteor.userId()) {
      // If the fitnessprogram item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, fitnessprogramItem){
    check(fitnessprogramItem, String); 

    // Make sure the user is logged in before inserting a fitnessprogram item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { fitnessprogramitemName : fitnessprogramItem, title : fitnessprogramItem, description : fitnessprogramItem }});
  },

// - End of fitnessprogram Methods Block - //

// Start of improveFitpage Methods Block //

  'improveFitpageitemName.insert'(improveFitpageitemName) {
   check(improveFitpageitemName, String);
 
    // Make sure the user is logged in before inserting a improveFitpage item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: improveFitpageitemName,
      description: improveFitpageitemName,
      improveFitpageitemName: improveFitpageitemName,
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


  'improveFitpageitemName.remove'(documentId) {
    check(documentId, String);

    const improveFitpage = Agenda.findOne(documentId);
    if (improveFitpage.private && improveFitpage.owner !== Meteor.userId()) {
      // If the improveFitpage item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, improveFitpageItem){
    check(improveFitpageItem, String); 

    // Make sure the user is logged in before inserting a improveFitpage item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { improveFitpageitemName : improveFitpageItem, title : improveFitpageItem, description : improveFitpageItem }});
  },

// - End of improveFitpage Methods Block - //



//************************************************//
//************************************************//
//************************************************//
//************************************************//
//************************************************//
//***********    FOOD PAGE               *********//
//************************************************//
//************************************************//
//************************************************//
//************************************************//
//************************************************//

// Start of eathistory Methods Block //

  'eathistoryitemName.insert'(eathistoryitemName) {
   check(eathistoryitemName, String);
 
    // Make sure the user is logged in before inserting a eathistory item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: eathistoryitemName,
      description: eathistoryitemName,
      eathistoryitemName: eathistoryitemName,
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


  'eathistoryitemName.remove'(documentId) {
    check(documentId, String);

    const eathistory = Agenda.findOne(documentId);
    if (eathistory.private && eathistory.owner !== Meteor.userId()) {
      // If the eathistory item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, eathistoryItem){
    check(eathistoryItem, String); 

    // Make sure the user is logged in before inserting a eathistory item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { eathistoryitemName : eathistoryItem, title : eathistoryItem, description : eathistoryItem }});
  },

// - End of eathistory Methods Block - //

// Start of drinkhistory Methods Block //

  'drinkhistoryitemName.insert'(drinkhistoryitemName) {
   check(drinkhistoryitemName, String);
 
    // Make sure the user is logged in before inserting a drinkhistory item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: drinkhistoryitemName,
      description: drinkhistoryitemName,
      drinkhistoryitemName: drinkhistoryitemName,
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


  'drinkhistoryitemName.remove'(documentId) {
    check(documentId, String);

    const drinkhistory = Agenda.findOne(documentId);
    if (drinkhistory.private && drinkhistory.owner !== Meteor.userId()) {
      // If the drinkhistory item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, drinkhistoryItem){
    check(drinkhistoryItem, String); 

    // Make sure the user is logged in before inserting a drinkhistory item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { drinkhistoryitemName : drinkhistoryItem, title : drinkhistoryItem, description : drinkhistoryItem }});
  },

// - End of drinkhistory Methods Block - //

// Start of alcohollog Methods Block //

  'alcohollogitemName.insert'(alcohollogitemName) {
   check(alcohollogitemName, String);
 
    // Make sure the user is logged in before inserting a alcohollog item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: alcohollogitemName,
      description: alcohollogitemName,
      alcohollogitemName: alcohollogitemName,
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


  'alcohollogitemName.remove'(documentId) {
    check(documentId, String);

    const alcohollog = Agenda.findOne(documentId);
    if (alcohollog.private && alcohollog.owner !== Meteor.userId()) {
      // If the alcohollog item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, alcohollogItem){
    check(alcohollogItem, String); 

    // Make sure the user is logged in before inserting a alcohollog item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { alcohollogitemName : alcohollogItem, title : alcohollogItem, description : alcohollogItem }});
  },

// - End of alcohollog Methods Block - //

// Start of druglog Methods Block //

  'druglogitemName.insert'(druglogitemName) {
   check(druglogitemName, String);
 
    // Make sure the user is logged in before inserting a druglog item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: druglogitemName,
      description: druglogitemName,
      druglogitemName: druglogitemName,
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


  'druglogitemName.remove'(documentId) {
    check(documentId, String);

    const druglog = Agenda.findOne(documentId);
    if (druglog.private && druglog.owner !== Meteor.userId()) {
      // If the druglog item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, druglogItem){
    check(druglogItem, String); 

    // Make sure the user is logged in before inserting a druglog item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { druglogitemName : druglogItem, title : druglogItem, description : druglogItem }});
  },

// - End of druglog Methods Block - //

// Start of ingredientinventory Methods Block //

  'ingredientinventoryitemName.insert'(ingredientinventoryitemName) {
   check(ingredientinventoryitemName, String);
 
    // Make sure the user is logged in before inserting a ingredientinventory item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: ingredientinventoryitemName,
      description: ingredientinventoryitemName,
      ingredientinventoryitemName: ingredientinventoryitemName,
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


  'ingredientinventoryitemName.remove'(documentId) {
    check(documentId, String);

    const ingredientinventory = Agenda.findOne(documentId);
    if (ingredientinventory.private && ingredientinventory.owner !== Meteor.userId()) {
      // If the ingredientinventory item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, ingredientinventoryItem){
    check(ingredientinventoryItem, String); 

    // Make sure the user is logged in before inserting a ingredientinventory item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { ingredientinventoryitemName : ingredientinventoryItem, title : ingredientinventoryItem, description : ingredientinventoryItem }});
  },

// - End of ingredientinventory Methods Block - //

// Start of shoppinglist Methods Block //

  'shoppinglistitemName.insert'(shoppinglistitemName) {
   check(shoppinglistitemName, String);
 
    // Make sure the user is logged in before inserting a shoppinglist item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: shoppinglistitemName,
      description: shoppinglistitemName,
      shoppinglistitemName: shoppinglistitemName,
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


  'shoppinglistitemName.remove'(documentId) {
    check(documentId, String);

    const shoppinglist = Agenda.findOne(documentId);
    if (shoppinglist.private && shoppinglist.owner !== Meteor.userId()) {
      // If the shoppinglist item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, shoppinglistItem){
    check(shoppinglistItem, String); 

    // Make sure the user is logged in before inserting a shoppinglist item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { shoppinglistitemName : shoppinglistItem, title : shoppinglistItem, description : shoppinglistItem }});
  },

// - End of shoppinglist Methods Block - //

// Start of menu Methods Block //

  'menuitemName.insert'(menuitemName) {
   check(menuitemName, String);
 
    // Make sure the user is logged in before inserting a menu item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: menuitemName,
      description: menuitemName,
      menuitemName: menuitemName,
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


  'menuitemName.remove'(documentId) {
    check(documentId, String);

    const menu = Agenda.findOne(documentId);
    if (menu.private && menu.owner !== Meteor.userId()) {
      // If the menu item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, menuItem){
    check(menuItem, String); 

    // Make sure the user is logged in before inserting a menu item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { menuitemName : menuItem, title : menuItem, description : menuItem }});
  },

// - End of menu Methods Block - //

// Start of menuplan Methods Block //

  'menuplanitemName.insert'(menuplanitemName) {
   check(menuplanitemName, String);
 
    // Make sure the user is logged in before inserting a menuplan item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: menuplanitemName,
      description: menuplanitemName,
      menuplanitemName: menuplanitemName,
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


  'menuplanitemName.remove'(documentId) {
    check(documentId, String);

    const menuplan = Agenda.findOne(documentId);
    if (menuplan.private && menuplan.owner !== Meteor.userId()) {
      // If the menuplan item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, menuplanItem){
    check(menuplanItem, String); 

    // Make sure the user is logged in before inserting a menuplan item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { menuplanitemName : menuplanItem, title : menuplanItem, description : menuplanItem }});
  },

// - End of menuplan Methods Block - //

// Start of improveFoodpage Methods Block //

  'improveFoodpageitemName.insert'(improveFoodpageitemName) {
   check(improveFoodpageitemName, String);
 
    // Make sure the user is logged in before inserting a improveFoodpage item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: improveFoodpageitemName,
      description: improveFoodpageitemName,
      improveFoodpageitemName: improveFoodpageitemName,
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


  'improveFoodpageitemName.remove'(documentId) {
    check(documentId, String);

    const improveFoodpage = Agenda.findOne(documentId);
    if (improveFoodpage.private && improveFoodpage.owner !== Meteor.userId()) {
      // If the improveFoodpage item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, improveFoodpageItem){
    check(improveFoodpageItem, String); 

    // Make sure the user is logged in before inserting a improveFoodpage item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { improveFoodpageitemName : improveFoodpageItem, title : improveFoodpageItem, description : improveFoodpageItem }});
  },

// - End of improveFoodpage Methods Block - //



//************************************************//
//************************************************//
//************************************************//
//************************************************//
//************************************************//
//***********    MONEY PAGE               ********//
//************************************************//
//************************************************//
//************************************************//
//************************************************//
//************************************************//

// Start of networth Methods Block //

  'networthitemName.insert'(networthitemName) {
   check(networthitemName, String);
 
    // Make sure the user is logged in before inserting a networth item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: networthitemName,
      description: networthitemName,
      networthitemName: networthitemName,
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


  'networthitemName.remove'(documentId) {
    check(documentId, String);

    const networth = Agenda.findOne(documentId);
    if (networth.private && networth.owner !== Meteor.userId()) {
      // If the networth item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, networthItem){
    check(networthItem, String); 

    // Make sure the user is logged in before inserting a networth item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { networthitemName : networthItem, title : networthItem, description : networthItem }});
  },

// - End of networth Methods Block - //

// Start of fireplan Methods Block //

  'fireplanitemName.insert'(fireplanitemName) {
   check(fireplanitemName, String);
 
    // Make sure the user is logged in before inserting a fireplan item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: fireplanitemName,
      description: fireplanitemName,
      fireplanitemName: fireplanitemName,
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


  'fireplanitemName.remove'(documentId) {
    check(documentId, String);

    const fireplan = Agenda.findOne(documentId);
    if (fireplan.private && fireplan.owner !== Meteor.userId()) {
      // If the fireplan item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, fireplanItem){
    check(fireplanItem, String); 

    // Make sure the user is logged in before inserting a fireplan item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { fireplanitemName : fireplanItem, title : fireplanItem, description : fireplanItem }});
  },

// - End of fireplan Methods Block - //

// Start of earningsrate Methods Block //

  'earningsrateitemName.insert'(earningsrateitemName) {
   check(earningsrateitemName, String);
 
    // Make sure the user is logged in before inserting a earningsrate item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: earningsrateitemName,
      description: earningsrateitemName,
      earningsrateitemName: earningsrateitemName,
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


  'earningsrateitemName.remove'(documentId) {
    check(documentId, String);

    const earningsrate = Agenda.findOne(documentId);
    if (earningsrate.private && earningsrate.owner !== Meteor.userId()) {
      // If the earningsrate item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, earningsrateItem){
    check(earningsrateItem, String); 

    // Make sure the user is logged in before inserting a earningsrate item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { earningsrateitemName : earningsrateItem, title : earningsrateItem, description : earningsrateItem }});
  },

// - End of earningsrate Methods Block - //

// Start of spendingrate Methods Block //

  'spendingrateitemName.insert'(spendingrateitemName) {
   check(spendingrateitemName, String);
 
    // Make sure the user is logged in before inserting a spendingrate item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: spendingrateitemName,
      description: spendingrateitemName,
      spendingrateitemName: spendingrateitemName,
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


  'spendingrateitemName.remove'(documentId) {
    check(documentId, String);

    const spendingrate = Agenda.findOne(documentId);
    if (spendingrate.private && spendingrate.owner !== Meteor.userId()) {
      // If the spendingrate item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, spendingrateItem){
    check(spendingrateItem, String); 

    // Make sure the user is logged in before inserting a spendingrate item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { spendingrateitemName : spendingrateItem, title : spendingrateItem, description : spendingrateItem }});
  },

// - End of spendingrate Methods Block - //

// Start of assets Methods Block //

  'assetsitemName.insert'(assetsitemName) {
   check(assetsitemName, String);
 
    // Make sure the user is logged in before inserting a assets item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: assetsitemName,
      description: assetsitemName,
      assetsitemName: assetsitemName,
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


  'assetsitemName.remove'(documentId) {
    check(documentId, String);

    const assets = Agenda.findOne(documentId);
    if (assets.private && assets.owner !== Meteor.userId()) {
      // If the assets item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, assetsItem){
    check(assetsItem, String); 

    // Make sure the user is logged in before inserting a assets item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { assetsitemName : assetsItem, title : assetsItem, description : assetsItem }});
  },

// - End of assets Methods Block - //

// Start of borrowdebt Methods Block //

  'borrowdebtitemName.insert'(borrowdebtitemName) {
   check(borrowdebtitemName, String);
 
    // Make sure the user is logged in before inserting a borrowdebt item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: borrowdebtitemName,
      description: borrowdebtitemName,
      borrowdebtitemName: borrowdebtitemName,
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


  'borrowdebtitemName.remove'(documentId) {
    check(documentId, String);

    const borrowdebt = Agenda.findOne(documentId);
    if (borrowdebt.private && borrowdebt.owner !== Meteor.userId()) {
      // If the borrowdebt item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, borrowdebtItem){
    check(borrowdebtItem, String); 

    // Make sure the user is logged in before inserting a borrowdebt item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { borrowdebtitemName : borrowdebtItem, title : borrowdebtItem, description : borrowdebtItem }});
  },

// - End of borrowdebt Methods Block - //

// Start of savingsrate Methods Block //

  'savingsrateitemName.insert'(savingsrateitemName) {
   check(savingsrateitemName, String);
 
    // Make sure the user is logged in before inserting a savingsrate item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: savingsrateitemName,
      description: savingsrateitemName,
      savingsrateitemName: savingsrateitemName,
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


  'savingsrateitemName.remove'(documentId) {
    check(documentId, String);

    const savingsrate = Agenda.findOne(documentId);
    if (savingsrate.private && savingsrate.owner !== Meteor.userId()) {
      // If the savingsrate item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, savingsrateItem){
    check(savingsrateItem, String); 

    // Make sure the user is logged in before inserting a savingsrate item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { savingsrateitemName : savingsrateItem, title : savingsrateItem, description : savingsrateItem }});
  },

// - End of savingsrate Methods Block - //

// Start of runrate Methods Block //

  'runrateitemName.insert'(runrateitemName) {
   check(runrateitemName, String);
 
    // Make sure the user is logged in before inserting a runrate item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: runrateitemName,
      description: runrateitemName,
      runrateitemName: runrateitemName,
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


  'runrateitemName.remove'(documentId) {
    check(documentId, String);

    const runrate = Agenda.findOne(documentId);
    if (runrate.private && runrate.owner !== Meteor.userId()) {
      // If the runrate item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, runrateItem){
    check(runrateItem, String); 

    // Make sure the user is logged in before inserting a runrate item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { runrateitemName : runrateItem, title : runrateItem, description : runrateItem }});
  },

// - End of runrate Methods Block - //

// Start of debttoequity Methods Block //

  'debttoequityitemName.insert'(debttoequityitemName) {
   check(debttoequityitemName, String);
 
    // Make sure the user is logged in before inserting a debttoequity item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: debttoequityitemName,
      description: debttoequityitemName,
      debttoequityitemName: debttoequityitemName,
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


  'debttoequityitemName.remove'(documentId) {
    check(documentId, String);

    const debttoequity = Agenda.findOne(documentId);
    if (debttoequity.private && debttoequity.owner !== Meteor.userId()) {
      // If the debttoequity item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, debttoequityItem){
    check(debttoequityItem, String); 

    // Make sure the user is logged in before inserting a debttoequity item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { debttoequityitemName : debttoequityItem, title : debttoequityItem, description : debttoequityItem }});
  },

// - End of debttoequity Methods Block - //

// Start of budget Methods Block //

  'budgetitemName.insert'(budgetitemName) {
   check(budgetitemName, String);
 
    // Make sure the user is logged in before inserting a budget item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: budgetitemName,
      description: budgetitemName,
      budgetitemName: budgetitemName,
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


  'budgetitemName.remove'(documentId) {
    check(documentId, String);

    const budget = Agenda.findOne(documentId);
    if (budget.private && budget.owner !== Meteor.userId()) {
      // If the budget item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, budgetItem){
    check(budgetItem, String); 

    // Make sure the user is logged in before inserting a budget item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { budgetitemName : budgetItem, title : budgetItem, description : budgetItem }});
  },

// - End of budget Methods Block - //

// Start of improveMoneypage Methods Block //

  'improveMoneypageitemName.insert'(improveMoneypageitemName) {
   check(improveMoneypageitemName, String);
 
    // Make sure the user is logged in before inserting a improveMoneypage item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: improveMoneypageitemName,
      description: improveMoneypageitemName,
      improveMoneypageitemName: improveMoneypageitemName,
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


  'improveMoneypageitemName.remove'(documentId) {
    check(documentId, String);

    const improveMoneypage = Agenda.findOne(documentId);
    if (improveMoneypage.private && improveMoneypage.owner !== Meteor.userId()) {
      // If the improveMoneypage item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, improveMoneypageItem){
    check(improveMoneypageItem, String); 

    // Make sure the user is logged in before inserting a improveMoneypage item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { improveMoneypageitemName : improveMoneypageItem, title : improveMoneypageItem, description : improveMoneypageItem }});
  },

// - End of improveMoneypage Methods Block - //


//************************************************//
//************************************************//
//************************************************//
//************************************************//
//************************************************//
//***********    TIME PAGE               *********//
//************************************************//
//************************************************//
//************************************************//
//************************************************//
//************************************************//



//************************************************//
//************************************************//
//************************************************//
//************************************************//
//************************************************//
//***********    PLACE PAGE               ********//
//************************************************//
//************************************************//
//************************************************//
//************************************************//
//************************************************//

// Start of placesbeen Methods Block //

  'placesbeenitemName.insert'(placesbeenitemName) {
   check(placesbeenitemName, String);
 
    // Make sure the user is logged in before inserting a placesbeen item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: placesbeenitemName,
      description: placesbeenitemName,
      placesbeenitemName: placesbeenitemName,
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


  'placesbeenitemName.remove'(documentId) {
    check(documentId, String);

    const placesbeen = Agenda.findOne(documentId);
    if (placesbeen.private && placesbeen.owner !== Meteor.userId()) {
      // If the placesbeen item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, placesbeenItem){
    check(placesbeenItem, String); 

    // Make sure the user is logged in before inserting a placesbeen item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { placesbeenitemName : placesbeenItem, title : placesbeenItem, description : placesbeenItem }});
  },

// - End of placesbeen Methods Block - //

// Start of placeswant Methods Block //

  'placeswantitemName.insert'(placeswantitemName) {
   check(placeswantitemName, String);
 
    // Make sure the user is logged in before inserting a placeswant item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: placeswantitemName,
      description: placeswantitemName,
      placeswantitemName: placeswantitemName,
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


  'placeswantitemName.remove'(documentId) {
    check(documentId, String);

    const placeswant = Agenda.findOne(documentId);
    if (placeswant.private && placeswant.owner !== Meteor.userId()) {
      // If the placeswant item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, placeswantItem){
    check(placeswantItem, String); 

    // Make sure the user is logged in before inserting a placeswant item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { placeswantitemName : placeswantItem, title : placeswantItem, description : placeswantItem }});
  },

// - End of placeswant Methods Block - //

// Start of placesplanner Methods Block //

  'placesplanneritemName.insert'(placesplanneritemName) {
   check(placesplanneritemName, String);
 
    // Make sure the user is logged in before inserting a placesplanner item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: placesplanneritemName,
      description: placesplanneritemName,
      placesplanneritemName: placesplanneritemName,
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


  'placesplanneritemName.remove'(documentId) {
    check(documentId, String);

    const placesplanner = Agenda.findOne(documentId);
    if (placesplanner.private && placesplanner.owner !== Meteor.userId()) {
      // If the placesplanner item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, placesplannerItem){
    check(placesplannerItem, String); 

    // Make sure the user is logged in before inserting a placesplanner item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { placesplanneritemName : placesplannerItem, title : placesplannerItem, description : placesplannerItem }});
  },

// - End of placesplanner Methods Block - //

// Start of improveSpacepage Methods Block //

  'improveSpacepageitemName.insert'(improveSpacepageitemName) {
   check(improveSpacepageitemName, String);
 
    // Make sure the user is logged in before inserting a improveSpacepage item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: improveSpacepageitemName,
      description: improveSpacepageitemName,
      improveSpacepageitemName: improveSpacepageitemName,
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


  'improveSpacepageitemName.remove'(documentId) {
    check(documentId, String);

    const improveSpacepage = Agenda.findOne(documentId);
    if (improveSpacepage.private && improveSpacepage.owner !== Meteor.userId()) {
      // If the improveSpacepage item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, improveSpacepageItem){
    check(improveSpacepageItem, String); 

    // Make sure the user is logged in before inserting a improveSpacepage item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { improveSpacepageitemName : improveSpacepageItem, title : improveSpacepageItem, description : improveSpacepageItem }});
  },

// - End of improveSpacepage Methods Block - //



//************************************************//
//************************************************//
//************************************************//
//************************************************//
//************************************************//
//***********    STUFF PAGE               ********//
//************************************************//
//************************************************//
//************************************************//
//************************************************//
//************************************************//

// Start of stuffhave Methods Block //

  'stuffhaveitemName.insert'(stuffhaveitemName) {
   check(stuffhaveitemName, String);
 
    // Make sure the user is logged in before inserting a stuffhave item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: stuffhaveitemName,
      description: stuffhaveitemName,
      stuffhaveitemName: stuffhaveitemName,
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


  'stuffhaveitemName.remove'(documentId) {
    check(documentId, String);

    const stuffhave = Agenda.findOne(documentId);
    if (stuffhave.private && stuffhave.owner !== Meteor.userId()) {
      // If the stuffhave item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, stuffhaveItem){
    check(stuffhaveItem, String); 

    // Make sure the user is logged in before inserting a stuffhave item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { stuffhaveitemName : stuffhaveItem, title : stuffhaveItem, description : stuffhaveItem }});
  },

// - End of stuffhave Methods Block - //

// Start of stufflost Methods Block //

  'stufflostitemName.insert'(stufflostitemName) {
   check(stufflostitemName, String);
 
    // Make sure the user is logged in before inserting a stufflost item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: stufflostitemName,
      description: stufflostitemName,
      stufflostitemName: stufflostitemName,
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


  'stufflostitemName.remove'(documentId) {
    check(documentId, String);

    const stufflost = Agenda.findOne(documentId);
    if (stufflost.private && stufflost.owner !== Meteor.userId()) {
      // If the stufflost item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, stufflostItem){
    check(stufflostItem, String); 

    // Make sure the user is logged in before inserting a stufflost item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { stufflostitemName : stufflostItem, title : stufflostItem, description : stufflostItem }});
  },

// - End of stufflost Methods Block - //

// Start of stufflent Methods Block //

  'stufflentitemName.insert'(stufflentitemName) {
   check(stufflentitemName, String);
 
    // Make sure the user is logged in before inserting a stufflent item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: stufflentitemName,
      description: stufflentitemName,
      stufflentitemName: stufflentitemName,
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


  'stufflentitemName.remove'(documentId) {
    check(documentId, String);

    const stufflent = Agenda.findOne(documentId);
    if (stufflent.private && stufflent.owner !== Meteor.userId()) {
      // If the stufflent item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, stufflentItem){
    check(stufflentItem, String); 

    // Make sure the user is logged in before inserting a stufflent item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { stufflentitemName : stufflentItem, title : stufflentItem, description : stufflentItem }});
  },

// - End of stufflent Methods Block - //

// Start of stuffborrowed Methods Block //

  'stuffborroweditemName.insert'(stuffborroweditemName) {
   check(stuffborroweditemName, String);
 
    // Make sure the user is logged in before inserting a stuffborrowed item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: stuffborroweditemName,
      description: stuffborroweditemName,
      stuffborroweditemName: stuffborroweditemName,
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


  'stuffborroweditemName.remove'(documentId) {
    check(documentId, String);

    const stuffborrowed = Agenda.findOne(documentId);
    if (stuffborrowed.private && stuffborrowed.owner !== Meteor.userId()) {
      // If the stuffborrowed item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, stuffborrowedItem){
    check(stuffborrowedItem, String); 

    // Make sure the user is logged in before inserting a stuffborrowed item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { stuffborroweditemName : stuffborrowedItem, title : stuffborrowedItem, description : stuffborrowedItem }});
  },

// - End of stuffborrowed Methods Block - //

// Start of stuffwant Methods Block //

  'stuffwantitemName.insert'(stuffwantitemName) {
   check(stuffwantitemName, String);
 
    // Make sure the user is logged in before inserting a stuffwant item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: stuffwantitemName,
      description: stuffwantitemName,
      stuffwantitemName: stuffwantitemName,
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


  'stuffwantitemName.remove'(documentId) {
    check(documentId, String);

    const stuffwant = Agenda.findOne(documentId);
    if (stuffwant.private && stuffwant.owner !== Meteor.userId()) {
      // If the stuffwant item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, stuffwantItem){
    check(stuffwantItem, String); 

    // Make sure the user is logged in before inserting a stuffwant item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { stuffwantitemName : stuffwantItem, title : stuffwantItem, description : stuffwantItem }});
  },

// - End of stuffwant Methods Block - //

// Start of stuffplanner Methods Block //

  'stuffplanneritemName.insert'(stuffplanneritemName) {
   check(stuffplanneritemName, String);
 
    // Make sure the user is logged in before inserting a stuffplanner item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: stuffplanneritemName,
      description: stuffplanneritemName,
      stuffplanneritemName: stuffplanneritemName,
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


  'stuffplanneritemName.remove'(documentId) {
    check(documentId, String);

    const stuffplanner = Agenda.findOne(documentId);
    if (stuffplanner.private && stuffplanner.owner !== Meteor.userId()) {
      // If the stuffplanner item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, stuffplannerItem){
    check(stuffplannerItem, String); 

    // Make sure the user is logged in before inserting a stuffplanner item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { stuffplanneritemName : stuffplannerItem, title : stuffplannerItem, description : stuffplannerItem }});
  },

// - End of stuffplanner Methods Block - //

// Start of improveStuffpage Methods Block //

  'improveStuffpageitemName.insert'(improveStuffpageitemName) {
   check(improveStuffpageitemName, String);
 
    // Make sure the user is logged in before inserting a improveStuffpage item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: improveStuffpageitemName,
      description: improveStuffpageitemName,
      improveStuffpageitemName: improveStuffpageitemName,
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


  'improveStuffpageitemName.remove'(documentId) {
    check(documentId, String);

    const improveStuffpage = Agenda.findOne(documentId);
    if (improveStuffpage.private && improveStuffpage.owner !== Meteor.userId()) {
      // If the improveStuffpage item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, improveStuffpageItem){
    check(improveStuffpageItem, String); 

    // Make sure the user is logged in before inserting a improveStuffpage item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { improveStuffpageitemName : improveStuffpageItem, title : improveStuffpageItem, description : improveStuffpageItem }});
  },

// - End of improveStuffpage Methods Block - //



//************************************************//
//************************************************//
//************************************************//
//************************************************//
//************************************************//
//***********    PEOPLE PAGE               *******//
//************************************************//
//************************************************//
//************************************************//
//************************************************//
//************************************************//

// Start of pplengagedwith Methods Block //

  'pplengagedwithitemName.insert'(pplengagedwithitemName) {
   check(pplengagedwithitemName, String);
 
    // Make sure the user is logged in before inserting a pplengagedwith item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: pplengagedwithitemName,
      description: pplengagedwithitemName,
      pplengagedwithitemName: pplengagedwithitemName,
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


  'pplengagedwithitemName.remove'(documentId) {
    check(documentId, String);

    const pplengagedwith = Agenda.findOne(documentId);
    if (pplengagedwith.private && pplengagedwith.owner !== Meteor.userId()) {
      // If the pplengagedwith item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, pplengagedwithItem){
    check(pplengagedwithItem, String); 

    // Make sure the user is logged in before inserting a pplengagedwith item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { pplengagedwithitemName : pplengagedwithItem, title : pplengagedwithItem, description : pplengagedwithItem }});
  },

// - End of pplengagedwith Methods Block - //

// Start of pplconstact Methods Block //

  'pplconstactitemName.insert'(pplconstactitemName) {
   check(pplconstactitemName, String);
 
    // Make sure the user is logged in before inserting a pplconstact item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: pplconstactitemName,
      description: pplconstactitemName,
      pplconstactitemName: pplconstactitemName,
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


  'pplconstactitemName.remove'(documentId) {
    check(documentId, String);

    const pplconstact = Agenda.findOne(documentId);
    if (pplconstact.private && pplconstact.owner !== Meteor.userId()) {
      // If the pplconstact item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, pplconstactItem){
    check(pplconstactItem, String); 

    // Make sure the user is logged in before inserting a pplconstact item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { pplconstactitemName : pplconstactItem, title : pplconstactItem, description : pplconstactItem }});
  },

// - End of pplconstact Methods Block - //

// Start of pplGiftideas Methods Block //

  'pplGiftideasitemName.insert'(pplGiftideasitemName) {
   check(pplGiftideasitemName, String);
 
    // Make sure the user is logged in before inserting a pplGiftideas item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: pplGiftideasitemName,
      description: pplGiftideasitemName,
      pplGiftideasitemName: pplGiftideasitemName,
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


  'pplGiftideasitemName.remove'(documentId) {
    check(documentId, String);

    const pplGiftideas = Agenda.findOne(documentId);
    if (pplGiftideas.private && pplGiftideas.owner !== Meteor.userId()) {
      // If the pplGiftideas item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, pplGiftideasItem){
    check(pplGiftideasItem, String); 

    // Make sure the user is logged in before inserting a pplGiftideas item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { pplGiftideasitemName : pplGiftideasItem, title : pplGiftideasItem, description : pplGiftideasItem }});
  },

// - End of pplGiftideas Methods Block - //

// Start of improvePeoplepage Methods Block //

  'improvePeoplepageitemName.insert'(improvePeoplepageitemName) {
   check(improvePeoplepageitemName, String);
 
    // Make sure the user is logged in before inserting a improvePeoplepage item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: improvePeoplepageitemName,
      description: improvePeoplepageitemName,
      improvePeoplepageitemName: improvePeoplepageitemName,
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


  'improvePeoplepageitemName.remove'(documentId) {
    check(documentId, String);

    const improvePeoplepage = Agenda.findOne(documentId);
    if (improvePeoplepage.private && improvePeoplepage.owner !== Meteor.userId()) {
      // If the improvePeoplepage item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, improvePeoplepageItem){
    check(improvePeoplepageItem, String); 

    // Make sure the user is logged in before inserting a improvePeoplepage item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { improvePeoplepageitemName : improvePeoplepageItem, title : improvePeoplepageItem, description : improvePeoplepageItem }});
  },

// - End of improvePeoplepage Methods Block - //



//************************************************//
//************************************************//
//************************************************//
//************************************************//
//************************************************//
//***********    LOVE PAGE               *********//
//************************************************//
//************************************************//
//************************************************//
//************************************************//
//************************************************//

// Start of howSodoing Methods Block //

  'howSodoingitemName.insert'(howSodoingitemName) {
   check(howSodoingitemName, String);
 
    // Make sure the user is logged in before inserting a howSodoing item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: howSodoingitemName,
      description: howSodoingitemName,
      howSodoingitemName: howSodoingitemName,
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


  'howSodoingitemName.remove'(documentId) {
    check(documentId, String);

    const howSodoing = Agenda.findOne(documentId);
    if (howSodoing.private && howSodoing.owner !== Meteor.userId()) {
      // If the howSodoing item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, howSodoingItem){
    check(howSodoingItem, String); 

    // Make sure the user is logged in before inserting a howSodoing item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { howSodoingitemName : howSodoingItem, title : howSodoingItem, description : howSodoingItem }});
  },

// - End of howSodoing Methods Block - //

// Start of soLikes Methods Block //

  'soLikesitemName.insert'(soLikesitemName) {
   check(soLikesitemName, String);
 
    // Make sure the user is logged in before inserting a soLikes item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: soLikesitemName,
      description: soLikesitemName,
      soLikesitemName: soLikesitemName,
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


  'soLikesitemName.remove'(documentId) {
    check(documentId, String);

    const soLikes = Agenda.findOne(documentId);
    if (soLikes.private && soLikes.owner !== Meteor.userId()) {
      // If the soLikes item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, soLikesItem){
    check(soLikesItem, String); 

    // Make sure the user is logged in before inserting a soLikes item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { soLikesitemName : soLikesItem, title : soLikesItem, description : soLikesItem }});
  },

// - End of soLikes Methods Block - //

// Start of soDislikes Methods Block //

  'soDislikesitemName.insert'(soDislikesitemName) {
   check(soDislikesitemName, String);
 
    // Make sure the user is logged in before inserting a soDislikes item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: soDislikesitemName,
      description: soDislikesitemName,
      soDislikesitemName: soDislikesitemName,
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


  'soDislikesitemName.remove'(documentId) {
    check(documentId, String);

    const soDislikes = Agenda.findOne(documentId);
    if (soDislikes.private && soDislikes.owner !== Meteor.userId()) {
      // If the soDislikes item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, soDislikesItem){
    check(soDislikesItem, String); 

    // Make sure the user is logged in before inserting a soDislikes item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { soDislikesitemName : soDislikesItem, title : soDislikesItem, description : soDislikesItem }});
  },

// - End of soDislikes Methods Block - //

// Start of soWants Methods Block //

  'soWantsitemName.insert'(soWantsitemName) {
   check(soWantsitemName, String);
 
    // Make sure the user is logged in before inserting a soWants item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: soWantsitemName,
      description: soWantsitemName,
      soWantsitemName: soWantsitemName,
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


  'soWantsitemName.remove'(documentId) {
    check(documentId, String);

    const soWants = Agenda.findOne(documentId);
    if (soWants.private && soWants.owner !== Meteor.userId()) {
      // If the soWants item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, soWantsItem){
    check(soWantsItem, String); 

    // Make sure the user is logged in before inserting a soWants item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { soWantsitemName : soWantsItem, title : soWantsItem, description : soWantsItem }});
  },

// - End of soWants Methods Block - //

// Start of sogiftideas Methods Block //

  'sogiftideasitemName.insert'(sogiftideasitemName) {
   check(sogiftideasitemName, String);
 
    // Make sure the user is logged in before inserting a sogiftideas item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: sogiftideasitemName,
      description: sogiftideasitemName,
      sogiftideasitemName: sogiftideasitemName,
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


  'sogiftideasitemName.remove'(documentId) {
    check(documentId, String);

    const sogiftideas = Agenda.findOne(documentId);
    if (sogiftideas.private && sogiftideas.owner !== Meteor.userId()) {
      // If the sogiftideas item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, sogiftideasItem){
    check(sogiftideasItem, String); 

    // Make sure the user is logged in before inserting a sogiftideas item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { sogiftideasitemName : sogiftideasItem, title : sogiftideasItem, description : sogiftideasItem }});
  },

// - End of sogiftideas Methods Block - //

// Start of soArguementlog Methods Block //

  'soArguementlogitemName.insert'(soArguementlogitemName) {
   check(soArguementlogitemName, String);
 
    // Make sure the user is logged in before inserting a soArguementlog item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: soArguementlogitemName,
      description: soArguementlogitemName,
      soArguementlogitemName: soArguementlogitemName,
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


  'soArguementlogitemName.remove'(documentId) {
    check(documentId, String);

    const soArguementlog = Agenda.findOne(documentId);
    if (soArguementlog.private && soArguementlog.owner !== Meteor.userId()) {
      // If the soArguementlog item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, soArguementlogItem){
    check(soArguementlogItem, String); 

    // Make sure the user is logged in before inserting a soArguementlog item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { soArguementlogitemName : soArguementlogItem, title : soArguementlogItem, description : soArguementlogItem }});
  },

// - End of soArguementlog Methods Block - //

// Start of soPeriodlog Methods Block //

  'soPeriodlogitemName.insert'(soPeriodlogitemName) {
   check(soPeriodlogitemName, String);
 
    // Make sure the user is logged in before inserting a soPeriodlog item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: soPeriodlogitemName,
      description: soPeriodlogitemName,
      soPeriodlogitemName: soPeriodlogitemName,
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


  'soPeriodlogitemName.remove'(documentId) {
    check(documentId, String);

    const soPeriodlog = Agenda.findOne(documentId);
    if (soPeriodlog.private && soPeriodlog.owner !== Meteor.userId()) {
      // If the soPeriodlog item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, soPeriodlogItem){
    check(soPeriodlogItem, String); 

    // Make sure the user is logged in before inserting a soPeriodlog item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { soPeriodlogitemName : soPeriodlogItem, title : soPeriodlogItem, description : soPeriodlogItem }});
  },

// - End of soPeriodlog Methods Block - //

// Start of lovehist Methods Block //

  'lovehistitemName.insert'(lovehistitemName) {
   check(lovehistitemName, String);
 
    // Make sure the user is logged in before inserting a lovehist item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: lovehistitemName,
      description: lovehistitemName,
      lovehistitemName: lovehistitemName,
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


  'lovehistitemName.remove'(documentId) {
    check(documentId, String);

    const lovehist = Agenda.findOne(documentId);
    if (lovehist.private && lovehist.owner !== Meteor.userId()) {
      // If the lovehist item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, lovehistItem){
    check(lovehistItem, String); 

    // Make sure the user is logged in before inserting a lovehist item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { lovehistitemName : lovehistItem, title : lovehistItem, description : lovehistItem }});
  },

// - End of lovehist Methods Block - //

// Start of dreamSo Methods Block //

  'dreamSoitemName.insert'(dreamSoitemName) {
   check(dreamSoitemName, String);
 
    // Make sure the user is logged in before inserting a dreamSo item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: dreamSoitemName,
      description: dreamSoitemName,
      dreamSoitemName: dreamSoitemName,
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


  'dreamSoitemName.remove'(documentId) {
    check(documentId, String);

    const dreamSo = Agenda.findOne(documentId);
    if (dreamSo.private && dreamSo.owner !== Meteor.userId()) {
      // If the dreamSo item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, dreamSoItem){
    check(dreamSoItem, String); 

    // Make sure the user is logged in before inserting a dreamSo item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { dreamSoitemName : dreamSoItem, title : dreamSoItem, description : dreamSoItem }});
  },

// - End of dreamSo Methods Block - //

// Start of sexhist Methods Block //

  'sexhistitemName.insert'(sexhistitemName) {
   check(sexhistitemName, String);
 
    // Make sure the user is logged in before inserting a sexhist item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: sexhistitemName,
      description: sexhistitemName,
      sexhistitemName: sexhistitemName,
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


  'sexhistitemName.remove'(documentId) {
    check(documentId, String);

    const sexhist = Agenda.findOne(documentId);
    if (sexhist.private && sexhist.owner !== Meteor.userId()) {
      // If the sexhist item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, sexhistItem){
    check(sexhistItem, String); 

    // Make sure the user is logged in before inserting a sexhist item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { sexhistitemName : sexhistItem, title : sexhistItem, description : sexhistItem }});
  },

// - End of sexhist Methods Block - //

// Start of improveLovepage Methods Block //

  'improveLovepageitemName.insert'(improveLovepageitemName) {
   check(improveLovepageitemName, String);
 
    // Make sure the user is logged in before inserting a improveLovepage item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: improveLovepageitemName,
      description: improveLovepageitemName,
      improveLovepageitemName: improveLovepageitemName,
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


  'improveLovepageitemName.remove'(documentId) {
    check(documentId, String);

    const improveLovepage = Agenda.findOne(documentId);
    if (improveLovepage.private && improveLovepage.owner !== Meteor.userId()) {
      // If the improveLovepage item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, improveLovepageItem){
    check(improveLovepageItem, String); 

    // Make sure the user is logged in before inserting a improveLovepage item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { improveLovepageitemName : improveLovepageItem, title : improveLovepageItem, description : improveLovepageItem }});
  },

// - End of improveLovepage Methods Block - //



//************************************************//
//************************************************//
//************************************************//
//************************************************//
//************************************************//
//***********    PET PAGE               **********//
//************************************************//
//************************************************//
//************************************************//
//************************************************//
//************************************************//

// Start of petlog Methods Block //

  'petlogitemName.insert'(petlogitemName) {
   check(petlogitemName, String);
 
    // Make sure the user is logged in before inserting a petlog item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: petlogitemName,
      description: petlogitemName,
      petlogitemName: petlogitemName,
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


  'petlogitemName.remove'(documentId) {
    check(documentId, String);

    const petlog = Agenda.findOne(documentId);
    if (petlog.private && petlog.owner !== Meteor.userId()) {
      // If the petlog item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, petlogItem){
    check(petlogItem, String); 

    // Make sure the user is logged in before inserting a petlog item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { petlogitemName : petlogItem, title : petlogItem, description : petlogItem }});
  },

// - End of petlog Methods Block - //

// Start of petbiometrics Methods Block //

  'petbiometricsitemName.insert'(petbiometricsitemName) {
   check(petbiometricsitemName, String);
 
    // Make sure the user is logged in before inserting a petbiometrics item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: petbiometricsitemName,
      description: petbiometricsitemName,
      petbiometricsitemName: petbiometricsitemName,
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


  'petbiometricsitemName.remove'(documentId) {
    check(documentId, String);

    const petbiometrics = Agenda.findOne(documentId);
    if (petbiometrics.private && petbiometrics.owner !== Meteor.userId()) {
      // If the petbiometrics item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, petbiometricsItem){
    check(petbiometricsItem, String); 

    // Make sure the user is logged in before inserting a petbiometrics item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { petbiometricsitemName : petbiometricsItem, title : petbiometricsItem, description : petbiometricsItem }});
  },

// - End of petbiometrics Methods Block - //

// Start of petMedhist Methods Block //

  'petMedhistitemName.insert'(petMedhistitemName) {
   check(petMedhistitemName, String);
 
    // Make sure the user is logged in before inserting a petMedhist item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: petMedhistitemName,
      description: petMedhistitemName,
      petMedhistitemName: petMedhistitemName,
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


  'petMedhistitemName.remove'(documentId) {
    check(documentId, String);

    const petMedhist = Agenda.findOne(documentId);
    if (petMedhist.private && petMedhist.owner !== Meteor.userId()) {
      // If the petMedhist item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, petMedhistItem){
    check(petMedhistItem, String); 

    // Make sure the user is logged in before inserting a petMedhist item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { petMedhistitemName : petMedhistItem, title : petMedhistItem, description : petMedhistItem }});
  },

// - End of petMedhist Methods Block - //

// Start of improvePetpage Methods Block //

  'improvePetpageitemName.insert'(improvePetpageitemName) {
   check(improvePetpageitemName, String);
 
    // Make sure the user is logged in before inserting a improvePetpage item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: improvePetpageitemName,
      description: improvePetpageitemName,
      improvePetpageitemName: improvePetpageitemName,
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


  'improvePetpageitemName.remove'(documentId) {
    check(documentId, String);

    const improvePetpage = Agenda.findOne(documentId);
    if (improvePetpage.private && improvePetpage.owner !== Meteor.userId()) {
      // If the improvePetpage item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, improvePetpageItem){
    check(improvePetpageItem, String); 

    // Make sure the user is logged in before inserting a improvePetpage item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { improvePetpageitemName : improvePetpageItem, title : improvePetpageItem, description : improvePetpageItem }});
  },

// - End of improvePetpage Methods Block - //



//************************************************//
//************************************************//
//************************************************//
//************************************************//
//************************************************//
//***********    SOCIETY PAGE             ********//
//************************************************//
//************************************************//
//************************************************//
//************************************************//
//************************************************//

// Start of govt Methods Block //

  'govtitemName.insert'(govtitemName) {
   check(govtitemName, String);
 
    // Make sure the user is logged in before inserting a govt item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: govtitemName,
      description: govtitemName,
      govtitemName: govtitemName,
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


  'govtitemName.remove'(documentId) {
    check(documentId, String);

    const govt = Agenda.findOne(documentId);
    if (govt.private && govt.owner !== Meteor.userId()) {
      // If the govt item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, govtItem){
    check(govtItem, String); 

    // Make sure the user is logged in before inserting a govt item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { govtitemName : govtItem, title : govtItem, description : govtItem }});
  },

// - End of govt Methods Block - //

// Start of policies Methods Block //

  'policiesitemName.insert'(policiesitemName) {
   check(policiesitemName, String);
 
    // Make sure the user is logged in before inserting a policies item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: policiesitemName,
      description: policiesitemName,
      policiesitemName: policiesitemName,
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


  'policiesitemName.remove'(documentId) {
    check(documentId, String);

    const policies = Agenda.findOne(documentId);
    if (policies.private && policies.owner !== Meteor.userId()) {
      // If the policies item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, policiesItem){
    check(policiesItem, String); 

    // Make sure the user is logged in before inserting a policies item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { policiesitemName : policiesItem, title : policiesItem, description : policiesItem }});
  },

// - End of policies Methods Block - //

// Start of vote Methods Block //

  'voteitemName.insert'(voteitemName) {
   check(voteitemName, String);
 
    // Make sure the user is logged in before inserting a vote item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: voteitemName,
      description: voteitemName,
      voteitemName: voteitemName,
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


  'voteitemName.remove'(documentId) {
    check(documentId, String);

    const vote = Agenda.findOne(documentId);
    if (vote.private && vote.owner !== Meteor.userId()) {
      // If the vote item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, voteItem){
    check(voteItem, String); 

    // Make sure the user is logged in before inserting a vote item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { voteitemName : voteItem, title : voteItem, description : voteItem }});
  },

// - End of vote Methods Block - //

// Start of improveSocietypage Methods Block //

  'improveSocietypageitemName.insert'(improveSocietypageitemName) {
   check(improveSocietypageitemName, String);
 
    // Make sure the user is logged in before inserting a improveSocietypage item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: improveSocietypageitemName,
      description: improveSocietypageitemName,
      improveSocietypageitemName: improveSocietypageitemName,
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


  'improveSocietypageitemName.remove'(documentId) {
    check(documentId, String);

    const improveSocietypage = Agenda.findOne(documentId);
    if (improveSocietypage.private && improveSocietypage.owner !== Meteor.userId()) {
      // If the improveSocietypage item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, improveSocietypageItem){
    check(improveSocietypageItem, String); 

    // Make sure the user is logged in before inserting a improveSocietypage item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { improveSocietypageitemName : improveSocietypageItem, title : improveSocietypageItem, description : improveSocietypageItem }});
  },

// - End of improveSocietypage Methods Block - //



//************************************************//
//************************************************//
//************************************************//
//************************************************//
//************************************************//
//***********    SPIRIT PAGE               *******//
//************************************************//
//************************************************//
//************************************************//
//************************************************//
//************************************************//



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

// Start of mantras Methods Block //

  'mantrasitemName.insert'(mantrasitemName) {
   check(mantrasitemName, String);
 
    // Make sure the user is logged in before inserting a mantras item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: mantrasitemName,
      description: mantrasitemName,
      mantrasitemName: mantrasitemName,
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


  'mantrasitemName.remove'(documentId) {
    check(documentId, String);

    const mantras = Agenda.findOne(documentId);
    if (mantras.private && mantras.owner !== Meteor.userId()) {
      // If the mantras item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, mantrasItem){
    check(mantrasItem, String); 

    // Make sure the user is logged in before inserting a mantras item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { mantrasitemName : mantrasItem, title : mantrasItem, description : mantrasItem }});
  },

// - End of mantras Methods Block - //

// Start of improveSpiritpage Methods Block //

  'improveSpiritpageitemName.insert'(improveSpiritpageitemName) {
   check(improveSpiritpageitemName, String);
 
    // Make sure the user is logged in before inserting a improveSpiritpage item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: improveSpiritpageitemName,
      description: improveSpiritpageitemName,
      improveSpiritpageitemName: improveSpiritpageitemName,
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


  'improveSpiritpageitemName.remove'(documentId) {
    check(documentId, String);

    const improveSpiritpage = Agenda.findOne(documentId);
    if (improveSpiritpage.private && improveSpiritpage.owner !== Meteor.userId()) {
      // If the improveSpiritpage item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, improveSpiritpageItem){
    check(improveSpiritpageItem, String); 

    // Make sure the user is logged in before inserting a improveSpiritpage item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { improveSpiritpageitemName : improveSpiritpageItem, title : improveSpiritpageItem, description : improveSpiritpageItem }});
  },

// - End of improveSpiritpage Methods Block - //




});
