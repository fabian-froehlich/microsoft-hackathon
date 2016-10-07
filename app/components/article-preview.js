import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
	collapsed: true,
	actions: {
		toggleCollapse() {
			this.set('collapsed', !this.get('collapsed'));
		}
	}
});