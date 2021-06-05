$(window).resize(function () {
	setResolution();
});

//*********##### 반응형 처리 #####*********//
function setResolution() { 	
	var sWidth = $('body').width();		
	if (sWidth >= 640) { // 640디자인
		$('#style01').removeAttr('disabled');
	}else{ //320 디자인
		$('#style01').attr('disabled', true);
	}
}

//*********#### 모바일폰 viewport 공통화 ####*********//
var switchMetaContent = function() {
    if (/AppleWebKit/.test(navigator.userAgent)) {
        document.write ("<meta name=\"viewport\" content=\"user-scalable=yes, initial-scale = 1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width\" />");
    } else if (/Opera/.test(navigator.userAgent) && !/Opera Mini/.test(navigator.userAgent)) {
        document.write ("<meta name=\"viewport\" content=\"user-scalable=yes, initial-scale = 0.75, maximum-scale=0.75, minimum-scale=0.75\" />");
    } else {
        document.write ("<meta name=\"viewport\" content=\"user-scalable=yes, initial-scale = 1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width\" />");
    }
};
switchMetaContent();

//********* 셀렉트박스 디자인 *********//
jQuery.fn.styledSelect = function(options) {
	var isFF2 = jQuery.browser.mozilla && jQuery.browser.version.indexOf('1.8.')==0;
	var prefs = {
		coverClass : 'select-replace-cover',
		innerClass : 'select-replace',
		adjustPosition : { top:0, left:0 },
		selectOpacity : 0
		}
	if (options) jQuery.extend(prefs,options);
	return this.each( function() {
		if (isFF2) return false;
		var selElm = jQuery(this);
		selElm.wrap('<span><'+'/span>');
		selElm.after('<span><'+'/span>');
		var selReplace = selElm.next();
		var selCover = selElm.parent();
		selElm.css({
			'opacity':prefs.selectOpacity,
			'visibility':'visible',
			'position':'absolute',
			'top':0,
			'left':0,
			'display':'inline',
			'z-index':1
			});
		selCover.addClass(prefs.coverClass).css({
			'display':'inline-block',
			'position':'relative',
			'top':prefs.adjustPosition.top,
			'left':prefs.adjustPosition.left,
			'z-index':0,
			'vertical-align':'middle'
			//,'text-align':'left'
			});
		selReplace.addClass(prefs.innerClass).css({
			//'display':'block',
			'white-space':'nowrap'
			});

		selElm.bind('change',function() {
			jQuery(this).next().text(this.options[this.selectedIndex].text);
			}).bind('resize',function() {
				//jQuery(this).parent().width( jQuery(this).width()+'px' );
				jQuery(this).parent().width( 100+'%' );
			});
		selElm.trigger('change').trigger('resize');
		});
	}

