var app = angular.module('app.transaction', []);

app.directive('transactionPage', function() {
    return {
        restrict: "EA",
        templateUrl: "/directives/page/transaction/transaction.php"
    }
})