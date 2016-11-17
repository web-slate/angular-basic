'use strict';

angular.module('lookUp')
    .controller('LookUpController', ['$log', '$scope', '$translate', function ($log, $scope, $translate) {
        $log.info('Look Up Controller loaded');

        this.user = {name: 'Blake'};
    }]);
