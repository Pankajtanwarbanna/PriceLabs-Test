var app = angular.module('userRoutes', ['ngRoute'])

.config(function ($routeProvider, $locationProvider) {
    $routeProvider

        .when('/home', {
            templateUrl : '/app/views/index.html'
        })

        .otherwise( { redirectTo : '/'});

    $locationProvider.html5Mode({
        enabled : true,
        requireBase : false
    })
});
