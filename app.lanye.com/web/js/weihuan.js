$(function(){
  $('.turn-in-action').on('click', function () {
    $('.turn-in').show();
    $('.turn-out').hide();
    $(this).addClass('active');
    $('.turn-out-action').removeClass('active');
  });
  $('.turn-out-action').on('click', function () {
    $('.turn-out').show();
    $('.turn-in').hide();
    $(this).addClass('active');
    $('.turn-in-action').removeClass('active');
  });
  a_b_c();
  playerscroll();
  user_playerscroll();
  weihuan_nav('.weihuan-join-head .head .menu li','.weihuan-join');
  weihuan_nav('.weihuan-user .body .bar li','.weihuan-user .body .box');
  weihuan_nav('.weihuan-header .nav.help ul.left li','.weihuan-user.help');
  weihuan_nav('.weihuan-user-news .news-tab ul li','.weihuan-user-news .user-news');
  weihuan_nav('.weihuan-user .body .box .box-nav li','.weihuan-user .box-content .pay-boxs');
  weihuan_nav('.weihuan-offer .game .nav .container span','.weihuan-offer .game .body .list');
  weihuan_nav('.weihuan-user .box-content .three-box .nav li','.weihuan-user .box-content .three-box .lists');
// 个人中心
// weihuan_on_click('.weihuan-record .fundnavs ul li');
// weihuan_on_click('.weihuan-user .box-content .left .alipay');
$('.weihuan-user .body .box .box-nav').children(':first').addClass('on');
layui.use(['form','element','laydate'], function(){
  var form = layui.form
  ,element = layui.element
  ,laydate = layui.laydate;
  laydate.render({
      elem: '#record1',
      type: 'datetime'
  });
  laydate.render({
      elem: '#record2',
      type: 'datetime',
      format: 'yyyy-MM-dd 23:59:59'
  });
  laydate.render({
    elem: '#record3'
  });
  laydate.render({
    elem: '#record4'
  });
  laydate.render({
    elem: '#pay1'
  });
  laydate.render({
    elem: '#pay2'
  });
  laydate.render({
    elem: '#pay3'
  });
    laydate.render({
        elem: '#pay4'
    });
  laydate.render({
    elem: '#pay-h1'
    ,type: 'time'
  });
  laydate.render({
    elem: '#pay-h2'
    ,type: 'time'
  });
  laydate.render({
    elem: '#pay-h3'
    ,type: 'time'
  });
});


// 맨 위로
$(".gotop").click(function() {
	$("html,body").animate({scrollTop:0}, 500);
});
// 홈페이지语言
$('.weihuan-header .top .languages .chose').click(function() {
  $(this).siblings('.list').toggle();
});
$('.weihuan-header .top .languages .list li').click(function() {
  layer.msg('您的IP不支持该语言');
});



// 전자游艺
$('#li_eGame li').click(function() {
  weihuan_on(this);
  var index_num=$(this).index();
  var plat_type=$(this).data('id')
  getGameList(plat_type)
  progresst();

});




/*//注册
$('.ajax-submit-without-confirm-btn').click(function(){
  var btn = $(this);
  btn.attr('disabled', true);

  var go = true;
  var form = $('#reg_form');
  var url = form.attr('action');
  var method = form.attr('method');
  var rest_method = form.find("input[name='_method']");
  var method_s = rest_method.length > 0 ? rest_method.val() : method;
  if (go == true)
  {
    var detailLoad = layer.load(2, {
      shade: [0.2, '#ccc'],
    });

    $.ajax({
      type: method_s,
      url: url,
      data: form.serialize(),
      dataType: "json",
      success: function(data){
        layer.close(detailLoad);
        btn.attr('disabled', false);
        var html = '';
        var obj = JSON.parse (data.status.msg);

        for ( var p in obj )
        {
          if (typeof (obj[p]) == 'string')
          {
            html+= '<p><b>'+ obj[p] + '</b></p>';
          } else if(obj[p] instanceof Array)
          {
            for (var i=0;i<obj[p].length;i++)
            {
              html+= '<p><b>'+ obj[p][i] + '</b></p>';
            }

          }
        }
        if (data.status.errorCode == 0){
          layer.msg(html);
          location.href=data.url;
        }else{
          layer.confirm(html, {
            btn: ['결정']
          });
        }


      }
    });
  }
})*/

// 개인 정보
$('.weihuan-personal #personal').click(function() {
  mail=$('input#mailbox').val();
  birthday=$('input#birthday').val();

  if (mail==''||birthday=='') {
    layer.msg('生日和이메일 주소不能为空！');
    return false;
  }

});


// 个人中心예금
$('.weihuan-user .box-content .three .steps .amount span').click(function() {
  num=$(this).data('type');
  $('.weihuan-user .box-content .three .steps .num input').val(num);
});
// 은행 카드 바인딩
$('.weihuan-personal .lsts.addcrd').click(function() {
  layer.open({
   type: 1
   ,area: ['400px', '420px']
   ,shadeClose: false
   ,anim: 1
   ,skin: 'weihuan-addcrd-pop'
   ,title: false
   ,content: $('#addcrd-pop')
   ,cancel: function(index, layero){
    $('#addcrd-pop').hide();
  }
});
});


// 加盟
$('.weihuan-join .body .textbox input').focus(function() {
  $(this).parents('.weihuan-join .body .textbox').attr('style', 'border: 1px solid #333');
}).blur(function() {
  $(this).parents('.weihuan-join .body .textbox').attr('style', 'border: 1px solid #9bbbf6');
});



});


