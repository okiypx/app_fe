var app = angular.module('casinoApp', [
    'ngRoute',
    'RouteData',
    'ngMessages',
    'ngDialog',
    'ngSweetAlert',
    'pascalprecht.translate',
    'ngCookies',
    'ngCurrencySymbol',
    'ui.bootstrap.pagination',
    'appComponents',
    'internationalPhoneNumber'
]);

app.config(['$routeProvider', 'RouteDataProvider', '$translateProvider', function ($routeProvider, RouteDataProvider, $translateProvider) {
    RouteDataProvider.applyConfig({
        bodyClass: 'bg-main'
    });
    RouteDataProvider.hookToRootScope(true);

    //default load when user already selected language from dropdown
    var jsCookieLang = document.cookie;
    var arrayLang = ["ko_KR"];

    var i;
    for (i = 0; i < arrayLang.length; i++) {
        if (jsCookieLang.search(arrayLang[i]) > 0) {
            var setLang = arrayLang[i];
        }
    }

    var languageSelector = function (langKey) {
        var font = 'kr.css';
        var langName = " 한국어";
        var lang = langKey.substring(0, 2);

        if (lang == "en") {
            font = "en.css";
            langName = " ENGLISH";
        } else if (lang == "ko") {
            font = "kr.css";
            langName = " 한국어";
        } else if (lang == "ja") {
            font = "jp.css";
            langName = " 日本語";
        } else if (lang == "zh") {
            font = "cn.css";
            langName = " 中文";
        } else if (lang == "id") {
            font = "id.css";
            langName = " INDONESIA";
        } else {
            font = "ko.css";
            langName = " 한국어";
        }

        $('#language-flag').html('<i class="icon-lang language-' + langKey.substring(0, 2) + '"></i><span>' + langName + '</span><span class="caret"></span>');

        var fileref = document.createElement("link");
        fileref.setAttribute("rel", "stylesheet");
        fileref.setAttribute("href", "/common/css/languages/" + font);


        if (typeof fileref != "undefined") {
            document.getElementsByTagName("head")[0].appendChild(fileref);
        }

        return font;
    };

    if (setLang) {
        $translateProvider.preferredLanguage(setLang);

        if (setLang == "ko_KR") {
            $translateProvider.useLocalStorage(angular.lowercase(setLang.substring(3, 5)));
        } else {
            $translateProvider.useLocalStorage(setLang.substring(0, 2));
        }

        languageSelector(setLang);

    } else {
        //user default browser language
        var userLang = navigator.language || navigator.userLanguage; //for IE8 = navigator.userLanguage
        var u;
        for (u = 0; u < arrayLang.length; u++) {
            if (arrayLang[u].search(userLang.replace("-", "_")) == 0) {
                var browserLang = arrayLang[u].replace("-", "_");
            }
        }

        if (browserLang == undefined) {
            languageSelector(userLang);
            $translateProvider.preferredLanguage(userLang.substring(0, 2) + "_" + userLang.substring(3, 5).toUpperCase());
        } else {
            $translateProvider.preferredLanguage(browserLang);
            languageSelector(userLang);
        }
    }

    $translateProvider.useLocalStorage();
    $translateProvider.useSanitizeValueStrategy('escaped');

    $routeProvider
        .when('/', {
            RouteData: {
                bodyClass: 'bg-main'
            },
            template: '<main-page></main-page>',
            controller: '',
            activetab: 'main'
        });
}]);

app.config(['ngDialogProvider', function (ngDialogProvider) {
    ngDialogProvider.setDefaults({
        closeByEscape: false,
        showClose: true,
        ariaAuto: false,
        ariaRole: false,
        setOpenOnePerName: true
    });
}]);

app.service('loggedInStatus', function ($rootScope) {
    return {
        setLoggedInStatus: function () {
            $rootScope.loggedIn = true;
            $rootScope.loggedOut = false;
        },
        setLoggedOutStatus: function () {
            $rootScope.loggedIn = false;
            $rootScope.loggedOut = true;
        }
    };
});

app.config(function ($provide) {
    $provide.decorator('inputDirective', function ($delegate, $log) {
        $log.debug('Hijacking input directive');
        var directive = $delegate[0];
        angular.extend(directive.link, {
            post: function (scope, element, attr, ctrls) {
                element.on('compositionupdate', function (event) {
                    element.triggerHandler('compositionend');
                })
            }
        });
        return $delegate;
    });
});

app.service('AmountService', function () {
    return {
        sumAmount: function (amount, amountSum) {
            //console.log(amountSum);
            if (amount == "NaN" || amount == "") {
                return parseFloat(amountSum);
            }
            amount = parseFloat(amount) + parseFloat(amountSum);
            return amount;
        },
        resetAmount: function () {
            return 0;
        }
    };
});

app.filter('htmlToPlaintext', function () {
    return function (text) {
        /*REMOVE HTML TAGS*/
        var contents = String(text).replace(/<[^>]+>/gm, '');
        /*REMOVE NBSP*/
        contents = String(contents).replace(/&nbsp;/g, " ");
        return text ? contents : '';
    };
});

app.filter('customCurrency', ["$filter", function ($filter) {
    return function (amount, currencySymbol) {
        //console.log(amount);
        var number = $filter('number');
        if (String(amount).charAt(0) === "-") {
            return number(amount).replace("-", "-" + currencySymbol);
        }
        if (amount == undefined) {
            return "Loading";
        } else {
            return number(amount) + currencySymbol;
        }
    };
}]);

app.filter('userDateTimeTimeZone', function ($filter) {
    return function (input, format, offset) {
        if (input == null) {
            return "";
        }
        var timeFromUTC = moment.utc(input);
        var tzName = jstz.determine().name();
        var _date = moment(timeFromUTC, tzName).format("YYYY-MM-DD HH:mm:ss Z");
        return _date.toString();
    }
});

