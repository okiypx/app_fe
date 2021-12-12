var app = angular.module('app.gamebuttons', []);

app.directive('gamebuttonsPage', function() {
    return {
        restrict: "EA",
        template: "<div class=\"button-container\">\n" +
            "  <div class=\"button-content\">\n" +
            "    <div role=\"button\" ng-repeat=\"games in gameCatergory\" class=\"gamebutton\">\n" +
            "      <div class=\"gamebuttons game-button-{{$index+1}} {{games.category}}\"\n" +
            "           ng-class=\"games.category\">\n" +
            "      </div>\n" +
            "    </div>\n" +
            "    <div role=\"button\" class=\"gamebutton\"\n" +
            "    >\n" +
            "      <div class=\"slots-jackpot-container click-disable\">\n" +
            "        <div class=\"jackpot\" ng-init=\"loadCounter();\">\n" +
            "          <div class=\"jackpot-odometer\">\n" +
            "            <img src=\"/common/images/jackpot/won-sign.png\" alt=\"\"></div>\n" +
            "        </div>\n" +
            "        <div class=\"clearfix\"></div>\n" +
            "      </div>\n" +
            "    </div>\n" +
            "    <div class=\"clearfix\"></div>\n" +
            "  </div>\n" +
            "</div>",
        controller: MainController
    }
});


function MainController($rootScope, $http, $location, $scope) {
    $rootScope.gameNav = [{
            'index': '1',
            'category': '라이브 카지노',
            'categoryEng': 'live',
            'titleCategory': 'casino'
        },
        {
            'index': '5',
            'category': '파워볼',
            'categoryEng': 'Powerball',
            'titleCategory': 'powerball'
        },
        {
            'index': '2',
            'category': '슬롯',
            'categoryEng': 'slot',
            'titleCategory': 'slot'
        },
        {
            'index': '4',
            'category': '미니 게임',
            'categoryEng': 'Others',
            'titleCategory': 'minigame'
        },
        {
            'index': '3',
            'category': '스포츠 베팅',
            'categoryEng': 'sports',
            'titleCategory': 'sports'
        },
    ];

    $rootScope.setActiveCategory = function(category) {

        if (category == '' || category === 'sports') {
            return $rootScope.comingSoon();
            console.log('sports')
        }

        $("#slots-con").scrollTop(0);
        $('.slots-games-container').css("display", "none");
        $(".game-button-container").css("display", "none");
        setTimeout(function() {
            $(".game-button-container").css("display", "flex");
        }, 200);

        $rootScope.activeCategory = category;
    }
    $rootScope.setActiveSportsGsp = function(gspNo) {

        $http.get("/v2/api/provider_list?domain=vipv88.com")
            .success(function(data) {
                $rootScope.gameButtons = data;
            });

        if (gspNo == "" || gspNo == undefined || gspNo == 9999) {
            $rootScope.comingSoon();
            return;
        }
        if ($rootScope.loggedIn != true) {
            $scope.displayLogin();
            return;
        }
        $rootScope.activeSportsGsp = gspNo;
        $location.url('/view-sports');
    }


    $rootScope.gameCatergory = [{
            'category': 'live',
            'type': 1
        },
        {
            'category': 'Powerball',
            'type': 1
        },
        {
            'category': 'slot',
            'type': 2
        },
        {
            'category': 'Others',
            'type': 2
        },
        {
            'category': 'sports',
            'type': 2
        },
    ];

    $rootScope.setActiveSportsGsp = function(gspNo) {
        if (gspNo == "" || gspNo == undefined || gspNo == 9999) {
            $rootScope.comingSoon();
            return;
        }

        if ($rootScope.loggedIn != true) {
            $scope.displayLogin();
            return;
        }
        $rootScope.activeSportsGsp = gspNo;
        window.location = '#view-sports';
    }
}


app.directive('backImg', function() {
    return function(scope, element, attrs) {
        attrs.$observe('backImg', function(value) {
            element.css({
                'background-image': 'url(' + value + ')',
                'background-size': '100%',
                'background-repeat': 'no-repeat',
            });
        });
    };
})

app.directive('slotsPage', function() {
    return {
        restrict: "EA",
        templateUrl: "/directives/page/main/slots.php"
    }
});
