"use strict";

(function (argument) {
	var module = angular.module("tomato");

	module.directive("task",function(){
		return {
			restrict: 'EA',
			replace: true,
			transclude:true,
			scope: {
		        item: '=item'
		    },
			templateUrl:"../template/item.html"
			/*link:function(scope,element,attrs){

			}*/
		};
	});

	module.directive("toolbar",function(){
		return {
			restrict: 'EA',
			replace: true,
			transclude:true,			
			templateUrl:"../template/toolbar.html",
			link:function(scope,element,attrs){
				element.on("click",function(evt){
					var target = evt.target;
					if(target.nodeName === "SPAN"){
						scope.$emit(target.dataset["type"]);
						scope.$broadcast(target.dataset["type"]);
					}
				});
			}
		};
	});
})();