$(function(){
	var left_menu_on = false; //좌측메뉴
	var right_menu_on = false; //우측메뉴

	//******** 01. shop 좌측 메뉴	
	$('#reNavi_shop').click(function(){		//shop 클릭
		$('.re_bg_layer').fadeIn("fast",function(){
			$('#recategory_menu').height(1300); //좌측 메뉴 높이 20140827
			$('.re_bg_layer').height(1300); //컨텐츠 배경 높이 20140827

			$('#recategory_menu').animate({marginLeft:'0px'},"fast");
			$('.wrap').animate({marginLeft:'264px'},"fast");

			left_menu_on = true;
			$('.wrap').height(900); // 20140827
			$('.wrap').css("overflow","hidden"); // 20140827
			$('html, body').css("overflow","hidden");
		});					
	});

	$('#left_close').click(function(){//좌측메뉴 닫기
		$('.re_bg_layer').fadeOut("fast");
		$('#recategory_menu').animate({marginLeft:'-264px'},"fast");
		$('.wrap').animate({marginLeft:'0px'},"fast");		
		left_menu_on = false;
		$('.wrap').height("auto"); //20140827
		$('.wrap').css("overflow","auto"); //20140827
		$('html, body').css("overflow","visible");
	});

	$('.recategory_left_menu li span').click(function () { //좌측 토글 메뉴 ~ 본사이트 작업하면서 추가
		if($(this).hasClass('on')){
			$(this).removeClass('on');
			$('.recategory_left_menu li .ans').slideUp("fast");
		}else{
			$('.recategory_left_menu li span').removeClass('on');
			$(this).addClass("on");
			$('.recategory_left_menu li .ans').slideUp("fast");
			$(this).parent().find(".ans").stop().slideDown("fast");
		}		
	});

	//******** 02. mypage 우측 메뉴	
	$('#reGloabl_mypage').click(function(){		//mypage 클릭
		$('#maypage_right_menu').height(900); //우측 메뉴 높이 20140827
		$('.re_bg_layer').fadeIn("fast",function(){

			$('.re_bg_layer').height(900); //컨텐츠 배경 높이 20140827
			//$('.re_bg_layer').height($(document).height()); //컨텐츠 배경 높이

			$('#maypage_right_menu').css("display","block");
			$('#maypage_right_menu').animate({marginRight:'0px'},"fast");
			$('.wrap').animate({marginLeft:'-225px'},"fast");
			right_menu_on = true;
			$('.wrap').height(900); // 20140827
			$('.wrap').css("overflow","hidden"); // 20140827
			$('html, body').css("overflow","hidden");
		});					
	});
	$('#right_close').click(function(){//우측메뉴 닫기
		$('.re_bg_layer').fadeOut("fast");
		$('#maypage_right_menu').animate({marginRight:'-225px'},"fast");
		$('.wrap').animate({marginLeft:'0px'},"fast",function(){
			$('#maypage_right_menu').css("display","none");
		});	
		right_menu_on = false;
		$('.wrap').height("auto"); //20140827
		$('.wrap').css("overflow","auto"); //20140827
		$('html, body').css("overflow","visible");
	});
	$('#right_custmer').toggle(//고객센터 메뉴
		function(){
			$('.right_customer_sub').slideDown("fast");
			$(this).addClass('on');
		},
		function(){
			$('.right_customer_sub').slideUp("fast");
			$(this).removeClass('on');
		}
	);

	$(".re_bg_layer").click(function(e){//배경클릭 메뉴닫기
		if(left_menu_on){//좌측메뉴
			$('.re_bg_layer').fadeOut("fast");
			$('#recategory_menu').animate({marginLeft:'-264px'},"fast");
			$('.wrap').animate({marginLeft:'0px'},"fast");		
			left_menu_on = false;
		}
		if(right_menu_on){//우측 메뉴
			$('.re_bg_layer').fadeOut("fast");
			$('#maypage_right_menu').animate({marginRight:'-225px'},"fast");
			$('.wrap').animate({marginLeft:'0px'},"fast",function(){
				$('#maypage_right_menu').css("display","none");
			});	
			right_menu_on = false;
		}

		$('.wrap').height("auto"); //20140827
		$('.wrap').css("overflow","auto"); //20140827
		$('html, body').css("overflow","visible");

		e.preventDefault();
	});

//*********##### TOP버튼 #####*********//
	$('#topBtn').click(function(){
		$('html, body').stop().animate({ scrollTop: 0 }, 400);
		return false;
	});
});

function smenu_viewer(){//페이지별 메뉴 보기 ~ 본사이트 작업하면서 추가
	$('.cg_toggle_menu').toggle();
}

//************************* 레이어팝업 처리 ********************************//
function openLayerPopup(divClass){//popup open
	$('.' + divClass).fadeIn('fast');
	$('.' + divClass).center(); //top센터링
	$('#popup_bg').css({ height: $(document).height(), opacity: .7 }).fadeIn('fast');
}
function centerLayerPopup(divClass){//popup 좌우 센터링
	$('.' + divClass).css({
		left: '50%',
		marginLeft: $('.' + divClass).outerWidth()/2*-1
	});
}
function centerLayerPopup(divClass){//popup 좌우 센터링
	$('.' + divClass).css({
		left: '50%',
		marginLeft: $('.' + divClass).outerWidth()/2*-1
	});
}
jQuery.fn.center = function () { //레이어팝업 top센터링
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px");
    return this;
}