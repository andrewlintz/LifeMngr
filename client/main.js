import '../lib/routes.js';
import '../lib/collections/collections.js';



import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Mongo } from 'meteor/mongo';
import { moment } from 'meteor/momentjs:moment';

Template.registerHelper('formatDate', function(date, format) {
  // Use moment.js formatting to return a date we like (http://momentjs.com/)
  // Example: {{formatDate createdAt 'MM/DD/YYYY'}}
  return moment(new Date(date)).format('MM/DD/YYYY');
}); 