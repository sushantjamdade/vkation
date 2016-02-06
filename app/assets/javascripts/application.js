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
	//Dropdwon for Place
	$scope.placeArray = ["Karnataka","Bengaluru","Mysore","Mangalore","Bellary","Shimoga","Raichur","Udupi","Bhadravati","Mandya"];
	
	//Dropdwon for Guests
	$scope.guestsArray = ["1 Guest","2 Guest","3 Guest","4 Guest","5 Guest","6 Guest","7 Guest","8 Guest","9 Guest","10 Guest"];
	
	$scope.headertitle=true;
	$scope.headerimg=true;
	$scope.resort=false;
	$scope.swcyvp = false;
	$scope.swcyvp_one = false;
	$scope.swcyvp_two = false;
	$scope.swcyvp_three = false;
	$scope.swcyvp_four = false;
	$scope.accommodation = function() 
	{
		$scope.headertitle=false;
		$scope.headerimg=false;
		$scope.resort=true;
	}
	
	$scope.cfcyvp = function() 
	{			
		$scope.headertitle = false;
		$scope.headerimg = false;
		$scope.resort = true;
		$scope.swcyvp = true;
		$scope.swcyvp_one = true;
		$scope.swcyvp_two = false;
		$scope.swcyvp_three = false;
		$scope.swcyvp_four = false;
	}
			
	$scope.cfcyvp_two = function() 
	{
		$scope.headertitle = false;
		$scope.headerimg = false;
		$scope.resort = true;
		$scope.swcyvp = true;
		$scope.swcyvp_one = false;
		$scope.swcyvp_two = true;
		$scope.swcyvp_three = false;
		$scope.swcyvp_four = false;
	}
	
	$scope.cfcyvp_three = function() 
	{
		$scope.headertitle = false;
		$scope.headerimg = false;
		$scope.resort = true;
		$scope.swcyvp = true;
		$scope.swcyvp_one = false;
		$scope.swcyvp_two = false;
		$scope.swcyvp_three = true;
		$scope.swcyvp_four = false;
	}
	
	$scope.cfcyvp_four = function() 
	{
		$scope.headertitle = false;
		$scope.headerimg = false;
		$scope.resort = true;
		$scope.swcyvp = true;
		$scope.swcyvp_one = false;
		$scope.swcyvp_two = false;
		$scope.swcyvp_three = false;
		$scope.swcyvp_four = true;
	}
	
	
}]);