var CustomerEditController = function($scope, $routeParams){
	$scope.customerId = $routeParams.customerId;
}

angular.module('customersApp').controller('CustomerEditController', CustomerEditController);