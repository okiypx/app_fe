$(document).ready(function() {

    var n = 0;
    $(".al-row").each(function() {
        $(this).css("animation-delay", n + "s"), n += .1
    });
    var i = $(".slot-btn"),
        l = $(".slot-btn .close-btn");
    i.mouseover(function() {
        $(this).prevAll(".slot-btn").addClass("before-hover"), $(this).nextAll(".slot-btn").addClass("after-hover")
    }), i.mouseout(function() {
        i.removeClass("before-hover"), i.removeClass("after-hover")
    }), l.click(function() {
        $(this).parentsUntil(".sc-inner").css("display", "none")
    }), $(".c-modal-menu .link-btn").click(function() {
        $(this).addClass("active"), $(this).siblings(".link-btn").removeClass("active"), $(".gm-selector").removeClass("active")
    }), $(".gm-selector").click(function() {
        $(this).addClass("active"), $(".drop-mm-mob .link-btn").removeClass("active")
    });
    var o = $(".gl-title-click");
    o.click(function() {
        $(".gameListModal").modal("show"), $(".subPageModal").modal("hide")
    }), o.click(function() {
        $(this).hasClass("aristocrat") ? ($(".link-btn.aristocrat").addClass("active"), $(".link-btn.aristocrat").siblings(".link-btn").removeClass("active"), $(".bsm-title-change").text("�꾨━�ㅽ넗�щ옃"), getSlotGames("Aristocrats")) : $(this).hasClass("cq9") ? ($(".link-btn.cq9").addClass("active"), $(".link-btn.cq9").siblings(".link-btn").removeClass("active"), $(".bsm-title-change").text("�⑦걧 9"), getSlotGames("CQ9")) : $(this).hasClass("habanero") ? ($(".link-btn.habanero").addClass("active"), $(".link-btn.habanero").siblings(".link-btn").removeClass("active"), $(".bsm-title-change").text("�섎컮�ㅻ줈"), getSlotGames("HANEBARO")) : $(this).hasClass("pragmatic") ? ($(".link-btn.pragmatic").addClass("active"), $(".link-btn.pragmatic").siblings(".link-btn").removeClass("active"), $(".bsm-title-change").text("�꾨줈洹몃ℓ�깊뵆�덉씠"), getSlotGames("PragmaticPlay")) : $(this).hasClass("bgaming") ? ($(".link-btn.bgaming").addClass("active"), $(".link-btn.bgaming").siblings(".link-btn").removeClass("active"), $(".bsm-title-change").text("鍮꾧쾶�대컢"), getSlotGames("BGAMING")) : $(this).hasClass("bng") ? ($(".link-btn.bng").addClass("active"), $(".link-btn.bng").siblings(".link-btn").removeClass("active"), $(".bsm-title-change").text("遺��닿퀬"), getSlotGames("BNG")) : $(this).hasClass("ag") ? ($(".link-btn.ag").addClass("active"), $(".link-btn.ag").siblings(".link-btn").removeClass("active"), $(".bsm-title-change").text("�꾩떆�꾧쾶�대컢"), getSlotGames("AsiaGaming_NEW")) : $(this).hasClass("bbin") ? ($(".link-btn.bbin").addClass("active"), $(".link-btn.bbin").siblings(".link-btn").removeClass("active"), $(".bsm-title-change").text("BBIN"), getSlotGames("BBIN")) : $(this).hasClass("dreamtech") ? ($(".link-btn.dreamtech").addClass("active"), $(".link-btn.dreamtech").siblings(".link-btn").removeClass("active"), $(".bsm-title-change").text("�쒕┝�뚰겕"), getSlotGames("DREAMTECH")) : $(this).hasClass("evoplay") ? ($(".link-btn.evoplay").addClass("active"), $(".link-btn.evoplay").siblings(".link-btn").removeClass("active"), $(".bsm-title-change").text("�먮낫�뚮젅��"), getSlotGames("EVOPLAY")) : $(this).hasClass("realtime") ? ($(".link-btn.realtime").addClass("active"), $(".link-btn.realtime").siblings(".link-btn").removeClass("active"), $(".bsm-title-change").text("由ъ뼹���꾧쾶�대컢"), getSlotGames("RTG")) : $(this).hasClass("microgaming") ? ($(".link-btn.microgaming").addClass("active"), $(".link-btn.microgaming").siblings(".link-btn").removeClass("active"), $(".bsm-title-change").text("留덉씠�щ줈 寃뚯씠諛�"), getSlotGames("MG_DASHUR_TC")) : $(this).hasClass("betsoft") ? ($(".link-btn.betsoft").addClass("active"), $(".link-btn.betsoft").siblings(".link-btn").removeClass("active"), $(".bsm-title-change").text("踰녹냼�꾪듃"), getSlotGames("BETSOFT")) : $(this).hasClass("playstar") ? ($(".link-btn.playstar").addClass("active"), $(".link-btn.playstar").siblings(".link-btn").removeClass("active"), $(".bsm-title-change").text("�뚮젅�댁뒪��"), getSlotGames("PLAYSTAR")) : $(this).hasClass("gameart") ? ($(".link-btn.gameart").addClass("active"), $(".link-btn.gameart").siblings(".link-btn").removeClass("active"), $(".bsm-title-change").text("寃뚯엫�꾪듃"), getSlotGames("GAMEART")) : $(this).hasClass("genesis") ? ($(".link-btn.genesis").addClass("active"), $(".link-btn.genesis").siblings(".link-btn").removeClass("active"), $(".bsm-title-change").text("�쒕꽕�쒖뒪"), getSlotGames("GENESIS")) : $(this).hasClass("toptrend") ? ($(".link-btn.toptrend").addClass("active"), $(".link-btn.toptrend").siblings(".link-btn").removeClass("active"), $(".bsm-title-change").text("�묓듃�뚮뱶寃뚯씠諛�"), getSlotGames("TTG")) : $(this).hasClass("tpg") ? ($(".link-btn.tpg").addClass("active"), $(".link-btn.tpg").siblings(".link-btn").removeClass("active"), $(".bsm-title-change").text("�몃━�뚰뙆�쇳븦"), getSlotGames("TPG")) : $(this).hasClass("stargames") ? ($(".link-btn.stargames").addClass("active"), $(".link-btn.stargames").siblings(".link-btn").removeClass("active"), $(".bsm-title-change").text("�ㅽ�寃뚯엫"), getSlotGames("StarGame")) : $(this).hasClass("novomatic") && ($(".link-btn.novomatic").addClass("active"), $(".link-btn.novomatic").siblings(".link-btn").removeClass("active"), $(".bsm-title-change").text("�몃낫硫뷀떛"), getSlotGames("Coolfire"))
    });

});