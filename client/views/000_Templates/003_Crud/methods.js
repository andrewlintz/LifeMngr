/*


Meteor.methods({
// Start of keyword Methods Block //
  'keyworditemName.insert'(keyworditemName) {
   check(keyworditemName, String);
    console.log('yo2');
 
    // Make sure the user is logged in before inserting a keyword item.
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.insert({
      title: keyworditemName,
      description: keyworditemName,
      keyworditemName: keyworditemName,
      start: new Date(),
      end: new Date(),
      allDay: false,
      createdAt: new Date(),
      editedAt: new Date(),
      private: true,
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });
  }, 


  'keyworditemName.remove'(documentId) {
    check(documentId, String);

    const keyword = Agenda.findOne(documentId);
    if (keyword.private && keyword.owner !== Meteor.userId()) {
      // If the keyword item is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Agenda.remove(documentId);
  },
  'updateListItem': function(documentId, keywordItem){
    check(keywordItem, String); 

    // Make sure the user is logged in before inserting a keyword item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Agenda.update({ _id: documentId }, {$set: { keyworditemName : keywordItem, title : keywordItem, description : keywordItem }});
  },



// - End of keyword Methods Block - //

});

*/