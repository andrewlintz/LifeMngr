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

Router.route('/02_gyst/nested', function () {
  this.render('nested2ndPage');
  this.layout('mainSide');
});

Router.route('/time', function () {
  this.render('timePage');
  this.layout('mainSide');
});

Router.route('/03_time/day', function () {
  this.render('dayPage');
  this.layout('mainSide');
});

Router.route('/versionlog', function () {
  this.render('versionlogPage');
  this.layout('mainSide');
});