app.filter('userDateTime', function ($filter) {
    return function (input, format, offset) {
        if (input == null) {
            return "";
        }
        var timeFromUTC = moment.utc(input);
        var tzName = jstz.determine().name();
        var _date = moment.tz(timeFromUTC, tzName).format("YYYY-MM-DD HH:mm");
        return _date.toString();
    }
});

app.filter('userDate', function ($filter) {
    return function (input, format, offset) {
        if (input == null) {
            return "";
        }
        var timeFromUTC = moment.utc(input);
        var tzName = jstz.determine().name();
        var _date = moment.tz(timeFromUTC, tzName).format("YYYY-MM-DD");
        return _date.toString();
    }
});

app.filter('nl2br', ['$sce', function ($sce) {
    return function (text) {
        return text ? $sce.trustAsHtml(text.replace(/\n/g, '<br/>')) : '';
    };
}]);

app.filter("trustUrl", ['$sce', function ($sce) {
    return function (recordingUrl) {
        return $sce.trustAsResourceUrl(recordingUrl);
    };
}]);


app.filter('unique', function () {
    return function (collection, keyname) {
        var output = [],
            keys = [];

        angular.forEach(collection, function (item) {
            var key = item[keyname];
            if (keys.indexOf(key) === -1) {
                keys.push(key);
                output.push(item);
            }
        });
        return output;
    };
});

app.directive("addAmountList", function () {
    return {
        link: function (scope, element, attrs) {
            scope.data = scope[attrs["addAmountList"]];
        },
        restrict: "A",
        template: "<button type='button' class='btn btn-drkgray btn-option' ng-repeat='item in data' ng-click='addAmount(item.price)'>{{item.price | number}} {{item.currency}}</button>"
    }
});

//Matched Password Filter
app.directive('validPasswordC', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            var original;
            ctrl.$formatters.unshift(function (modelValue) {
                original = modelValue;
                return modelValue;
            });
            ctrl.$parsers.push(function (viewValue) {
                var noMatch = viewValue != scope.signUp.MemberPwd.$viewValue;
                ctrl.$setValidity('noMatch', !noMatch);
                return viewValue;
            });
        }
    }
});

//Matched New Password Filter
app.directive('validPasswordC2', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            var original;
            ctrl.$formatters.unshift(function (modelValue) {
                original = modelValue;
                return modelValue;
            });
            ctrl.$parsers.push(function (viewValue) {
                var noMatch = viewValue != scope.changePwdForm.newPassword.$viewValue;
                ctrl.$setValidity('noMatch', !noMatch);
                return viewValue;
            });
        }
    }
});

var SPECIAL_CHAR = /^[a-zA-Z0-9\!\@\#\$\%\^\\\&\*\(\)\-\_\=\+]*$/;
//Password Special Character Filter
app.directive('specialCharC', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$validators.specialCharC = function (modelValue, viewValue) {
                ctrl.$setValidity('haveSpecialChar', SPECIAL_CHAR.test(viewValue));

                if (ctrl.$isEmpty(modelValue)) {
                    // consider empty models to be valid
                    return true;
                }

                if (SPECIAL_CHAR.test(viewValue)) {
                    // it is valid
                    return true;
                }

                // it is invalid
                return false;
            };
        }
    }
});

app.directive('userNameDuplicated', function (CsrfToken, $http, $window) {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            var original;
            ctrl.$formatters.unshift(function (modelValue) {
                original = modelValue;
                return modelValue;
            });

            ctrl.$parsers.push(function (viewValue) {
                if (viewValue != undefined) {
                    if (viewValue.length >= 4) {
                        var url = "/api/player/CheckDuplicateName";

                        var param = {
                            MemberID: viewValue
                        }

                        CsrfToken.HttpRequest('POST', url, param).success(function (data) {
                            if (data.result == 0) {
                                if (data.csrf) {
                                    swal({
                                        title: "캐시 및 쿠키 삭제 후",
                                        text: "브라우저를 새로고침해 주세요",
                                        className: "csrf-swal",
                                        icon: "error",
                                        showCancelButton: false,
                                        confirmButtonClass: "#7cd1f9",
                                        confirmButtonText: "OK",
                                        closeOnConfirm: false
                                    }).then(function (confirm) {
                                        if (confirm) {
                                            $window.location.href = "/#/";
                                            $window.location.reload();
                                        }
                                    });
                                } else {
                                    ctrl.$setValidity('duplicated', false);
                                }
                            } else {
                                ctrl.$setValidity('duplicated', true);
                            }
                            ctrl.$setValidity('minlength', true);
                        });
                        return viewValue;
                    } else {
                        ctrl.$setValidity('minlength', false);
                        return viewValue;
                    }
                } else {
                    ctrl.$setValidity('minlength', false);
                    return viewValue;
                }
            })
        }
    };
});

app.directive('referrerCheck', function (CsrfToken, $http) {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            var original;
            ctrl.$formatters.unshift(function (modelValue) {
                original = modelValue;
                return modelValue;
            });

            ctrl.$parsers.push(function (viewValue) {
                if (viewValue != "") {
                    if (viewValue.length >= 4) {
                        var url = "/api/player/CheckDuplicateName";
                        var param = {
                            MemberID: viewValue
                        }
                        CsrfToken.HttpRequest('POST', url, param).success(function (data) {
                            if (data.result == 0) {
                                ctrl.$setValidity('duplicated', true);
                            } else {
                                ctrl.$setValidity('duplicated', false);
                            }
                        });
                        return viewValue;
                    } else {
                        ctrl.$setValidity('duplicated', false);
                        return viewValue;
                    }
                } else {
                    ctrl.$setValidity('duplicated', true);
                    ctrl.$setPristine();
                    return viewValue;
                }
            })
        }
    };
});

