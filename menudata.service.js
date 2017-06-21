(function () {
'use strict';

	angular.module('MenuApp')
	.service('MenuDataService', MenuDataService);

	MenuDataService.$inject = ['$http'];
	MenuDataService.getAllCategories = function ($http) {
		var ctrl = this;
		var categories = [];

		return $http ({
			method: 'Get',
			Url: 'https://davids-restaurant.herokuapp.com/categories.json'
		})
		.then(function (result) {
			categories.push(result.name);
			return categories;
		})
		.catch(function (error) {
			console.log(error);
		});

	};

	MenuDataService.getItemsForCategory = function () {

	};

})();