Router.configure({
  // the default layout
  layoutTemplate: ('ApplicationLayout')
});
 


  //// HOME INPUTER /////

Router.route('/', function () {
  this.render('inputterPage');
  this.layout('ApplicationLayout');
});
 

  //// GYST /////

Router.route('/gyst', function () {
  this.render('gystPage', 'testerItem', 'addTesteritem');
  this.layout('ApplicationLayout', 'gyst');
});


  //// Journal /////
Router.route('/life', function () {
  this.render('lifePage');
  this.layout('ApplicationLayout', 'life');
});

  //// MISSION /////
Router.route('/agenda', function () {
  this.render('agendaPage');
  this.layout('ApplicationLayout', 'agenda');
});

  //// MIND /////
Router.route('/mind', function () {
  this.render('mindPage');
  this.layout('ApplicationLayout', 'mind');
});

  //// HEALTH /////
Router.route('/health', function () {
  this.render('healthPage');
  this.layout('ApplicationLayout', 'health');
});

  //// HYGIENE /////
Router.route('/hygiene', function () {
  this.render('hygienePage');
  this.layout('ApplicationLayout', 'hygiene');
});

  //// FENG /////
Router.route('/feng', function () {
  this.render('fengPage');
  this.layout('ApplicationLayout', 'feng');
});


  //// FOOD /////
Router.route('/food', function () {
  this.render('foodPage');
  this.layout('ApplicationLayout', 'food');
});

  //// FIT /////
Router.route('/fit', function () {
  this.render('fitPage');
  this.layout('ApplicationLayout', 'fit');
});

  //// MONEY /////
Router.route('/money', function () {
  this.render('moneyPage');
  this.layout('ApplicationLayout', 'money');
});









  //// TIME /////

Router.route('/time', function () {
  this.render('timePage');
  this.layout('ApplicationLayout');
});

// Day //

Router.route('/time/dayplan', function () {
  this.render('dayplanPage');
  this.layout('ApplicationLayout');
});

Router.route('/time/daynow', function () {
  this.render('daynowPage');
  this.layout('ApplicationLayout');
});

Router.route('/time/dayreview', function () {
  this.render('dayreviewPage');
  this.layout('ApplicationLayout');
});

Router.route('/time/daypast', function () {
  this.render('daypastPage');
  this.layout('ApplicationLayout');
});

// week //

Router.route('/time/weekplan', function () {
  this.render('weekplanPage');
  this.layout('ApplicationLayout');
});

Router.route('/time/weeknow', function () {
  this.render('weeknowPage');
  this.layout('ApplicationLayout');
});

Router.route('/time/weekreview', function () {
  this.render('weekreviewPage');
  this.layout('ApplicationLayout');
});

Router.route('/time/weekpast', function () {
  this.render('weekpastPage');
  this.layout('ApplicationLayout');
});

// month //

Router.route('/time/monthplan', function () {
  this.render('monthplanPage');
  this.layout('ApplicationLayout');
});

Router.route('/time/monthnow', function () {
  this.render('monthnowPage');
  this.layout('ApplicationLayout');
});

Router.route('/time/monthreview', function () {
  this.render('monthreviewPage');
  this.layout('ApplicationLayout');
});

Router.route('/time/monthpast', function () {
  this.render('monthpastPage');
  this.layout('ApplicationLayout');
});

// quarter //

Router.route('/time/quarterplan', function () {
  this.render('quarterplanPage');
  this.layout('ApplicationLayout');
});

Router.route('/time/quarternow', function () {
  this.render('quarternowPage');
  this.layout('ApplicationLayout');
});

Router.route('/time/quarterreview', function () {
  this.render('quarterreviewPage');
  this.layout('ApplicationLayout');
});

Router.route('/time/quarterpast', function () {
  this.render('quarterpastPage');
  this.layout('ApplicationLayout');
});

// Season //

Router.route('/time/seasonplan', function () {
  this.render('seasonplanPage');
  this.layout('ApplicationLayout');
});

Router.route('/time/seasonnow', function () {
  this.render('seasonnowPage');
  this.layout('ApplicationLayout');
});

Router.route('/time/seasonreview', function () {
  this.render('seasonreviewPage');
  this.layout('ApplicationLayout');
});

Router.route('/time/seasonpast', function () {
  this.render('seasonpastPage');
  this.layout('ApplicationLayout');
});

// year //

Router.route('/time/yearplan', function () {
  this.render('yearplanPage');
  this.layout('ApplicationLayout');
});

Router.route('/time/yearnow', function () {
  this.render('yearnowPage');
  this.layout('ApplicationLayout');
});

Router.route('/time/yearreview', function () {
  this.render('yearreviewPage');
  this.layout('ApplicationLayout');
});

Router.route('/time/yearpast', function () {
  this.render('yearpastPage');
  this.layout('ApplicationLayout');
});

// 3year //

Router.route('/time/threeyearplan', function () {
  this.render('threeyearplanPage');
  this.layout('ApplicationLayout');
});

Router.route('/time/threeyearnow', function () {
  this.render('threeyearnowPage');
  this.layout('ApplicationLayout');
});

Router.route('/time/threeyearreview', function () {
  this.render('threeyearreviewPage');
  this.layout('ApplicationLayout');
});

Router.route('/time/threeyearpast', function () {
  this.render('threeyearpastPage');
  this.layout('ApplicationLayout');
});

// decade //

Router.route('/time/decadeplan', function () {
  this.render('decadeplanPage');
  this.layout('ApplicationLayout');
});

Router.route('/time/decadenow', function () {
  this.render('decadenowPage');
  this.layout('ApplicationLayout');
});

Router.route('/time/decadereview', function () {
  this.render('decadereviewPage');
  this.layout('ApplicationLayout');
});

Router.route('/time/decadepast', function () {
  this.render('decadepastPage');
  this.layout('ApplicationLayout');
});

// life - Big Picture //

Router.route('/time/lifeplan', function () {
  this.render('lifeplanPage');
  this.layout('ApplicationLayout');
});

Router.route('/time/lifenow', function () {
  this.render('lifenowPage');
  this.layout('ApplicationLayout');
});

Router.route('/time/lifereview', function () {
  this.render('lifereviewPage');
  this.layout('ApplicationLayout');
});

Router.route('/time/lifepast', function () {
  this.render('lifepastPage');
  this.layout('ApplicationLayout');
});










  //// Place /////
Router.route('/place', function () {
  this.render('placePage');
  this.layout('ApplicationLayout', 'place');
});

  //// STUFF /////
Router.route('/stuff', function () {
  this.render('stuffPage');
  this.layout('ApplicationLayout', 'stuff');
});


  //// PEOPLE /////
Router.route('/people', function () {
  this.render('peoplePage');
  this.layout('ApplicationLayout', 'people');
});

  //// LOVE /////
Router.route('/love', function () {
  this.render('lovePage');
  this.layout('ApplicationLayout', 'love');
});

//myso//
Router.route('/love/myso', function () {
  this.render('mysoPage');
  this.layout('ApplicationLayout', 'myso');
});

  //// PET /////
Router.route('/pet', function () {
  this.render('petPage');
  this.layout('ApplicationLayout', 'pet');
});

  //// SOCIETY /////
Router.route('/society', function () {
  this.render('societyPage');
  this.layout('ApplicationLayout', 'society');
}); 

  //// SPIRIT /////
Router.route('/spirit', function () {
  this.render('spiritPage');
  this.layout('ApplicationLayout', 'spirit');
});

  //// LOG HISTORY /////

Router.route('/versionlog', function () {
  this.render('versionlogPage');
  this.layout('mainSide');
});