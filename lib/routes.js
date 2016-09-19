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

// Day //

Router.route('/time/dayplan', function () {
  this.render('dayplanPage');
  this.layout('mainNav');
});

Router.route('/time/daynow', function () {
  this.render('daynowPage');
  this.layout('mainNav');
});

Router.route('/time/dayreview', function () {
  this.render('dayreviewPage');
  this.layout('mainNav');
});

Router.route('/time/daypast', function () {
  this.render('daypastPage');
  this.layout('mainNav');
});

// week //

Router.route('/time/weekplan', function () {
  this.render('weekplanPage');
  this.layout('mainNav');
});

Router.route('/time/weeknow', function () {
  this.render('weeknowPage');
  this.layout('mainNav');
});

Router.route('/time/weekreview', function () {
  this.render('weekreviewPage');
  this.layout('mainNav');
});

Router.route('/time/weekpast', function () {
  this.render('weekpastPage');
  this.layout('mainNav');
});

// month //

Router.route('/time/monthplan', function () {
  this.render('monthplanPage');
  this.layout('mainNav');
});

Router.route('/time/monthnow', function () {
  this.render('monthnowPage');
  this.layout('mainNav');
});

Router.route('/time/monthreview', function () {
  this.render('monthreviewPage');
  this.layout('mainNav');
});

Router.route('/time/monthpast', function () {
  this.render('monthpastPage');
  this.layout('mainNav');
});

// quarter //

Router.route('/time/quarterplan', function () {
  this.render('quarterplanPage');
  this.layout('mainNav');
});

Router.route('/time/quarternow', function () {
  this.render('quarternowPage');
  this.layout('mainNav');
});

Router.route('/time/quarterreview', function () {
  this.render('quarterreviewPage');
  this.layout('mainNav');
});

Router.route('/time/quarterpast', function () {
  this.render('quarterpastPage');
  this.layout('mainNav');
});

// Season //

Router.route('/time/seasonplan', function () {
  this.render('seasonplanPage');
  this.layout('mainNav');
});

Router.route('/time/seasonnow', function () {
  this.render('seasonnowPage');
  this.layout('mainNav');
});

Router.route('/time/seasonreview', function () {
  this.render('seasonreviewPage');
  this.layout('mainNav');
});

Router.route('/time/seasonpast', function () {
  this.render('seasonpastPage');
  this.layout('mainNav');
});

// year //

Router.route('/time/yearplan', function () {
  this.render('yearplanPage');
  this.layout('mainNav');
});

Router.route('/time/yearnow', function () {
  this.render('yearnowPage');
  this.layout('mainNav');
});

Router.route('/time/yearreview', function () {
  this.render('yearreviewPage');
  this.layout('mainNav');
});

Router.route('/time/yearpast', function () {
  this.render('yearpastPage');
  this.layout('mainNav');
});

// 3year //

Router.route('/time/threeyearplan', function () {
  this.render('threeyearplanPage');
  this.layout('mainNav');
});

Router.route('/time/threeyearnow', function () {
  this.render('threeyearnowPage');
  this.layout('mainNav');
});

Router.route('/time/threeyearreview', function () {
  this.render('threeyearreviewPage');
  this.layout('mainNav');
});

Router.route('/time/threeyearpast', function () {
  this.render('threeyearpastPage');
  this.layout('mainNav');
});

// decade //

Router.route('/time/decadeplan', function () {
  this.render('decadeplanPage');
  this.layout('mainNav');
});

Router.route('/time/decadenow', function () {
  this.render('decadenowPage');
  this.layout('mainNav');
});

Router.route('/time/decadereview', function () {
  this.render('decadereviewPage');
  this.layout('mainNav');
});

Router.route('/time/decadepast', function () {
  this.render('decadepastPage');
  this.layout('mainNav');
});

// life - Big Picture //

Router.route('/time/lifeplan', function () {
  this.render('lifeplanPage');
  this.layout('mainNav');
});

Router.route('/time/lifenow', function () {
  this.render('lifenowPage');
  this.layout('mainNav');
});

Router.route('/time/lifereview', function () {
  this.render('lifereviewPage');
  this.layout('mainNav');
});

Router.route('/time/lifepast', function () {
  this.render('lifepastPage');
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

//myso//
Router.route('/love/myso', function () {
  this.render('mysoPage');
  this.layout('mainNav', 'myso');
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