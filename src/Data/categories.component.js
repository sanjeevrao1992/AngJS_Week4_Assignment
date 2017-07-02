(function () {

	angular.module('MenuApp')
		.component('categories', {
			templateUrl: 'src/Data/Templates/categoriesItems.template.html',
			bindings: {
				categories: '<'
			}
		})

})();