'./hygiene.html'


///// HELPERS /////


Template.hygienePage.helpers({
    showerEach() {
        return Agenda.find( { showeritemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    bathEach() {
        return Agenda.find( { bathitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    shaveEach() {
        return Agenda.find( { shaveitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    nailsEach() {
        return Agenda.find( { nailsitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    hairEach() {
        return Agenda.find( { hairitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    hairconditionEach() {
        return Agenda.find( { hairconditionitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    brushedteethEach() {
        return Agenda.find( { brushedteethitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    flossedEach() {
        return Agenda.find( { flosseditemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    deoderantEach() {
        return Agenda.find( { deoderantitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    dressedlogEach() {
        return Agenda.find( { dressedlogitemName: {$exists: true}}, {sort: {createdAt: -1}}); },
    improveHygienepageEach() {
        return Agenda.find( { improveHygienepageitemName: {$exists: true}}, {sort: {createdAt: -1}}); },


});








////////* Start of shower Events *//////


Template.addshowerItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const showeritemName = target.showeritemName.value;
    
    // Insert a shower item into the collection
    Meteor.call('showeritemName.insert', showeritemName);

    // Clear form
    target.showeritemName.value = '';
    },
});

Template.showerItem.events({
    // events go here
    'click .delete-showeritem'(){
     Meteor.call('showeritemName.remove', this._id);
    },

    'keyup [name=showerItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var showerItem = $(event.target).val();
        Meteor.call('updateListItem', documentId, showerItem);
        }
    },
});

////////* End of shower Events *//////

////////* Start of bath Events *//////


Template.addbathItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const bathitemName = target.bathitemName.value;
    
    // Insert a bath item into the collection
    Meteor.call('bathitemName.insert', bathitemName);

    // Clear form
    target.bathitemName.value = '';
    },
});

Template.bathItem.events({
    // events go here
    'click .delete-bathitem'(){
     Meteor.call('bathitemName.remove', this._id);
    },

    'keyup [name=bathItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var bathItem = $(event.target).val();
        Meteor.call('updateListItem', documentId, bathItem);
        }
    },
});

////////* End of bath Events *//////

////////* Start of shave Events *//////


Template.addshaveItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const shaveitemName = target.shaveitemName.value;
    
    // Insert a shave item into the collection
    Meteor.call('shaveitemName.insert', shaveitemName);

    // Clear form
    target.shaveitemName.value = '';
    },
});

Template.shaveItem.events({
    // events go here
    'click .delete-shaveitem'(){
     Meteor.call('shaveitemName.remove', this._id);
    },

    'keyup [name=shaveItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var shaveItem = $(event.target).val();
        Meteor.call('updateListItem', documentId, shaveItem);
        }
    },
});

////////* End of shave Events *//////

////////* Start of nails Events *//////


Template.addnailsItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const nailsitemName = target.nailsitemName.value;
    
    // Insert a nails item into the collection
    Meteor.call('nailsitemName.insert', nailsitemName);

    // Clear form
    target.nailsitemName.value = '';
    },
});

Template.nailsItem.events({
    // events go here
    'click .delete-nailsitem'(){
     Meteor.call('nailsitemName.remove', this._id);
    },

    'keyup [name=nailsItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var nailsItem = $(event.target).val();
        Meteor.call('updateListItem', documentId, nailsItem);
        }
    },
});

////////* End of nails Events *//////

////////* Start of hair Events *//////


Template.addhairItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const hairitemName = target.hairitemName.value;
    
    // Insert a hair item into the collection
    Meteor.call('hairitemName.insert', hairitemName);

    // Clear form
    target.hairitemName.value = '';
    },
});

Template.hairItem.events({
    // events go here
    'click .delete-hairitem'(){
     Meteor.call('hairitemName.remove', this._id);
    },

    'keyup [name=hairItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var hairItem = $(event.target).val();
        Meteor.call('updateListItem', documentId, hairItem);
        }
    },
});

////////* End of hair Events *//////

////////* Start of haircondition Events *//////


Template.addhairconditionItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const hairconditionitemName = target.hairconditionitemName.value;
    
    // Insert a haircondition item into the collection
    Meteor.call('hairconditionitemName.insert', hairconditionitemName);

    // Clear form
    target.hairconditionitemName.value = '';
    },
});

