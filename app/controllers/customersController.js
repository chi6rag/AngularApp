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
	var CustomersController = function($scope, $routeParams){
		$scope.sortBy = 'name';
		$scope.reverse = false;
		$scope.customers=[
			{
				id: 1,
				joinedDate: '2008-12-06',
				name: 'Chirag Aggarwal',
				city: 'New Delhi',
				orders:[
					{
						id: 1,
						product: 'Shoes',
						total: 9.5975
					}
				],
				orderTotal: 9.5975
			},
			{
				id: 2,
				joinedDate: '2008-12-06',
				name: 'Palak Aggarwal',
				city: 'New Delhi',
				orders:[
					{
						id: 23,
						product: 'Dress',
						total: 21
					}
				],
				orderTotal: 21
			},
			{
				id: 3,
				joinedDate: '2008-12-06',
				name: 'Rajni Aggarwal',
				city: 'New Delhi',
				orders:[
					{
						id: 99,
						product: 'Diamond',
						total: 1000
					}
				],
				orderTotal: 1000
			},
			{
				id: 4,
				joinedDate: '2008-12-06',
				name: 'Deepak Aggarwal',
				city: 'New Delhi',
				orders:[
					{
						id: 4,
						product: 'T Shirt',
						total: 500
					}
				],
				orderTotal: 500
			}
		];
		$scope.doSort = function(propName){
			$scope.sortBy = propName;
			$scope.reverse = !$scope.reverse;
		}
	}

	CustomersController.$inject = ['$scope'];

	angular.module('customersApp').controller("CustomersController", CustomersController);
}());