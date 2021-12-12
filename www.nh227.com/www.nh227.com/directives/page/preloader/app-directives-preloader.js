var app = angular.module('app.preloader', []);

app.directive('preloaderPage', function() {
    return {
        restrict: "EA",
        template: "<div id=\"preloader\">\n" +
            "  <div class=\"preloader-gif\"></div>\n" +
            "</div>\n"
    };
});
