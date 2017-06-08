var app = angular.module('myApp', ['ngRoute', '720kb.datepicker', 'ui.bootstrap', 'ngSanitize'])

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
	// stripeProvider.setPublishableKey('pk_test_Ejljklt0l8hJEa3t0y3m8jlU');
	

})
