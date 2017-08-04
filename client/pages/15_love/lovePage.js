'./love.html'


///// HELPERS /////


Template.lovePage.helpers({
    howSodoingEach() {
        return Agenda.find( { howSodoingitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    soLikesEach() {
        return Agenda.find( { soLikesitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    soDislikesEach() {
        return Agenda.find( { soDislikesitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    soWantsEach() {
        return Agenda.find( { soWantsitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    sogiftideasEach() {
        return Agenda.find( { sogiftideasitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    soArguementlogEach() {
        return Agenda.find( { soArguementlogitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    soPeriodlogEach() {
        return Agenda.find( { soPeriodlogitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    lovehistEach() {
        return Agenda.find( { lovehistitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    dreamSoEach() {
        return Agenda.find( { dreamSoitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    sexhistEach() {
        return Agenda.find( { sexhistitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    improveLovepageEach() {
        return Agenda.find( { improveLovepageitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
});








////////* Start of howSodoing Events *//////


Template.addhowSodoingItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const howSodoingitemName = target.howSodoingitemName.value;
    
    // Insert a howSodoing item into the collection
    Meteor.call('howSodoingitemName.insert', howSodoingitemName);

    // Clear form
    target.howSodoingitemName.value = '';
    },
});

Template.howSodoingItem.events({
    // events go here
    'click .delete-howSodoingitem'(){
     Meteor.call('howSodoingitemName.remove', this._id);
    },

    'keyup [name=howSodoingItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var howSodoingItem = $(event.target).val();
        Meteor.call('updateListItem', documentId, howSodoingItem);
        }
    },
});

////////* End of howSodoing Events *//////

////////* Start of soLikes Events *//////


Template.addsoLikesItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const soLikesitemName = target.soLikesitemName.value;
    
    // Insert a soLikes item into the collection
    Meteor.call('soLikesitemName.insert', soLikesitemName);

    // Clear form
    target.soLikesitemName.value = '';
    },
});

Template.soLikesItem.events({
    // events go here
    'click .delete-soLikesitem'(){
     Meteor.call('soLikesitemName.remove', this._id);
    },

    'keyup [name=soLikesItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var soLikesItem = $(event.target).val();
        Meteor.call('updateListItem', documentId, soLikesItem);
        }
    },
});

////////* End of soLikes Events *//////

////////* Start of soDislikes Events *//////


Template.addsoDislikesItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const soDislikesitemName = target.soDislikesitemName.value;
    
    // Insert a soDislikes item into the collection
    Meteor.call('soDislikesitemName.insert', soDislikesitemName);

    // Clear form
    target.soDislikesitemName.value = '';
    },
});

Template.soDislikesItem.events({
    // events go here
    'click .delete-soDislikesitem'(){
     Meteor.call('soDislikesitemName.remove', this._id);
    },

    'keyup [name=soDislikesItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var soDislikesItem = $(event.target).val();
        Meteor.call('updateListItem', documentId, soDislikesItem);
        }
    },
});

////////* End of soDislikes Events *//////

////////* Start of soWants Events *//////


Template.addsoWantsItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const soWantsitemName = target.soWantsitemName.value;
    
    // Insert a soWants item into the collection
    Meteor.call('soWantsitemName.insert', soWantsitemName);

    // Clear form
    target.soWantsitemName.value = '';
    },
});

Template.soWantsItem.events({
    // events go here
    'click .delete-soWantsitem'(){
     Meteor.call('soWantsitemName.remove', this._id);
    },

    'keyup [name=soWantsItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var soWantsItem = $(event.target).val();
        Meteor.call('updateListItem', documentId, soWantsItem);
        }
    },
});

////////* End of soWants Events *//////

////////* Start of sogiftideas Events *//////


Template.addsogiftideasItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const sogiftideasitemName = target.sogiftideasitemName.value;
    
    // Insert a sogiftideas item into the collection
    Meteor.call('sogiftideasitemName.insert', sogiftideasitemName);

    // Clear form
    target.sogiftideasitemName.value = '';
    },
});

Template.sogiftideasItem.events({
    // events go here
    'click .delete-sogiftideasitem'(){
     Meteor.call('sogiftideasitemName.remove', this._id);
    },

    'keyup [name=sogiftideasItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var sogiftideasItem = $(event.target).val();
        Meteor.call('updateListItem', documentId, sogiftideasItem);
        }
    },
});

////////* End of sogiftideas Events *//////

////////* Start of soArguementlog Events *//////


Template.addsoArguementlogItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const soArguementlogitemName = target.soArguementlogitemName.value;
    
    // Insert a soArguementlog item into the collection
    Meteor.call('soArguementlogitemName.insert', soArguementlogitemName);

    // Clear form
    target.soArguementlogitemName.value = '';
    },
});

Template.soArguementlogItem.events({
    // events go here
    'click .delete-soArguementlogitem'(){
     Meteor.call('soArguementlogitemName.remove', this._id);
    },

    'keyup [name=soArguementlogItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var soArguementlogItem = $(event.target).val();
        Meteor.call('updateListItem', documentId, soArguementlogItem);
        }
    },
});

////////* End of soArguementlog Events *//////

////////* Start of soPeriodlog Events *//////


Template.addsoPeriodlogItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const soPeriodlogitemName = target.soPeriodlogitemName.value;
    
    // Insert a soPeriodlog item into the collection
    Meteor.call('soPeriodlogitemName.insert', soPeriodlogitemName);

    // Clear form
    target.soPeriodlogitemName.value = '';
    },
});

