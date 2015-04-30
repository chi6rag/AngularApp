(function(){
	console.log("loaded orders controller")
	var OrdersController = function($scope, $routeParams, customersFactory){
		var customerId = $routeParams.customerId;
		$scope.customer = null; 

		function init(){
			customersFactory.getCustomer(customerId)
				.success(function(customer){
					$scope.customer = customer;
				})
				.error(function(data, status, headers, config){
					// handle errors
				});
		}
		init();
	}

	OrdersController.$inject = ['$scope', '$routeParams', 'customersService'];

	angular.module('customersApp').controller("OrdersController", OrdersController);
}());