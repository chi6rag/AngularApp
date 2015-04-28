var myApp = angular.module("customersApp", ['ngRoute']);
myApp.config(function($routeProvider){
	$routeProvider
	  .when('/', {
	  	controller: "CustomersController",
	  	templateUrl: "app/views/customers.html"
	  })
	  .when('/orders', {
	  	controller: "OrdersController",
	  	templateUrl: "app/views/orders.html"
	  })
	  .when("/editCustomer/:customerId", {
	  	controller: "CustomerEditController",
	  	templateUrl: "app/views/customerEdit.html"
	  })
	  .otherwise({ redirectTo: '/' });
});
var myAppTwo = angular.module("myAppTwo", []);