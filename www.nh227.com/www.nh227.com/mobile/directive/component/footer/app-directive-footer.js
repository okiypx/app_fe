angular.module('mobileApp')

    .directive('mobileFooter', function() {
        return {
            restrict: "EA",
            templateUrl: "/mobile/directive/component/footer/footer.php",
            controller: function($scope) {
                $scope.footerLinks = [{
                        url: 'comp',
                        title: '포인트 내역',
                        iconClass: 'comp',
                        type: '1'
                    },
                    {
                        url: 'comph',
                        title: '쿠폰 내역',
                        iconClass: 'comp-history',
                        type: '1'
                    },
                    {
                        url: 'affiliates',
                        title: '파트너 제휴',
                        iconClass: 'affiliates',
                        type: '1'
                    },
                    {
                        url: 'faq',
                        title: 'FAQ',
                        iconClass: 'faq',
                        type: '1'
                    },

                    {
                        url: 'notice',
                        title: '공지사항',
                        iconClass: 'notice',
                        type: '2'
                    },
                    {
                        url: 'service-center',
                        title: '고객센터',
                        iconClass: 'customer',
                        type: '2'
                    },
                    {
                        url: 'promotion',
                        title: '프로모션',
                        iconClass: 'promotion',
                        type: '2'
                    },
                ]
            }
        }
    });