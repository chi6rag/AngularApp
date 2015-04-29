var myApp = angular.module("customersApp", ['ngRoute']);
myApp.config(function($routeProvider){
	$routeProvider
	  .when('/', {
	  	controller: "CustomersController",
	  	templateUrl: "app/views/customers.html"
	  })
	  .otherwise({ redirectTo: '/' });
});