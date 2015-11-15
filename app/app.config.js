/**
 * Created by Boyan Djumakov on 01-11-2015
 * The main Angular config. Includes router and other set-ups
 */
'use strict';
define(['angular', 'app/route-resolver.service'], function (angular) {
// Init main module & config
    var app = angular.module('app', ['ngRoute', 'routeResolverServices']).config(appConfig);

    appConfig.$inject = ['$routeProvider', 'routeResolverProvider','$controllerProvider',
        '$compileProvider', '$filterProvider', '$provide'];


    function appConfig($routeProvider, routeResolverProvider, $controllerProvider,
                       $compileProvider, $filterProvider, $provide) {

        app.register =
        {
            controller: $controllerProvider.register,
            directive: $compileProvider.directive,
            filter: $filterProvider.register,
            factory: $provide.factory,
            service: $provide.service
        };

        var route = routeResolverProvider.route;

        $routeProvider
            .when('/', route.resolve('home'))
            .when('/second', route.resolve('second'))
            .otherwise({
                redirectTo: '/'
            });
    }

    return app;
});