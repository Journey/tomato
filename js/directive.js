"use strict";

(function (argument) {
	var module = angular.module("tomato");

	module.directive("toolbar",function(){
		return {
			restrict: 'A',
			replace: true,
			transclude:true,
			scope: {
		        customerInfo: '=info'
		    },
			templateUrl:""
			link:function(scope,element,attrs){

			}
		};
	})
})();


