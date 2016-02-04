# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

var vkationapp1 = angular.module('vkationapp',['ngResource'])
vkationapp1.controller('vkationcontroller', function ($scope, $http) 
{
	$scope.headertitle=true;
	$scope.headerimg=true;
	$scope.resort=false;
	$scope.resorts = function() 
	{
		$scope.headertitle=false;
		$scope.headerimg=false;
		$scope.resort=true;
	}
	
});