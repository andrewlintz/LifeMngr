Router.configure({
  // the default layout
  layoutTemplate: 'mainNav'
});
 
Router.route('/', function () {
  this.render('inputterPage');
  this.layout('mainNav');
});
 
Router.route('/gyst', function () {
  this.render('gystPage', 'testerItem', 'addTesteritem');
  this.layout('mainSide', 'gyst');
});

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

Router.route('/versionlog', function () {
  this.render('versionlogPage');
  this.layout('mainSide');
});