app.directive('format', ['$filter', function ($filter) {
    return {
        require: '?ngModel',
        link: function (scope, elem, attrs, ctrl) {
            if (!ctrl) return;

            ctrl.$formatters.unshift(function (a) {
                if (attrs.format == "numberDecimal" || attrs.format == "number") {
                    return $filter("number")(ctrl.$modelValue)
                }
            });
            ctrl.$parsers.unshift(function (viewValue) {
                if (viewValue == "NaN") return 0;
                if (attrs.format == "numberDecimal") {
                    var plainNumber = viewValue.replace(/[^\d|\-+|\d\.\d|\d\.+]/g, '');
                    if (viewValue.slice(-1) != ".") {
                        elem.val($filter("number")(plainNumber));
                    }
                } else if (attrs.format == "number") {
                    var plainNumber = viewValue.replace(/[^\d|\-+|\.+]/g, '');
                    elem.val($filter("number")(plainNumber));
                }
                return plainNumber;
            });
        }
    };
}]);

app.controller("NavController", function ($scope, $rootScope, $location, $route, $window) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
    $scope.$route = $route;
    $scope.getActiveClass = function (location) {
        $scope.setActiveClass = location;
    };

    $rootScope.gotoUrl = function (url) {
        if (!$rootScope.loggedIn && (url == "/tv" || url == 'graph')) {
            return $scope.displayLogin();
        }
        if (url == '/tv') {
            return $window.open("http://www.max-890.com/#/tv", "_blank");
        }
        $location.url(url);
    }
});

