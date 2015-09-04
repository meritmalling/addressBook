var AddressApp = angular.module('AddressApp', ['ui.bootstrap', 'ngRoute', 'sailsResource', 'ngMessages']);

AddressApp.run(function(){
        console.log('Witty');
});

AddressApp.config(['$routeProvider','$locationProvider', 'sailsResourceProvider', function($routeProvider, $locationProvider, sailsResourceProvider){

        sailsResourceProvider.configuration = {
                prefix: '/api',
                verbose: true
        }

        $locationProvider.html5Mode(true);

        $routeProvider
        .when('/', {
                templateUrl: '/views/home.html',
                controller: 'HomeCtrl'
        }).when('/about', {
                templateUrl: '/views/about.html',
                controller: 'AboutCtrl'
        }).when('/person/new', {
                templateUrl: '/views/person/new.html',
                controller: 'NewPersonCtrl'
        }).when('/person/:id', {
                templateUrl: '/views/person/show.html',
                controller: 'ShowPersonCtrl'
        }).otherwise( {
                templateUrl: '/views/404.html',
        })

}]);