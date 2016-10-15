var app = angular.module('personApp', ['ngRoute']);
var users = [];
var newUser = null;
app.controller('viewListController', function ($scope, $http) {
    
    $http.get("data/data.json").success(function (data) {
        users = data.users;
        $scope.users = users;
        
    });


});
app.controller('detailsListController', function ($scope, $http,$routeParams) {
    $scope.id = $routeParams.id;
    $http.get("data/data.json").success(function (data) {
        users = data.users;
        $scope.users = users;
        $scope.newUser = $scope.users[$scope.id];
        window.console.log(newUser);
    });


});



app.config(function ($routeProvider) {
    $routeProvider

            .when("/list", {
                templateUrl: "templates/list.html",
                controller: "viewListController"
            })
            .when("/details/:id", {
                templateUrl: "templates/details.html",
                controller: "detailsListController"
            })
            .otherwise({
                redirectTo: "/list"
            });
});