app.controller('CommonController', function (CsrfToken, $scope, $rootScope, $timeout, $window, $http, loggedInStatus, $interval, ngDialog, $cookies, $sce, SweetAlert, ccCurrencySymbol, $translate, $location, $filter) {
    $rootScope.userCurrency = "KRW";
    $rootScope.cc_currency_symbol = ccCurrencySymbol;
    $rootScope.agentGspList = [];

    $rootScope.announceList = {};
    $rootScope.realTimeTransactionList = [];
    $rootScope.readTitle = "";
    $rootScope.readDate = "";
    $rootScope.readContents = "";
    $rootScope.totalBalance = "Loading";
    $scope.getNotice = false;
    $scope.isProcessing = false;

    $rootScope.techContactNumber = "";
    $rootScope.bankContactNumber = "";
    $rootScope.emailContact = "";
    $rootScope.messengerContact1 = "";
    $rootScope.messengerContact2 = "";

    // !!! Unique id required
    $scope.multiplePopup = [{
        id: 'mp-01',
        image: 'popup-banner-1.png'
    },
        {
            id: 'mp-02',
            image: 'popup-banner-2.png'
        },
        {
            id: 'mp-03',
            image: 'popup-banner-3.png'
        },
    ];

    function getNotTodayCookie(listArr) {
        // Get popups that are in cookie list
        var cookiesArr = listArr.map(function (list) {
            if ($cookies.get('notToday-' + list.id)) {
                return list.id
            }
        });

        // Filter to remove empty elements from array
        return cookiesArr.filter(function (x) {
            return x
        });
    }

    $scope.displayMultiplePopups = function (listArr) {
        return;
        if (!listArr) {
            return
        }
        // Check if all popups are in the cookie
        if (getNotTodayCookie(listArr).length === listArr.length) {
            return
        }

        ngDialog.open({
            template: 'popup/multiple-popup.html',
            controller: 'MultiplePopupController',
            className: 'ngdialog-theme-default ngdialog-mulitple-popup',
            showClose: false,
            closeByEscape: false,
            closeByDocument: false,
            scope: $scope,
            data: {
                lists: listArr
            },
            preCloseCallback: function () {
                window.scrollTo(0, 0);
            }
        });
    };

    $rootScope.getBalance = function (reload) {
        if (reload) {
            $("#preloader").show();
        }
        if (!$scope.isProcessing) {
            $scope.isProcessing = true;
            var url = "/api/finance/CheckMemberBalanceAsync";
            CsrfToken.HttpRequest('GET', url, '')
                .success(function (data) {
                    angular.forEach($rootScope.agentGspList, function (val) {
                        if (data.list[val.gspNo] != undefined) {
                            val.amount = data.list[val.gspNo].Balance;
                        } else {
                            val.amount = 0;
                        }
                    });
                    if ($rootScope.loggedIn) {
                        $rootScope.totalBalance = data.list['All'].Balance;
                    }
                }).error(function (data, result) {
                console.error('Repos error', result, data);
            })["finally"](function () {
                $scope.isProcessing = false;
                $("#preloader").hide();
            });
        }
    };

    $rootScope.checkUnreadComment = function (type, announceNo) {
        $scope.countUnread = 0;
        var url = "/api/operation/GetBoardComment?type=" + type + "&&code=" + announceNo;
        $http({
            url: url,
            data: $.param({
                "type": type,
                "code": announceNo,
            }), // pass in data as strings
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            } // set the headers so angular passing info as form data (not request payload)
        }).success(function (data) {
            angular.forEach(data.content, function (value, key) {
                if (value.WriteStatus == "N") {
                    $scope.countUnread++;
                }
            });
            if ($scope.countUnread > 0) {
                $('.board-' + announceNo).removeClass("hidden");
            } else {
                $('.board-' + announceNo).addClass("hidden");
            }
            $scope.countUnread = 0;
        })
    }

    $rootScope.readBoardContent = function (type, announceNo, comment, index) {
        if (comment == undefined) {
            comment = false;
        }

        $rootScope.readCommentDate = "";
        $rootScope.readComment = "";
        $rootScope.readBoardCode = "";
        $rootScope.readCount = "";
        $rootScope.readTitle = "";
        $rootScope.readDate = "";
        $rootScope.readContents = "";

        if (index) {
            $rootScope.readCommentDate = [];
            $rootScope.readComment = [];
            $rootScope.readBoardCode = [];
            $rootScope.readCount = [];
            $rootScope.readTitle = [];
            $rootScope.readDate = [];
            $rootScope.readContents = [];
        }

        var url = "/api/operation/GetBoardDescription";
        var param = {
            "type": type,
            "code": announceNo,
            "comment": comment
        }
        CsrfToken.HttpRequest('POST', url, param).success(function (data) {
            if (data.csrf) {
                swal({
                    title: "캐시 및 쿠키 삭제 후",
                    text: "브라우저를 새로고침해 주세요",
                    className: "csrf-swal",
                    icon: "error",
                    showCancelButton: false,
                    confirmButtonClass: "#7cd1f9",
                    confirmButtonText: "OK",
                    closeOnConfirm: false
                })
            } else {
                if (index) {
                    $rootScope.readBoardCode[index] = data.content.BoardCode;
                    $rootScope.readCount[index] = data.content.ViewCount;
                    $rootScope.readTitle[index] = data.content.Subject;
                    $rootScope.readDate[index] = data.content.WriteDate;
                    $rootScope.readContents[index] = $sce.trustAsHtml(data.content.Contents);
                } else {
                    $rootScope.readBoardCode = data.content.BoardCode;
                    $rootScope.readCount = data.content.ViewCount;
                    $rootScope.readTitle = data.content.Subject;
                    $rootScope.readDate = data.content.WriteDate;
                    $rootScope.readContents = $sce.trustAsHtml(data.content.Contents);
                    if (comment) {
                        $rootScope.readCommentDate = data.content['comment'][0].WriteDate;
                        $rootScope.readComment = data.content['comment'];
                    }
                }
            }
        }).error(function (data, status) {
            console.error('Repos error', status, data);
        })["finally"](function () {
            $rootScope.isRead = true;
        });
    };

    $rootScope.anouncementPopup = [{}];
    $scope.counter = 1;

    // POPUP 1
    $rootScope.displayNoticeToday = function () {
        angular.forEach($rootScope.announceList, function (val) {
            if (val.PopUp == 'y' && !$scope.getNotice) {
                $rootScope.anouncementPopup = val;
                $scope.getNotice = true;
                if (!$cookies.get('notToday')) {
                    ngDialog.open({
                        template: 'popup/notice.php',
                        controller: 'NoticeController',
                        className: 'ngdialog-theme-default ngdialog-notice',
                        showClose: true,
                        closeByEscape: false,
                        closeByDocument: false,
                        scope: $scope
                    });
                }
            }
        });
    }

    //POPUP multiple
    /*  $http.get("/api/operation/GetBoardDetail?type=1&page=1")
        .success(function (data) {
          angular.forEach(data.list, function (val) {
            if (val.PopUp == 'y') {
              if (!$cookies.get('notToday-'+val.BoardCode)) {
                $rootScope.anouncementPopup.push(val);
                ngDialog.open({
                  template: 'popup/notice.php',
                  controller: 'NoticeController',
                  className: 'ngdialog-theme-default ngdialog-notice notice-'+$scope.counter,
                  showClose: true,
                  closeByEscape: false,
                  closeByDocument: false,
                  scope: $scope,
                  preCloseCallback: function(){
                    $scope.counter--;
                    if($scope.counter == 1){
                      $('#overlay-notice').hide();
                    }
                  },
                  data: {
                    index: $scope.counter++,
                    id: val.BoardCode
                  }
                });
                $timeout(function () {
                  if($rootScope.anouncementPopup.length == 1){
                    $('#overlay-notice').hide();
                  }
                  else{
                    $('#overlay-notice').show();
                  }
                },1000);
                $interval(function () {
                  if($scope.counter == 2){
                    $('.ngdialog-notice').addClass('centerDialog');
                  }
                },100);
              }
            }
            $scope.getNotice = true;
          });
          $rootScope.announceList = data.list;

        }).error(function (data, result) {
        console.error('Repos error', result, data);
      })["finally"](function () {});*/

    $scope.ShowDirectMessageDetail = function (DirectMessage) {
        $rootScope.DMHideNew[DirectMessage.DMStatusIDX] = true;
        $rootScope.showDirectMessageValues = DirectMessage;
        $http.get("/api/operation/GetDirectMessageDetail?code=" + DirectMessage.DMStatusIDX)
            .success(function (data) {
                $rootScope.UnreadDM = data.list.UnreadDM;
                $rootScope.DMReadDate[DirectMessage.DMStatusIDX] = data.list.DMReadDate;
            }).error(function (data, result) {
            console.error('Repos error', result, data);
        })
    };

    $scope.trustAsHtml = $sce.trustAsHtml;
    $scope.microPopup = function () {
        if (!$rootScope.loggedIn) {
            $scope.displayLogin();
            return
        }
        ngDialog.open({
            template: 'popup/micro-popup.php',
            controller: '',
            className: 'ngdialog-theme-default ngdialog-microgaming',
            showClose: true,
            closeByEscape: false,
            scope: $scope,
            preCloseCallback: function () {
                $scope.setActive = undefined;
            }
        });
    };

    $rootScope.playGame = function (gspNo, productType, gameId, theme, gameName) {
        if (gspNo == 9999) {
            $scope.comingSoon();
            return;
        }

        if ($rootScope.loggedIn) {
            $rootScope.isOdds = false;
            var url = "";
            var size = "";
            var scroll = "scrollbars=1";
            if (productType == "sports") {
                if (gspNo == 1031) {
                    url = "/api/player/PlayGame?gspNo=" + gspNo + "&productType=" + productType;
                    $rootScope.sportIURL = $sce.trustAsResourceUrl(url);
                } else if (gspNo == 1059) {
                    $rootScope.isOdds = true;
                    url = "/api/player/PlayGame?gspNo=" + gspNo + "&productType=" + productType + "&gameId=" + gameId;
                    $rootScope.sportIURL = $sce.trustAsResourceUrl(url);
                } else {
                    url = "/api/player/PlayGame?gspNo=" + gspNo + "&productType=" + productType + "&gameId=" + gameId;
                    $rootScope.sportIURL = $sce.trustAsResourceUrl(url);
                }
            } else {
                if (productType == 'live' && gameId == 'Desktop') {
                    url = "/api/player/PlayGame?gspNo=" + gspNo + "&productType=" + productType + "&gameId=" + gameId;
                    size = "width=1024, height=592, scrollbars=no, resizable=no ,toolbar=no,titlebar=no";
                    var popupWindow = window.open(url, 'live', size);
                }
                if (productType == "live" || productType == "playCheck" || productType == "fun" || productType == "Ltlottery") {
                    if (gspNo == 1031) {
                        url = "/api/player/PlayGame?gspNo=" + gspNo + "&productType=sports";
                        size = "width=1024, height=592, scrollbars=no, resizable=no ,toolbar=no,titlebar=no";
                        var popupWindow = window.open(url, 'sports', size);
                        return;
                    }
                    if (gspNo == 1012) {
                        url = "/api/player/PlayGame?gspNo=" + gspNo + "&productType=" + productType;
                        size = "width=1024, height=592";
                    } else if (gspNo == 1060) {
                        url = "/api/player/PlayGame?gspNo=" + gspNo + "&productType=" + productType;
                        size = "width=1024, height=592, scrollbars=yes";
                    } else if (gspNo == 1030) {
                        url = "/api/player/PlayGame?gspNo=" + gspNo + "&productType=" + productType;
                        size = "width=985, height=592";
                    } else if (gspNo == 1022 || gspNo == 1039) {
                        url = "/api/player/PlayGame?gspNo=" + gspNo + "&productType=" + productType;
                        size = "width=1240, height=775";
                    } else if (gspNo == 1009 || gspNo == 1019) {
                        url = "/api/player/PlayGame?gspNo=" + gspNo + "&productType=" + productType;
                        size = "width=1024, height=580";
                    } else if (gspNo == 1023) {
                        url = "/api/player/PlayGame?gspNo=" + gspNo + "&productType=" + productType;
                        size = "width=1300, height=775";
                    } else if (gspNo == 1026) {
                        url = "/api/player/PlayGame?gspNo=" + gspNo + "&productType=" + productType;
                        size = "width=1262, height=711";
                    } else if (gspNo == 1005 || gspNo == 1036 || gspNo == 1055 || gspNo == 1088 || gspNo == 1112) {
                        url = "/api/player/PlayGame?gspNo=" + gspNo + "&productType=" + productType + "&gameId=" + gameId;
                        size = "width=1024, height=768";
                    } else if (gspNo == 1058) {
                        url = "/api/player/PlayGame?gspNo=" + gspNo + "&productType=" + productType + "&gameId=" + gameId + "&gameType=" + theme;
                        size = "width=1024, height=768";
                    } else if (gspNo == 1035 || gspNo == 1040 || gspNo == 1049) {
                        url = "/api/player/PlayGame?gspNo=" + gspNo + "&productType=" + productType;
                        size = "width=1240, height=775";
                    } else if (gspNo == 1057) {
                        url = "/api/player/PlayGame?gspNo=" + gspNo + "&productType=" + productType + "&gameId=" + gameId;
                        size = "width=1350, height=1240";
                    } else if (gspNo == 1020) {
                        url = "/api/player/PlayGame?gspNo=" + gspNo + "&productType=" + productType + "&gameId=" + gameId;
                        size = "width=1280, height=1400";
                    } else if (gspNo == 1142) {
                        url = "/api/player/PlayGame?gspNo=" + gspNo + "&productType=" + productType;
                        size = "width=1366, height=950";
                    } else {
                        url = "/api/player/PlayGame?gspNo=" + gspNo + "&productType=" + productType + "&gameId=" + gameId;
                        size = "width=1024, height=768";
                    }

                } else if (productType == "slot" || productType == "game" || productType == "minigame") {
                    if (gspNo == 1005 || gspNo == 1004 || gspNo == 1011 || gspNo == 1038 || gspNo == 1036) {
                        url = "/api/player/PlayGame?gspNo=" + gspNo + "&productType=" + productType + "&gameId=" + gameId;
                        size = "width=1024, height=592";
                    } else if (gspNo == 1032) {
                        url = "/api/player/PlayGame?gspNo=" + gspNo + "&productType=" + productType + "&gameId=" + gameId;
                        size = "width=1300, height=840";
                    } else if (gspNo == 1012) {
                        url = "/api/player/PlayGame?gspNo=" + gspNo + "&productType=" + productType + "&gameId=" + gameId;
                        size = "width=1300, height=800";
                    } else if (gspNo == 1034) {
                        url = "/api/player/PlayGame?gspNo=" + gspNo + "&productType=" + productType + "&gameId=" + gameId;
                        size = "width=1200, height=800";
                    } else if (gspNo == 1073) {
                        url = "/api/player/PlayGame?gspNo=" + gspNo + "&productType=" + productType + "&gameId=" + gameId;
                        size = "width=840, height=1150";
                    } else if (gspNo == 1098) {
                        url = "/api/player/PlayGame?gspNo=" + gspNo + "&productType=" + productType + "&gameId=" + gameId + "&GameName=" + gameName;
                        size = "width=1024, height=592";
                    } else {
                        url = "/api/player/PlayGame?gspNo=" + gspNo + "&productType=" + productType + "&gameId=" + gameId;
                        size = "width=1024, height=768";
                    }
                } else if (productType == "etc") {
                    url = "/api/player/PlayGame?gspNo=" + gspNo + "&productType=" + productType + "&gameId=" + gameId;
                    ;
                    size = "width=1024, height=682";
                }

                var target = "";
                if (productType == 'live') {
                    target = gspNo + productType;
                } else if (productType == 'slot' && (gspNo == 1005 || gspNo == 1032 || gspNo == 1012 || gspNo == 1036)) {
                    target = gspNo + productType;
                } else if (productType == 'playCheck' && gspNo == 1005) {
                    target = gspNo + "playCheck";
                } else {
                    target = gspNo + Math.random();
                }

                if (productType == 'slot') {
                    target = productType;
                }

                //Center Popup
                if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) //IF IE > 10
                {
                    if (gspNo == 1004 || gspNo == 1006 || gspNo == 1027 || gspNo == 1022 || gspNo == 1025 || gspNo == 1026 || gspNo == 1028 || gspNo == 1029 || gspNo == 1032 || gspNo == 1135) {
                        $.colorbox({
                            iframe: true,
                            href: url,
                            width: "80%",
                            height: "80%",
                            overlayClose: false
                        });
                        ngDialog.close();
                        return;
                    }
                }

                var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
                var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

                var width = size.slice(6, 10);
                var height = size.slice(19, 22);
                if (gspNo == 1020) {
                    width = "1280";
                    height = "1400"
                } else if (gspNo == 1073) {
                    width = "840";
                    height = "1150"
                } else if (gspNo == 1030) {
                    width = "985";
                    height = "592"
                }
                var x = ((screen.width / 2) - (width / 2)) + dualScreenLeft;
                var y = ((screen.height / 2) - (height / 2)) + dualScreenTop;
                var total_size = "width=" + width + ",height=" + height + ",left=" + x + ",top=" + y;

                if (gspNo == 1004 || gspNo == 1006 || gspNo == 1027 || gspNo == 1022 || gspNo == 1025 || gspNo == 1026 || gspNo == 1028 || gspNo == 1029 || gspNo == 1032 || gspNo == 1135) {
                    $.colorbox({
                        iframe: true,
                        href: url,
                        width: "80%",
                        height: "80%",
                        overlayClose: false
                    });
                    ngDialog.close();
                    return;
                }

                var popupWindow = window.open(url, target, total_size).focus();
            }
        } else {
            ngDialog.open({
                template: '/popup/login.php',
                controller: 'LoginController',
                className: 'ngdialog-theme-default ngdialog-login',
                scope: $scope
            });
        }

    };

    $scope.setLang = function (langKey) { //selected language
        $rootScope.currentLang = langKey;
        $cookies.get("selectedLanguage");
        var now = new Date(),
            // this will set the expiration to 12 months
            exp = new Date(now.getFullYear() + 100, now.getMonth(), now.getDate());
        // Setting a cookie
        $cookies.put("selectedLanguage", langKey, {
            expires: exp
        });
        $rootScope.languageSelector(langKey);
        $translate.use(langKey);
    };

    $rootScope.languageSelector = function (langKey) {
        var font = 'kr.css';
        var langName = " 한국어";
        var lang = langKey.substring(0, 2);

        if (lang == "en") {
            font = "en.css";
            langName = " ENGLISH";
        } else if (lang == "ko") {
            font = "kr.css";
            langName = " 한국어";
        } else if (lang == "ja") {
            font = "jp.css";
            langName = " 日本語";
        } else if (lang == "zh") {
            font = "cn.css";
            langName = " 中文";
        } else if (lang == "id") {
            font = "id.css";
            langName = " INDONESIA";
        } else {
            font = "kr.css";
            langName = " 한국어";
        }

        $('#language-flag').html('<i class="icon-lang language-' + langKey.substring(0, 2) + '"></i><span>' + langName + '</span><span class="caret"></span>');

        var fileref = document.createElement("link");
        fileref.setAttribute("rel", "stylesheet");
        fileref.setAttribute("href", "/common/css/languages/" + font);

        if (typeof fileref != "undefined") {

            $("link[href*='/common/css/languages/kr.css']").remove();
            $("link[href*='/common/css/languages/jp.css']").remove();
            $("link[href*='/common/css/languages/cn.css']").remove();
            $("link[href*='/common/css/languages/en.css']").remove();
            $("link[href*='/common/css/languages/id.css']").remove();

            document.getElementsByTagName("head")[0].appendChild(fileref);
        }
        return font;
    };

    $scope.aff_user = "";
    $rootScope.init = function (isLogin) {
        $scope.displayMultiplePopups($scope.multiplePopup);
        $scope.setLang('ko_KR');
        if (isLogin) {
            loggedInStatus.setLoggedInStatus();
            $scope.checkSession();
            $interval(function () {
                $scope.checkSession();
            }, 60000); //1min
        }

        if (localStorage.getItem('NG_TRANSLATE_LANG_KEY') === undefined) {
            var arrayLang = ["ko_KR"];
            var userLang = navigator.language || navigator.userLanguage; //for IE8 = navigator.userLanguage
            var u;
            for (u = 0; u < arrayLang.length; u++) {
                if (arrayLang[u].search(userLang.replace("-", "_")) === 0) {
                    var browserLang = arrayLang[u].replace("-", "_");
                }
            }
            if (browserLang === undefined) {
                $rootScope.currentLang = userLang.substring(0, 2) + "_" + userLang.substring(3, 5).toUpperCase();
            } else {
                $rootScope.currentLang = browserLang;
            }
        } else {
            $rootScope.currentLang = localStorage.getItem('NG_TRANSLATE_LANG_KEY');
            if ($rootScope.currentLang == null) {
                $rootScope.currentLang = "undefined";
            }
        }

        if ($location.$$path == '/view-sports' && $rootScope.activeSportsGsp == undefined) {
            window.location = '#/';
        }
    };

    $scope.stopAlert = false;
    $scope.DMPlayAlert = function () {
        $scope.audio = new Audio('/common/audio/ko_KR.mp3');
        $scope.playAudioPromise = function () {
            var promise = $scope.audio.play();
            if (promise !== undefined) {
                promise.then(function () {
                    // Autoplay started!
                }).catch(function (error) {
                    // Autoplay was prevented.
                });
            }
        };
        //PLAY AUDIO EVERY MINUTE UNLESS STOP
        setInterval(function () {
            if ($scope.stopAlert == false) {
                $scope.audio = new Audio('/common/audio/ko_KR.mp3');
                $scope.audio.play();
            }
        }, 60000)
    };

    $scope.DMStopAlert = function () {
        if (!$scope.audio) {
            return;
        }
        $scope.stopAlert = true;
        $scope.audio.pause();
    };

    $scope.formatDate = function (date) {
        if (date) {
            var date = date.split("-").join("/");
            var dateOut = new Date(date);
            return dateOut;
        }
    };

    $scope.closeThisDialogSignUp = function () {
        ngDialog.close();
    };

    $scope.getActiveCategory = function (gspNo, category, gameId, gspName, theme) {
        console.log("pc-getActiveCategory");
        if (gspNo == 1070) {
            return $rootScope.comingSoon();
        }
        if (category == "Others" && gameId == "6") {
            return $scope.playGame(gspNo, 'fish', gameId);
        }
        if (category == "Others" && gameId == "1") {
            return $scope.playGame(gspNo, 'live', gameId);
        }
        if (category == "Others" && gspNo != 1070 && gspNo != 1020 && gspNo != 1012 && gspNo != 1048) {
            return $scope.playGame(gspNo, 'minigame', gameId, '');
        }

        if (category == "Others" && gameId == "110") {
            return $scope.playGame(gspNo, 'live', gameId, '');
        }

        if (category == "Others" && gspNo != 1020) {
            return $scope.playGame(gspNo, 'live');
        }

        if (category == 'live') {
            if (gameId == "microPopup") {
                // return $scope.microPopup();
                return $scope.playGame(1112, 'live', '1930');
            }
            return $scope.playGame(gspNo, 'live', gameId, theme);
        } else if (category == 'slot') {
            window.open('https://api.vipv88.com/web_fone_game_list?provider=' + gspNo, 'mywindow', 'menubar=1,resizable=1,width=800,height=600');
            return;
        } else if (category == 'sports') {
            ngDialog.close();
            return $rootScope.setActiveSportsGsp(gspNo);

        } else if (category == 'Powerball' && gspNo == 1020) {
            return $scope.playGame(gspNo, 'live', '10001');
        }
    }

    $rootScope.contactCC = function () {
        var message = 'AccessDenied';
        if (bowser.msie && bowser.version <= 8) {
            alert(message);
        } else {
            $translate([message, "ContactCustomerCenter"]).then(function (translations) {
                SweetAlert.swal(translations.ContactCustomerCenter, '', "info");
            });
        }
    };

    $rootScope.setSlot = function (gspNo) {
        $rootScope.triggerLoadSlot = gspNo;
    };

    $scope.combinedMaintenance = function (agentGsp) {
        if (agentGsp.amount == '점검중') {
            return agentGsp.gspName + " - 점검중";
        } else {
            return agentGsp.gspName;
        }
    };

    $scope.combinedMaintenanceByCurrency = function (agentGsp) {
        if (agentGsp.Maintenance == 'Y') {
            return false;

        } else {
            return true;
        }
    };

    $scope.maintenanceFilter = function (agentGsp) {
        if (agentGsp.amount == '점검중') {
            return false;
        } else {
            return true;
        }
    };

    $rootScope.$on('$locationChangeSuccess', function () {
        $scope.currentPath = $location.path();
    });

    $scope.translateWalletCategory = function (agentGsp) {
        return $filter('translate')(agentGsp.category);
    };
    /*RIGHT PANEL GSP WALLET*/

    // $scope.rightPanelLimit = 5;
    $scope.showMore = true;
    $scope.showLess = false;

    $scope.rightPanelShowMore = function () {
        $scope.rightPanelLimit = 1000;
        $scope.showMore = false;
        $scope.showLess = true;
    };

    $scope.rightPanelShowLess = function () {
        $scope.rightPanelLimit = 5;
        $scope.showMore = true;
        $scope.showLess = false;
    };

    $rootScope.setActiveInside = function (setTab) {
        $rootScope.isActiveInside = setTab;
    };
    $scope.walletCategory = [{
        "category": "Casino",
        'categoryKrw': '스포츠 ',
        "target": "live-wallet",
        "img": "live"
    },
        {
            "category": "Power Ball",
            'categoryKrw': '파워볼',
            "target": "powerball-wallet",
            "img": "powerball"
        },
        {
            "category": "Slot Games",
            'categoryKrw': '슬롯 ',
            "target": "slots-wallet",
            "img": "slots"
        },
        {
            "category": "Mini Game",
            'categoryKrw': '미니게임 ',
            "target": "mini-wallet",
            "img": "mini"
        },
        {
            "category": "Sports Betting",
            'categoryKrw': '카지노',
            "target": "sports-wallet",
            "img": "sports"
        },
    ];

    $scope.gspLogoUnique = function (footerLogo) {
        if (footerLogo.gspNo == 1031 ||
            footerLogo.gspNo == 1006 || footerLogo.gspNo == 1004 ||
            footerLogo.gspNo == 1022 || footerLogo.gspNo == 1026 ||
            footerLogo.gspNo == 1028 || footerLogo.gspNo == 1029 || footerLogo.gspNo == 1025 || footerLogo.gspNo == 1032) {
            return false;
        } else {
            return true;
        }
    }
});