//奖池
function a_b_c(){
  var num=181125609;
  setInterval(function(){
    num = num+1;
    var row = String(num).split('');
    $('.j1').text(row[0]);
    $('.j2').text(row[1]);
    $('.j3').text(row[2]);
    $('.j4').text(row[3]);
    $('.j5').text(row[4]);
    $('.j6').text(row[5]);
    $('.j7').text(row[6]);
    $('.j8').text(row[7]);
    $('.j9').text(row[8]);
  },100)
}


// 홈페이지公告
function weihuan_notice_li(e) {
$(e).children().slideToggle();
};


// 个人中心立即예금
function weihuan_deposit(e){

  layer.open({
   type: 1
   ,area: ['550px', '600px']
   ,shadeClose: false
   ,anim: 1
   ,skin: 'weihuan-deposit-pop'
   ,title: false
   ,content:  '<div class="deposit-pop">\
   <div class="pop-header">\
   <img src="/web/images/deposit-alipay.png">\
   </div>\
   <div class="pop-body">\
   <div class="balamt">\
   <h1>￥100.47</h1>\
   <p>请按显示양付款，아니则아니法自动到账</p>\
   <img src="/web/images/deposit.png" class="game_refresh">\
   </div>\
   <p>付款即时到账 未到账可문의하기</p>\
   <p>订单:AB2018111603152718458</p>\
   </div>\
   <div class="pop-foot">打开支付宝 [扫一扫]\
   </div>\
   </div>'
 });
}



// 模块切换
function weihuan_nav(a,b){
  $(a).click(function() {
    weihuan_on(this);
    var index_num=$(this).index();
    $(b).children().each(function(){
      if ($(this).index() == index_num) {
        $(this).show().siblings().hide();
      }
    });
  });
}


// on点击
function weihuan_on(e){
  $(e).addClass('on').siblings().removeClass('on');
};


// on点击切换
function weihuan_on_click(a){
  $(a).click(function() {
    weihuan_on(this);
  });
}


//加载进度条
function progresst() {
  var n = 0, progress = $('.progress').find('div'), mask = $('.weihuan-pt-msk'), ptload = $('.ptload');
  mask.show();
  ptload.show();
  time();
  function time() {
    n = n + 10;
    if (n == 610) {
      mask.hide();
      ptload.hide();
      return;
    }
    Method(n);
        setTimeout(time, 20); //time예指本身,延时递归调用自己,100为间隔调用시각,单位毫秒
      }
      function Method(n) {
        progress.css("width", n + 'px');
      }
    }


//大奖녹음滚动效果
function playerscroll() {
  setInterval(function () {
    $(".weihuan-home-game .other .news ul li:first").animate({ "margin-top": "-40px" }, 1000);
  }, 300);
  setInterval(function () {
    $('.weihuan-home-game .other .news ul li:first').appendTo($(".weihuan-home-game .other .news ul"));
    $('.weihuan-home-game .other .news ul li').css({ "margin-top": "0px" });
  }, 1500);
}


