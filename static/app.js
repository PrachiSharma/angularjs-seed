var app = angular.module('app',['ui.router']);

app.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/');
    
    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'home.html',
        controller: 'homeController'
    })
});