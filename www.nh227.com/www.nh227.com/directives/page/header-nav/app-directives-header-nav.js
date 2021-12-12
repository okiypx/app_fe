var app = angular.module('app.header-nav', []);

app.directive('headerNavPage', function() {
    return {
        restrict: "EA",
        template: "<header class=\"header-nav\" ng-controller=\"NavController\">\n" +
            "  <div class=\"header-nav__top\">\n" +
            "    <div class=\"main-container\">\n" +
            "      <div class=\"header-nav__top-item\">\n" +
            "        <notice-page></notice-page>\n" +
            "      </div>\n" +
            "      <div class=\"header-nav__top-item\">\n" +
            "        <nav class=\"sub-nav\">\n" +
            "          <ul class=\"list-inline\">\n" +
            "            <li><a href=\"\" ng-click=\"displayCustomer(2);\">자주 묻는 질문</a></li>\n" +
            "            <li><a href=\"\" ng-click=\"displayCustomer(5);\">파트너 제휴 문의</a></li>\n" +
            "          </ul>\n" +
            "        </nav>\n" +
            "      </div>\n" +
            "    </div>\n" +
            "  </div>\n" +
            "  <div class=\"header-nav__menu\">\n" +
            "    <div class=\"main-container\">\n" +
            "      <div class=\"logo\">\n" +
            "        <a href=\"/#/\">\n" +
            "          <img src=\"/common/images/logo-blue-new.png\" alt=\"\">\n" +
            "        </a>\n" +
            "      </div>\n" +
            "      <nav class=\"main-nav\">\n" +
            "        <ul class=\"list-inline\">\n" +
            "          <li ng-repeat=\"navItem in mainNav\">\n" +
            "            <a href=\"\" ng-click=\"navClick(navItem.type, navItem.setTab)\">\n" +
            "              <p class=\"classA {{navItem.classA\">{{navItem.title}}</p>\n" +
            "              <p class=\"classB {{navItem.classB\">{{navItem.sub}}</p>\n" +
            "            </a>\n" +
            "          </li>\n" +
            "        </ul>\n" +
            "      </nav>\n" +
            "    </div>\n" +
            "  </div>\n" +
            "</header>\n",
        controller: MainController
    };

    function MainController($scope, $rootScope) {
        $scope.mainNav = [{
                'title': '모바일',
                'sub': 'Mobile',
                'classA': 'title',
                'classB': 'sub',
                'type': '',
                'setTab': ''
            },
            {
                'title': '게임 가이드',
                'sub': 'Rules',
                'classA': 'title',
                'classB': 'sub',
                'type': 'rules',
                'setTab': ''
            },
            {
                'title': '프로모션',
                'sub': 'Promotion',
                'classA': 'title',
                'classB': 'sub',
                'type': 'customer',
                'setTab': '3'
            },
            {
                'title': '마이월렛',
                'sub': 'My Wallet',
                'classA': 'title',
                'classB': 'sub',
                'type': 'transfer',
                'setTab': '1'
            },
            {
                'title': '입금신청',
                'sub': 'Deposit',
                'classA': 'title',
                'classB': 'sub',
                'type': 'deposit',
                'setTab': '2'
            },
            {
                'title': '출금신청',
                'sub': 'Withdraw',
                'classA': 'title',
                'classB': 'sub',
                'type': 'withdraw',
                'setTab': '3'
            },
            {
                'title': '고객센터',
                'sub': 'Customer',
                'classA': 'title',
                'classB': 'sub',
                'type': 'customer',
                'setTab': '1'
            },
        ];

        $scope.navClick = function(type, setTab) {
            if (type === 'transfer' || type === 'deposit' || type === 'withdraw') {
                $scope.displayWallet(setTab)
            } else if (type === 'customer') {
                $scope.displayCustomer(setTab);
            } else if (type === 'rules') {
                $scope.displayRules(setTab);
            } else {
                window.location.href = '/mobile/#/';
            }
        };
    }
});
