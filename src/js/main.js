
(function() {
	let app = angular.module('CodeGoblins', ['ui.router']);

	console.log('App initialized');

	app.config(($stateProvider, $urlRouterProvider) => {
		
		$urlRouterProvider.otherwise('/');

		$stateProvider.state('app', {
			abstract: true,
			views: {
				'header': {
					templateUrl: 'templates/header.html'
				},
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
		.state('app.resume', {
			url: '/resume',
			views: {
				'content@': {
					templateUrl: 'templates/resume.html'
				}
			}
		});

	});

	app.directive('hideOnScroll', ($window) => {
		return {
			restrict: 'A',
			link: (scope, ele, attrs) => {
				let scrollTimer = null;

				angular.element($window).bind("scroll", () => {
					console.log('Scrolling, resetting timer');
					if (scrollTimer)
						clearTimeout(scrollTimer);

					angular.element(ele).css('display', 'none');

					scrollTimer = setTimeout(() => {
						angular.element(ele).css('display', 'block');
						console.log('scrolling stopped, reshowing footer');
					}, 250);
				});
			}
		}
	});

})();