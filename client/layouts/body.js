/* CUSTOM LOGIN INSTRUCTIONAL FOUND AT:
https://www.sitepoint.com/creating-custom-login-registration-form-with-meteor/
*/


Template.loginButtons.rendered = function()
{
    Accounts._loginButtonsSession.set('dropdownVisible', true);
};

if (Meteor.isClient) {
  Template.header.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
    }
  });
  Template.register.events({
    'submit form': function(event){
        event.preventDefault();
        var emailVar = event.target.registerEmail.value;
        var passwordVar = event.target.registerPassword.value;
        Accounts.createUser({
            email: emailVar,
            password: passwordVar
        });
    }
  });
  Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        var emailVar = event.target.loginEmail.value;
        var passwordVar = event.target.loginPassword.value;
        Meteor.loginWithPassword(emailVar, passwordVar);
    }
  });
}

Template.body.onCreated(function bodyOnCreated() {
  Meteor.subscribe('agenda');
  Meteor.subscribe('admindb');
  Meteor.subscribe('devNotes');
  Meteor.subscribe('devTest');
  Meteor.subscribe('livedb');  
});