import '../lib/routes.js';
import '../imports/api/methods.js'
import '../imports/startup/accounts-config.js';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Mongo } from 'meteor/mongo';
import { moment } from 'meteor/momentjs:moment';
import { Accounts } from 'meteor/accounts-base';

Template.registerHelper('formatDate', function(date, format) {
  // Use moment.js formatting to return a date we like (http://momentjs.com/)
  // Example: {{formatDate createdAt 'MM/DD/YYYY'}}
  return moment(new Date(date)).format('YYYY-MM-DD @ HH:MM:SS');
}); 

Now = new Date();



