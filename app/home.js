/**
 * The default controller to land initially.
 */
'use strict';
define(['angular', 'appconfig'], function (angular) {
    angular.module('app').controller('home', homeCtrl);
    homeCtrl.$inject = [];

    //////
    function homeCtrl() {
        var vm = this;
        vm.name = "of angular";
    }

});
