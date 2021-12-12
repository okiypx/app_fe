'use strict';

var app = angular.module('mobileApp', [
    'ngRoute',
    'RouteData',
    'ngMessages',
    'ngCurrencySymbol',
    'ngCookies',
    'pascalprecht.translate',
    'ui.bootstrap.pagination'
]);

app.config(['$routeProvider', 'RouteDataProvider', function($routeProvider, RouteDataProvider) {
    RouteDataProvider.applyConfig({
        bodyClass: 'bg-main'
    });
    RouteDataProvider.hookToRootScope(true);
}]);


app.config(['$routeProvider', 'RouteDataProvider', '$translateProvider', function($routeProvider, RouteDataProvider, $translateProvider) {
    RouteDataProvider.applyConfig({
        bodyClass: 'bg-main'
    });
    RouteDataProvider.hookToRootScope(true);

    $translateProvider.useStaticFilesLoader({
        prefix: '/common/js/resources/locale-',
        suffix: '.json'
    });

    $translateProvider.useLocalStorage();
    $translateProvider.useSanitizeValueStrategy('escaped');

    $routeProvider
        .when('/', {
            RouteData: {
                bodyClass: 'bg-main'
            },
            templateUrl: '/pages/main.php',
            controller: '',
            activeTab: 'main'
        })
        // .when('/slots-view', {RouteData: {bodyClass: 'bg-main'}, templateUrl: '/mobile/pages/slots-view.php', controller: ''})
        .otherwise({
            redirectTo: '/',
            RouteData: {
                bodyClass: 'bg-main'
            },
            templateUrl: '/mobile/page/main.php',
            controller: ''
        });
}]);

app.service('AmountService', function() {
    return {
        sumAmount: function(amount, amountSum) {
            //console.log(amountSum);
            if (amount == "NaN" || amount == "") {
                return parseFloat(amountSum);
            }
            amount = parseFloat(amount) + parseFloat(amountSum);
            return amount;
        },
        resetAmount: function() {
            return 0;
        }
    };
});

app.service('AmountService', function() {
    return {
        sumAmount: function(amount, amountSum) {
            //console.log(amountSum);
            if (amount == "NaN" || amount == "") {
                return parseFloat(amountSum);
            }
            amount = parseFloat(amount) + parseFloat(amountSum);
            return amount;
        },
        resetAmount: function() {
            return 0;
        }
    };
});

app.service('browser', ['$window', function($window) {
    return function() {
        var userAgent = $window.navigator.userAgent;
        var browsers = {
            chrome: /chrome/i,
            safari: /safari/i,
            firefox: /firefox/i,
            ie: /internet explorer/i
        };
        for (var key in browsers) {
            if (browsers[key].test(userAgent)) {
                return key;
            }
        }
        return 'unknown';
    }
}]);

app.filter('customCurrency', ["$filter", function($filter) {
    return function(amount, currencySymbol) {
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

app.filter('userDateTimeTimeZone', function($filter) {
    return function(input, format, offset) {
        if (input == null) {
            return "";
        }
        var timeFromUTC = moment.utc(input);
        var tzName = jstz.determine().name();
        var _date = moment(timeFromUTC, tzName).format("YYYY-MM-DD HH:mm:ss Z");
        return _date.toString();
    }
});

app.filter('userDateTime', function($filter) {
    return function(input, format, offset) {
        if (input == null) {
            return "";
        }
        var timeFromUTC = moment.utc(input);
        var tzName = jstz.determine().name();
        var _date = moment.tz(timeFromUTC, tzName).format("YYYY-MM-DD HH:mm");
        return _date.toString();
    }
});

app.filter('userDate', function($filter) {
    return function(input, format, offset) {
        if (input == null) {
            return "";
        }
        var timeFromUTC = moment.utc(input);
        var tzName = jstz.determine().name();
        var _date = moment.tz(timeFromUTC, tzName).format("YYYY-MM-DD");
        return _date.toString();
    }
});

app.filter('nl2br', ['$sce', function($sce) {
    return function(text) {
        return text ? $sce.trustAsHtml(text.replace(/\n/g, '<br/>')) : '';
    };
}]);

//Matched Password Filter
app.directive('validPasswordC', function() {
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
            var original;
            ctrl.$formatters.unshift(function(modelValue) {
                original = modelValue;
                return modelValue;
            });
            ctrl.$parsers.push(function(viewValue) {
                var noMatch = viewValue != scope.signUp.MemberPwd.$viewValue;
                ctrl.$setValidity('noMatch', !noMatch);
                return viewValue;
            });
        }
    }
});

//Matched New Password Filter
app.directive('validPasswordC2', function() {
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
            var original;
            ctrl.$formatters.unshift(function(modelValue) {
                original = modelValue;
                return modelValue;
            });
            ctrl.$parsers.push(function(viewValue) {
                var noMatch = viewValue != scope.changePwdForm.newPassword.$viewValue;
                ctrl.$setValidity('noMatch', !noMatch);
                return viewValue;
            });
        }
    }
});

