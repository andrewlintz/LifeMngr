Router.configure({
  // the default layout
  layoutTemplate: 'mainNav'
});
 


  //// HOME INPUTER /////

Router.route('/', function () {
  this.render('inputterPage');
  this.layout('mainNav');
});
 

  //// GYST /////

Router.route('/gyst', function () {
  this.render('gystPage', 'testerItem', 'addTesteritem');
  this.layout('mainNav', 'gyst');
});


  //// Journal /////
Router.route('/life', function () {
  this.render('lifePage');
  this.layout('mainNav', 'life');
});

  //// MISSION /////
Router.route('/agenda', function () {
  this.render('agendaPage');
  this.layout('mainNav', 'agenda');
});

  //// MIND /////
Router.route('/mind', function () {
  this.render('mindPage');
  this.layout('mainNav', 'mind');
});

  //// HEALTH /////
Router.route('/health', function () {
  this.render('healthPage');
  this.layout('mainNav', 'health');
});

  //// HYGIENE /////
Router.route('/hygiene', function () {
  this.render('hygienePage');
  this.layout('mainNav', 'hygiene');
});

  //// FENG /////
Router.route('/feng', function () {
  this.render('fengPage');
  this.layout('mainNav', 'feng');
});


  //// FOOD /////
Router.route('/food', function () {
  this.render('foodPage');
  this.layout('mainNav', 'food');
});

  //// FIT /////
Router.route('/fit', function () {
  this.render('fitPage');
  this.layout('mainNav', 'fit');
});

  //// MONEY /////
Router.route('/money', function () {
  this.render('moneyPage');
  this.layout('mainNav', 'money');
});

  //// TIME /////

Router.route('/time', function () {
  this.render('timePage');
  this.layout('mainNav');
});

Router.route('/time/daypast', function () {
  this.render('historydayPage');
  this.layout('mainNav');
});

Router.route('/time/day', function () {
  this.render('nowdayPage');
  this.layout('mainNav');
});

  //// Place /////
Router.route('/place', function () {
  this.render('placePage');
  this.layout('mainNav', 'place');
});

  //// STUFF /////
Router.route('/stuff', function () {
  this.render('stuffPage');
  this.layout('mainNav', 'stuff');
});


  //// PEOPLE /////
Router.route('/people', function () {
  this.render('peoplePage');
  this.layout('mainNav', 'people');
});

  //// LOVE /////
Router.route('/love', function () {
  this.render('lovePage');
  this.layout('mainNav', 'love');
});

  //// PET /////
Router.route('/pet', function () {
  this.render('petPage');
  this.layout('mainNav', 'pet');
});

  //// SOCIETY /////
Router.route('/society', function () {
  this.render('societyPage');
  this.layout('mainNav', 'society');
}); 

  //// SPIRIT /////
Router.route('/spirit', function () {
  this.render('spiritPage');
  this.layout('mainNav', 'spirit');
});

  //// LOG HISTORY /////

Router.route('/versionlog', function () {
  this.render('versionlogPage');
  this.layout('mainSide');
});