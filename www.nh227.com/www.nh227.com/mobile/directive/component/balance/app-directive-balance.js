angular.module('mobileApp')

    .directive('balanceMobile', function() {
        return {
            restrict: "EA",
            template: "<div ng-if=\"loggedIn\" class=\"user-container\" >\n" +
                "  <div class=\"pull-left\">\n" +
                "    <strong></strong><i role=\"button\" ng-click=\"displayDirectMessage()\" class=\"guest-dm fa fa-envelope\"> <span ng-bind=\"UnreadDM\">0</span></i></strong></strong>\n" +
                "  </div>\n" +
                "  <div class=\"pull-right\">\n" +
                "    <div class=\"player-balance\" ng-click=\"displayWallet()\">\n" +
                "      <p ng-show=\"totalBalance =='Loading'\" ng-bind=\"totalBalance\"></p>\n" +
                "      <p ng-show=\"totalBalance !='Loading'\">{{ totalBalance | number }} <span style=\"color: #02a6e2;font-weight: 700\">원</span></p>\n" +
                "    </div>\n" +
                "  </div>\n" +
                "</div>\n",
            controller: ''
        }
    });
