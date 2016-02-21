angular.module('HuddBusApp.controllers', []).
  controller('stopController', function($scope, ergastAPIservice) {
    $scope.nameFilter = null;
    $scope.stopsList = [];

    ergastAPIservice.getBuses().success(function (response) {
        //Dig into the responde to get the relevant data
        $scope.stopsList = response.departures;
    });
  });