import Ember from 'ember';

export default Ember.Route.extend({


	model() {
		return Ember.$.ajax('http://es_read:ElternabendHackathon2016!@elternabend-es.westus.cloudapp.azure.com:9200/articles/article/_search')
		.then((result) => {
			return result.hits.hits.map(function(item) {return item._source;});
		});
	}
});
