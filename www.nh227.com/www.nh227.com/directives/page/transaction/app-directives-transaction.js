var app = angular.module('app.transaction', []);

app.directive('transactionPage', function() {
    return {
        restrict: "EA",
        template: "<div class=\"transaction-page\">\n" +
            "  <div class=\"transaction-container\">\n" +
            "    <div class=\"transaction-table\">\n" +
            "      <div class=\"table-heading\">\n" +
            "        <span class=\"col-xs-8\">NEW Heaven 카지노에서 알려드립니다.</span>\n" +
            "        <span class=\"col-xs-4 pull-right text-right\" ng-click=\"displayCustomer(1); setTab(1);\">전체 보기</span>\n" +
            "      </div>\n" +
            "      <ul class=\" list-unstyled transaction-list\"  style=\"width: 328px;\" id=\"notice-ticker\">\n" +
            "        <li role=\"button\"\n" +
            "            class=\"\"\n" +
            "            ng-repeat=\"announce in announceList | limitTo: 5\"\n" +
            "            ng-style=\"$index%2 == 0 && {'background-color': '#000000'} || {'background-color':'#121113'}\">\n" +
            "          <div class=\"col-xs-4 text-left\"><span ng-bind=\"formatDate(announce.WriteDate) | date:'yyyy-MM-dd'\"></span></div>\n" +
            "          <div class=\"col-xs-8 text-left text-white\"><span ng-bind=\"announce.Subject | limitTo:20 \" ng-click=\"displayCustomer(1); readBoardContent(announce.Type,announce.BoardCode)\"></span></div>\n" +
            "        </li>\n" +
            "      </ul>\n" +
            "    </div>\n" +
            "    <div class=\"transaction-table\">\n" +
            "      <div class=\"table-heading\"><span>실시간 입금 현황</span></div>\n" +
            "      <ul class=\" list-unstyled transaction-list\"  style=\"width: 328px;\" id=\"deposit-ticker\">\n" +
            "        <li class=\"\"\n" +
            "            ng-repeat=\"realTimeTransaction in realTimeTransactionList | filter:{Type:1}\"\n" +
            "            ng-class=\"{odd:$index % 2 == 0}\">\n" +
            "          <div class=\"col-xs-5 text-left\"><span ng-bind=\"formatDate(realTimeTransaction.Date) | date:'yyyy-MM-dd H:mm'\"></span></div>\n" +
            "          <div class=\"col-xs-3 text-right goldTxt\"><span ng-bind=\"realTimeTransaction.Amount + ' 원'\"></span></div>\n" +
            "          <div class=\"col-xs-4 text-left\" style=\"padding-left: 10px;\"><span ng-bind=\"realTimeTransaction.Member_id\"></span></div>\n" +
            "        </li>\n" +
            "      </ul>\n" +
            "    </div>\n" +
            "    <div class=\"transaction-table\">\n" +
            "      <div class=\"table-heading\"><span>실시간 출금 현황</span></div>\n" +
            "      <ul class=\" list-unstyled transaction-list\"  style=\"width: 328px;\" id=\"withdraw-ticker\">\n" +
            "        <li class=\"\"\n" +
            "            ng-repeat=\"realTimeTransaction in realTimeTransactionList | filter:{Type:2}\"\n" +
            "            ng-class=\"{odd:$index % 2 == 0}\">\n" +
            "          <div class=\"col-xs-5 text-left\"><span ng-bind=\"formatDate(realTimeTransaction.Date) | date:'yyyy-MM-dd H:mm'\"></span></div>\n" +
            "          <div class=\"col-xs-3 text-right goldTxt\"><span ng-bind=\"realTimeTransaction.Amount + ' 원'\"></span></div>\n" +
            "          <div class=\"col-xs-4 text-left\" style=\"padding-left: 10px;\"><span ng-bind=\"realTimeTransaction.Member_id\"></span></div>\n" +
            "        </li>\n" +
            "      </ul>\n" +
            "    </div>\n" +
            "    <div class=\"clearfix\"></div>\n" +
            "  </div>\n" +
            "</div>\n" +
            "\n" +
            "\n" +
            "<script>\n" +
            "  setTimeout(function () {\n" +
            "    $('#notice-ticker').newsTicker({\n" +
            "      row_height: 14.5,\n" +
            "      max_rows: 11,\n" +
            "      duration: 2000,\n" +
            "      autostart:0\n" +
            "    });\n" +
            "    $('#deposit-ticker').newsTicker({\n" +
            "      row_height: 32,\n" +
            "      max_rows: 5,\n" +
            "      direction: 'up',\n" +
            "      autostart: 1,\n" +
            "      pauseOnHover: 1,\n" +
            "      delay : 10000\n" +
            "    });\n" +
            "  });\n" +
            "  setTimeout(function () {\n" +
            "    $('#withdraw-ticker').newsTicker({\n" +
            "      row_height: 32,\n" +
            "      max_rows: 5,\n" +
            "      direction: 'up',\n" +
            "      autostart: 1,\n" +
            "      pauseOnHover: 1,\n" +
            "      delay : 10000\n" +
            "    });\n" +
            "  },500);\n" +
            "</script>\n"
    }
})