app.controller("LoginController", function (CsrfToken, $scope, $http, $window, SweetAlert, loggedInStatus) {
    $scope.loginForm = {};
    $scope.isProcessing = false;
    $scope.processForm = function () {
        if (!$scope.isProcessing) {
            $scope.isProcessing = true;
            var url = "/api/player/Login";
            CsrfToken.HttpRequest('POST', url, $scope.loginForm).success(function (data) {
                if (data.result == 1) {
                    $window.location.href = "/#/";
                    $window.location.reload();
                } else if (data.result == 213) {
                    if (bowser.msie && bowser.version <= 8) {
                        alert(data.message);
                    } else {
                        SweetAlert.swal(data.message, "승인을 기다려주시거나 지금채팅하기를 통해 고객지원팀에 문의 하여 주시기 바랍니다", "error");
                    }
                } else if (data.result == 203) {
                    if (bowser.msie && bowser.version <= 8) {
                        alert(data.message);
                    } else {
                        SweetAlert.swal(data.message, "", "error");
                    }
                } else {
                    if (bowser.msie && bowser.version <= 8) {
                        alert(data.message);
                    } else {
                        if (data.csrf) {
                            swal({
                                title: "캐시 및 쿠키 삭제 후",
                                text: "브라우저를 새로고침해 주세요",
                                className: "csrf-swal",
                                icon: "error",
                                showCancelButton: false,
                                confirmButtonClass: "#7cd1f9",
                                confirmButtonText: "OK",
                                closeOnConfirm: false
                            }).then(function (confirm) {
                                if (confirm) {
                                    $window.location.href = "/#/";
                                    $window.location.reload();
                                }
                            });
                        } else {
                            SweetAlert.swal(data.message, "다시 시도해보세요", "error");
                        }
                    }
                }
            }).error(function (data, status) {
                console.error('Repos error', status, data);
            })["finally"](function () {
                $scope.isProcessing = false;
            });
        }
    };
});

