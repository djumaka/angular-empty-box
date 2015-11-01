/**
 * Created by Boyan Djumakov on 01-11-2015
 * The main Angular config. Includes router and other set-ups
 */
'use strict';
define(['angular'], function (angular) {
// Init main module & config
    var app = angular.module('app', ['ngRoute']).config(appConfig);

    appConfig.$inject = ['$routeProvider'];

    function appConfig($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/home.html',
                controller: 'home as vm'
            })
            .otherwise({
                redirectTo: '/'
            });
    }

    return app;
});