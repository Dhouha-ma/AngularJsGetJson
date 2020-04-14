angular
  .module("ThirdApp", [])
  .controller("myController", function ($scope, $http) {
    $http.get("api/friends.json").then(function (response) {
      $scope.friends = response.data;
    });
  });
