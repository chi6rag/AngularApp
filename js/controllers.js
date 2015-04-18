var myNameSpace = angular.module('myApp', [])
myNameSpace.controller('MyController', function MyController($scope){
	$scope.details = {
	'name' : "Chirag Aggarwal",
	'email' : "chi6rag@gmail.com",
	'experience' : "Building $1B Companies"
	}
})