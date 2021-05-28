var commomModule = (function ($) {

	//验证码倒计时
	var codeCountDown = function ($me, time) {
		if (!$me.hasClass('active')) {
			$me.time = time || 60;
			$me.addClass('active');
			$me.html('重新获取(' + $me.time + '秒)');
			$me.timer = setInterval(function () {
				$me.time--;
				$me.html('重新获取(' + $me.time + '秒)');
				if ($me.time == 0) {
					clearInterval($me.timer);
					$me.html('重新发送验证码').removeClass('active');
				}
			}, 1000);
		} else {
			return false;
		}
	};

	return {
		// scrollbarWidth: scrollbarWidth,$(this),60
		codeCountDown: codeCountDown
	}
})(jQuery);


(function($){
	$().ready(function(){
		//nav
		var navObj='';
		var navLiWidth=89;
		$('.nav li').hover(function(){
			navObj=$(this).index();
			$('.second-nav',$(this)).stop().slideDown();
		},function(){
			$('.nav .second-nav').stop().slideUp();
		})

		$(".fixscroll").floatadv();

		//close
		$('.fixscroll').on('click','.close',function(){
			$(this).parent().hide();
		});

		//scroll
		$(window).scroll(function() {
			var top = $(window).scrollTop()+200;
			if($(window).scrollTop()>50){
				$('.goTop').show()
				//topfixed
			}else{

				$('.goTop').hide()
			}
		});

		//goTop
		$('.goTop a').on('click',function(){
			$("body").animate({"scrollTop":0})
		});

		colorChange([{obj:'.quick',sourcrCr:'rgb(255, 247, 26)',afterCr:'rgb(0, 163, 45)'},{obj:'.discount',sourcrCr:'rgb(255, 247, 26)',afterCr:'rgb(0, 163, 45)'},{obj:'.line-check',sourcrCr:'rgb(255, 247, 26)',afterCr:'rgb(0, 163, 45)'},{obj:'.vip',sourcrCr:'rgb(255, 247, 26)',afterCr:'rgb(250, 0, 13)'},{obj:'.agent',sourcrCr:'rgb(255, 247, 26)',afterCr:'rgb(250, 0, 13)'},{obj:'.bot .link03',sourcrCr:'rgb(226, 25, 18)',afterCr:'rgb(251, 40, 216)'}]);
	})
})(jQuery);

var colorBtn=true;
function colorChange(objCr){
	setInterval(function(){
		if(colorBtn){
			for(var i=0;i<objCr.length;i++){
				$(objCr[i].obj).css({
					'color':objCr[i].afterCr
				})

			}
			colorBtn=false;
		}else{
			for(var i=0;i<objCr.length;i++){
				$(objCr[i].obj).css({
					'color':objCr[i].sourcrCr
				})

			}
			colorBtn=true;
		}
	},500)

}


























