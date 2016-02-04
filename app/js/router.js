angular.module("app").config(function($routeProvider) {

  $routeProvider.when("/login",{
      templateUrl:"login.html",
      controller:"LoginController"
    });
    $routeProvider.when('/iglesias', {
      templateUrl: 'iglesias.html',
      controller: 'IglesiasController'
    });

    $routeProvider.when('/sitios', {
      templateUrl: 'sitios.html',
      controller: 'SitiosController'
    });

    $routeProvider.when('/restaurantes', {
      templateUrl: 'restaurantes.html',
      controller: 'RestarantesController'
    });

    $routeProvider.when('/universidades', {
      templateUrl: 'universidades.html',
      controller: 'universidadesController'
    });

    $routeProvider.otherwise({ redirectTo: '/login' });

});
