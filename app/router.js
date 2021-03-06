import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('dashboard');
  this.route('notfound', {path: '/'});
  this.route('notfound', {path: '/*wildcard'});
});

export default Router;
