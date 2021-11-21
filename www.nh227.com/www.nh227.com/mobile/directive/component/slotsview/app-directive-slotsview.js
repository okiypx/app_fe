angular.module('mobileApp')

    .directive('slotsView', function() {
        return {
            restrict: "EA",
            templateUrl: "/mobile/directive/component/slotsview/slotview.php",
            controller: MainController
        }
    });

function MainController($rootScope) {
    $rootScope.setActiveCategory = function(category) {
        alert("as")
        $('.games-popup-container').css("display", "none");
        $('.slots-view-page').css("display", "block !important");
        setTimeout(function() {
            $(".games-popup-container").css("display", "flex");
        }, 200);

        $rootScope.activeCategory = category;
    }
};