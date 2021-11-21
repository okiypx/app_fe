var app = angular.module('app.footer', []);

app.directive('footerPage', function() {
    return {
        restrict: "EA",
        templateUrl: "/directives/page/footer/footer.php",
        controller: function($scope, $rootScope, $http) {
            $http.get("/api/system/gamelist/gamebuttons.json")
                .success(function(data) {
                    $rootScope.footerLogos = data;
                });
        }
    }
});