angular.module('mobileApp')

    .directive('anouncementMobile', function() {
        return {
            restrict: "EA",
            templateUrl: "/mobile/directive/component/announcement/announcement.php",
            controller: ''
        }
    });