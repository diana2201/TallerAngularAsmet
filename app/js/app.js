var app = angular.module("app", ["ngRoute","ngMaterial"]).config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('brown')
    .accentPalette('amber');
});