Template.soPeriodlogItem.events({
    // events go here
    'click .delete-soPeriodlogitem'(){
     Meteor.call('soPeriodlogitemName.remove', this._id);
    },

    'keyup [name=soPeriodlogItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var soPeriodlogItem = $(event.target).val();
        Meteor.call('updateListItem', documentId, soPeriodlogItem);
        }
    },
});

////////* End of soPeriodlog Events *//////

////////* Start of lovehist Events *//////


Template.addlovehistItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const lovehistitemName = target.lovehistitemName.value;
    
    // Insert a lovehist item into the collection
    Meteor.call('lovehistitemName.insert', lovehistitemName);

    // Clear form
    target.lovehistitemName.value = '';
    },
});

Template.lovehistItem.events({
    // events go here
    'click .delete-lovehistitem'(){
     Meteor.call('lovehistitemName.remove', this._id);
    },

    'keyup [name=lovehistItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var lovehistItem = $(event.target).val();
        Meteor.call('updateListItem', documentId, lovehistItem);
        }
    },
});

////////* End of lovehist Events *//////

////////* Start of dreamSo Events *//////


Template.adddreamSoItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const dreamSoitemName = target.dreamSoitemName.value;
    
    // Insert a dreamSo item into the collection
    Meteor.call('dreamSoitemName.insert', dreamSoitemName);

    // Clear form
    target.dreamSoitemName.value = '';
    },
});

Template.dreamSoItem.events({
    // events go here
    'click .delete-dreamSoitem'(){
     Meteor.call('dreamSoitemName.remove', this._id);
    },

    'keyup [name=dreamSoItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var dreamSoItem = $(event.target).val();
        Meteor.call('updateListItem', documentId, dreamSoItem);
        }
    },
});

////////* End of dreamSo Events *//////

////////* Start of sexhist Events *//////


Template.addsexhistItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const sexhistitemName = target.sexhistitemName.value;
    
    // Insert a sexhist item into the collection
    Meteor.call('sexhistitemName.insert', sexhistitemName);

    // Clear form
    target.sexhistitemName.value = '';
    },
});

Template.sexhistItem.events({
    // events go here
    'click .delete-sexhistitem'(){
     Meteor.call('sexhistitemName.remove', this._id);
    },

    'keyup [name=sexhistItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var sexhistItem = $(event.target).val();
        Meteor.call('updateListItem', documentId, sexhistItem);
        }
    },
});

////////* End of sexhist Events *//////

////////* Start of improveLovepage Events *//////


Template.addimproveLovepageItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const improveLovepageitemName = target.improveLovepageitemName.value;
    
    // Insert a improveLovepage item into the collection
    Meteor.call('improveLovepageitemName.insert', improveLovepageitemName);

    // Clear form
    target.improveLovepageitemName.value = '';
    },
});

Template.improveLovepageItem.events({
    // events go here
    'click .delete-improveLovepageitem'(){
     Meteor.call('improveLovepageitemName.remove', this._id);
    },

    'keyup [name=improveLovepageItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var improveLovepageItem = $(event.target).val();
        Meteor.call('updateListItem', documentId, improveLovepageItem);
        }
    },
});

////////* End of improveLovepage Events *//////

