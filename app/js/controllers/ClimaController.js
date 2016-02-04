app.controller("ClimaController", function ($scope,YahooService) {
  console.log("Entra al coso este");

  function onLoadSuccess(data) {
    console.log("Resultado" + JSON.stringify(data));
    $scope.dataClima = angular.fromJson(data);

    $scope.query = $scope.dataClima.query;
    $scope.channel = $scope.query.results.channel;
    $scope.titleYahoo = $scope.channel.title;

    $scope.hora = $scope.channel.lastBuildDate;
    $scope.temp = $scope.channel.item.condition.temp;
    $scope.tempF = parseInt($scope.temp);
    $scope.tempC = ($scope.tempF -32)/1.8;
  }
  YahooService.findWeather().success(onLoadSuccess).error(onLoadSuccess);

});
