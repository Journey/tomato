var app = angular.module("tomato",[]);
app.controller("itemCtr",["$scope","Coperation","getEmptyItem",function(scope,constOperation,getEmptyItem) {
	scope.items = [{
		id:Math.random(),
		title:"",
		description:"",
		log:"",
		checked:false
	}];

	scope.$on(constOperation.add,function(){
		scope.items.unshift(getEmptyItem());
		scope.$apply();
	});

	scope.$on(constOperation.update,function(){
		
	})

	scope.$on(constOperation.del,function(){
		
	});
}])
.factory("getEmptyItem",function(){
	return function() {
		id: Math.random(),
		title:"",
		description:"",
		log:"",
		checked:true
	};
})
.constant("Coperation",{
		add:"ADD",
		update:"UPDATE",
		del:"DELETE"
});