Template.hairconditionItem.events({
    // events go here
    'click .delete-hairconditionitem'(){
     Meteor.call('hairconditionitemName.remove', this._id);
    },

    'keyup [name=hairconditionItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var hairconditionItem = $(event.target).val();
        Meteor.call('updateListItem', documentId, hairconditionItem);
        }
    },
});

////////* End of haircondition Events *//////

////////* Start of brushedteeth Events *//////


Template.addbrushedteethItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const brushedteethitemName = target.brushedteethitemName.value;
    
    // Insert a brushedteeth item into the collection
    Meteor.call('brushedteethitemName.insert', brushedteethitemName);

    // Clear form
    target.brushedteethitemName.value = '';
    },
});

Template.brushedteethItem.events({
    // events go here
    'click .delete-brushedteethitem'(){
     Meteor.call('brushedteethitemName.remove', this._id);
    },

    'keyup [name=brushedteethItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var brushedteethItem = $(event.target).val();
        Meteor.call('updateListItem', documentId, brushedteethItem);
        }
    },
});

////////* End of brushedteeth Events *//////

////////* Start of flossed Events *//////


Template.addflossedItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const flosseditemName = target.flosseditemName.value;
    
    // Insert a flossed item into the collection
    Meteor.call('flosseditemName.insert', flosseditemName);

    // Clear form
    target.flosseditemName.value = '';
    },
});

Template.flossedItem.events({
    // events go here
    'click .delete-flosseditem'(){
     Meteor.call('flosseditemName.remove', this._id);
    },

    'keyup [name=flossedItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var flossedItem = $(event.target).val();
        Meteor.call('updateListItem', documentId, flossedItem);
        }
    },
});

////////* End of flossed Events *//////

////////* Start of deoderant Events *//////


Template.adddeoderantItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const deoderantitemName = target.deoderantitemName.value;
    
    // Insert a deoderant item into the collection
    Meteor.call('deoderantitemName.insert', deoderantitemName);

    // Clear form
    target.deoderantitemName.value = '';
    },
});

Template.deoderantItem.events({
    // events go here
    'click .delete-deoderantitem'(){
     Meteor.call('deoderantitemName.remove', this._id);
    },

    'keyup [name=deoderantItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var deoderantItem = $(event.target).val();
        Meteor.call('updateListItem', documentId, deoderantItem);
        }
    },
});

////////* End of deoderant Events *//////

////////* Start of dressedlog Events *//////


Template.adddressedlogItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const dressedlogitemName = target.dressedlogitemName.value;
    
    // Insert a dressedlog item into the collection
    Meteor.call('dressedlogitemName.insert', dressedlogitemName);

    // Clear form
    target.dressedlogitemName.value = '';
    },
});

Template.dressedlogItem.events({
    // events go here
    'click .delete-dressedlogitem'(){
     Meteor.call('dressedlogitemName.remove', this._id);
    },

    'keyup [name=dressedlogItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var dressedlogItem = $(event.target).val();
        Meteor.call('updateListItem', documentId, dressedlogItem);
        }
    },
});

////////* End of dressedlog Events *//////

////////* Start of improveHygienepage Events *//////


Template.addimproveHygienepageItem.events({
  'submit form': function(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const improveHygienepageitemName = target.improveHygienepageitemName.value;
    
    // Insert a improveHygienepage item into the collection
    Meteor.call('improveHygienepageitemName.insert', improveHygienepageitemName);

    // Clear form
    target.improveHygienepageitemName.value = '';
    },
});

Template.improveHygienepageItem.events({
    // events go here
    'click .delete-improveHygienepageitem'(){
     Meteor.call('improveHygienepageitemName.remove', this._id);
    },

    'keyup [name=improveHygienepageItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var improveHygienepageItem = $(event.target).val();
        Meteor.call('updateListItem', documentId, improveHygienepageItem);
        }
    },
});

////////* End of improveHygienepage Events *//////



