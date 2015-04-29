(function(){
	console.log("loaded orders controller")
	var OrdersController = function($scope, $routeParams, customersFactory){
		var customerId = $routeParams.customerId;
		$scope.orders = null;
		$scope.customers = []

		function customersInit(){
			$scope.customers = customersFactory.getCustomers();
		}
		customersInit();

		function init(){
			for(var i=0, len=$scope.customers.length; i<len; i++){
				if($scope.customers[i].id === parseInt(customerId)){
					$scope.orders = $scope.customers[i].orders
					break;
				}
			}
		}
		init();
	}

	OrdersController.$inject = ['$scope', '$routeParams', 'customersFactory'];

	angular.module('customersApp').controller("OrdersController", OrdersController);
}());