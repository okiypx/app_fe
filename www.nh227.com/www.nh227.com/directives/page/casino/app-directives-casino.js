var app = angular.module('app.casino', []);

app.directive('casinoPage', function() {
    return {
        restrict: "EA",
        templateUrl: "/directives/page/casino/casino.php",
        controller: CasinoController
    }
});

function CasinoController($scope, $rootScope) {
    $rootScope.casinoButton = [{
            'gspNo': '1058',
            'gspName': '에볼루션게이밍',
            'gspClass': 'gamebutton-1',
            'gameId': 'baccarat',
            'gameTheme': '2'
        },
        {
            'gspNo': '1012',
            'gspName': '아시아게이밍',
            'gspClass': 'gamebutton-2'
        },
        {
            'gspNo': '1005',
            'gspName': '마이크로게이밍',
            'gspClass': 'gamebutton-3',
            'gameId': '70581'
        },
        {
            'gspNo': '1069',
            'gspName': '로투스게이밍',
            'gspClass': 'gamebutton-4'
        },
    ];
}