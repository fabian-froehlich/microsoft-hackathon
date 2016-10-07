import Ember from 'ember';

export default Ember.Route.extend({

	model() {
		return [
			{ 
			    processed: {
			      title: {
			          sentiment: 1,
			          keyPhrases: ['Test']
			      },
			      description: {
			          sentiment: 1,
			          keyPhrases: ['Test']
			      }			    },
			    article: {
			      title: 'Example Title 1',
			      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
			      summary: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
			      date: '2016-10-07T20:28:00.000Z',
			      pubdate: '2016-10-07T20:28:00.000Z',
			      pubDate: '2016-10-07T20:28:00.000Z',
			      link: 'http://www.example.com',
			      guid: 'abcde1234',
			      author: 'Max Musterfrau',
			      comments: null,
			      origlink: null,
			      image: { url: 'http://example.com/image.jpg' },
			      source: {},
			      categories: [],
			    } 
			  
			},
			{ 
			    processed: {
			      title: {
			          sentiment: 1,
			          keyPhrases: ['Test']
			      },
			      description: {
			          sentiment: 1,
			          keyPhrases: ['Test']
			      }			    },
			    article: {
			      title: 'Example Title 2',
			      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
			      summary: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
			      date: '2016-10-07T20:28:00.000Z',
			      pubdate: '2016-10-07T20:28:00.000Z',
			      pubDate: '2016-10-07T20:28:00.000Z',
			      link: 'http://www.example.com',
			      guid: 'abcde1234',
			      author: 'Max Musterfrau',
			      comments: null,
			      origlink: null,
			      image: { url: 'http://example.com/image.jpg' },
			      source: {},
			      categories: [],
			    } 
			  
			},
			{ 
			    processed: {
			      title: {
			          sentiment: 1,
			          keyPhrases: ['Test']
			      },
			      description: {
			          sentiment: 1,
			          keyPhrases: ['Test']
			      }			    },
			    article: {
			      title: 'Example Title 3',
			      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
			      summary: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
			      date: '2016-10-07T20:28:00.000Z',
			      pubdate: '2016-10-07T20:28:00.000Z',
			      pubDate: '2016-10-07T20:28:00.000Z',
			      link: 'http://www.example.com',
			      guid: 'abcde1234',
			      author: 'Max Musterfrau',
			      comments: null,
			      origlink: null,
			      image: { url: 'http://example.com/image.jpg' },
			      source: {},
			      categories: [],
			    } 
			  
			},
			{ 
			    processed: {
			      title: {
			          sentiment: 1,
			          keyPhrases: ['Test']
			      },
			      description: {
			          sentiment: 1,
			          keyPhrases: ['Test']
			      }			    },
			    article: {
			      title: 'Example Title 4',
			      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
			      summary: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
			      date: '2016-10-07T20:28:00.000Z',
			      pubdate: '2016-10-07T20:28:00.000Z',
			      pubDate: '2016-10-07T20:28:00.000Z',
			      link: 'http://www.example.com',
			      guid: 'abcde1234',
			      author: 'Max Musterfrau',
			      comments: null,
			      origlink: null,
			      image: { url: 'http://example.com/image.jpg' },
			      source: {},
			      categories: [],
			    } 
			  
			}
		];
	}
});
