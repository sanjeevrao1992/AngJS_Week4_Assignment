(function () {
'use strict';

	angular.module('data')
	.service('MenuDataService', MenuDataService);

	MenuDataService.$inject = ['$http'];
	function MenuDataService ($http) {
		var ctrl = this;
		var categories = [];

		ctrl.getAllCategories = function() {
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

	}

	MenuDataService.getItemsForCategory = function () {

	};

})();