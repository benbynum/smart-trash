'use strict';

angular.module('app')
.controller('GlobalCtrl',
	function($scope) {

		$scope.trashers = [];
		$scope.postDeleted = false;

	});
