var app = angular.module('app.overlay', []);

app.directive('overlayPage', function() {
    return {
        restrict: "EA",
        template: "<div id=\"overlay-notice\"></div>"
    }
})
