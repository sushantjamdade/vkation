// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require jquery
//= require bootstrap-sprockets
//= require angular


/*vkationapp1 = angular.module('vkationapp',[])
vkationapp1.controller('vkationcontroller',['$scope', '$http', function ($scope, $http) 
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
	
}]);
*/

var vkationapp1 = angular.module('vkationapp',[])
vkationapp1.controller('vkationcontroller',['$scope', '$http', function ($scope, $http) 
{
	$scope.headertitle = true;
	$scope.headerimg = true;
	$scope.resort = false;
	$scope.swcyvp = false;
	$scope.accommodation = function() 
	{
		$scope.headertitle = false;
		$scope.headerimg = false;
		$scope.resort = true;
		$scope.swcyvp = false;
	}
	
	$scope.cfcyvp = function() 
	{
		$scope.headertitle = false;
		$scope.headerimg = false;
		$scope.resort = false;
		$scope.swcyvp = true;
	}
}]);
