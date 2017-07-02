(function () {
'use strict';

	angular.module('MenuApp')
		.config(RoutesConfig);

		RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];
		function RoutesConfig ($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.otherwise('/home');

			$stateProvider

				.state('home', {
					url: '/home',
					templateUrl: 'src/Data/Templates/home.html'
				})
				.state('categories', {
					url: '/category', 
					templateUrl: 'src/Data/Templates/categories.template.html',
					controller: 'categoriesController as ctrl',
					resolve: {
						categories : ['MenuDataService', function(MenuDataService) {
							return MenuDataService.getAllCategories();
						}]
					}
				})
				.state('items', {
					url: '/items',
					templateUrl: 'src/Data/Templates/items.template.html',
					controller: 'itemsController as ctrl'
				});
		}
})();