(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController)

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {
	
	$scope.colorAttribute = "gray";
	
	$scope.checkAmount = function () {

		if($scope.lunchMenu) {
			
			var allListedItems = $scope.lunchMenu.split(',');
			var emptyItems = 0;

			for (var i = 0; i < allListedItems.length; i++) {
		        if (allListedItems[i].trim() == "" ) {
		            emptyItems++;
		        }
		    }

		    var validItems = allListedItems.length - emptyItems;
			console.log("valid items", validItems, allListedItems.length, emptyItems)
			if (validItems == 0 || allListedItems.length == 0) {
				$scope.message = "Please enter data first";
				$scope.colorAttribute = "red";
			} else if (validItems <=3) {
				$scope.message = "Enjoy!";
				$scope.colorAttribute = "green";
			} else {
				$scope.message = "Too much!";
				$scope.colorAttribute = "green";
			}
			

		} else {
			$scope.message = "Please enter data first";
			$scope.colorAttribute = "red";	
		}
		
	}

	$scope.clearMessage = function () {
		$scope.message = "";	
		$scope.colorAttribute = "gray";
	}

};


})();
