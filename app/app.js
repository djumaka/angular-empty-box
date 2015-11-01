/**
 * Created by Boyan Djumakov on 01-11-2015
 * A require.js configuration file, with the basic modules needed.
 */
require.config({
    baseUrl: './',
    urlArgs: 'v=.01',
    paths: {
        angular: "assets/js/angular.min",
        angularrouter: "assets/js/angular-route.min",
        appconfig: "app/app.config",
        routeresolver: 'app/route-resolver.service'
    },
    shim: {
        angular: {
            exports: "angular"
        },
        angularrouter: {
            deps: ['angular'],
            exports: "angularrouter"
        },
        appconfig: {
            deps: ['angular'],
            exports: "appconfig"
        }


    }
});

// Main RequireJS action. Here we initialize The angular main app
require(['angularrouter', 'appconfig', 'app/home'], requireMain);
function requireMain() {
    angular.bootstrap(document,['app']);
}