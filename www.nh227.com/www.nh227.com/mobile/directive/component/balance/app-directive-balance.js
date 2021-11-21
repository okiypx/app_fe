angular.module('mobileApp')

    .directive('balanceMobile', function() {
        return {
            restrict: "EA",
            templateUrl: "/mobile/directive/component/balance/balance.php",
            controller: ''
        }
    });