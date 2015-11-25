'use strict';

angular.module('app', [
  'ngRoute'
])
.config(['$routeProvider', function($routeProvider, $routeParams) {

  $routeProvider.when('/', {
    templateUrl: 'views/main-view.html',
    controller: 'GlobalCtrl',
  })
  /* OTHERWISE */

  .otherwise({redirectTo: '/'});

}])