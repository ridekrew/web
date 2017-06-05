var app = angular.module('myApp', ['ngRoute', '720kb.datepicker', 'ui.bootstrap', 'ngSanitize', 'angularPayments'])

app.config(function($routeProvider){
	$routeProvider
	.when('/home', {
		templateUrl: 'partials/home.html'
	})
	.when('/submit', {
		templateUrl: 'partials/submit.html'
	})
	.when('/time', {
		templateUrl: 'partials/time.html'
	})
	.when('/', {
		templateUrl: 'partials/homepage.html'
	})
	.when('/promotions', {
		templateUrl: 'partials/promotions.html'
	})

})
