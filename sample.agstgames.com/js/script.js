$(document).ready(function() {
    $(".menu-main .link-a").mouseover(function() {
        $(this).addClass('active');
        $(this).siblings('.link-a').addClass('off');
    });
    $(".menu-main .link-a").mouseout(function() {
        $('.link-a').removeClass('active');
        $('.link-a').removeClass('off');
    });
    $(".subpg-menu .link-a").mouseover(function() {
        $(this).siblings('.link-a').addClass('hover-off');
    });
    $(".subpg-menu .link-a").mouseout(function() {
        $('.subpg-menu .link-a').removeClass('hover-off');
    });
    $(".subpg-menu .link-a").click(function() {
        $(this).addClass('current');
        $(this).siblings('.link-a').removeClass('current');
    });
    $(".open-subpage").click(function() {
        $('.subpg-modal').addClass('active');
        $('body').addClass('subpg-active');
    });
    $(".casino-link").click(function() {
        $('.casino-container').addClass('active');
        $('.casino-container').siblings('.category-container').removeClass('active');
        $('.subpg-menu .casino-link').addClass('current');
        $('.subpg-menu .casino-link').siblings('.link-a').removeClass('current');
    });
    $(".slot-link").click(function() {
        $('.slot-container').addClass('active');
        $('.slot-container').siblings('.category-container').removeClass('active');
        $('.subpg-menu .slot-link').addClass('current');
        $('.subpg-menu .slot-link').siblings('.link-a').removeClass('current');
    });
    $(".sports-link").click(function() {
        $('.sports-container').addClass('active');
        $('.sports-container').siblings('.category-container').removeClass('active');
        $('.subpg-menu .sports-link').addClass('current');
        $('.subpg-menu .sports-link').siblings('.link-a').removeClass('current');
    });
    $(".slot-container .company-btn").click(function() {
        $('.gamelist-container').addClass('active');
        $('.gamelist-container').siblings('.category-container').removeClass('active');
    });
    /*$( ".gl-back" ).click(function(){
        $('.slot-container').addClass('active');
        $('.slot-container').siblings('.category-container').removeClass('active');
        $('.company-btn').addClass('no-delay');
    });*/
    $(".subpg-menu .link-a").click(function() {
        $('.company-btn').addClass('no-delay');
    });
    $(".subpg-close").click(function() {
        $('.subpg-modal').removeClass('active');
        $('body').removeClass('subpg-active');
        $('.company-btn').removeClass('no-delay');
    });
    /*$( ".gamelist-menu a" ).click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');


    });*/
    $('.banner-main .images-container .tilt-container').tilt({
        glare: false,
        maxGlare: .1,
        scale: 1,
        perspective: 900
    });
});

function openGame(type, gamePlatform, thirdPartyCode, gameId) {
    var url = '';
    if (type === 'live') {
        if (gameId) {
            url = "/game/casino/" + gamePlatform + "/" + thirdPartyCode + "/" + gameId;
        } else {
            url = "/game/casino/" + gamePlatform + "/" + thirdPartyCode;
        }
    } else if (type === 'hotel') {
        url = "/game/hotel/" + gamePlatform + "/" + thirdPartyCode;
    } else {
        url = "/game/slot/" + gameId;
    }

    window.open(url, 'EVOKOR-CASINO', 'left=0,top=0,width=1280,height=743,resizable=no');
}

function getSlotGames(thirdPartName, targetElement) {
    //if (!parseInt($('#is_sign_in').val())) return;
    $('.wrapper_loading').removeClass('hidden');
    $('.third-party-name').text('로딩중···');
    $('.games-list').empty();
    $.ajax({
        url: '/game/list.detail',
        type: 'GET',
        data: {
            tpName: thirdPartName
        },
        dataType: 'html',
        headers: {},
        success: function(data) {
            var element = $('.gamelist-container');
            element.empty();
            element.append(data);
        },
        error: function(xhr, status, error) {},
        complete: function() {
            $('.wrapper_loading').addClass('hidden');
        }
    });
}