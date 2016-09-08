
(function() {
	let app = angular.module('CodeGoblins', ['ui.router']);

	console.log('App initialized');

	app.config(($stateProvider, $urlRouterProvider) => {
		
		$urlRouterProvider.otherwise('/');

		$stateProvider.state('app', {
			abstract: true,
			views: {
				'footer': {
					templateUrl: 'templates/footer.html'
				}
			}
		})
		.state('app.main', {
			url: '/',
			views: {
				'content@': {
					templateUrl: 'templates/main.html'
				}
			}
		})
		.state('app.contact', {
			url: '/contact',
			views: {
				'content@': {
					templateUrl: 'templates/contact.html'
				}
			}
		});

	});

})();