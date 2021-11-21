var app = angular.module('app.header-nav', []);

app.directive('headerNavPage', function() {
    return {
        restrict: "EA",
        templateUrl: "/directives/page/header-nav/header-nav.php",
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