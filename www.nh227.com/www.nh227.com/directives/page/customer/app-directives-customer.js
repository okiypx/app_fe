var app = angular.module('app.customer', []);

app.directive('customerPage', function() {
    return {
        restrict: "EA",
        templateUrl: "/directives/page/customer/customer.php",
    }
});