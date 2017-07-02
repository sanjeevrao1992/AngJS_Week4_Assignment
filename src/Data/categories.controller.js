(function () {

	angular.module('MenuApp')
	.controller('categoriesController', categoriesController);

	categoriesController.$inject = ['MenuDataService', 'category'];
	function categoriesController (MenuDataService, category) {
		var ctrl = this;
		ctrl.categories = category;
	}
})();