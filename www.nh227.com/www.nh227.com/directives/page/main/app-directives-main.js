var app = angular.module('app.main', []);

app.directive('mainPage', function() {
    return {
        restrict: "EA",
        templateUrl: "/directives/page/main/main.php",
        controller: function($scope, $rootScope, $http) {
            $http.get("/api/system/gamelist/gamebuttons.json")
                .success(function(data) {
                    $rootScope.gameButtons = data;
                });

            $scope.gameCategory = [{
                    category: 'live',
                    category_krw: '카지노',
                    activeTab: 'live',
                    buttonDesc: '라이브 카지노 »',
                    imgUrl: 'mobile-game-buttons-1.png'
                },
                {
                    category: 'sports',
                    category_krw: '스포츠',
                    activeTab: 'sports',
                    buttonDesc: '스포츠 베팅 »',
                    imgUrl: 'mobile-game-buttons-3.png'
                },
                {
                    category: 'slot',
                    category_krw: '슬롯',
                    activeTab: 'slot',
                    buttonDesc: '슬롯 머신 »',
                    imgUrl: 'mobile-game-buttons-2.png'
                },
                {
                    category: 'Others',
                    category_krw: '미니게임',
                    activeTab: 'Others',
                    buttonDesc: '미니 게임 »',
                    imgUrl: 'mobile-game-buttons-4.png'
                },
            ];

            $rootScope.redirectToLoadSlot = function(gspNo, gspName) {

                if (gspNo == 1034) {
                    return $rootScope.comingSoon();
                }

                if (gspNo == 1052) {
                    return $scope.playGame(1052, 'game');
                    $rootScope.slotView = false;
                } else {
                    $rootScope.activeGspName = gspName;
                    $rootScope.activeSlotGsp = gspNo;
                    $rootScope.slotView = true;
                }

            }

            $scope.setActiveDirective = function(category) {
                if (category == 'hotel') {
                    return $rootScope.comingSoon();
                }
                if (category == 'jackpot') {
                    category = 'slot';
                }
                $scope.activeDirective = category;

                $scope.navCategory = true;
                $rootScope.slotView = false;
            };

            $('.text-slider').not('.slick-initialized').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                dots: false,
                arrows: false,
            });
        }
    }
});