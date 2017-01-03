crepeCalcApp = angular.module('crepeCalcApp',['ngRoute']);

crepeCalcApp.config(function($routeProvider) {
	$routeProvider
		.when('/', {
		controller: 'crepeCalcController',
		templateUrl: 'views/home.html'
		})
		.when('/edit/', {
			controller: 'crepeCalcController',
			templateUrl: 'views/edit.html'
		})
		.when('/prices/', {
			controller: 'crepeCalcController',
			templateUrl: 'views/prices.html'
		})
		.when('/calculate/', {
			controller: 'crepeCalcController',
			templateUrl: 'views/calculate.html'
		})
		.when('/results', {
			controller: 'crepeCalcController',
			templateUrl: 'views/results.html'
		})
		.otherwise({
		redirectTo: '/'
	});
});
