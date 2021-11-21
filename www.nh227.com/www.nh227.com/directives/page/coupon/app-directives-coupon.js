var app = angular.module('app.coupon', []);

app.directive('couponPage', function() {
    return {
        restrict: "EA",
        templateUrl: "/directives/page/coupon/coupon.php",
    }
});