(function () {
'use strict';

	angular.module('MenuApp')
		.config(RoutesConfig);

		RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];
		function RoutesConfig ('$stateProvider','$urlRouterProvider') {

			$urlRouterProvider.otherwise('/');

			$stateProvider

				.state('home', {
					Url: '/',
					templateUrl: 'src/Data/Templates/home.html'
				})
				.state('home.categories', {
					Url: '/categories', 
					templateUrl: 'src/Data/Templates/categories.temmplate.html'
				});
		}
})();