var SPECIAL_CHAR = /^[a-zA-Z0-9\!\@\#\$\%\^\\\&\*\(\)\-\_\=\+]*$/;
//Password Special Character Filter
app.directive('specialCharC', function() {
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
            ctrl.$validators.specialCharC = function(modelValue, viewValue) {
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

app.directive('userNameDuplicated', function(CsrfToken, $http, $window) {
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
            var original;
            ctrl.$formatters.unshift(function(modelValue) {
                original = modelValue;
                return modelValue;
            });

            ctrl.$parsers.push(function(viewValue) {
                if (viewValue != undefined) {
                    if (viewValue.length >= 4) {
                        var url = "../api/player/CheckDuplicateName";
                        var param = {
                            MemberID: viewValue
                        }
                        CsrfToken.HttpRequest('POST', url, param).success(function(data) {
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
                                    }).then(function(confirm) {
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

app.directive('referrerCheck', function(CsrfToken, $http) {
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
            var original;
            ctrl.$formatters.unshift(function(modelValue) {
                original = modelValue;
                return modelValue;
            });

            ctrl.$parsers.push(function(viewValue) {
                if (viewValue != "") {
                    if (viewValue.length >= 4) {
                        var url = "../api/player/CheckDuplicateName";
                        var param = {
                            MemberID: viewValue
                        }
                        CsrfToken.HttpRequest('POST', url, param).success(function(data) {
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

app.directive('format', ['$filter', function($filter) {
    return {
        require: '?ngModel',
        link: function(scope, elem, attrs, ctrl) {
            if (!ctrl) return;

            ctrl.$formatters.unshift(function(a) {
                if (attrs.format == "numberDecimal" || attrs.format == "number") {
                    return $filter("number")(ctrl.$modelValue)
                }

            });

            ctrl.$parsers.unshift(function(viewValue) {
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


app.controller("LoginController", function(CsrfToken, $scope, $http, $window, SweetAlert) {
    $scope.loginForm = {};
    $scope.processForm = function() {
        if (!$scope.isProcessing) {
            $scope.isProcessing = true;
            var url = "../api/player/Login";
            CsrfToken.HttpRequest('POST', url, $scope.loginForm)
                .success(function(data) {
                    if (data.result == 1) {
                        $window.location.href = "/mobile/#/";
                        $window.location.reload();
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
                                }).then(function(confirm) {
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
                }).error(function(data, status) {
                    console.error('Repos error', status, data);
                })["finally"](function() {
                    $scope.isProcessing = false;
                });
        }
    };
});

app.controller("LogoutController", function($scope, $http, $window, SweetAlert, loggedInStatus) {
    $scope.isProcessing = false;
    $scope.logout = function() {
        $scope.isProcessing = true;
        $http.get("../api/player/Logout")
            .success(function(data) {
                if (data.result == 1) {
                    if (bowser.msie && bowser.version <= 8) {
                        alert("로그아웃 되었습니다");
                    } else {
                        SweetAlert.swal("로그아웃 되었습니다", "", "success");
                    }
                    loggedInStatus.setLoggedOutStatus();
                    $window.location.reload();
                } else {
                    if (data.alert) {
                        if (bowser.msie && bowser.version <= 8) {
                            alert(data.message);
                        } else {
                            SweetAlert.swal("로그아웃 되었습니다", "다시 시도해보세요", "error");
                        }
                    }
                }
            }).error(function(data, result) {
                console.error('Repos error', result, data);
            })["finally"](function() {
                $scope.isProcessing = false;
            });
    }
});

app.controller('NoticeController', function($rootScope, $scope, $cookies, $http, $window, SweetAlert) {
    $rootScope.writeQuestion = {};
    // multiple
    /*  $scope.notToday = function (index) {
        var expireDate = new Date();
        expireDate.setDate(expireDate.getDate() + 1);
        $cookies.put('notToday-'+index, 'true', {'expires': expireDate});
        $scope.closeThisDialog();
      };*/

    // notice 1
    $scope.notToday = function() {
        var expireDate = new Date();
        expireDate.setDate(expireDate.getDate() + 1);
        $cookies.put('notToday', 'true', {
            'expires': expireDate
        });
        $scope.closeThisDialog();
    };

    $scope.notTodayNotice = function() {
        var expireDate = new Date();
        expireDate.setDate(expireDate.getDate() + 1);
        $cookies.put('notToday-notice', 'true', {
            'expires': expireDate
        });
        $scope.closeThisDialog();
    };
    /* $scope.notTodayNotice2 = function () {
       var expireDate = new Date();
       expireDate.setDate(expireDate.getDate() + 1);
       $cookies.put('notToday-notice2', 'true', {'expires': expireDate});
       $scope.closeThisDialog();
     };*/

    $rootScope.processForm = function() {
        $rootScope.isProcessing = true;
        var url = "/api/operation/GetWriteBoard";
        $http({
            method: 'POST',
            url: url,
            data: $.param($rootScope.writeQuestion), // pass in data as strings
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            } // set the headers so angular passing info as form data (not request payload)
        }).success(function(data) {
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
        }).error(function(data, result) {
            console.error('Repos error', result, data);
        })["finally"](function() {
            $rootScope.isProcessing = false;
        });
    }
});
