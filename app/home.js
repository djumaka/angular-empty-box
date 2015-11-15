/**
 * The default controller to land initially.
 */
'use strict';
define(['angular', 'appconfig'], function (angular) {

    angular.module('app').register.controller('home', home);
    home.$inject = [];

    ////////////////////////////
    function home() {
        var vm = this;
        vm.name = "of angular";
    }
});
