angular.module('HuddBusApp.services', []).
  factory('ergastAPIservice', function($http) {

    var ergastAPI = {};

    ergastAPI.getBuses = function() {
      return $http({
        method: 'JSONP', 
        url: 'http://transportapi.com/v3/uk/bus/stop/450019315/live.json?app_id=03bf8009&app_key=d9307fd91b0247c607e098d5effedc97&group=route&nextbuses=yes&callback=JSON_CALLBACK'
      });
    }

    return ergastAPI;
  });