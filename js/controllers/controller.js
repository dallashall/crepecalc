crepeCalcApp.controller('crepeCalcController', ['$scope', '$location', function($scope, $location) {
	
	$scope.locationPath = function(newLocation) {
		return $location.path(newLocation);
	};
	
	$scope.baseRecipe = [3,1,1,1.25,2,7];
	$scope.newRecipe = [0,0,0,0,0,0];
	$scope.placeHolder = [3,1,1,1.25,2,7];
	$scope.resetRecipe = function() {
		$scope.baseRecipe = $scope.placeHolder;
	};
	
	$scope.saveBase = function() {
		var nameSave = "baseRecipe";
		var baseSave = JSON.stringify($scope.baseRecipe);
		console.log(baseSave);
			localStorage.setItem(nameSave, baseSave);
		console.log(localStorage.getItem("baseRecipe"));
    };
	
	$scope.loadBase = function() {
		if (localStorage.getItem("baseRecipe")) {
			$scope.baseRecipe = JSON.parse(localStorage.getItem("baseRecipe"));
			console.log($scope.baseRecipe);
		} else {
			$scope.saveBase();
			$scope.baseRecipe = JSON.parse(localStorage.getItem("baseRecipe"));
			console.log($scope.baseRecipe);
		};
	};
	
	$scope.saveNew = function() {
		var nameSave = "newRecipe";
		var baseSave = JSON.stringify($scope.newRecipe);
		console.log(baseSave);
			localStorage.setItem(nameSave, baseSave);
	};
	
	$scope.loadNew = function() {
		if (localStorage.getItem("newRecipe")) {
			$scope.newRecipe = JSON.parse(localStorage.getItem("newRecipe"));
		} else {
			$scope.saveNew();
			$scope.newRecipe = JSON.parse(localStorage.getItem("newRecipe"));
		};
	};
	
	$scope.calculate = function() {
		var recipe = JSON.parse(localStorage.getItem("baseRecipe"));
		var nCrepes = $scope.newRecipe[5];
		var crepes = recipe[5];
		var eggs = recipe[0];
		var sugar = recipe[1];
		var flour = recipe[2];
		var milk = recipe[3];
        var butter = recipe[4];
		
		$scope.newRecipe[0] =  Math.round(eggs/crepes*nCrepes);
		$scope.newRecipe[1] = (Math.round(sugar/crepes*nCrepes*3)/3).toFixed(2);
		if($scope.newRecipe[1] >= 16) {
			var sugarCups = $scope.newRecipe[1] / 16;
			sugarCups = (Math.round(sugarCups*4)/4).toFixed(2) + " cups";
			$scope.newRecipe[1] = sugarCups;
		} else {
			$scope.newRecipe[1] += " tbsp";
		}
		$scope.newRecipe[4] = Math.round(butter/crepes*nCrepes*2)/2;
		$scope.newRecipe[2] = Math.round(flour/crepes*nCrepes*4)/4;
		$scope.newRecipe[3] = Math.round(milk/crepes*nCrepes*4)/4;
		
	};
	
}]);