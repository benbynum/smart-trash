'use strict';

angular.module('app')
	// Smart Trash - 3 different users must click before item is deleted
	.directive('smartTrash', function($timeout) {
		return {
			restrict: 'A',
			link: function(scope, element, attrs) {
				element.bind('click', function() {
					console.log('smart trash clicked')
					var children = element.children();
					var subtrash1, subtrash2, subtrash3;
					// Get subtrashes
					angular.forEach(children, function(val, key) {
						if (angular.element(val).hasClass('subtrash-1')) subtrash1 = angular.element(val);
						if (angular.element(val).hasClass('subtrash-2')) subtrash2 = angular.element(val);
						if (angular.element(val).hasClass('subtrash-3')) subtrash3 = angular.element(val);
					})
					var subtrashes = [subtrash1, subtrash2, subtrash3]
					// If 3rd trasher, delete
					if (scope.trashers.length == 2 ) {
						scope.trashers.push('user3')
						scope.$apply(); // To see `user3` in pre tags, because digest cycle not happening until later
						subtrash3.removeClass('fade-4').addClass('primary-red fade-8')
						alert('You are the third user to click delete. Now deleting post.')
						angular.forEach(subtrashes, function(val) {
							val.removeClass('primary-red fade-8').addClass('fade-4')
						})
						scope.trashers = [];
						scope.postDeleted = true;
						$timeout(function() {
							scope.postDeleted = false;
						}, 1000)
					// If 2nd trasher turn second trash red
					} else if (scope.trashers.length == 1) {
						scope.trashers.push('user2')
						subtrash2.removeClass('fade-4').addClass('primary-red fade-8')
					// If 1st trasher turn first trash red
					} else if (scope.trashers.length == 0) {
						scope.trashers.push('user1')
						subtrash1.removeClass('fade-4').addClass('primary-red fade-8')
					}
				})
			}
		}
	})