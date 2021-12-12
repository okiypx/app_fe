app.controller('SlotController', function ($rootScope, $scope, $http, $filter, SweetAlert, $sce) {
    $scope.gspNo = "";
    //$scope.gspSlotItems = {};
    $scope.slotItems = {};
    $scope.category = {};


    $rootScope.displaySlotItemPlaceHolder = function (num) {
        return new Array(num);
    }

    //CALL LOAD SLOT FROM OTHER CONTROLLER
    $rootScope.getSlot = function () {
        $rootScope.loadSlot($rootScope.triggerLoadSlot);
    };

    $scope.getProgressiveFlash = function (gameCode) {
        var options = "";
        if (gameCode == "car" || gameCode == "frtf4-1") {
            options = "&local=1";
        }
        return $sce.trustAsResourceUrl("http://tickers.playtech.com/jackpots/new_jackpot.swf?info=1&casino=luckystar88&game=" + gameCode + "&font_face=arial&bold=true&currency=CNY&font_color=F9AA28" + options);
    };

    $rootScope.isLoadingSlot = true;
    $rootScope.loadSlot = function (gspNo, category) {
        console.log("loadSlot");
        console.log(gspNo, category);
        $scope.slotItems = {};
        if ($scope.readLang == undefined || $scope.readLang != $rootScope.currentLang || $scope.gspSlotItems == undefined) {
            var lang = $rootScope.currentLang;
            $http.get("/v2/api/game_list?domain=vipv88.com")
                .success(function (data) {
                    $rootScope.isLoadingSlot = false;
                    $scope.gspSlotItems = data;
                }).error(function (data, result) {
                console.error('Repos error', result, data);
            })["finally"](function () {
                $scope.gspNo = gspNo;
                $scope.readLang = $rootScope.currentLang;
            });
        }

        $scope.gspNo = gspNo;

        $scope.slotGames = [
            {
                'gspNo': 1065,
                'gspName': '프로그마틱 슬롯',
                'gspClass': 'slots-button-1slots-button-1',
                'video': 'video-pragmatic.m4v',
                'frame': 'frame-slot-pragmatic.png'
            },
            {
                'gspNo': 1066,
                'gspName': '하바네로 슬롯',
                'gspNameText': '',
                'gspClass': 'slots-button-2',
                'video': 'video-habanero.mp4',
                'frame': 'frame-slot-habanero.png'
            },
            {
                'gspNo': 1122,
                'gspName': '플레이앤고 슬롯',
                'gspClass': 'slots-button-3',
                'video': 'video-playngo.mp4',
                'frame': 'frame-slot-playngo.png'
            },
            {
                'gspNo': 1124,
                'gspName': '퀵스핀 슬롯',
                'gspClass': 'slots-button-4',
                'video': 'video-quickspin.m4v',
                'frame': 'frame-slot-quickspin.png'
            },
            {
                'gspNo': 1112,
                'gspName': '마이크로게이밍 슬롯',
                'gspClass': 'slots-button-5',
                'video': 'video-microgaming.mp4',
                'frame': 'frame-slot-microgaming.png'
            },
            {
                'gspNo': 1027,
                'gspName': '게임플레이 슬롯',
                'gspClass': 'slots-button-6',
                'video': 'video-gameplay.m4v',
                'frame': 'frame-slot-gameplay.png'
            },
            {
                'gspNo': 1012,
                'gspName': '아시아 게이밍 슬롯',
                'gspClass': 'slots-button-7',
                'video': 'video-asiagaming.m4v',
                'frame': 'frame-slot-asiagaming.png'
            },
            {
                'gspNo': 1034,
                'gspName': '벳소프트 슬롯',
                'gspClass': 'slots-button-8',
                'video': 'video-betsoft.mp4',
                'frame': 'frame-slot-betsoft.png'
            },
            {
                'gspNo': 1038,
                'gspName': '플레이텍 슬롯',
                'gspClass': 'slots-button-9',
                'video': 'video-playtech.m4v',
                'frame': 'frame-slot-playtech.png'
            },
            {
                'gspNo': 1052,
                'gspName': '비비아이엔 슬롯',
                'gspClass': 'slots-button-10',
                'video': 'video-bbin.mp4',
                'frame': 'frame-slot-bbin.png'
            },
            {
                'gspNo': 1123,
                'gspName': '넷엔트 슬롯',
                'gspClass': 'slots-button-11',
                'video': 'video-netent.mp4',
                'frame': 'frame-slot-netent.png'
            },
        ];

        $scope.getGspByNo = function (gspNumber) {
        };

        //ADD VALUE TO CATEGORY WHEN UNDFINED
        if (category == undefined) {
            angular.forEach($rootScope.gameButtons, function (values) {
                var headStart = 0;
                angular.forEach($scope.getGspByNo(values.gspNo), function (subValues) {
                    if (headStart == 0) { //SET FIRST SUBCATEGORY TO BE ACTIVE
                        if (gspNo == values.gspNo) {
                            $scope.category = subValues.subSlotParam;
                        }
                    }
                    headStart++;
                });
            });
        } else {
            $scope.category = category;
        }

        $rootScope.SearchValue = "NONE"; //PART OF SEARCH

        /*SEARCH*/
        if ($rootScope.SearchValue == undefined || $rootScope.SearchValue == '') {
            $rootScope.SearchValue = "NONE";
        }
        $rootScope.setSearchValue = function (txtSearch) {
            $rootScope.SearchValue = txtSearch;
            if (txtSearch != '' || txtSearch != undefined) {
                if ($rootScope.SearchValue == undefined || $rootScope.SearchValue == '') {
                    $rootScope.SearchValue = "NONE";
                }
            }
        };
        /*END SEARCH*/

        $scope.slotFilter = function (slot) {
            var cond;
            if ($rootScope.SearchValue == "NONE") {
                cond = slot.cat == $scope.category;
                return (cond);
            } else {
                if (slot.cat != "Mobile" && slot.cat != "Top_Slot") {
                    // console.log(slot.cat);
                    var output = slot.GameName.toUpperCase().indexOf($rootScope.SearchValue.toUpperCase());
                    if (output < 0) {
                        cond = false;
                    } else {
                        cond = true;
                    }
                }
            }
            return cond;
        };
    };

    $rootScope.$watch('currentLang', function (newValue, oldValue, scope) {
        var lang = $rootScope.currentLang;

        $http.get("/v2/api/game_list?domain=vipv88.com")
            .success(function (data) {
                $scope.gspSlotItems = data;
            }).error(function (data, result) {
            console.error('Repos error', result, data);
        })["finally"](function () {
            $scope.gspNo = gspNo;
            $scope.readLang = $rootScope.currentLang;
        });
    });
});
