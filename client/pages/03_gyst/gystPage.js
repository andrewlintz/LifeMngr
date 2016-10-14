import './gyst.html';


///// HELPERS /////
Template.test3.helpers({
    drtest2looper() {
        return Agenda.find({
            $and: [
            {test2: {$exists: true}}, 
            {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
    },
});

Template.test4a.helpers({
  test4looper() {
    return Agenda.find({
            $and: [
            {test4: {$exists: true}}, 
            {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
  }
});


Template.test4b.helpers({
  test4looper() {
    return Agenda.find({
            $and: [
            {test4: {$exists: true}}, 
            {createdAt: {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}
            ]    
        },{sort: {createdAt: -1}});
  }
});


///// EVENTS /////
Template.test2.events({
    'submit #dntest2Submitter':function(e){
        e.preventDefault();
        var test2 = $('#dntest2').val();
        Agenda.insert({
            test2: test2,
            createdAt: new Date()
        });
    },
 });
 
Template.drtest2log.events({
    // events go here
    'click .delete-drtest2item': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=drtest2Item]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var drtest2Item = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { test2: drtest2Item }});
        }
    },
});

///// EVENTS /////
Template.test4a.events({
	'click input'(event) {
    	const obj = {};
    	obj[event.currentTarget.name] = event.currentTarget.checked;
    	Agenda.update(this._id, { 
    		$set: obj, } );
    	Agenda.insert({
      		test4: 'test4',
      		checked: 0,
        	createdAt: new Date()
    	});
    	Agenda.update(this._id, { 
    		$set: {checked: 0} 
    	});
   	},
});



///// EVENTS /////
Template.test4checkboxes.events({
	'click input'(event) {
    	const obj = {};
    	obj[event.currentTarget.name] = event.currentTarget.checked;
    	Agenda.update(this._id, { $set: obj } );

    	Agenda.insert({
      		test4: 'test4',
        	createdAt: new Date()
    	}); 
},
/*
    'click .toggle-checked'() {
		Agenda.update(this._id, {
  	    	$set: { checked: ! this.checked },
  	  	});
    }

*/
		/*
    'click #test4Submitter':function(e){
  	//'click .toggle-checked'() {
  	  // Set the checked property to the opposite of its current value
      	
      	
      	Agenda.insert({
      		test4: 'test4',
        	createdAt: new Date()
    	}),  	  
  	  	Agenda.update(this._id, {
  	    	$set: { checked: ! this.checked },
  	  	});
  	},
  	*/
 });