app.controller("LogoutController", function ($scope, $rootScope, $http, $window, SweetAlert, loggedInStatus, $timeout) {
    $scope.isProcessing = false;
    $rootScope.logout = function () {
        $scope.isProcessing = true;
        $http.get("/api/player/Logout")
            .success(function (data) {
                if (data.result == 1) {
                    if (bowser.msie && bowser.version <= 8) {
                        alert(data.message);
                    } else {
                        SweetAlert.swal("로그아웃 되었습니다", "", "success");
                    }
                    /*DELAY RELOAD AFTER LOGGING OUT*/
                    $timeout(function () {
                        loggedInStatus.setLoggedOutStatus();
                        $window.location.href = "/#/";
                        $window.location.reload();
                    }, 1000)
                } else {
                    if (data.alert) {
                        if (bowser.msie && bowser.version <= 8) {
                            alert(data.message);
                        } else {
                            SweetAlert.swal(data.message, "다시 시도해보세요", "error");
                        }
                    }
                }
            }).error(function (data, result) {
            console.error('Repos error', result, data);
        })["finally"](function () {
            $scope.isProcessing = false;
        });
    }
});

app.controller('RulesController', function ($scope, $rootScope) {
    $scope.isSet = function (checkTab) {
        return $rootScope.customerTab == checkTab;
    };
    $scope.setTab = function (setTab) {
        $rootScope.customerTab = setTab;
    };
});

