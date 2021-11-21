var app = angular.module('app.overlay', []);

app.directive('overlayPage', function() {
    return {
        restrict: "EA",
        templateUrl: "/directives/page/overlay/overlay.php"
    }
})