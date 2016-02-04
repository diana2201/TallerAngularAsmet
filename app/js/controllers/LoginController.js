app.controller("LoginController",function($scope, $route, SidenavFactory){

  $scope.path = $route.current.templateUrl;
  console.log("Path: "+$scope.path);
  $scope.showSidenav = SidenavFactory.showSidenav($scope.path);
  console.log($scope.showSidenav);

});
