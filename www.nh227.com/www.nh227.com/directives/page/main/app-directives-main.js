var app = angular.module('app.main', []);

app.directive('mainPage', function () {
    return {
        restrict: "EA",
        template: "<div class=\"main-page main-first\">\n" +
            "\n" +
            "  <header-nav-page></header-nav-page>\n" +
            "\n" +
            "  <div class=\"main-container\">\n" +
            "    <div class=\"main-content\">\n" +
            "      <div class=\"left-container\">\n" +
            "\n" +
            "        <div class=\"banner-container\">\n" +
            "          <promoslick-page></promoslick-page>\n" +
            "        </div>\n" +
            "\n" +
            "        <gamebuttons-page></gamebuttons-page>\n" +
            "        <coupon-page></coupon-page>\n" +
            "        <transaction-page></transaction-page>\n" +
            "        <customer-page></customer-page>\n" +
            "      </div>\n" +
            "      <div class=\"right-container\">\n" +
            "        <guest-page></guest-page>\n" +
            "<!--        <slider-guest-page></slider-guest-page>-->\n" +
            "      </div>\n" +
            "      <div class=\"clearfix\"></div>\n" +
            "    </div>\n" +
            "  </div>\n" +
            "</div>\n",
    }
});
