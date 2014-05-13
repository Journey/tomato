var app = angular.module("tomato",[]);
app.controller("itemCtr",["$scope","Coperation","getItem","applySafely",function(scope,constOperation,getItem,applySafely) {
	scope.newTask = "";
	scope.items = [];
	scope.addNewTask = function(evt){
		if(scope.newTask.trim().length >0){
			scope.items.push(getItem(scope.newTask.trim()));
		}
	}
	scope.$on(constOperation.add,function(){
		applySafely(scope,function(){
			scope.items.unshift(getItem());
		});
	});

	scope.$on(constOperation.update,function(){
		
	})

	scope.$on(constOperation.del,function(){
		
	});
}])
.factory("getItem",function(){
	return function(sTitle) {
		sTitle = sTitle? sTitle : "";
		return {
			id: Math.random(),
			title:sTitle,
			log:"",
			checked:true
		};
		
	};
})
.factory("applySafely",function(){
	return function(scope,fn){
		var phase = scope.$root.$$phase;
		if(phase == '$apply' || phase == '$digest') {
			if(fn && (typeof(fn) === 'function')) {
				fn();
			}
		} 
		else {
			scope.$apply(fn);
		}
	};
	
})
.constant("Coperation",{
		add:"ADD",
		update:"UPDATE",
		del:"DELETE"
});