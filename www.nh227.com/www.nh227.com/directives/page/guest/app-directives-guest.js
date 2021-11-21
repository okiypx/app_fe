var app = angular.module('app.guest', []);

app.directive('guestPage', function() {
    return {
        restrict: "EA",
        templateUrl: "/directives/page/guest/guest.php",
        controller: GuestPageController
    }
});

function GuestPageController($scope, $rootScope) {

}

/*
app.directive('rightWalletPage', function () {
  return{
    restrict: "EA",
    templateUrl: "/directives/page/guest/right-wallet.php"
  }
});*/