var myApp = angular.module("customersApp", ['ngRoute']);
myApp.config(function($routeProvider){
	$routeProvider
	  .when('/', {
	  	controller: "CustomersController",
	  	templateUrl: "app/views/customers.html"
	  })
	  .when('/orders/:customerId', {
	  	controller: "OrdersController",
	  	templateUrl: "app/views/orders.html"
	  });
	  .otherwise({ redirectTo: '/' })
});