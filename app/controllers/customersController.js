// Option 1
/*
myApp.controller("CustomersController", function($scope){
	$scope.sortBy = 'name';
	$scope.reverse = false;
	$scope.customers=[{joinedDate: '2008-12-06', name: 'Chirag Aggarwal', city: 'New Delhi', orderTotal: 9.5975}, {joinedDate: '2006-12-01', name: 'Rajni Aggarwal', city: 'New Delhi', orderTotal: 9.5975}, {joinedDate: '2008-03-24', name: 'Palak Aggarwal', city: 'New Delhi', orderTotal: 9.5975}, {joinedDate: '2008-02-01', name: 'Deepak Aggarwal', city: 'New Delhi', orderTotal: 9.5975}];
	$scope.doSort = function(propName){
		$scope.sortBy = propName;
		$scope.reverse = !$scope.reverse;
	}
});
*/

// Option 2
/*
(function(){
	angular.module('customersApp').controller("CustomersController", function($scope){
		$scope.sortBy = 'name';
		$scope.reverse = false;
		$scope.customers=[{joinedDate: '2008-12-06', name: 'Chirag Aggarwal', city: 'New Delhi', orderTotal: 9.5975}, {joinedDate: '2006-12-01', name: 'Rajni Aggarwal', city: 'New Delhi', orderTotal: 9.5975}, {joinedDate: '2008-03-24', name: 'Palak Aggarwal', city: 'New Delhi', orderTotal: 9.5975}, {joinedDate: '2008-02-01', name: 'Deepak Aggarwal', city: 'New Delhi', orderTotal: 9.5975}];
		$scope.doSort = function(propName){
			$scope.sortBy = propName;
			$scope.reverse = !$scope.reverse;
		}
	});
})();
*/

(function(){
	var CustomersController = function($scope, customersFactory, appSettings){
		$scope.sortBy = 'name';
		$scope.reverse = false;
		$scope.customers = [];
		$scope.appSettings = appSettings;
		function init(){
			customersFactory.getCustomers()
				.success(function(customers){
					$scope.customers = customers;
				})
				.error(function(data, status, headers, config){
					// handle errors
				});
		}
		init();
		$scope.doSort = function(propName){
			$scope.sortBy = propName;
			$scope.reverse = !$scope.reverse;
		}
	}

	CustomersController.$inject = ['$scope', 'customersFactory', 'appSettings'];

	angular.module('customersApp').controller("CustomersController", CustomersController);
}());