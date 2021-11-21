var app = angular.module('app.notice', []);

app.directive('noticePage', function() {
    return {
        restrict: "EA",
        templateUrl: '/directives/page/header-nav/notice-component/notice.php',
        link: function() {
            $('.newsticker').newsTicker({
                row_height: 18,
                max_rows: 1,
                direction: 'up',
                autostart: 1,
                pauseOnHover: 0
            });
        }
    }
})