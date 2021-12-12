angular.module('mobileApp')

    .directive('anouncementMobile', function() {
        return {
            restrict: "EA",
            template: "<div class=\"announcement-wrapper\">\n" +
                "  <button class=\"announcement__btn\" ng-click=\"displayNotice();\">공지사항</button>\n" +
                "  <div class=\"announcement-container marquee-parent\">\n" +
                "    <div class=\"marquee-child\">\n" +
                "      <div class=\"announcement\" ng-repeat=\"announce in announceList | limitTo: 9\"\n" +
                "           ng-click=\"displayNotice(); readBoardContent(announce.Type,announce.BoardCode)\">\n" +
                "        <h1 class=\"announcement__subject\" ng-bind=\"announce.Subject | limitTo: 20\"></h1>\n" +
                "        <p class=\"announcement__date\" ng-bind=\"formatDate(announce.WriteDate) | date:'yyyy-MM-dd'\"></p>\n" +
                "        <span style=\"color: #999999; font-weight: 400; position: relative;\">|</span>\n" +
                "      </div>\n" +
                "    </div>\n" +
                "  </div>\n" +
                "</div>",
            controller: ''
        }
    });