//个人中心사용자滚动效果
function user_playerscroll() {
  setInterval(function () {
    $(".weihuan-user .box-item .right .user-deposit-news ul:first").animate({ "margin-top": "-35px" }, 1000);
  }, 300);
  setInterval(function () {
    $('.weihuan-user .box-item .right .user-deposit-news ul:first').appendTo($(".weihuan-user .user-deposit-news .news-box"));
    $('.weihuan-user .box-item .right .user-deposit-news ul').css({ "margin-top": "0px" });
  }, 1500);
}


// 提醒登录
function weihuan_pop_login(){
  layer.open({
    type: 1
    ,area: ['480px', '430px']
    ,shadeClose: false
    ,anim: 1
    ,skin: 'weihuan-pop-login'
    ,title: false
    ,content:$('#login-pop')
    ,cancel: function(index, layero){
      $('#login-pop').hide();
    }
  });
}

function weihuan_login_func(form){
  var btn = $(this);
  btn.attr('disabled', true);
  var go = true;
  var form = $(form);
  var url = form.attr('action');
  var method = form.attr('method');
  var rest_method = form.find("input[name='_method']");
  var method_s = rest_method.length > 0 ? rest_method.val() : method;
  if (go == true){
    var detailLoad = layer.load(2, {shade: [0.2, '#ccc'], });
    $.ajax({
      type: method_s,
      url: url,
      data: form.serialize(),
      dataType: "json",
      success: function(data){
        layer.close(detailLoad);
        btn.attr('disabled', false);

        var html = '';
        var obj = JSON.parse (data.status.msg);

        for ( var p in obj )
        {
          if (typeof (obj[p]) == 'string')
          {
            html+= '<p><b>'+ obj[p] + '</b></p>';
          } else if(obj[p] instanceof Array)
          {
            for (var i=0;i<obj[p].length;i++)
            {
              html+= '<p><b>'+ obj[p][i] + '</b></p>';
            }

          }
        }
        layer.confirm(html, {
          btn: ['결정']
        });
        if (data.url)
          location.href=data.url;

      }
    });
  }

}


// 예금
function ajaxs_ubmit_without_confirm(form){
  var id = form;
  var btn = $(this);
  var go = true;
  var form = $(form);
  var url = form.attr('action');
  var method = form.attr('method');
  var rest_method = form.find("input[name='_method']");
  var method_s = rest_method.length > 0 ? rest_method.val() : method;
  if (go == true)
  {
    var detailLoad = layer.load(2, {
      shade: [0.2, '#ccc'],
    });

    $.ajax({
      type: method_s,
      url: url,
      data: form.serialize(),
      dataType: "json",
      success: function(data){
        layer.close(detailLoad);
        btn.attr('disabled', false);

        var html = '';
        var obj = JSON.parse (data.status.msg);

        for ( var p in obj )
        {
          if (typeof (obj[p]) == 'string')
          {
            html+= '<p><b>'+ obj[p] + '</b></p>';
          } else if(obj[p] instanceof Array)
          {
            for (var i=0;i<obj[p].length;i++)
            {
              html+= '<p><b>'+ obj[p][i] + '</b></p>';
            }

          }
        }
        if (data.status.errorCode == 0){
          layer.msg(html);
          if(id == '#post_pay'){
            window.open(data.url);
          }else{
            location.href=data.url;
          }

        }else{
          layer.confirm(html, {
            btn: ['결정']
          });
        }
      }
    });
  }
}



// 抓取링크参数
function getQueryVariable(variable){
   var query = window.location.search.substring(1);
   var vars = query.split("&");
   for (var i=0;i<vars.length;i++) {
           var pair = vars[i].split("=");
           if(pair[0] == variable){return pair[1];}
   }
   return(false);
}


// 左侧页面参数跳转
function weihuan_author_type(type){
$('.weihuan-user .body .bar li:nth-child('+type+')').addClass('on').siblings().removeClass('on');
    var index_num=$('.weihuan-user .body .bar li:nth-child('+type+')').index();
    $('.weihuan-user .body .box').children().each(function(){
      if ($(this).index() == index_num) {
        $(this).show().siblings().hide();
      }
    });
}

