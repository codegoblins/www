/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	(function () {
		var app = angular.module('CodeGoblins', ['ui.router']);
	
		console.log('App initialized');
	
		app.config(function ($stateProvider, $urlRouterProvider) {
	
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
			}).state('app.main', {
				url: '/',
				views: {
					'content@': {
						templateUrl: 'templates/main.html'
					}
				}
			}).state('app.resume', {
				url: '/resume',
				views: {
					'content@': {
						templateUrl: 'templates/resume.html'
					}
				}
			});
		});
	
		app.directive('hideOnScroll', function ($window) {
			return {
				restrict: 'A',
				link: function link(scope, ele, attrs) {
					var scrollTimer = null;
	
					angular.element($window).bind('scroll', function () {
						if (scrollTimer) clearTimeout(scrollTimer);
	
						angular.element(ele).css('display', 'none');
	
						scrollTimer = setTimeout(function () {
							angular.element(ele).css('display', 'block');
						}, 250);
					});
				}
			};
		});
	})();

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTFhYWQzMjI5YmJkMDBlZWFiZWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3JDQSxFQUFDLFlBQVc7QUFDWCxNQUFJLE1BQU0sUUFBUSxNQUFSLENBQWUsYUFBZixFQUE4QixDQUFDLFdBQUQsQ0FBOUIsQ0FBVjs7QUFFQSxVQUFRLEdBQVIsQ0FBWSxpQkFBWjs7QUFFQSxNQUFJLE1BQUosQ0FBVyxVQUFDLGNBQUQsRUFBaUIsa0JBQWpCLEVBQXdDOztBQUVsRCxzQkFBbUIsU0FBbkIsQ0FBNkIsR0FBN0I7O0FBRUEsa0JBQWUsS0FBZixDQUFxQixLQUFyQixFQUE0QjtBQUMzQixjQUFVLElBRGlCO0FBRTNCLFdBQU87QUFDTixlQUFVO0FBQ1QsbUJBQWE7QUFESixNQURKO0FBSU4sZUFBVTtBQUNULG1CQUFhO0FBREo7QUFKSjtBQUZvQixJQUE1QixFQVdDLEtBWEQsQ0FXTyxVQVhQLEVBV21CO0FBQ2xCLFNBQUssR0FEYTtBQUVsQixXQUFPO0FBQ04saUJBQVk7QUFDWCxtQkFBYTtBQURGO0FBRE47QUFGVyxJQVhuQixFQW1CQyxLQW5CRCxDQW1CTyxZQW5CUCxFQW1CcUI7QUFDcEIsU0FBSyxTQURlO0FBRXBCLFdBQU87QUFDTixpQkFBWTtBQUNYLG1CQUFhO0FBREY7QUFETjtBQUZhLElBbkJyQjtBQTRCQSxHQWhDRDs7QUFrQ0EsTUFBSSxTQUFKLENBQWMsY0FBZCxFQUE4QixVQUFDLE9BQUQsRUFBYTtBQUMxQyxVQUFPO0FBQ04sY0FBVSxHQURKO0FBRU4sVUFBTSxjQUFDLEtBQUQsRUFBUSxHQUFSLEVBQWEsS0FBYixFQUF1QjtBQUM1QixTQUFJLGNBQWMsSUFBbEI7O0FBRUEsYUFBUSxPQUFSLENBQWdCLE9BQWhCLEVBQXlCLElBQXpCLENBQThCLFFBQTlCLEVBQXdDLFlBQU07QUFDN0MsVUFBSSxXQUFKLEVBQ0MsYUFBYSxXQUFiOztBQUVELGNBQVEsT0FBUixDQUFnQixHQUFoQixFQUFxQixHQUFyQixDQUF5QixTQUF6QixFQUFvQyxNQUFwQzs7QUFFQSxvQkFBYyxXQUFXLFlBQU07QUFDOUIsZUFBUSxPQUFSLENBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLENBQXlCLFNBQXpCLEVBQW9DLE9BQXBDO0FBQ0EsT0FGYSxFQUVYLEdBRlcsQ0FBZDtBQUdBLE1BVEQ7QUFVQTtBQWZLLElBQVA7QUFpQkEsR0FsQkQ7QUFvQkEsRUEzREQsSSIsImZpbGUiOiJtYWluLnBhY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDUxYWFkMzIyOWJiZDAwZWVhYmViXG4gKiovIiwiXG4oZnVuY3Rpb24oKSB7XG5cdGxldCBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnQ29kZUdvYmxpbnMnLCBbJ3VpLnJvdXRlciddKTtcblxuXHRjb25zb2xlLmxvZygnQXBwIGluaXRpYWxpemVkJyk7XG5cblx0YXBwLmNvbmZpZygoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikgPT4ge1xuXHRcdFxuXHRcdCR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcblxuXHRcdCRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdhcHAnLCB7XG5cdFx0XHRhYnN0cmFjdDogdHJ1ZSxcblx0XHRcdHZpZXdzOiB7XG5cdFx0XHRcdCdoZWFkZXInOiB7XG5cdFx0XHRcdFx0dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvaGVhZGVyLmh0bWwnXG5cdFx0XHRcdH0sXG5cdFx0XHRcdCdmb290ZXInOiB7XG5cdFx0XHRcdFx0dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvZm9vdGVyLmh0bWwnXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KVxuXHRcdC5zdGF0ZSgnYXBwLm1haW4nLCB7XG5cdFx0XHR1cmw6ICcvJyxcblx0XHRcdHZpZXdzOiB7XG5cdFx0XHRcdCdjb250ZW50QCc6IHtcblx0XHRcdFx0XHR0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9tYWluLmh0bWwnXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KVxuXHRcdC5zdGF0ZSgnYXBwLnJlc3VtZScsIHtcblx0XHRcdHVybDogJy9yZXN1bWUnLFxuXHRcdFx0dmlld3M6IHtcblx0XHRcdFx0J2NvbnRlbnRAJzoge1xuXHRcdFx0XHRcdHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3Jlc3VtZS5odG1sJ1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0fSk7XG5cblx0YXBwLmRpcmVjdGl2ZSgnaGlkZU9uU2Nyb2xsJywgKCR3aW5kb3cpID0+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0cmVzdHJpY3Q6ICdBJyxcblx0XHRcdGxpbms6IChzY29wZSwgZWxlLCBhdHRycykgPT4ge1xuXHRcdFx0XHRsZXQgc2Nyb2xsVGltZXIgPSBudWxsO1xuXG5cdFx0XHRcdGFuZ3VsYXIuZWxlbWVudCgkd2luZG93KS5iaW5kKCdzY3JvbGwnLCAoKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHNjcm9sbFRpbWVyKVxuXHRcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHNjcm9sbFRpbWVyKTtcblxuXHRcdFx0XHRcdGFuZ3VsYXIuZWxlbWVudChlbGUpLmNzcygnZGlzcGxheScsICdub25lJyk7XG5cblx0XHRcdFx0XHRzY3JvbGxUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0YW5ndWxhci5lbGVtZW50KGVsZSkuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cdFx0XHRcdFx0fSwgMjUwKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxufSkoKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9tYWluLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==