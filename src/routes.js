(function () {
'use strict';

	angular.module('MenuApp')
		.config(RoutesConfig);

		RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];
		function RoutesConfig ($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.otherwise('/');

			$stateProvider

				.state('home', {
					Url: '/',
					templateUrl: 'src/Data/Templates/home.html'
				})
				.state('categories', {
					Url: '/categories', 
					templateUrl: 'Data/Templates/categories.temmplate.html',
					controller: 'categoriesController as ctrl'
				});
		}
})();