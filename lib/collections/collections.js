import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Admindb = new Mongo.Collection('admindb');
export const DevNotes = new Mongo.Collection('devNotes');
export const DevTest = new Mongo.Collection('devTest');
export const Livedb = new Mongo.Collection('livedb');
Daily = new Mongo.Collection('daily');


if (Meteor.isServer) {
  // This code only runs on the server
  // Only publish tasks that are public or belong to the current user
  Meteor.publish('admindb', function AdmindbPublication() {
    return Admindb.find({
        $or: [
            { private: { $ne: true } },
            { owner: this.userId },
      ],
    });
  });
  Meteor.publish('devNotes', function devNotesPublication() {
    return DevNotes.find({
        $or: [
            { private: { $ne: true } },
            { owner: this.userId },
      ],
    });
  });
  Meteor.publish('devTest', function devTestPublication() {
    return DevTest.find({
        $or: [
            { private: { $ne: true } },
            { owner: this.userId },
      ],
    });
  });
  Meteor.publish('Livedb', function livedbPublication() {
    return Livedb.find({
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
//***********   About PAGE         ***************//
//************************************************//
//************************************************//
//************************************************//
//************************************************//
//************************************************//  

// Start of LOSelevatorpitch Methods Block //

  'LOSelevatorpitchitemName.insert'(LOSelevatorpitchitemName) {
   check(LOSelevatorpitchitemName, String);
 
    // Make sure the user is logged in before inserting a LOSelevatorpitch item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Admindb.insert({
      title: LOSelevatorpitchitemName,
      description: LOSelevatorpitchitemName,
      LOSelevatorpitchitemName: LOSelevatorpitchitemName,
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


  'LOSelevatorpitchitemName.remove'(documentId) {
    check(documentId, String);

    const LOSelevatorpitch = Admindb.findOne(documentId);
    if (LOSelevatorpitch.private && LOSelevatorpitch.owner !== Meteor.userId()) {
      // If the LOSelevatorpitch item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Admindb.remove(documentId);
  },
  'updateLOSelevatorpitchItem': function(documentId, LOSelevatorpitchItem){
    check(LOSelevatorpitchItem, String); 

    // Make sure the user is logged in before inserting a LOSelevatorpitch item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Admindb.update({ _id: documentId }, {$set: { LOSelevatorpitchitemName : LOSelevatorpitchItem, title : LOSelevatorpitchItem, description : LOSelevatorpitchItem }});
  },

// - End of LOSelevatorpitch Methods Block - //

// Start of LOSsummary Methods Block //

  'LOSsummaryitemName.insert'(LOSsummaryitemName) {
   check(LOSsummaryitemName, String);
 
    // Make sure the user is logged in before inserting a LOSsummary item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Admindb.insert({
      title: LOSsummaryitemName,
      description: LOSsummaryitemName,
      LOSsummaryitemName: LOSsummaryitemName,
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


  'LOSsummaryitemName.remove'(documentId) {
    check(documentId, String);

    const LOSsummary = Admindb.findOne(documentId);
    if (LOSsummary.private && LOSsummary.owner !== Meteor.userId()) {
      // If the LOSsummary item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Admindb.remove(documentId);
  },
  'updateLOSsummaryItem': function(documentId, LOSsummaryItem){
    check(LOSsummaryItem, String); 

    // Make sure the user is logged in before inserting a LOSsummary item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Admindb.update({ _id: documentId }, {$set: { LOSsummaryitemName : LOSsummaryItem, title : LOSsummaryItem, description : LOSsummaryItem }});
  },

// - End of LOSsummary Methods Block - //

// Start of LOSindepth Methods Block //

  'LOSindepthitemName.insert'(LOSindepthitemName) {
   check(LOSindepthitemName, String);
 
    // Make sure the user is logged in before inserting a LOSindepth item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Admindb.insert({
      title: LOSindepthitemName,
      description: LOSindepthitemName,
      LOSindepthitemName: LOSindepthitemName,
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


  'LOSindepthitemName.remove'(documentId) {
    check(documentId, String);

    const LOSindepth = Admindb.findOne(documentId);
    if (LOSindepth.private && LOSindepth.owner !== Meteor.userId()) {
      // If the LOSindepth item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Admindb.remove(documentId);
  },
  'updateLOSindepthItem': function(documentId, LOSindepthItem){
    check(LOSindepthItem, String); 

    // Make sure the user is logged in before inserting a LOSindepth item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Admindb.update({ _id: documentId }, {$set: { LOSindepthitemName : LOSindepthItem, title : LOSindepthItem, description : LOSindepthItem }});
  },

// - End of LOSindepth Methods Block - //

// Start of LOSproblemsolve Methods Block //

  'LOSproblemsolveitemName.insert'(LOSproblemsolveitemName) {
   check(LOSproblemsolveitemName, String);
 
    // Make sure the user is logged in before inserting a LOSproblemsolve item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Admindb.insert({
      title: LOSproblemsolveitemName,
      description: LOSproblemsolveitemName,
      LOSproblemsolveitemName: LOSproblemsolveitemName,
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


  'LOSproblemsolveitemName.remove'(documentId) {
    check(documentId, String);

    const LOSproblemsolve = Admindb.findOne(documentId);
    if (LOSproblemsolve.private && LOSproblemsolve.owner !== Meteor.userId()) {
      // If the LOSproblemsolve item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Admindb.remove(documentId);
  },
  'updateLOSproblemsolveItem': function(documentId, LOSproblemsolveItem){
    check(LOSproblemsolveItem, String); 

    // Make sure the user is logged in before inserting a LOSproblemsolve item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Admindb.update({ _id: documentId }, {$set: { LOSproblemsolveitemName : LOSproblemsolveItem, title : LOSproblemsolveItem, description : LOSproblemsolveItem }});
  },

// - End of LOSproblemsolve Methods Block - //
/*
// Start of LOSfeature Methods Block //

  'LOSfeatureitemName.insert'(LOSfeatureitemName) {
   check(LOSfeatureitemName, String);
 
    // Make sure the user is logged in before inserting a LOSfeature item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Admindb.insert({
      title: LOSfeatureitemName,
      description: LOSfeatureitemName,
      LOSfeatureitemName: LOSfeatureitemName,
      start: new Date(),
      end: new Date(),
      allDay: false,
      createdAt: new Date(),
      editedAt: new Date(),
      private: true,
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });
    DevNotes.insert({
      title: LOSfeatureitemName,
      description: LOSfeatureitemName,
      LOSfeatureitemName: LOSfeatureitemName,
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


  'LOSfeatureitemName.remove'(documentId) {
    check(documentId, String);

    const LOSfeature = Admindb.findOne(documentId);
    if (LOSfeature.private && LOSfeature.owner !== Meteor.userId()) {
      // If the LOSfeature item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Admindb.remove(documentId);
    DevNotes.remove(documentId);
  },
  'updateLOSfeatureItem': function(documentId, LOSfeatureItem){
    check(LOSfeatureItem, String); 

    // Make sure the user is logged in before inserting a LOSfeature item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Admindb.update({ _id: documentId }, {$set: { LOSfeatureitemName : LOSfeatureItem, title : LOSfeatureItem, description : LOSfeatureItem }});
    DevNotes.update({ _id: documentId }, {$set: { LOSfeatureitemName : LOSfeatureItem, title : LOSfeatureItem, description : LOSfeatureItem }});
  },
*/
// - End of LOSfeature Methods Block - //

// Start of LOSbenefit Methods Block //

  'LOSbenefititemName.insert'(LOSbenefititemName) {
   check(LOSbenefititemName, String);
 
    // Make sure the user is logged in before inserting a LOSbenefit item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Admindb.insert({
      title: LOSbenefititemName,
      description: LOSbenefititemName,
      LOSbenefititemName: LOSbenefititemName,
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


  'LOSbenefititemName.remove'(documentId) {
    check(documentId, String);

    const LOSbenefit = Admindb.findOne(documentId);
    if (LOSbenefit.private && LOSbenefit.owner !== Meteor.userId()) {
      // If the LOSbenefit item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Admindb.remove(documentId);
  },
  'updateLOSbenefitItem': function(documentId, LOSbenefitItem){
    check(LOSbenefitItem, String); 

    // Make sure the user is logged in before inserting a LOSbenefit item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Admindb.update({ _id: documentId }, {$set: { LOSbenefititemName : LOSbenefitItem, title : LOSbenefitItem, description : LOSbenefitItem }});
  },

// - End of LOSbenefit Methods Block - //





//************************************************//
//************************************************//
//************************************************//
//************************************************//
//************************************************//
//***********   devNotes PAGE         ************//
//************************************************//
//************************************************//
//************************************************//
//************************************************//
//************************************************//





// Start of LOSbuglog Methods Block //

  'LOSbuglogitemName.insert'(LOSbuglogitemName) {
   check(LOSbuglogitemName, String);
 
    // Make sure the user is logged in before inserting a LOSbuglog item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevNotes.insert({
      title: LOSbuglogitemName,
      description: LOSbuglogitemName,
      LOSbuglogitemName: LOSbuglogitemName,
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

  'LOSbuglogitemName.setChecked' (documentId, setChecked) {
    check(setChecked, Boolean);
    DevNotes.update({_id: documentId}, { $set: { checked: setChecked } });
  },

  'LOSbuglogitemName.remove'(documentId) {
    check(documentId, String);

    const LOSbuglog = DevNotes.findOne(documentId);
    if (LOSbuglog.private && LOSbuglog.owner !== Meteor.userId()) {
      // If the LOSbuglog item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevNotes.remove(documentId);
  },
  'updateLOSbuglogItem': function(documentId, LOSbuglogItem){
    check(LOSbuglogItem, String); 

    // Make sure the user is logged in before inserting a LOSbuglog item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevNotes.update({ _id: documentId }, {$set: { LOSbuglogitemName : LOSbuglogItem, title : LOSbuglogItem, description : LOSbuglogItem }});
  },

// - End of LOSbuglog Methods Block - //


// Start of LOSfeatureRequest Methods Block //

  'LOSfeatureRequestitemName.insert'(LOSfeatureRequestitemName) {
   check(LOSfeatureRequestitemName, String);
 
    // Make sure the user is logged in before inserting a LOSfeatureRequest item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevNotes.insert({
      title: LOSfeatureRequestitemName,
      description: LOSfeatureRequestitemName,
      LOSfeatureRequestitemName: LOSfeatureRequestitemName,
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

  'LOSfeatureRequestitemName.setChecked' (documentId, setChecked) {
    check(setChecked, Boolean);
    DevNotes.update({_id: documentId}, { $set: { checked: setChecked } });
  },

  'LOSfeatureRequestitemName.remove'(documentId) {
    check(documentId, String);

    const LOSfeatureRequest = DevNotes.findOne(documentId);
    if (LOSfeatureRequest.private && LOSfeatureRequest.owner !== Meteor.userId()) {
      // If the LOSfeatureRequest item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevNotes.remove(documentId);
  },
  'updateLOSfeatureRequestItem': function(documentId, LOSfeatureRequestItem){
    check(LOSfeatureRequestItem, String); 

    // Make sure the user is logged in before inserting a LOSfeatureRequest item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevNotes.update({ _id: documentId }, {$set: { LOSfeatureRequestitemName : LOSfeatureRequestItem, title : LOSfeatureRequestItem, description : LOSfeatureRequestItem }});
  },

// - End of LOSfeatureRequest Methods Block - //

// Start of LOSdevTodo Methods Block //

  'LOSdevTodoitemName.insert'(LOSdevTodoitemName) {
   check(LOSdevTodoitemName, String);
 
    // Make sure the user is logged in before inserting a LOSdevTodo item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevNotes.insert({
      title: LOSdevTodoitemName,
      description: LOSdevTodoitemName,
      LOSdevTodoitemName: LOSdevTodoitemName,
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


  'LOSdevTodoitemName.remove'(documentId) {
    check(documentId, String);

    const LOSdevTodo = DevNotes.findOne(documentId);
    if (LOSdevTodo.private && LOSdevTodo.owner !== Meteor.userId()) {
      // If the LOSdevTodo item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevNotes.remove(documentId);
  },
  'updateLOSdevTodoItem': function(documentId, LOSdevTodoItem){
    check(LOSdevTodoItem, String); 

    // Make sure the user is logged in before inserting a LOSdevTodo item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevNotes.update({ _id: documentId }, {$set: { LOSdevTodoitemName : LOSdevTodoItem, title : LOSdevTodoItem, description : LOSdevTodoItem }});
  },

// - End of LOSdevTodo Methods Block - //


//************************************************//
//************************************************//
//************************************************//
//************************************************//
//************************************************//
//***********   Inputter PAGE         ************//
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
//***********   Chronos Cal        ***************//
//************************************************//
//************************************************//
//************************************************//
//************************************************//
//************************************************//  

// addEvent//

'addEvent.insert'(title, start, end, description) {
  console.log('yo');
 
    // Make sure the user is logged in before inserting an event item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
      title: title,
      description: description,
      eventitemName: title,
      start: start,
      end: end,
      allDay: false,
      createdAt: new Date(),
      editedAt: new Date(),
      private: true,
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });
  }, 

// update event //

  'updateEvent': function(updatetitle, updatedescription){
     check(updatetitle, String)

    // Make sure the user is logged in before inserting a improveSocietypage item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
/*
    DevTest.update({ _id: doc_id }, {$set: {title : updatetitle}});
*/
  },

  'deleteEvent.remove': function(documentId){
    check(documentId, String)

    const deleteEvent = DevTest.findOne(documentId);
    if (deleteEvent.private && deleteEvent.owner !== Meteor.userId()) {
      // If the howUsleep item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
// - End of ??? Methods Block - //



//************************************************//
//************************************************//
//************************************************//
//************************************************//
//************************************************//
//***********   Gyst PAGE         *****************//
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
//***********   Bio PAGE         *****************//
//************************************************//
//************************************************//
//************************************************//
//************************************************//
//************************************************//



// - Start of ProfilePic Methods Block - //

  'ProfilePicitemName.insert'(ProfilePicitemName) {
   check(ProfilePicitemName, String);
 
    // Make sure the user is logged in before inserting a ProfilePic item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
      title: ProfilePicitemName,
      description: ProfilePicitemName,
      ProfilePicitemName: ProfilePicitemName,
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


  'ProfilePicitemName.remove'(documentId) {
    check(documentId, String);

    const ProfilePic = DevTest.findOne(documentId);
    if (ProfilePic.private && ProfilePic.owner !== Meteor.userId()) {
      // If the ProfilePic item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updateProfilePicItem': function(documentId, ProfilePicItem){
    check(ProfilePicItem, String); 

    // Make sure the user is logged in before inserting a ProfilePic item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { ProfilePicitemName : ProfilePicItem, title : ProfilePicItem, description : ProfilePicItem }});
  },

// - End of ProfilePic Methods Block - //

// Start of userFirstName Methods Block //

  'userFirstNameitemName.insert'(userFirstNameitemName) {
   check(userFirstNameitemName, String);
 
    // Make sure the user is logged in before inserting a userFirstName item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
      title: userFirstNameitemName,
      description: userFirstNameitemName,
      userFirstNameitemName: userFirstNameitemName,
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


  'userFirstNameitemName.remove'(documentId) {
    check(documentId, String);

    const userFirstName = DevTest.findOne(documentId);
    if (userFirstName.private && userFirstName.owner !== Meteor.userId()) {
      // If the userFirstName item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updateuserFirstNameItem': function(documentId, userFirstNameItem){
    check(userFirstNameItem, String); 

    // Make sure the user is logged in before inserting a userFirstName item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { userFirstNameitemName : userFirstNameItem, title : userFirstNameItem, description : userFirstNameItem }});
  },

// - End of userFirstName Methods Block - //

// Start of userMiddleName Methods Block //

  'userMiddleNameitemName.insert'(userMiddleNameitemName) {
   check(userMiddleNameitemName, String);
 
    // Make sure the user is logged in before inserting a userMiddleName item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
      title: userMiddleNameitemName,
      description: userMiddleNameitemName,
      userMiddleNameitemName: userMiddleNameitemName,
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


  'userMiddleNameitemName.remove'(documentId) {
    check(documentId, String);

    const userMiddleName = DevTest.findOne(documentId);
    if (userMiddleName.private && userMiddleName.owner !== Meteor.userId()) {
      // If the userMiddleName item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updateuserMiddleNameItem': function(documentId, userMiddleNameItem){
    check(userMiddleNameItem, String); 

    // Make sure the user is logged in before inserting a userMiddleName item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { userMiddleNameitemName : userMiddleNameItem, title : userMiddleNameItem, description : userMiddleNameItem }});
  },

// - End of userMiddleName Methods Block - //

// Start of userLastName Methods Block //

  'userLastNameitemName.insert'(userLastNameitemName) {
   check(userLastNameitemName, String);
 
    // Make sure the user is logged in before inserting a userLastName item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
      title: userLastNameitemName,
      description: userLastNameitemName,
      userLastNameitemName: userLastNameitemName,
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


  'userLastNameitemName.remove'(documentId) {
    check(documentId, String);

    const userLastName = DevTest.findOne(documentId);
    if (userLastName.private && userLastName.owner !== Meteor.userId()) {
      // If the userLastName item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updateuserLastNameItem': function(documentId, userLastNameItem){
    check(userLastNameItem, String); 

    // Make sure the user is logged in before inserting a userLastName item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { userLastNameitemName : userLastNameItem, title : userLastNameItem, description : userLastNameItem }});
  },

// - End of userLastName Methods Block - //

// Start of userbirthday Methods Block //

  'userbirthdayitemName.insert'(userbirthdayitemName) {
   check(userbirthdayitemName, String);
 
    // Make sure the user is logged in before inserting a userbirthday item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
      title: userbirthdayitemName,
      description: userbirthdayitemName,
      userbirthdayitemName: userbirthdayitemName,
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


  'userbirthdayitemName.remove'(documentId) {
    check(documentId, String);

    const userbirthday = DevTest.findOne(documentId);
    if (userbirthday.private && userbirthday.owner !== Meteor.userId()) {
      // If the userbirthday item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updateuserbirthdayItem': function(documentId, userbirthdayItem){
    check(userbirthdayItem, String); 

    // Make sure the user is logged in before inserting a userbirthday item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { userbirthdayitemName : userbirthdayItem, title : userbirthdayItem, description : userbirthdayItem }});
  },

// - End of userbirthday Methods Block - //




//************************************************//
//************************************************//
//************************************************//
//************************************************//
//************************************************//
//***********   Life Story PAGE         **********//
//************************************************//
//************************************************//
//************************************************//
//************************************************//
//************************************************//



// Start of dayHeadline Methods Block //

  'dayHeadlineitemName.insert'(dayHeadlineitemName) {
   check(dayHeadlineitemName, String);
 
    // Make sure the user is logged in before inserting a dayHeadline item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
      title: dayHeadlineitemName,
      description: dayHeadlineitemName,
      dayHeadlineitemName: dayHeadlineitemName,
      start: new Date(),
      end: new Date(),
      allDay: true,
      createdAt: new Date(),
      editedAt: new Date(),
      private: true,
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });
  }, 


  'dayHeadlineitemName.remove'(documentId) {
    check(documentId, String);

    const dayHeadline = DevTest.findOne(documentId);
    if (dayHeadline.private && dayHeadline.owner !== Meteor.userId()) {
      // If the dayHeadline item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatedayHeadlineItem': function(documentId, dayHeadlineItem){
    check(dayHeadlineItem, String); 

    // Make sure the user is logged in before inserting a dayHeadline item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { dayHeadlineitemName : dayHeadlineItem, title : dayHeadlineItem, description : dayHeadlineItem }});
  },

// - End of dayHeadline Methods Block - //

// Start of dayStory Methods Block //

  'dayStoryitemName.insert'(dayStoryitemName) {
   check(dayStoryitemName, String);
 
    // Make sure the user is logged in before inserting a dayStory item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
      title: dayStoryitemName,
      description: dayStoryitemName,
      dayStoryitemName: dayStoryitemName,
      start: new Date(),
      end: new Date(),
      allDay: true,
      createdAt: new Date(),
      editedAt: new Date(),
      private: true,
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });
  }, 


  'dayStoryitemName.remove'(documentId) {
    check(documentId, String);

    const dayStory = DevTest.findOne(documentId);
    if (dayStory.private && dayStory.owner !== Meteor.userId()) {
      // If the dayStory item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatedayStoryItem': function(documentId, dayStoryItem){
    check(dayStoryItem, String); 

    // Make sure the user is logged in before inserting a dayStory item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { dayStoryitemName : dayStoryItem, title : dayStoryItem, description : dayStoryItem }});
  },

// - End of dayStory Methods Block - //




// Start of jot Methods Block  //

  'jotitemName.insert'(jotitemName, jotDescriptionName) {
   check(jotitemName, String);
 
    // Make sure the user is logged in before inserting a jot item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
      title: jotitemName,
      description: jotDescriptionName,
      jotitemName: jotitemName,
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


  'jotitemName.remove'(documentId) {
    check(documentId, String);

    const jot = DevTest.findOne(documentId);
    if (jot.private && jot.owner !== Meteor.userId()) {
      // If the jot item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatejotItem': function(documentId, jotItem){
    check(jotItem, String); 

    // Make sure the user is logged in before inserting a jot item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { jotitemName : jotItem, title : jotItem, description : jotDescriptionItem }});
  },

// - End of jot Methods Block - //

// Start of jotDescription Methods Block //

  'jotDescriptionitemName.insert'(jotItem, jotDescriptionitemName) {
   check(jotDescriptionitemName, String);
 
    // Make sure the user is logged in before inserting a jotDescription item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
      title: jotItem,
      description: jotDescriptionitemName,
      jotDescriptionitemName: jotDescriptionitemName,
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


  'jotDescriptionitemName.remove'(documentId) {
    check(documentId, String);

    const jotDescription = DevTest.findOne(documentId);
    if (jotDescription.private && jotDescription.owner !== Meteor.userId()) {
      // If the jotDescription item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatejotDescriptionItem': function(documentId, jotDescriptionItem){
    check(jotDescriptionItem, String); 

    // Make sure the user is logged in before inserting a jotDescription item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { jotDescriptionitemName : jotDescriptionItem, title : jotItem, description : jotDescriptionItem }});
  },

// - End of jotDescription Methods Block - //




//************************************************//
//************************************************//
//************************************************//
//************************************************//
//************************************************//
//***********   Sleep PAGE         **************//
//************************************************//
//************************************************//
//************************************************//
//************************************************//
//************************************************//






// Start of howUsleep Methods Block //

  'howUsleepitemName.insert'(howUsleepitemName) {
   check(howUsleepitemName, String);
 
    // Make sure the user is logged in before inserting a howUsleep item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
      title: howUsleepitemName,
      description: howUsleepitemName,
      howUsleepitemName: howUsleepitemName,
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


  'howUsleepitemName.remove'(documentId) {
    check(documentId, String);

    const howUsleep = DevTest.findOne(documentId);
    if (howUsleep.private && howUsleep.owner !== Meteor.userId()) {
      // If the howUsleep item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatehowUsleepItem': function(documentId, howUsleepItem){
    check(howUsleepItem, String); 

    // Make sure the user is logged in before inserting a howUsleep item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { howUsleepitemName : howUsleepItem, title : howUsleepItem, description : howUsleepItem }});
  },

// - End of howUsleep Methods Block - //

// Start of dreamDiary Methods Block //

  'dreamDiaryitemName.insert'(dreamDiaryitemName) {
   check(dreamDiaryitemName, String);
 
    // Make sure the user is logged in before inserting a dreamDiary item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
      title: dreamDiaryitemName,
      description: dreamDiaryitemName,
      dreamDiaryitemName: dreamDiaryitemName,
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


  'dreamDiaryitemName.remove'(documentId) {
    check(documentId, String);

    const dreamDiary = DevTest.findOne(documentId);
    if (dreamDiary.private && dreamDiary.owner !== Meteor.userId()) {
      // If the dreamDiary item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatedreamDiaryItem': function(documentId, dreamDiaryItem){
    check(dreamDiaryItem, String); 

    // Make sure the user is logged in before inserting a dreamDiary item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { dreamDiaryitemName : dreamDiaryItem, title : dreamDiaryItem, description : dreamDiaryItem }});
  },

// - End of dreamDiary Methods Block - //

// Start of nap Methods Block //

  'napitemName.insert'(napitemName) {
   check(napitemName, String);
 
    // Make sure the user is logged in before inserting a nap item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
      title: napitemName,
      description: napitemName,
      napitemName: napitemName,
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


  'napitemName.remove'(documentId) {
    check(documentId, String);

    const nap = DevTest.findOne(documentId);
    if (nap.private && nap.owner !== Meteor.userId()) {
      // If the nap item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatenapItem': function(documentId, napItem){
    check(napItem, String); 

    // Make sure the user is logged in before inserting a nap item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { napitemName : napItem, title : napItem, description : napItem }});
  },

// - End of nap Methods Block - //

// Start of wentToBed Methods Block //

  'wentToBeditemName.insert'(wentToBeditemName) {
   check(wentToBeditemName, String);
 
    // Make sure the user is logged in before inserting a wentToBed item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
      title: wentToBeditemName,
      description: wentToBeditemName,
      wentToBeditemName: wentToBeditemName,
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


  'wentToBeditemName.remove'(documentId) {
    check(documentId, String);

    const wentToBed = DevTest.findOne(documentId);
    if (wentToBed.private && wentToBed.owner !== Meteor.userId()) {
      // If the wentToBed item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatewentToBedItem': function(documentId, wentToBedItem){
    check(wentToBedItem, String); 

    // Make sure the user is logged in before inserting a wentToBed item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { wentToBeditemName : wentToBedItem, title : wentToBedItem, description : wentToBedItem }});
  },

// - End of wentToBed Methods Block - //








//************************************************//
//************************************************//
//************************************************//
//************************************************//
//************************************************//
//***********   wake PAGE         **************//
//************************************************//
//************************************************//
//************************************************//
//************************************************//
//************************************************//








// Start of whenWoke Methods Block //

  'wakeuptime.insert'(wakeuptime, howWakeitemName) {
   check(wakeuptime, String);
 
    // Make sure the user is logged in before inserting a whenWoke item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
      title: ("I Woke Up at: " + new Date()),
      description: howWakeitemName,
      wakeuptime: wakeuptime,
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

  'wakeupitemName.remove'(documentId) {
    check(documentId, String);

    const wakeuptime = DevTest.findOne(documentId);
    if (wakeuptime.private && wakeuptime.owner !== Meteor.userId()) {
      // If the wakeuptime item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },


// Start of outofBed Methods Block //

'outofBedtime.insert'(outofBedtime, howoutofBeditemName) {
   check(outofBedtime, String);
 
    // Make sure the user is logged in before inserting a whenWoke item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
      title: ("I Got Out of Bed at: " + new Date()),
      description: howoutofBeditemName,
      outofBedtime: outofBedtime,
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


// Start of outofBed Methods Block //

  
  'outofBeditemName.remove'(documentId) {
    check(documentId, String);

    const outofBed = DevTest.findOne(documentId);
    if (outofBed.private && outofBed.owner !== Meteor.userId()) {
      // If the outofBed item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updateoutofBedItem': function(documentId, outofBedItem){
    check(outofBedItem, String); 

    // Make sure the user is logged in before inserting a outofBed item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { outofBeditemName : outofBedItem, title : outofBedItem, description : outofBedItem }});
  },

// - End of outofBed Methods Block - //







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
 
    // Make sure the user is logged in before inserting a vision item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const vision = DevTest.findOne(documentId);
    if (vision.private && vision.owner !== Meteor.userId()) {
      // If the vision item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatevisionItem': function(documentId, visionItem){
    check(visionItem, String); 

    // Make sure the user is logged in before inserting a vision item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { visionitemName : visionItem, title : visionItem, description : visionItem }});
  },

// - End of vision Methods Block - //

// Start of opportunity Methods Block //

  'opportunityitemName.insert'(opportunityitemName) {
   check(opportunityitemName, String);
 
    // Make sure the user is logged in before inserting a opportunity item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const opportunity = DevTest.findOne(documentId);
    if (opportunity.private && opportunity.owner !== Meteor.userId()) {
      // If the opportunity item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updateopportunityItem': function(documentId, opportunityItem){
    check(opportunityItem, String); 

    // Make sure the user is logged in before inserting a opportunity item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { opportunityitemName : opportunityItem, title : opportunityItem, description : opportunityItem }});
  },

// - End of opportunity Methods Block - //

// Start of mission Methods Block //

  'missionitemName.insert'(missionitemName) {
   check(missionitemName, String);
 
    // Make sure the user is logged in before inserting a mission item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const mission = DevTest.findOne(documentId);
    if (mission.private && mission.owner !== Meteor.userId()) {
      // If the mission item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatemissionItem': function(documentId, missionItem){
    check(missionItem, String); 

    // Make sure the user is logged in before inserting a mission item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { missionitemName : missionItem, title : missionItem, description : missionItem }});
  },

// - End of mission Methods Block - //

// Start of goal Methods Block //

  'goalitemName.insert'(goalitemName) {
   check(goalitemName, String);
 
    // Make sure the user is logged in before inserting a goal item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const goal = DevTest.findOne(documentId);
    if (goal.private && goal.owner !== Meteor.userId()) {
      // If the goal item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updategoalItem': function(documentId, goalItem){
    check(goalItem, String); 

    // Make sure the user is logged in before inserting a goal item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { goalitemName : goalItem, title : goalItem, description : goalItem }});
  },

// - End of goal Methods Block - //

// Start of strategy Methods Block //

  'strategyitemName.insert'(strategyitemName) {
   check(strategyitemName, String);
 
    // Make sure the user is logged in before inserting a strategy item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const strategy = DevTest.findOne(documentId);
    if (strategy.private && strategy.owner !== Meteor.userId()) {
      // If the strategy item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatestrategyItem': function(documentId, strategyItem){
    check(strategyItem, String); 

    // Make sure the user is logged in before inserting a strategy item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { strategyitemName : strategyItem, title : strategyItem, description : strategyItem }});
  },

// - End of strategy Methods Block - //

// Start of todos Methods Block //

  'todositemName.insert'(todositemName) {
   check(todositemName, String);
 
    // Make sure the user is logged in before inserting a todos item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const todos = DevTest.findOne(documentId);
    if (todos.private && todos.owner !== Meteor.userId()) {
      // If the todos item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatetodosItem': function(documentId, todosItem){
    check(todosItem, String); 

    // Make sure the user is logged in before inserting a todos item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { todositemName : todosItem, title : todosItem, description : todosItem }});
  },

// - End of todos Methods Block - //

// Start of accomplishments Methods Block //

  'accomplishmentsitemName.insert'(accomplishmentsitemName) {
   check(accomplishmentsitemName, String);
 
    // Make sure the user is logged in before inserting a accomplishments item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const accomplishments = DevTest.findOne(documentId);
    if (accomplishments.private && accomplishments.owner !== Meteor.userId()) {
      // If the accomplishments item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updateaccomplishmentsItem': function(documentId, accomplishmentsItem){
    check(accomplishmentsItem, String); 

    // Make sure the user is logged in before inserting a accomplishments item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { accomplishmentsitemName : accomplishmentsItem, title : accomplishmentsItem, description : accomplishmentsItem }});
  },

// - End of accomplishments Methods Block - //

// Start of successes Methods Block //

  'successesitemName.insert'(successesitemName) {
   check(successesitemName, String);
 
    // Make sure the user is logged in before inserting a successes item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const successes = DevTest.findOne(documentId);
    if (successes.private && successes.owner !== Meteor.userId()) {
      // If the successes item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatesuccessesItem': function(documentId, successesItem){
    check(successesItem, String); 

    // Make sure the user is logged in before inserting a successes item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { successesitemName : successesItem, title : successesItem, description : successesItem }});
  },

// - End of successes Methods Block - //

// Start of failure Methods Block //

  'failureitemName.insert'(failureitemName) {
   check(failureitemName, String);
 
    // Make sure the user is logged in before inserting a failure item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const failure = DevTest.findOne(documentId);
    if (failure.private && failure.owner !== Meteor.userId()) {
      // If the failure item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatefailureItem': function(documentId, failureItem){
    check(failureItem, String); 

    // Make sure the user is logged in before inserting a failure item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { failureitemName : failureItem, title : failureItem, description : failureItem }});
  },

// - End of failure Methods Block - //

// Start of strengths Methods Block //

  'strengthsitemName.insert'(strengthsitemName) {
   check(strengthsitemName, String);
 
    // Make sure the user is logged in before inserting a strengths item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const strengths = DevTest.findOne(documentId);
    if (strengths.private && strengths.owner !== Meteor.userId()) {
      // If the strengths item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatestrengthsItem': function(documentId, strengthsItem){
    check(strengthsItem, String); 

    // Make sure the user is logged in before inserting a strengths item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { strengthsitemName : strengthsItem, title : strengthsItem, description : strengthsItem }});
  },

// - End of strengths Methods Block - //

// Start of weaknesses Methods Block //

  'weaknessesitemName.insert'(weaknessesitemName) {
   check(weaknessesitemName, String);
 
    // Make sure the user is logged in before inserting a weaknesses item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const weaknesses = DevTest.findOne(documentId);
    if (weaknesses.private && weaknesses.owner !== Meteor.userId()) {
      // If the weaknesses item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updateweaknessesItem': function(documentId, weaknessesItem){
    check(weaknessesItem, String); 

    // Make sure the user is logged in before inserting a weaknesses item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { weaknessesitemName : weaknessesItem, title : weaknessesItem, description : weaknessesItem }});
  },

// - End of weaknesses Methods Block - //

// Start of goodhabits Methods Block //

  'goodhabitsitemName.insert'(goodhabitsitemName) {
   check(goodhabitsitemName, String);
 
    // Make sure the user is logged in before inserting a goodhabits item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const goodhabits = DevTest.findOne(documentId);
    if (goodhabits.private && goodhabits.owner !== Meteor.userId()) {
      // If the goodhabits item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updategoodhabitsItem': function(documentId, goodhabitsItem){
    check(goodhabitsItem, String); 

    // Make sure the user is logged in before inserting a goodhabits item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { goodhabitsitemName : goodhabitsItem, title : goodhabitsItem, description : goodhabitsItem }});
  },

// - End of goodhabits Methods Block - //

// Start of badhabits Methods Block //

  'badhabitsitemName.insert'(badhabitsitemName) {
   check(badhabitsitemName, String);
 
    // Make sure the user is logged in before inserting a badhabits item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const badhabits = DevTest.findOne(documentId);
    if (badhabits.private && badhabits.owner !== Meteor.userId()) {
      // If the badhabits item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatebadhabitsItem': function(documentId, badhabitsItem){
    check(badhabitsItem, String); 

    // Make sure the user is logged in before inserting a badhabits item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { badhabitsitemName : badhabitsItem, title : badhabitsItem, description : badhabitsItem }});
  },

// - End of badhabits Methods Block - //

// Start of values Methods Block //

  'valuesitemName.insert'(valuesitemName) {
   check(valuesitemName, String);
 
    // Make sure the user is logged in before inserting a values item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const values = DevTest.findOne(documentId);
    if (values.private && values.owner !== Meteor.userId()) {
      // If the values item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatevaluesItem': function(documentId, valuesItem){
    check(valuesItem, String); 

    // Make sure the user is logged in before inserting a values item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { valuesitemName : valuesItem, title : valuesItem, description : valuesItem }});
  },

// - End of values Methods Block - //

// Start of wants Methods Block //

  'wantsitemName.insert'(wantsitemName) {
   check(wantsitemName, String);
 
    // Make sure the user is logged in before inserting a wants item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const wants = DevTest.findOne(documentId);
    if (wants.private && wants.owner !== Meteor.userId()) {
      // If the wants item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatewantsItem': function(documentId, wantsItem){
    check(wantsItem, String); 

    // Make sure the user is logged in before inserting a wants item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { wantsitemName : wantsItem, title : wantsItem, description : wantsItem }});
  },

// - End of wants Methods Block - //

// Start of problems Methods Block //

  'problemsitemName.insert'(problemsitemName) {
   check(problemsitemName, String);
 
    // Make sure the user is logged in before inserting a problems item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const problems = DevTest.findOne(documentId);
    if (problems.private && problems.owner !== Meteor.userId()) {
      // If the problems item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updateproblemsItem': function(documentId, problemsItem){
    check(problemsItem, String); 

    // Make sure the user is logged in before inserting a problems item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { problemsitemName : problemsItem, title : problemsItem, description : problemsItem }});
  },

// - End of problems Methods Block - //

// Start of career Methods Block //

  'careeritemName.insert'(careeritemName) {
   check(careeritemName, String);
 
    // Make sure the user is logged in before inserting a career item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const career = DevTest.findOne(documentId);
    if (career.private && career.owner !== Meteor.userId()) {
      // If the career item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatecareerItem': function(documentId, careerItem){
    check(careerItem, String); 

    // Make sure the user is logged in before inserting a career item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { careeritemName : careerItem, title : careerItem, description : careerItem }});
  },

// - End of career Methods Block - //

// Start of projects Methods Block //

  'projectsitemName.insert'(projectsitemName) {
   check(projectsitemName, String);
 
    // Make sure the user is logged in before inserting a projects item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const projects = DevTest.findOne(documentId);
    if (projects.private && projects.owner !== Meteor.userId()) {
      // If the projects item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updateprojectsItem': function(documentId, projectsItem){
    check(projectsItem, String); 

    // Make sure the user is logged in before inserting a projects item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { projectsitemName : projectsItem, title : projectsItem, description : projectsItem }});
  },

// - End of projects Methods Block - //

// Start of improveAgendapage Methods Block //

  'improveAgendapageitemName.insert'(improveAgendapageitemName) {
   check(improveAgendapageitemName, String);
 
    // Make sure the user is logged in before inserting a improveAgendapage item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const improveAgendapage = DevTest.findOne(documentId);
    if (improveAgendapage.private && improveAgendapage.owner !== Meteor.userId()) {
      // If the improveAgendapage item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updateimproveAgendapageItem': function(documentId, improveAgendapageItem){
    check(improveAgendapageItem, String); 

    // Make sure the user is logged in before inserting a improveAgendapage item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { improveAgendapageitemName : improveAgendapageItem, title : improveAgendapageItem, description : improveAgendapageItem }});
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

    DevTest.insert({
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

    const mood = DevTest.findOne(documentId);
    if (mood.private && mood.owner !== Meteor.userId()) {
      // If the mood item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatemoodItem': function(documentId, moodItem){
    check(moodItem, String); 

    // Make sure the user is logged in before inserting a mood item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { mooditemName : moodItem, title : moodItem, description : moodItem }});
  },

// - End of mood Methods Block - //

// Start of creativeartideas Methods Block //

  'creativeartideasitemName.insert'(creativeartideasitemName) {
   check(creativeartideasitemName, String);
 
    // Make sure the user is logged in before inserting a creativeartideas item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const creativeartideas = DevTest.findOne(documentId);
    if (creativeartideas.private && creativeartideas.owner !== Meteor.userId()) {
      // If the creativeartideas item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatecreativeartideasItem': function(documentId, creativeartideasItem){
    check(creativeartideasItem, String); 

    // Make sure the user is logged in before inserting a creativeartideas item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { creativeartideasitemName : creativeartideasItem, title : creativeartideasItem, description : creativeartideasItem }});
  },

// - End of creativeartideas Methods Block - //

// Start of jokes Methods Block //

  'jokesitemName.insert'(jokesitemName) {
   check(jokesitemName, String);
 
    // Make sure the user is logged in before inserting a jokes item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const jokes = DevTest.findOne(documentId);
    if (jokes.private && jokes.owner !== Meteor.userId()) {
      // If the jokes item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatejokesItem': function(documentId, jokesItem){
    check(jokesItem, String); 

    // Make sure the user is logged in before inserting a jokes item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { jokesitemName : jokesItem, title : jokesItem, description : jokesItem }});
  },

// - End of jokes Methods Block - //

// Start of invention Methods Block //

  'inventionitemName.insert'(inventionitemName) {
   check(inventionitemName, String);
 
    // Make sure the user is logged in before inserting a invention item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const invention = DevTest.findOne(documentId);
    if (invention.private && invention.owner !== Meteor.userId()) {
      // If the invention item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updateinventionItem': function(documentId, inventionItem){
    check(inventionItem, String); 

    // Make sure the user is logged in before inserting a invention item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { inventionitemName : inventionItem, title : inventionItem, description : inventionItem }});
  },

// - End of invention Methods Block - //

// Start of entreprenuerialidea Methods Block //

  'entreprenuerialideaitemName.insert'(entreprenuerialideaitemName) {
   check(entreprenuerialideaitemName, String);
 
    // Make sure the user is logged in before inserting a entreprenuerialidea item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const entreprenuerialidea = DevTest.findOne(documentId);
    if (entreprenuerialidea.private && entreprenuerialidea.owner !== Meteor.userId()) {
      // If the entreprenuerialidea item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updateentreprenuerialideaItem': function(documentId, entreprenuerialideaItem){
    check(entreprenuerialideaItem, String); 

    // Make sure the user is logged in before inserting a entreprenuerialidea item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { entreprenuerialideaitemName : entreprenuerialideaItem, title : entreprenuerialideaItem, description : entreprenuerialideaItem }});
  },

// - End of entreprenuerialidea Methods Block - //


// Start of improveMindpage Methods Block //

  'improveMindpageitemName.insert'(improveMindpageitemName) {
   check(improveMindpageitemName, String);
 
    // Make sure the user is logged in before inserting a improveMindpage item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const improveMindpage = DevTest.findOne(documentId);
    if (improveMindpage.private && improveMindpage.owner !== Meteor.userId()) {
      // If the improveMindpage item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updateimproveMindpageItem': function(documentId, improveMindpageItem){
    check(improveMindpageItem, String); 

    // Make sure the user is logged in before inserting a improveMindpage item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { improveMindpageitemName : improveMindpageItem, title : improveMindpageItem, description : improveMindpageItem }});
  },

// - End of improveMindpage Methods Block - //



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

    DevTest.insert({
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

    const shower = DevTest.findOne(documentId);
    if (shower.private && shower.owner !== Meteor.userId()) {
      // If the shower item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updateshowerItem': function(documentId, showerItem){
    check(showerItem, String); 

    // Make sure the user is logged in before inserting a shower item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { showeritemName : showerItem, title : showerItem, description : showerItem }});
  },

// - End of shower Methods Block - //

// Start of bath Methods Block //

  'bathitemName.insert'(bathitemName) {
   check(bathitemName, String);
 
    // Make sure the user is logged in before inserting a bath item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const bath = DevTest.findOne(documentId);
    if (bath.private && bath.owner !== Meteor.userId()) {
      // If the bath item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatebathItem': function(documentId, bathItem){
    check(bathItem, String); 

    // Make sure the user is logged in before inserting a bath item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { bathitemName : bathItem, title : bathItem, description : bathItem }});
  },

// - End of bath Methods Block - //

// Start of shave Methods Block //

  'shaveitemName.insert'(shaveitemName) {
   check(shaveitemName, String);
 
    // Make sure the user is logged in before inserting a shave item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const shave = DevTest.findOne(documentId);
    if (shave.private && shave.owner !== Meteor.userId()) {
      // If the shave item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updateshaveItem': function(documentId, shaveItem){
    check(shaveItem, String); 

    // Make sure the user is logged in before inserting a shave item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { shaveitemName : shaveItem, title : shaveItem, description : shaveItem }});
  },

// - End of shave Methods Block - //

// Start of nails Methods Block //

  'nailsitemName.insert'(nailsitemName) {
   check(nailsitemName, String);
 
    // Make sure the user is logged in before inserting a nails item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const nails = DevTest.findOne(documentId);
    if (nails.private && nails.owner !== Meteor.userId()) {
      // If the nails item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatenailsItem': function(documentId, nailsItem){
    check(nailsItem, String); 

    // Make sure the user is logged in before inserting a nails item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { nailsitemName : nailsItem, title : nailsItem, description : nailsItem }});
  },

// - End of nails Methods Block - //

// Start of hair Methods Block //

  'hairitemName.insert'(hairitemName) {
   check(hairitemName, String);
 
    // Make sure the user is logged in before inserting a hair item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const hair = DevTest.findOne(documentId);
    if (hair.private && hair.owner !== Meteor.userId()) {
      // If the hair item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatehairItem': function(documentId, hairItem){
    check(hairItem, String); 

    // Make sure the user is logged in before inserting a hair item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { hairitemName : hairItem, title : hairItem, description : hairItem }});
  },

// - End of hair Methods Block - //

// Start of haircondition Methods Block //

  'hairconditionitemName.insert'(hairconditionitemName) {
   check(hairconditionitemName, String);
 
    // Make sure the user is logged in before inserting a haircondition item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const haircondition = DevTest.findOne(documentId);
    if (haircondition.private && haircondition.owner !== Meteor.userId()) {
      // If the haircondition item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatehairconditionItem': function(documentId, hairconditionItem){
    check(hairconditionItem, String); 

    // Make sure the user is logged in before inserting a haircondition item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { hairconditionitemName : hairconditionItem, title : hairconditionItem, description : hairconditionItem }});
  },

// - End of haircondition Methods Block - //

// Start of brushedteeth Methods Block //

  'brushedteethitemName.insert'(brushedteethitemName) {
   check(brushedteethitemName, String);
 
    // Make sure the user is logged in before inserting a brushedteeth item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const brushedteeth = DevTest.findOne(documentId);
    if (brushedteeth.private && brushedteeth.owner !== Meteor.userId()) {
      // If the brushedteeth item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatebrushedteethItem': function(documentId, brushedteethItem){
    check(brushedteethItem, String); 

    // Make sure the user is logged in before inserting a brushedteeth item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { brushedteethitemName : brushedteethItem, title : brushedteethItem, description : brushedteethItem }});
  },

// - End of brushedteeth Methods Block - //

// Start of flossed Methods Block //

  'flosseditemName.insert'(flosseditemName) {
   check(flosseditemName, String);
 
    // Make sure the user is logged in before inserting a flossed item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const flossed = DevTest.findOne(documentId);
    if (flossed.private && flossed.owner !== Meteor.userId()) {
      // If the flossed item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updateflossedItem': function(documentId, flossedItem){
    check(flossedItem, String); 

    // Make sure the user is logged in before inserting a flossed item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { flosseditemName : flossedItem, title : flossedItem, description : flossedItem }});
  },

// - End of flossed Methods Block - //

// Start of deoderant Methods Block //

  'deoderantitemName.insert'(deoderantitemName) {
   check(deoderantitemName, String);
 
    // Make sure the user is logged in before inserting a deoderant item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const deoderant = DevTest.findOne(documentId);
    if (deoderant.private && deoderant.owner !== Meteor.userId()) {
      // If the deoderant item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatedeoderantItem': function(documentId, deoderantItem){
    check(deoderantItem, String); 

    // Make sure the user is logged in before inserting a deoderant item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { deoderantitemName : deoderantItem, title : deoderantItem, description : deoderantItem }});
  },

// - End of deoderant Methods Block - //

// Start of dressedlog Methods Block //

  'dressedlogitemName.insert'(dressedlogitemName) {
   check(dressedlogitemName, String);
 
    // Make sure the user is logged in before inserting a dressedlog item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const dressedlog = DevTest.findOne(documentId);
    if (dressedlog.private && dressedlog.owner !== Meteor.userId()) {
      // If the dressedlog item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatedressedItem': function(documentId, dressedlogItem){
    check(dressedlogItem, String); 

    // Make sure the user is logged in before inserting a dressedlog item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { dressedlogitemName : dressedlogItem, title : dressedlogItem, description : dressedlogItem }});
  },

// - End of dressedlog Methods Block - //

// Start of improveHygienepage Methods Block //

  'improveHygienepageitemName.insert'(improveHygienepageitemName) {
   check(improveHygienepageitemName, String);
 
    // Make sure the user is logged in before inserting a improveHygienepage item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const improveHygienepage = DevTest.findOne(documentId);
    if (improveHygienepage.private && improveHygienepage.owner !== Meteor.userId()) {
      // If the improveHygienepage item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updateimproveHygienepageItem': function(documentId, improveHygienepageItem){
    check(improveHygienepageItem, String); 

    // Make sure the user is logged in before inserting a improveHygienepage item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { improveHygienepageitemName : improveHygienepageItem, title : improveHygienepageItem, description : improveHygienepageItem }});
  },

// - End of improveHygienepage Methods Block - //





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

    DevTest.insert({
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

    const biostats = DevTest.findOne(documentId);
    if (biostats.private && biostats.owner !== Meteor.userId()) {
      // If the biostats item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatebiostatsItem': function(documentId, biostatsItem){
    check(biostatsItem, String); 

    // Make sure the user is logged in before inserting a biostats item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { biostatsitemName : biostatsItem, title : biostatsItem, description : biostatsItem }});
  },

// - End of biostats Methods Block - //

// Start of familyMedhist Methods Block //

  'familyMedhistitemName.insert'(familyMedhistitemName) {
   check(familyMedhistitemName, String);
 
    // Make sure the user is logged in before inserting a familyMedhist item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const familyMedhist = DevTest.findOne(documentId);
    if (familyMedhist.private && familyMedhist.owner !== Meteor.userId()) {
      // If the familyMedhist item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatefamilyMedhistItem': function(documentId, familyMedhistItem){
    check(familyMedhistItem, String); 

    // Make sure the user is logged in before inserting a familyMedhist item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { familyMedhistitemName : familyMedhistItem, title : familyMedhistItem, description : familyMedhistItem }});
  },

// - End of familyMedhist Methods Block - //

// Start of allergies Methods Block //

  'allergiesitemName.insert'(allergiesitemName) {
   check(allergiesitemName, String);
 
    // Make sure the user is logged in before inserting a allergies item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const allergies = DevTest.findOne(documentId);
    if (allergies.private && allergies.owner !== Meteor.userId()) {
      // If the allergies item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updateallergiesItem': function(documentId, allergiesItem){
    check(allergiesItem, String); 

    // Make sure the user is logged in before inserting a allergies item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { allergiesitemName : allergiesItem, title : allergiesItem, description : allergiesItem }});
  },

// - End of allergies Methods Block - //

// Start of symptoms Methods Block //

  'symptomsitemName.insert'(symptomsitemName) {
   check(symptomsitemName, String);
 
    // Make sure the user is logged in before inserting a symptoms item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const symptoms = DevTest.findOne(documentId);
    if (symptoms.private && symptoms.owner !== Meteor.userId()) {
      // If the symptoms item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatesymptomsItem': function(documentId, symptomsItem){
    check(symptomsItem, String); 

    // Make sure the user is logged in before inserting a symptoms item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { symptomsitemName : symptomsItem, title : symptomsItem, description : symptomsItem }});
  },

// - End of symptoms Methods Block - //

// Start of bodyachelog Methods Block //

  'bodyachelogitemName.insert'(bodyachelogitemName) {
   check(bodyachelogitemName, String);
 
    // Make sure the user is logged in before inserting a bodyachelog item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const bodyachelog = DevTest.findOne(documentId);
    if (bodyachelog.private && bodyachelog.owner !== Meteor.userId()) {
      // If the bodyachelog item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatebodyachelogItem': function(documentId, bodyachelogItem){
    check(bodyachelogItem, String); 
    

    // Make sure the user is logged in before inserting a bodyachelog item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { bodyachelogitemName : bodyachelogItem, title : bodyachelogItem, description : bodyachelogItem }});
  },

// - End of bodyachelog Methods Block - //

// Start of sicklog Methods Block //

  'sicklogitemName.insert'(sicklogitemName) {
   check(sicklogitemName, String);
 
    // Make sure the user is logged in before inserting a sicklog item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const sicklog = DevTest.findOne(documentId);
    if (sicklog.private && sicklog.owner !== Meteor.userId()) {
      // If the sicklog item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatesicklogItem': function(documentId, sicklogItem){
    check(sicklogItem, String); 

    // Make sure the user is logged in before inserting a sicklog item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { sicklogitemName : sicklogItem, title : sicklogItem, description : sicklogItem }});
  },

// - End of sicklog Methods Block - //

// Start of medhistory Methods Block //

  'medhistoryitemName.insert'(medhistoryitemName) {
   check(medhistoryitemName, String);
 
    // Make sure the user is logged in before inserting a medhistory item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const medhistory = DevTest.findOne(documentId);
    if (medhistory.private && medhistory.owner !== Meteor.userId()) {
      // If the medhistory item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatemedhistoryItem': function(documentId, medhistoryItem){
    check(medhistoryItem, String); 

    // Make sure the user is logged in before inserting a medhistory item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { medhistoryitemName : medhistoryItem, title : medhistoryItem, description : medhistoryItem }});
  },

// - End of medhistory Methods Block - //

// Start of medicine Methods Block //

  'medicineitemName.insert'(medicineitemName) {
   check(medicineitemName, String);
 
    // Make sure the user is logged in before inserting a medicine item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const medicine = DevTest.findOne(documentId);
    if (medicine.private && medicine.owner !== Meteor.userId()) {
      // If the medicine item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatemedicineItem': function(documentId, medicineItem){
    check(medicineItem, String); 

    // Make sure the user is logged in before inserting a medicine item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { medicineitemName : medicineItem, title : medicineItem, description : medicineItem }});
  },

// - End of medicine Methods Block - //

// Start of dentallog Methods Block //

  'dentallogitemName.insert'(dentallogitemName) {
   check(dentallogitemName, String);
 
    // Make sure the user is logged in before inserting a dentallog item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const dentallog = DevTest.findOne(documentId);
    if (dentallog.private && dentallog.owner !== Meteor.userId()) {
      // If the dentallog item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatedentallogItem': function(documentId, dentallogItem){
    check(dentallogItem, String); 

    // Make sure the user is logged in before inserting a dentallog item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { dentallogitemName : dentallogItem, title : dentallogItem, description : dentallogItem }});
  },

// - End of dentallog Methods Block - //

// Start of dentistryhist Methods Block //

  'dentistryhistitemName.insert'(dentistryhistitemName) {
   check(dentistryhistitemName, String);
 
    // Make sure the user is logged in before inserting a dentistryhist item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const dentistryhist = DevTest.findOne(documentId);
    if (dentistryhist.private && dentistryhist.owner !== Meteor.userId()) {
      // If the dentistryhist item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatedentistryhistItem': function(documentId, dentistryhistItem){
    check(dentistryhistItem, String); 

    // Make sure the user is logged in before inserting a dentistryhist item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { dentistryhistitemName : dentistryhistItem, title : dentistryhistItem, description : dentistryhistItem }});
  },

// - End of dentistryhist Methods Block - //

// Start of visionhist Methods Block //

  'visionhistitemName.insert'(visionhistitemName) {
   check(visionhistitemName, String);
 
    // Make sure the user is logged in before inserting a visionhist item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const visionhist = DevTest.findOne(documentId);
    if (visionhist.private && visionhist.owner !== Meteor.userId()) {
      // If the visionhist item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatevisionhistItem': function(documentId, visionhistItem){
    check(visionhistItem, String); 

    // Make sure the user is logged in before inserting a visionhist item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { visionhistitemName : visionhistItem, title : visionhistItem, description : visionhistItem }});
  },

// - End of visionhist Methods Block - //

// Start of pooplog Methods Block //

  'pooplogitemName.insert'(pooplogitemName) {
   check(pooplogitemName, String);
 
    // Make sure the user is logged in before inserting a pooplog item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const pooplog = DevTest.findOne(documentId);
    if (pooplog.private && pooplog.owner !== Meteor.userId()) {
      // If the pooplog item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatepooplogItem': function(documentId, pooplogItem){
    check(pooplogItem, String); 

    // Make sure the user is logged in before inserting a pooplog item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { pooplogitemName : pooplogItem, title : pooplogItem, description : pooplogItem }});
  },

// - End of pooplog Methods Block - //

// Start of peelog Methods Block //

  'peelogitemName.insert'(peelogitemName) {
   check(peelogitemName, String);
 
    // Make sure the user is logged in before inserting a peelog item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const peelog = DevTest.findOne(documentId);
    if (peelog.private && peelog.owner !== Meteor.userId()) {
      // If the peelog item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatepeelogItem': function(documentId, peelogItem){
    check(peelogItem, String); 

    // Make sure the user is logged in before inserting a peelog item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { peelogitemName : peelogItem, title : peelogItem, description : peelogItem }});
  },

// - End of peelog Methods Block - //

// Start of improveHealthpage Methods Block //

  'improveHealthpageitemName.insert'(improveHealthpageitemName) {
   check(improveHealthpageitemName, String);
 
    // Make sure the user is logged in before inserting a improveHealthpage item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const improveHealthpage = DevTest.findOne(documentId);
    if (improveHealthpage.private && improveHealthpage.owner !== Meteor.userId()) {
      // If the improveHealthpage item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updateimproveHealthpageItem': function(documentId, improveHealthpageItem){
    check(improveHealthpageItem, String); 

    // Make sure the user is logged in before inserting a improveHealthpage item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { improveHealthpageitemName : improveHealthpageItem, title : improveHealthpageItem, description : improveHealthpageItem }});
  },

// - End of improveHealthpage Methods Block - //



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

    DevTest.insert({
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

    const eathistory = DevTest.findOne(documentId);
    if (eathistory.private && eathistory.owner !== Meteor.userId()) {
      // If the eathistory item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updateeathistoryItem': function(documentId, eathistoryItem){
    check(eathistoryItem, String); 

    // Make sure the user is logged in before inserting a eathistory item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { eathistoryitemName : eathistoryItem, title : eathistoryItem, description : eathistoryItem }});
  },

// - End of eathistory Methods Block - //

// Start of drinkhistory Methods Block //

  'drinkhistoryitemName.insert'(drinkhistoryitemName) {
   check(drinkhistoryitemName, String);
 
    // Make sure the user is logged in before inserting a drinkhistory item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const drinkhistory = DevTest.findOne(documentId);
    if (drinkhistory.private && drinkhistory.owner !== Meteor.userId()) {
      // If the drinkhistory item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatedrinkhistoryItem': function(documentId, drinkhistoryItem){
    check(drinkhistoryItem, String); 

    // Make sure the user is logged in before inserting a drinkhistory item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { drinkhistoryitemName : drinkhistoryItem, title : drinkhistoryItem, description : drinkhistoryItem }});
  },

// - End of drinkhistory Methods Block - //

// Start of alcohollog Methods Block //

  'alcohollogitemName.insert'(alcohollogitemName) {
   check(alcohollogitemName, String);
 
    // Make sure the user is logged in before inserting a alcohollog item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const alcohollog = DevTest.findOne(documentId);
    if (alcohollog.private && alcohollog.owner !== Meteor.userId()) {
      // If the alcohollog item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatealcohollogItem': function(documentId, alcohollogItem){
    check(alcohollogItem, String); 

    // Make sure the user is logged in before inserting a alcohollog item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { alcohollogitemName : alcohollogItem, title : alcohollogItem, description : alcohollogItem }});
  },

// - End of alcohollog Methods Block - //

// Start of druglog Methods Block //

  'druglogitemName.insert'(druglogitemName) {
   check(druglogitemName, String);
 
    // Make sure the user is logged in before inserting a druglog item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const druglog = DevTest.findOne(documentId);
    if (druglog.private && druglog.owner !== Meteor.userId()) {
      // If the druglog item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatedruglogItem': function(documentId, druglogItem){
    check(druglogItem, String); 

    // Make sure the user is logged in before inserting a druglog item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { druglogitemName : druglogItem, title : druglogItem, description : druglogItem }});
  },

// - End of druglog Methods Block - //

// Start of ingredientinventory Methods Block //

  'ingredientinventoryitemName.insert'(ingredientinventoryitemName) {
   check(ingredientinventoryitemName, String);
 
    // Make sure the user is logged in before inserting a ingredientinventory item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const ingredientinventory = DevTest.findOne(documentId);
    if (ingredientinventory.private && ingredientinventory.owner !== Meteor.userId()) {
      // If the ingredientinventory item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updateingredientinventoryItem': function(documentId, ingredientinventoryItem){
    check(ingredientinventoryItem, String); 

    // Make sure the user is logged in before inserting a ingredientinventory item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { ingredientinventoryitemName : ingredientinventoryItem, title : ingredientinventoryItem, description : ingredientinventoryItem }});
  },

// - End of ingredientinventory Methods Block - //

// Start of shoppinglist Methods Block //

  'shoppinglistitemName.insert'(shoppinglistitemName) {
   check(shoppinglistitemName, String);
 
    // Make sure the user is logged in before inserting a shoppinglist item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const shoppinglist = DevTest.findOne(documentId);
    if (shoppinglist.private && shoppinglist.owner !== Meteor.userId()) {
      // If the shoppinglist item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updateshoppinglistItem': function(documentId, shoppinglistItem){
    check(shoppinglistItem, String); 

    // Make sure the user is logged in before inserting a shoppinglist item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { shoppinglistitemName : shoppinglistItem, title : shoppinglistItem, description : shoppinglistItem }});
  },

// - End of shoppinglist Methods Block - //

// Start of menu Methods Block //

  'menuitemName.insert'(menuitemName) {
   check(menuitemName, String);
 
    // Make sure the user is logged in before inserting a menu item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const menu = DevTest.findOne(documentId);
    if (menu.private && menu.owner !== Meteor.userId()) {
      // If the menu item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatemenuItem': function(documentId, menuItem){
    check(menuItem, String); 

    // Make sure the user is logged in before inserting a menu item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { menuitemName : menuItem, title : menuItem, description : menuItem }});
  },

// - End of menu Methods Block - //

// Start of menuplan Methods Block //

  'menuplanitemName.insert'(menuplanitemName) {
   check(menuplanitemName, String);
 
    // Make sure the user is logged in before inserting a menuplan item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const menuplan = DevTest.findOne(documentId);
    if (menuplan.private && menuplan.owner !== Meteor.userId()) {
      // If the menuplan item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatemenuplanItem': function(documentId, menuplanItem){
    check(menuplanItem, String); 

    // Make sure the user is logged in before inserting a menuplan item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { menuplanitemName : menuplanItem, title : menuplanItem, description : menuplanItem }});
  },

// - End of menuplan Methods Block - //

// Start of improveFoodpage Methods Block //

  'improveFoodpageitemName.insert'(improveFoodpageitemName) {
   check(improveFoodpageitemName, String);
 
    // Make sure the user is logged in before inserting a improveFoodpage item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const improveFoodpage = DevTest.findOne(documentId);
    if (improveFoodpage.private && improveFoodpage.owner !== Meteor.userId()) {
      // If the improveFoodpage item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updateimproveFoodpageItem': function(documentId, improveFoodpageItem){
    check(improveFoodpageItem, String); 

    // Make sure the user is logged in before inserting a improveFoodpage item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { improveFoodpageitemName : improveFoodpageItem, title : improveFoodpageItem, description : improveFoodpageItem }});
  },

// - End of improveFoodpage Methods Block - //



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

    DevTest.insert({
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

    const fitnesslog = DevTest.findOne(documentId);
    if (fitnesslog.private && fitnesslog.owner !== Meteor.userId()) {
      // If the fitnesslog item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatefitnesslogItem': function(documentId, fitnesslogItem){
    check(fitnesslogItem, String); 

    // Make sure the user is logged in before inserting a fitnesslog item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { fitnesslogitemName : fitnesslogItem, title : fitnesslogItem, description : fitnesslogItem }});
  },

// - End of fitnesslog Methods Block - //

// Start of fitnessprogram Methods Block //

  'fitnessprogramitemName.insert'(fitnessprogramitemName) {
   check(fitnessprogramitemName, String);
 
    // Make sure the user is logged in before inserting a fitnessprogram item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const fitnessprogram = DevTest.findOne(documentId);
    if (fitnessprogram.private && fitnessprogram.owner !== Meteor.userId()) {
      // If the fitnessprogram item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatefitnessprogramItem': function(documentId, fitnessprogramItem){
    check(fitnessprogramItem, String); 

    // Make sure the user is logged in before inserting a fitnessprogram item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { fitnessprogramitemName : fitnessprogramItem, title : fitnessprogramItem, description : fitnessprogramItem }});
  },

// - End of fitnessprogram Methods Block - //

// Start of improveFitpage Methods Block //

  'improveFitpageitemName.insert'(improveFitpageitemName) {
   check(improveFitpageitemName, String);
 
    // Make sure the user is logged in before inserting a improveFitpage item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const improveFitpage = DevTest.findOne(documentId);
    if (improveFitpage.private && improveFitpage.owner !== Meteor.userId()) {
      // If the improveFitpage item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updateimproveFitpageItem': function(documentId, improveFitpageItem){
    check(improveFitpageItem, String); 

    // Make sure the user is logged in before inserting a improveFitpage item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { improveFitpageitemName : improveFitpageItem, title : improveFitpageItem, description : improveFitpageItem }});
  },

// - End of improveFitpage Methods Block - //


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

    DevTest.insert({
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

    const networth = DevTest.findOne(documentId);
    if (networth.private && networth.owner !== Meteor.userId()) {
      // If the networth item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatenetworthItem': function(documentId, networthItem){
    check(networthItem, String); 

    // Make sure the user is logged in before inserting a networth item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { networthitemName : networthItem, title : networthItem, description : networthItem }});
  },

// - End of networth Methods Block - //

// Start of fireplan Methods Block //

  'fireplanitemName.insert'(fireplanitemName) {
   check(fireplanitemName, String);
 
    // Make sure the user is logged in before inserting a fireplan item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const fireplan = DevTest.findOne(documentId);
    if (fireplan.private && fireplan.owner !== Meteor.userId()) {
      // If the fireplan item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatefireplanItem': function(documentId, fireplanItem){
    check(fireplanItem, String); 

    // Make sure the user is logged in before inserting a fireplan item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { fireplanitemName : fireplanItem, title : fireplanItem, description : fireplanItem }});
  },

// - End of fireplan Methods Block - //

// Start of earningsrate Methods Block //

  'earningsrateitemName.insert'(earningsrateitemName) {
   check(earningsrateitemName, String);
 
    // Make sure the user is logged in before inserting a earningsrate item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const earningsrate = DevTest.findOne(documentId);
    if (earningsrate.private && earningsrate.owner !== Meteor.userId()) {
      // If the earningsrate item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updateearningsrateItem': function(documentId, earningsrateItem){
    check(earningsrateItem, String); 

    // Make sure the user is logged in before inserting a earningsrate item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { earningsrateitemName : earningsrateItem, title : earningsrateItem, description : earningsrateItem }});
  },

// - End of earningsrate Methods Block - //

// Start of spendingrate Methods Block //

  'spendingrateitemName.insert'(spendingrateitemName) {
   check(spendingrateitemName, String);
 
    // Make sure the user is logged in before inserting a spendingrate item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const spendingrate = DevTest.findOne(documentId);
    if (spendingrate.private && spendingrate.owner !== Meteor.userId()) {
      // If the spendingrate item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatespendingrateItem': function(documentId, spendingrateItem){
    check(spendingrateItem, String); 

    // Make sure the user is logged in before inserting a spendingrate item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { spendingrateitemName : spendingrateItem, title : spendingrateItem, description : spendingrateItem }});
  },

// - End of spendingrate Methods Block - //

// Start of assets Methods Block //

  'assetsitemName.insert'(assetsitemName) {
   check(assetsitemName, String);
 
    // Make sure the user is logged in before inserting a assets item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const assets = DevTest.findOne(documentId);
    if (assets.private && assets.owner !== Meteor.userId()) {
      // If the assets item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updateassetsItem': function(documentId, assetsItem){
    check(assetsItem, String); 

    // Make sure the user is logged in before inserting a assets item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { assetsitemName : assetsItem, title : assetsItem, description : assetsItem }});
  },

// - End of assets Methods Block - //

// Start of borrowdebt Methods Block //

  'borrowdebtitemName.insert'(borrowdebtitemName) {
   check(borrowdebtitemName, String);
 
    // Make sure the user is logged in before inserting a borrowdebt item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const borrowdebt = DevTest.findOne(documentId);
    if (borrowdebt.private && borrowdebt.owner !== Meteor.userId()) {
      // If the borrowdebt item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updateborrowdebtItem': function(documentId, borrowdebtItem){
    check(borrowdebtItem, String); 

    // Make sure the user is logged in before inserting a borrowdebt item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { borrowdebtitemName : borrowdebtItem, title : borrowdebtItem, description : borrowdebtItem }});
  },

// - End of borrowdebt Methods Block - //

// Start of savingsrate Methods Block //

  'savingsrateitemName.insert'(savingsrateitemName) {
   check(savingsrateitemName, String);
 
    // Make sure the user is logged in before inserting a savingsrate item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const savingsrate = DevTest.findOne(documentId);
    if (savingsrate.private && savingsrate.owner !== Meteor.userId()) {
      // If the savingsrate item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatesavingsrateItem': function(documentId, savingsrateItem){
    check(savingsrateItem, String); 

    // Make sure the user is logged in before inserting a savingsrate item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { savingsrateitemName : savingsrateItem, title : savingsrateItem, description : savingsrateItem }});
  },

// - End of savingsrate Methods Block - //

// Start of runrate Methods Block //

  'runrateitemName.insert'(runrateitemName) {
   check(runrateitemName, String);
 
    // Make sure the user is logged in before inserting a runrate item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const runrate = DevTest.findOne(documentId);
    if (runrate.private && runrate.owner !== Meteor.userId()) {
      // If the runrate item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updaterunrateItem': function(documentId, runrateItem){
    check(runrateItem, String); 

    // Make sure the user is logged in before inserting a runrate item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { runrateitemName : runrateItem, title : runrateItem, description : runrateItem }});
  },

// - End of runrate Methods Block - //

// Start of debttoequity Methods Block //

  'debttoequityitemName.insert'(debttoequityitemName) {
   check(debttoequityitemName, String);
 
    // Make sure the user is logged in before inserting a debttoequity item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const debttoequity = DevTest.findOne(documentId);
    if (debttoequity.private && debttoequity.owner !== Meteor.userId()) {
      // If the debttoequity item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatedebttoequityItem': function(documentId, debttoequityItem){
    check(debttoequityItem, String); 

    // Make sure the user is logged in before inserting a debttoequity item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { debttoequityitemName : debttoequityItem, title : debttoequityItem, description : debttoequityItem }});
  },

// - End of debttoequity Methods Block - //

// Start of budget Methods Block //

  'budgetitemName.insert'(budgetitemName) {
   check(budgetitemName, String);
 
    // Make sure the user is logged in before inserting a budget item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const budget = DevTest.findOne(documentId);
    if (budget.private && budget.owner !== Meteor.userId()) {
      // If the budget item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatebudgetItem': function(documentId, budgetItem){
    check(budgetItem, String); 

    // Make sure the user is logged in before inserting a budget item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { budgetitemName : budgetItem, title : budgetItem, description : budgetItem }});
  },

// - End of budget Methods Block - //

// Start of improveMoneypage Methods Block //

  'improveMoneypageitemName.insert'(improveMoneypageitemName) {
   check(improveMoneypageitemName, String);
 
    // Make sure the user is logged in before inserting a improveMoneypage item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const improveMoneypage = DevTest.findOne(documentId);
    if (improveMoneypage.private && improveMoneypage.owner !== Meteor.userId()) {
      // If the improveMoneypage item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updateimproveMoneypageItem': function(documentId, improveMoneypageItem){
    check(improveMoneypageItem, String); 

    // Make sure the user is logged in before inserting a improveMoneypage item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { improveMoneypageitemName : improveMoneypageItem, title : improveMoneypageItem, description : improveMoneypageItem }});
  },

// - End of improveMoneypage Methods Block - //



//************************************************//
//************************************************//
//************************************************//
//************************************************//
//************************************************//
//***********    Space & PLACE PAGE       ********//
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

    DevTest.insert({
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

    const placesbeen = DevTest.findOne(documentId);
    if (placesbeen.private && placesbeen.owner !== Meteor.userId()) {
      // If the placesbeen item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updateplacesbeenItem': function(documentId, placesbeenItem){
    check(placesbeenItem, String); 

    // Make sure the user is logged in before inserting a placesbeen item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { placesbeenitemName : placesbeenItem, title : placesbeenItem, description : placesbeenItem }});
  },

// - End of placesbeen Methods Block - //

// Start of placeswant Methods Block //

  'placeswantitemName.insert'(placeswantitemName) {
   check(placeswantitemName, String);
 
    // Make sure the user is logged in before inserting a placeswant item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const placeswant = DevTest.findOne(documentId);
    if (placeswant.private && placeswant.owner !== Meteor.userId()) {
      // If the placeswant item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updateplaceswantItem': function(documentId, placeswantItem){
    check(placeswantItem, String); 

    // Make sure the user is logged in before inserting a placeswant item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { placeswantitemName : placeswantItem, title : placeswantItem, description : placeswantItem }});
  },

// - End of placeswant Methods Block - //

// Start of placesplanner Methods Block //

  'placesplanneritemName.insert'(placesplanneritemName) {
   check(placesplanneritemName, String);
 
    // Make sure the user is logged in before inserting a placesplanner item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const placesplanner = DevTest.findOne(documentId);
    if (placesplanner.private && placesplanner.owner !== Meteor.userId()) {
      // If the placesplanner item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updateplacesplannerItem': function(documentId, placesplannerItem){
    check(placesplannerItem, String); 

    // Make sure the user is logged in before inserting a placesplanner item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { placesplanneritemName : placesplannerItem, title : placesplannerItem, description : placesplannerItem }});
  },

// - End of placesplanner Methods Block - //

// Start of improveSpacepage Methods Block //

  'improveSpacepageitemName.insert'(improveSpacepageitemName) {
   check(improveSpacepageitemName, String);
 
    // Make sure the user is logged in before inserting a improveSpacepage item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const improveSpacepage = DevTest.findOne(documentId);
    if (improveSpacepage.private && improveSpacepage.owner !== Meteor.userId()) {
      // If the improveSpacepage item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updateimproveSpacepageItem': function(documentId, improveSpacepageItem){
    check(improveSpacepageItem, String); 

    // Make sure the user is logged in before inserting a improveSpacepage item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { improveSpacepageitemName : improveSpacepageItem, title : improveSpacepageItem, description : improveSpacepageItem }});
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

    DevTest.insert({
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

    const stuffhave = DevTest.findOne(documentId);
    if (stuffhave.private && stuffhave.owner !== Meteor.userId()) {
      // If the stuffhave item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatestuffhaveItem': function(documentId, stuffhaveItem){
    check(stuffhaveItem, String); 

    // Make sure the user is logged in before inserting a stuffhave item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { stuffhaveitemName : stuffhaveItem, title : stuffhaveItem, description : stuffhaveItem }});
  },

// - End of stuffhave Methods Block - //

// Start of stufflost Methods Block //

  'stufflostitemName.insert'(stufflostitemName) {
   check(stufflostitemName, String);
 
    // Make sure the user is logged in before inserting a stufflost item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const stufflost = DevTest.findOne(documentId);
    if (stufflost.private && stufflost.owner !== Meteor.userId()) {
      // If the stufflost item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatestufflostItem': function(documentId, stufflostItem){
    check(stufflostItem, String); 

    // Make sure the user is logged in before inserting a stufflost item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { stufflostitemName : stufflostItem, title : stufflostItem, description : stufflostItem }});
  },

// - End of stufflost Methods Block - //

// Start of stufflent Methods Block //

  'stufflentitemName.insert'(stufflentitemName) {
   check(stufflentitemName, String);
 
    // Make sure the user is logged in before inserting a stufflent item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const stufflent = DevTest.findOne(documentId);
    if (stufflent.private && stufflent.owner !== Meteor.userId()) {
      // If the stufflent item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatestufflentItem': function(documentId, stufflentItem){
    check(stufflentItem, String); 

    // Make sure the user is logged in before inserting a stufflent item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { stufflentitemName : stufflentItem, title : stufflentItem, description : stufflentItem }});
  },

// - End of stufflent Methods Block - //

// Start of stuffborrowed Methods Block //

  'stuffborroweditemName.insert'(stuffborroweditemName) {
   check(stuffborroweditemName, String);
 
    // Make sure the user is logged in before inserting a stuffborrowed item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const stuffborrowed = DevTest.findOne(documentId);
    if (stuffborrowed.private && stuffborrowed.owner !== Meteor.userId()) {
      // If the stuffborrowed item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatestuffborrowedItem': function(documentId, stuffborrowedItem){
    check(stuffborrowedItem, String); 

    // Make sure the user is logged in before inserting a stuffborrowed item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { stuffborroweditemName : stuffborrowedItem, title : stuffborrowedItem, description : stuffborrowedItem }});
  },

// - End of stuffborrowed Methods Block - //

// Start of stuffwant Methods Block //

  'stuffwantitemName.insert'(stuffwantitemName) {
   check(stuffwantitemName, String);
 
    // Make sure the user is logged in before inserting a stuffwant item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const stuffwant = DevTest.findOne(documentId);
    if (stuffwant.private && stuffwant.owner !== Meteor.userId()) {
      // If the stuffwant item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatestuffwantItem': function(documentId, stuffwantItem){
    check(stuffwantItem, String); 

    // Make sure the user is logged in before inserting a stuffwant item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { stuffwantitemName : stuffwantItem, title : stuffwantItem, description : stuffwantItem }});
  },

// - End of stuffwant Methods Block - //

// Start of stuffplanner Methods Block //

  'stuffplanneritemName.insert'(stuffplanneritemName) {
   check(stuffplanneritemName, String);
 
    // Make sure the user is logged in before inserting a stuffplanner item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const stuffplanner = DevTest.findOne(documentId);
    if (stuffplanner.private && stuffplanner.owner !== Meteor.userId()) {
      // If the stuffplanner item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatestuffplannerItem': function(documentId, stuffplannerItem){
    check(stuffplannerItem, String); 

    // Make sure the user is logged in before inserting a stuffplanner item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { stuffplanneritemName : stuffplannerItem, title : stuffplannerItem, description : stuffplannerItem }});
  },

// - End of stuffplanner Methods Block - //

// Start of improveStuffpage Methods Block //

  'improveStuffpageitemName.insert'(improveStuffpageitemName) {
   check(improveStuffpageitemName, String);
 
    // Make sure the user is logged in before inserting a improveStuffpage item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const improveStuffpage = DevTest.findOne(documentId);
    if (improveStuffpage.private && improveStuffpage.owner !== Meteor.userId()) {
      // If the improveStuffpage item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updateimproveStuffpageItem': function(documentId, improveStuffpageItem){
    check(improveStuffpageItem, String); 

    // Make sure the user is logged in before inserting a improveStuffpage item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { improveStuffpageitemName : improveStuffpageItem, title : improveStuffpageItem, description : improveStuffpageItem }});
  },

// - End of improveStuffpage Methods Block - //

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

    DevTest.insert({
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

    const choreslog = DevTest.findOne(documentId);
    if (choreslog.private && choreslog.owner !== Meteor.userId()) {
      // If the choreslog item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatechoreslogItem': function(documentId, choreslogItem){
    check(choreslogItem, String); 

    // Make sure the user is logged in before inserting a choreslog item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { choreslogitemName : choreslogItem, title : choreslogItem, description : choreslogItem }});
  },

// - End of choreslog Methods Block - //

// Start of chorestodo Methods Block //

  'chorestodoitemName.insert'(chorestodoitemName) {
   check(chorestodoitemName, String);
 
    // Make sure the user is logged in before inserting a chorestodo item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const chorestodo = DevTest.findOne(documentId);
    if (chorestodo.private && chorestodo.owner !== Meteor.userId()) {
      // If the chorestodo item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatechorestodoItem': function(documentId, chorestodoItem){
    check(chorestodoItem, String); 

    // Make sure the user is logged in before inserting a chorestodo item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { chorestodoitemName : chorestodoItem, title : chorestodoItem, description : chorestodoItem }});
  },

// - End of chorestodo Methods Block - //

// Start of homemess Methods Block //

  'homemessitemName.insert'(homemessitemName) {
   check(homemessitemName, String);
 
    // Make sure the user is logged in before inserting a homemess item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const homemess = DevTest.findOne(documentId);
    if (homemess.private && homemess.owner !== Meteor.userId()) {
      // If the homemess item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatehomemessItem': function(documentId, homemessItem){
    check(homemessItem, String); 

    // Make sure the user is logged in before inserting a homemess item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { homemessitemName : homemessItem, title : homemessItem, description : homemessItem }});
  },

// - End of homemess Methods Block - //

// Start of hometightiness Methods Block //

  'hometightinessitemName.insert'(hometightinessitemName) {
   check(hometightinessitemName, String);
 
    // Make sure the user is logged in before inserting a hometightiness item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const hometightiness = DevTest.findOne(documentId);
    if (hometightiness.private && hometightiness.owner !== Meteor.userId()) {
      // If the hometightiness item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatehometightinessItem': function(documentId, hometightinessItem){
    check(hometightinessItem, String); 

    // Make sure the user is logged in before inserting a hometightiness item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { hometightinessitemName : hometightinessItem, title : hometightinessItem, description : hometightinessItem }});
  },

// - End of hometightiness Methods Block - //

// Start of carmess Methods Block //

  'carmessitemName.insert'(carmessitemName) {
   check(carmessitemName, String);
 
    // Make sure the user is logged in before inserting a carmess item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const carmess = DevTest.findOne(documentId);
    if (carmess.private && carmess.owner !== Meteor.userId()) {
      // If the carmess item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatecarmessItem': function(documentId, carmessItem){
    check(carmessItem, String); 

    // Make sure the user is logged in before inserting a carmess item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { carmessitemName : carmessItem, title : carmessItem, description : carmessItem }});
  },

// - End of carmess Methods Block - //

// Start of cartightiness Methods Block //

  'cartightinessitemName.insert'(cartightinessitemName) {
   check(cartightinessitemName, String);
 
    // Make sure the user is logged in before inserting a cartightiness item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const cartightiness = DevTest.findOne(documentId);
    if (cartightiness.private && cartightiness.owner !== Meteor.userId()) {
      // If the cartightiness item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatecartightinessItem': function(documentId, cartightinessItem){
    check(cartightinessItem, String); 

    // Make sure the user is logged in before inserting a cartightiness item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { cartightinessitemName : cartightinessItem, title : cartightinessItem, description : cartightinessItem }});
  },

// - End of cartightiness Methods Block - //

// Start of workmess Methods Block //

  'workmessitemName.insert'(workmessitemName) {
   check(workmessitemName, String);
 
    // Make sure the user is logged in before inserting a workmess item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const workmess = DevTest.findOne(documentId);
    if (workmess.private && workmess.owner !== Meteor.userId()) {
      // If the workmess item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updateworkmessItem': function(documentId, workmessItem){
    check(workmessItem, String); 

    // Make sure the user is logged in before inserting a workmess item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { workmessitemName : workmessItem, title : workmessItem, description : workmessItem }});
  },

// - End of workmess Methods Block - //

// Start of workspacetightiness Methods Block //

  'workspacetightinessitemName.insert'(workspacetightinessitemName) {
   check(workspacetightinessitemName, String);
 
    // Make sure the user is logged in before inserting a workspacetightiness item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
      title: workspacetightinessitemName,
      description: workspacetightinessitemName,
      workspacetightinessitemName: workspacetightinessitemName,
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


  'workspacetightinessitemName.remove'(documentId) {
    check(documentId, String);

    const workspacetightiness = DevTest.findOne(documentId);
    if (workspacetightiness.private && workspacetightiness.owner !== Meteor.userId()) {
      // If the workspacetightiness item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updateworkspacetightinessItem': function(documentId, workspacetightinessItem){
    check(workspacetightinessItem, String); 

    // Make sure the user is logged in before inserting a workspacetightiness item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { workspacetightinessitemName : workspacetightinessItem, title : workspacetightinessItem, description : workspacetightinessItem }});
  },

// - End of workspacetightiness Methods Block - //

// Start of improveFengpage Methods Block //

  'improveFengpageitemName.insert'(improveFengpageitemName) {
   check(improveFengpageitemName, String);
 
    // Make sure the user is logged in before inserting a improveFengpage item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const improveFengpage = DevTest.findOne(documentId);
    if (improveFengpage.private && improveFengpage.owner !== Meteor.userId()) {
      // If the improveFengpage item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updateimproveFengpageItem': function(documentId, improveFengpageItem){
    check(improveFengpageItem, String); 

    // Make sure the user is logged in before inserting a improveFengpage item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { improveFengpageitemName : improveFengpageItem, title : improveFengpageItem, description : improveFengpageItem }});
  },

// - End of improveFengpage Methods Block - //



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

    DevTest.insert({
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

    const pplengagedwith = DevTest.findOne(documentId);
    if (pplengagedwith.private && pplengagedwith.owner !== Meteor.userId()) {
      // If the pplengagedwith item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatepplengagedwithItem': function(documentId, pplengagedwithItem){
    check(pplengagedwithItem, String); 

    // Make sure the user is logged in before inserting a pplengagedwith item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { pplengagedwithitemName : pplengagedwithItem, title : pplengagedwithItem, description : pplengagedwithItem }});
  },

// - End of pplengagedwith Methods Block - //

// Start of pplscontact Methods Block //

  'pplscontactitemName.insert'(pplscontactitemName) {
   check(pplscontactitemName, String);
 
    // Make sure the user is logged in before inserting a pplscontact item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
      title: pplscontactitemName,
      description: pplscontactitemName,
      pplscontactitemName: pplscontactitemName,
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


  'pplscontactitemName.remove'(documentId) {
    check(documentId, String);

    const pplscontact = DevTest.findOne(documentId);
    if (pplscontact.private && pplscontact.owner !== Meteor.userId()) {
      // If the pplscontact item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatepplscontactItem': function(documentId, pplscontactItem){
    check(pplscontactItem, String); 

    // Make sure the user is logged in before inserting a pplscontact item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { pplscontactitemName : pplscontactItem, title : pplscontactItem, description : pplscontactItem }});
  },

// - End of pplscontact Methods Block - //

// Start of pplGiftideas Methods Block //

  'pplGiftideasitemName.insert'(pplGiftideasitemName) {
   check(pplGiftideasitemName, String);
 
    // Make sure the user is logged in before inserting a pplGiftideas item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const pplGiftideas = DevTest.findOne(documentId);
    if (pplGiftideas.private && pplGiftideas.owner !== Meteor.userId()) {
      // If the pplGiftideas item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatepplGiftideasItem': function(documentId, pplGiftideasItem){
    check(pplGiftideasItem, String); 

    // Make sure the user is logged in before inserting a pplGiftideas item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { pplGiftideasitemName : pplGiftideasItem, title : pplGiftideasItem, description : pplGiftideasItem }});
  },

// - End of pplGiftideas Methods Block - //

// Start of improvePeoplepage Methods Block //

  'improvePeoplepageitemName.insert'(improvePeoplepageitemName) {
   check(improvePeoplepageitemName, String);
 
    // Make sure the user is logged in before inserting a improvePeoplepage item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const improvePeoplepage = DevTest.findOne(documentId);
    if (improvePeoplepage.private && improvePeoplepage.owner !== Meteor.userId()) {
      // If the improvePeoplepage item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updateimprovePeoplepageItem': function(documentId, improvePeoplepageItem){
    check(improvePeoplepageItem, String); 

    // Make sure the user is logged in before inserting a improvePeoplepage item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { improvePeoplepageitemName : improvePeoplepageItem, title : improvePeoplepageItem, description : improvePeoplepageItem }});
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

    DevTest.insert({
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

    const howSodoing = DevTest.findOne(documentId);
    if (howSodoing.private && howSodoing.owner !== Meteor.userId()) {
      // If the howSodoing item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatehowSodoingItem': function(documentId, howSodoingItem){
    check(howSodoingItem, String); 

    // Make sure the user is logged in before inserting a howSodoing item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { howSodoingitemName : howSodoingItem, title : howSodoingItem, description : howSodoingItem }});
  },

// - End of howSodoing Methods Block - //

// Start of soLikes Methods Block //

  'soLikesitemName.insert'(soLikesitemName) {
   check(soLikesitemName, String);
 
    // Make sure the user is logged in before inserting a soLikes item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const soLikes = DevTest.findOne(documentId);
    if (soLikes.private && soLikes.owner !== Meteor.userId()) {
      // If the soLikes item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatesoLikesItem': function(documentId, soLikesItem){
    check(soLikesItem, String); 

    // Make sure the user is logged in before inserting a soLikes item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { soLikesitemName : soLikesItem, title : soLikesItem, description : soLikesItem }});
  },

// - End of soLikes Methods Block - //

// Start of soDislikes Methods Block //

  'soDislikesitemName.insert'(soDislikesitemName) {
   check(soDislikesitemName, String);
 
    // Make sure the user is logged in before inserting a soDislikes item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const soDislikes = DevTest.findOne(documentId);
    if (soDislikes.private && soDislikes.owner !== Meteor.userId()) {
      // If the soDislikes item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatesoDislikesItem': function(documentId, soDislikesItem){
    check(soDislikesItem, String); 

    // Make sure the user is logged in before inserting a soDislikes item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { soDislikesitemName : soDislikesItem, title : soDislikesItem, description : soDislikesItem }});
  },

// - End of soDislikes Methods Block - //

// Start of soWants Methods Block //

  'soWantsitemName.insert'(soWantsitemName) {
   check(soWantsitemName, String);
 
    // Make sure the user is logged in before inserting a soWants item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const soWants = DevTest.findOne(documentId);
    if (soWants.private && soWants.owner !== Meteor.userId()) {
      // If the soWants item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatesoWantsItem': function(documentId, soWantsItem){
    check(soWantsItem, String); 

    // Make sure the user is logged in before inserting a soWants item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { soWantsitemName : soWantsItem, title : soWantsItem, description : soWantsItem }});
  },

// - End of soWants Methods Block - //

// Start of sogiftideas Methods Block //

  'sogiftideasitemName.insert'(sogiftideasitemName) {
   check(sogiftideasitemName, String);
 
    // Make sure the user is logged in before inserting a sogiftideas item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const sogiftideas = DevTest.findOne(documentId);
    if (sogiftideas.private && sogiftideas.owner !== Meteor.userId()) {
      // If the sogiftideas item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatesogiftideasItem': function(documentId, sogiftideasItem){
    check(sogiftideasItem, String); 

    // Make sure the user is logged in before inserting a sogiftideas item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { sogiftideasitemName : sogiftideasItem, title : sogiftideasItem, description : sogiftideasItem }});
  },

// - End of sogiftideas Methods Block - //

// Start of soArguementlog Methods Block //

  'soArguementlogitemName.insert'(soArguementlogitemName) {
   check(soArguementlogitemName, String);
 
    // Make sure the user is logged in before inserting a soArguementlog item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const soArguementlog = DevTest.findOne(documentId);
    if (soArguementlog.private && soArguementlog.owner !== Meteor.userId()) {
      // If the soArguementlog item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatesoArguementlogItem': function(documentId, soArguementlogItem){
    check(soArguementlogItem, String); 

    // Make sure the user is logged in before inserting a soArguementlog item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { soArguementlogitemName : soArguementlogItem, title : soArguementlogItem, description : soArguementlogItem }});
  },

// - End of soArguementlog Methods Block - //

// Start of soPeriodlog Methods Block //

  'soPeriodlogitemName.insert'(soPeriodlogitemName) {
   check(soPeriodlogitemName, String);
 
    // Make sure the user is logged in before inserting a soPeriodlog item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const soPeriodlog = DevTest.findOne(documentId);
    if (soPeriodlog.private && soPeriodlog.owner !== Meteor.userId()) {
      // If the soPeriodlog item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatesoPeriodlogItem': function(documentId, soPeriodlogItem){
    check(soPeriodlogItem, String); 

    // Make sure the user is logged in before inserting a soPeriodlog item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { soPeriodlogitemName : soPeriodlogItem, title : soPeriodlogItem, description : soPeriodlogItem }});
  },

// - End of soPeriodlog Methods Block - //

// Start of lovehist Methods Block //

  'lovehistitemName.insert'(lovehistitemName) {
   check(lovehistitemName, String);
 
    // Make sure the user is logged in before inserting a lovehist item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const lovehist = DevTest.findOne(documentId);
    if (lovehist.private && lovehist.owner !== Meteor.userId()) {
      // If the lovehist item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatelovehistItem': function(documentId, lovehistItem){
    check(lovehistItem, String); 

    // Make sure the user is logged in before inserting a lovehist item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { lovehistitemName : lovehistItem, title : lovehistItem, description : lovehistItem }});
  },

// - End of lovehist Methods Block - //

// Start of dreamSo Methods Block //

  'dreamSoitemName.insert'(dreamSoitemName) {
   check(dreamSoitemName, String);
 
    // Make sure the user is logged in before inserting a dreamSo item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const dreamSo = DevTest.findOne(documentId);
    if (dreamSo.private && dreamSo.owner !== Meteor.userId()) {
      // If the dreamSo item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatedreamSoItem': function(documentId, dreamSoItem){
    check(dreamSoItem, String); 

    // Make sure the user is logged in before inserting a dreamSo item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { dreamSoitemName : dreamSoItem, title : dreamSoItem, description : dreamSoItem }});
  },

// - End of dreamSo Methods Block - //

// Start of sexhist Methods Block //

  'sexhistitemName.insert'(sexhistitemName) {
   check(sexhistitemName, String);
 
    // Make sure the user is logged in before inserting a sexhist item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const sexhist = DevTest.findOne(documentId);
    if (sexhist.private && sexhist.owner !== Meteor.userId()) {
      // If the sexhist item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatesexhistItem': function(documentId, sexhistItem){
    check(sexhistItem, String); 

    // Make sure the user is logged in before inserting a sexhist item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { sexhistitemName : sexhistItem, title : sexhistItem, description : sexhistItem }});
  },

// - End of sexhist Methods Block - //

// Start of improveLovepage Methods Block //

  'improveLovepageitemName.insert'(improveLovepageitemName) {
   check(improveLovepageitemName, String);
 
    // Make sure the user is logged in before inserting a improveLovepage item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const improveLovepage = DevTest.findOne(documentId);
    if (improveLovepage.private && improveLovepage.owner !== Meteor.userId()) {
      // If the improveLovepage item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updateimproveLovepageItem': function(documentId, improveLovepageItem){
    check(improveLovepageItem, String); 

    // Make sure the user is logged in before inserting a improveLovepage item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { improveLovepageitemName : improveLovepageItem, title : improveLovepageItem, description : improveLovepageItem }});
  },

// - End of improveLovepage Methods Block - //



//************************************************//
//************************************************//
//************************************************//
//************************************************//
//************************************************//
//***********    Companion PET PAGE               **********//
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

    DevTest.insert({
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

    const petlog = DevTest.findOne(documentId);
    if (petlog.private && petlog.owner !== Meteor.userId()) {
      // If the petlog item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatepetlogItem': function(documentId, petlogItem){
    check(petlogItem, String); 

    // Make sure the user is logged in before inserting a petlog item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { petlogitemName : petlogItem, title : petlogItem, description : petlogItem }});
  },

// - End of petlog Methods Block - //

// Start of petbiometrics Methods Block //

  'petbiometricsitemName.insert'(petbiometricsitemName) {
   check(petbiometricsitemName, String);
 
    // Make sure the user is logged in before inserting a petbiometrics item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const petbiometrics = DevTest.findOne(documentId);
    if (petbiometrics.private && petbiometrics.owner !== Meteor.userId()) {
      // If the petbiometrics item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatepetbiometricsItem': function(documentId, petbiometricsItem){
    check(petbiometricsItem, String); 

    // Make sure the user is logged in before inserting a petbiometrics item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { petbiometricsitemName : petbiometricsItem, title : petbiometricsItem, description : petbiometricsItem }});
  },

// - End of petbiometrics Methods Block - //

// Start of petMedhist Methods Block //

  'petMedhistitemName.insert'(petMedhistitemName) {
   check(petMedhistitemName, String);
 
    // Make sure the user is logged in before inserting a petMedhist item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const petMedhist = DevTest.findOne(documentId);
    if (petMedhist.private && petMedhist.owner !== Meteor.userId()) {
      // If the petMedhist item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatepetMedhistItem': function(documentId, petMedhistItem){
    check(petMedhistItem, String); 

    // Make sure the user is logged in before inserting a petMedhist item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { petMedhistitemName : petMedhistItem, title : petMedhistItem, description : petMedhistItem }});
  },

// - End of petMedhist Methods Block - //

// Start of improvePetpage Methods Block //

  'improvePetpageitemName.insert'(improvePetpageitemName) {
   check(improvePetpageitemName, String);
 
    // Make sure the user is logged in before inserting a improvePetpage item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const improvePetpage = DevTest.findOne(documentId);
    if (improvePetpage.private && improvePetpage.owner !== Meteor.userId()) {
      // If the improvePetpage item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updateimprovePetpageItem': function(documentId, improvePetpageItem){
    check(improvePetpageItem, String); 

    // Make sure the user is logged in before inserting a improvePetpage item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { improvePetpageitemName : improvePetpageItem, title : improvePetpageItem, description : improvePetpageItem }});
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

    DevTest.insert({
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

    const govt = DevTest.findOne(documentId);
    if (govt.private && govt.owner !== Meteor.userId()) {
      // If the govt item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updategovtItem': function(documentId, govtItem){
    check(govtItem, String); 

    // Make sure the user is logged in before inserting a govt item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { govtitemName : govtItem, title : govtItem, description : govtItem }});
  },

// - End of govt Methods Block - //

// Start of policies Methods Block //

  'policiesitemName.insert'(policiesitemName) {
   check(policiesitemName, String);
 
    // Make sure the user is logged in before inserting a policies item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const policies = DevTest.findOne(documentId);
    if (policies.private && policies.owner !== Meteor.userId()) {
      // If the policies item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatepoliciesItem': function(documentId, policiesItem){
    check(policiesItem, String); 

    // Make sure the user is logged in before inserting a policies item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { policiesitemName : policiesItem, title : policiesItem, description : policiesItem }});
  },

// - End of policies Methods Block - //

// Start of vote Methods Block //

  'voteitemName.insert'(voteitemName) {
   check(voteitemName, String);
 
    // Make sure the user is logged in before inserting a vote item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const vote = DevTest.findOne(documentId);
    if (vote.private && vote.owner !== Meteor.userId()) {
      // If the vote item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updatevoteItem': function(documentId, voteItem){
    check(voteItem, String); 

    // Make sure the user is logged in before inserting a vote item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { voteitemName : voteItem, title : voteItem, description : voteItem }});
  },

// - End of vote Methods Block - //

// Start of improveSocietypage Methods Block //

  'improveSocietypageitemName.insert'(improveSocietypageitemName) {
   check(improveSocietypageitemName, String);
 
    // Make sure the user is logged in before inserting a improveSocietypage item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const improveSocietypage = DevTest.findOne(documentId);
    if (improveSocietypage.private && improveSocietypage.owner !== Meteor.userId()) {
      // If the improveSocietypage item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },

  'updateimproveSocietypageItem': function(documentId, improveSocietypageItem){
    check(improveSocietypageItem, String); 

    // Make sure the user is logged in before inserting a improveSocietypage item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { improveSocietypageitemName : improveSocietypageItem, title : improveSocietypageItem, description : improveSocietypageItem }});
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
  'updatespiritItem': function(documentId, spiritItem){
    check(spiritItem, String); 

    // Make sure the user is logged in before inserting a spirit item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { spirititemName : spiritItem, title : spiritItem, description : spiritItem }});
  },



// - End of Spirited - //

// Start of mantras Methods Block //

  'mantrasitemName.insert'(mantrasitemName) {
   check(mantrasitemName, String);
 
    // Make sure the user is logged in before inserting a mantras item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const mantras = DevTest.findOne(documentId);
    if (mantras.private && mantras.owner !== Meteor.userId()) {
      // If the mantras item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updateMantrasItem': function(documentId, mantrasItem){
    check(mantrasItem, String); 

    // Make sure the user is logged in before inserting a mantras item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { mantrasitemName : mantrasItem, title : mantrasItem, description : mantrasItem }});
  },

// - End of mantras Methods Block - //

// Start of improveSpiritpage Methods Block //

  'improveSpiritpageitemName.insert'(improveSpiritpageitemName) {
   check(improveSpiritpageitemName, String);
 
    // Make sure the user is logged in before inserting a improveSpiritpage item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.insert({
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

    const improveSpiritpage = DevTest.findOne(documentId);
    if (improveSpiritpage.private && improveSpiritpage.owner !== Meteor.userId()) {
      // If the improveSpiritpage item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    DevTest.remove(documentId);
  },
  'updateimproveSpiritItem': function(documentId, improveSpiritpageItem){
    check(improveSpiritpageItem, String); 

    // Make sure the user is logged in before inserting a improveSpiritpage item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    DevTest.update({ _id: documentId }, {$set: { improveSpiritpageitemName : improveSpiritpageItem, title : improveSpiritpageItem, description : improveSpiritpageItem }});
  },

// - End of improveSpiritpage Methods Block - //




});
