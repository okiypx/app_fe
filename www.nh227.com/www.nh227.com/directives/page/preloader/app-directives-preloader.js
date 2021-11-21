var app = angular.module('app.preloader', []);

app.directive('preloaderPage', function() {
    return {
        restrict: "EA",
        templateUrl: "/directives/page/preloader/preloader.php"
    };
});