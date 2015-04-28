(function(){
	var ProductsController = function($scope){
	  $scope.products = [{name: 'Dove Soap', price: 'Rs. 10'}, {name: 'Mic', price: 'Rs. 10'}, {name: 'Dove Soap', price: 'Rs. 10'}]
	}

	angular.module("myAppTwo").controller('ProductsController', ProductsController);
})();