app.controller('NoticeController', function ($rootScope, $scope, $cookies, $http, $window, SweetAlert) {
    $rootScope.writeQuestion = {};

    /*  $scope.notToday = function (index) {
        var expireDate = new Date();
        expireDate.setDate(expireDate.getDate() + 1);
        $cookies.put('notToday-'+index, 'true', {'expires': expireDate});
        $scope.closeThisDialog();
      };*/

    $scope.notToday = function () {
        var expireDate = new Date();
        expireDate.setDate(expireDate.getDate() + 1);
        $cookies.put('notToday', 'true', {
            'expires': expireDate
        });
        $scope.closeThisDialog();
    };

    $scope.notTodayNotice = function () {
        var expireDate = new Date();
        expireDate.setDate(expireDate.getDate() + 1);
        $cookies.put('notToday-notice', 'true', {
            'expires': expireDate
        });
        $scope.closeThisDialog();
    };
    /*$scope.notTodayNotice2 = function () {
      var expireDate = new Date();
      expireDate.setDate(expireDate.getDate() + 1);
      $cookies.put('notToday-notice2', 'true', {'expires': expireDate});
      $scope.closeThisDialog();
    };*/

    $rootScope.processForm = function () {
        $rootScope.isProcessing = true;
        var url = "/api/operation/GetWriteBoard";
        $http({
            method: 'POST',
            url: url,
            data: $.param($rootScope.writeQuestion), // pass in data as strings
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            } // set the headers so angular passing info as form data (not request payload)
        }).success(function (data) {
            if (data.result == 1) {
                if (bowser.msie && bowser.version <= 8) {
                    alert(data.message);
                } else {
                    SweetAlert.swal(data.message, "", "success");
                }
            } else {
                if (data.alert) {
                    if (bowser.msie && bowser.version <= 8) {
                        alert(data.message);
                    } else {
                        SweetAlert.swal(data.message, "다시 시도해보세요", "error");
                    }
                }
            }
        }).error(function (data, result) {
            console.error('Repos error', result, data);
        })["finally"](function () {
            $rootScope.isProcessing = false;
        });
    }
});
