var app = angular.module('app.promo-slick', []);

app.directive('promoslickPage', function() {
    return {
        restrict: "EA",
        templateUrl: "/directives/page/promo-slick/promo-slick.php",
        link: function() {
            $('.promo-slick').not('.slick-initialized').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 3000,
                dots: true,
                arrows: false
            });
        }
    }
});

app.directive('sliderGuestPage', function() {
    return {
        restrict: "EA",
        templateUrl: "/directives/page/promo-slick/promo-slick-2.php",
        link: function() {
            $('.promo-slick').not('.slick-initialized').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                dots: false,
                arrows: false
            });
        }
    }
});