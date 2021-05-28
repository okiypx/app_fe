
var returnLoginValue;
var returnEventValue;

/*#######################################################
�� �� 紐� : movetoloca
湲곕뒫�ㅻ챸 : �ㅽ겕濡� �먯뿰�ㅻ읇寃� �대룞
�� �� 媛� :
諛� �� 媛� : 
#######################################################*/
function movetoloca(loca, mtime){
$('html, body').animate({scrollTop:loca}, mtime);
}

/*#######################################################
�� �� 紐� : alert_jump
湲곕뒫�ㅻ챸 : �먭�硫붿떆吏�瑜� �꾩슦硫댁꽌 �낆텧�대룞�대깽�몄떊泥� 留됯린.
�� �� 媛� :
諛� �� 媛� : 
#######################################################*/
function alert_jump(val){
	if (val == "IN"){
		msg_txt = "�낃툑";
	}else if (val == "OUT"){
		msg_txt = "異쒓툑";
	}else if (val == "MOVE"){
		msg_txt = "癒몃땲 �대룞";
	}else if (val == "EVENT"){
		msg_txt = "�대깽�� �좎껌";
	}
	var start_time	= "00:00";
	var end_time	= "00:00";
	//alert("�꾩옱 �댁쁺�ㅼ쓽 �ㅽ듃�뚰겕媛� �먰솢�섏� �딆�愿�怨꾨줈 "+start_time+" ~ "+end_time+" �쒓컙�숈븞�� "+msg_txt+"�� 遺덇��ν빀�덈떎.\n�댁슜�� 遺덊렪�꾨뱶�� ���⑦엳 二꾩넚�⑸땲��.");
	alert("�꾩옱 �댁쁺�ㅼ쓽 �ㅽ듃�뚰겕媛� �먰솢�섏� �딆�愿�怨꾨줈 �좎떆媛� "+msg_txt+"�� 遺덇��ν빀�덈떎.\n�댁슜�� 遺덊렪�꾨뱶�� ���⑦엳 二꾩넚�⑸땲��.");
}


/*#######################################################
�� �� 紐� : outDisplayTab
湲곕뒫�ㅻ챸 : �ㅼ떆媛�, �붽컙 踰좎뒪��/�밸쪧 �섏씠�� ��
�� �� 媛� :
諛� �� 媛� : 
#######################################################*/
function outDisplayTab(tabNum){
	if(tabNum == '1'){
		$(".out_list.best1").show();
		$(".out_list.best2").hide();
		$(".out_list.best3").hide();
		$(".out_1").addClass("active");
		$(".out_2").removeClass("active");
		$(".out_3").removeClass("active");
	}else if(tabNum == '2'){
		$(".out_list.best1").hide();
		$(".out_list.best2").show();
		$(".out_list.best3").hide();
		$(".out_1").removeClass("active");
		$(".out_2").addClass("active");
		$(".out_3").removeClass("active");
	}else if(tabNum == '3'){
		$(".out_list.best1").hide();
		$(".out_list.best2").hide();
		$(".out_list.best3").show();
		$(".out_1").removeClass("active");
		$(".out_2").removeClass("active");
		$(".out_3").addClass("active");
	}
}



/*#######################################################
�� �� 紐� : outDisplayTab
湲곕뒫�ㅻ챸 : �ㅼ떆媛�, �붽컙 踰좎뒪��/�밸쪧 �섏씠�� ��
�� �� 媛� :
諛� �� 媛� : 
#######################################################*/
function outDisplayTab2(tabNum){
	if(tabNum == '4'){
		$(".out_display4_ul").show();
		$(".out_display5_ul").hide();
		$(".out_display4").css("color","#fff");
		$(".out_display5").css("color","#8C8C8C");
	}else if(tabNum == '5'){
		$(".out_display5_ul").show();
		$(".out_display4_ul").hide();
		$(".out_display5").css("color","#fff");
		$(".out_display4").css("color","#8C8C8C");
	}
}


/*#######################################################
�� �� 紐� : c_flash
湲곕뒫�ㅻ챸 : �뚮옒�� �곸긽 �ㅻ툕�앺듃 �쒓렇
�� �� 媛� :
諛� �� 媛� : 
#######################################################*/
function c_flash(f_with, f_height, f_src, f_wmode) {
	var flash_tag = "";
	flash_tag = '<OBJECT classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ';
	flash_tag +='codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" ';
	flash_tag +='WIDTH="'+f_with+'" HEIGHT="'+f_height+'" >';
	flash_tag +='<param name="movie" value="'+f_src+'">';
	flash_tag +='<param name="wmode" value="'+f_wmode+'">';
	flash_tag +='<param name="quality" value="high">';
	flash_tag +='<param name="play" value="true">';
	flash_tag +='<param name="loop" value="true">';
	flash_tag +='<param name="scale" value="showall">';
	flash_tag +='<param name="menu" value="true">';
	flash_tag +='<param name="devicefont" value="false">';
	flash_tag +='<param name="allowScriptAccess" value="always">';
	flash_tag +='<embed src="'+f_src+'" pluginspage="http://www.macromedia.com/go/getflashplayer" allowScriptAccess="always" ';
	flash_tag +='type="application/x-shockwave-flash" wmode="'+f_wmode+'" WIDTH="'+f_with+'" HEIGHT="'+f_height+'"></embed></object>'
	document.write(flash_tag);
}

/*#######################################################
�� �� 紐� : c_currency
湲곕뒫�ㅻ챸 : �レ옄 �뗭㎏�먮━留덈떎, 瑜� 異붽�
�� �� 媛� : 
諛� �� 媛� : 
�� �� �� : onKeyup="this.value=c_currency(this.value);"
#######################################################*/
function c_currency(num){
	num	=	new String(num)
	num	=	num.replace(/,/gi,"")
	fl=""
	if(isNaN(num)) { alert("臾몄옄�� �ъ슜�� �� �놁뒿�덈떎.");return 0}
	if(num==0) return num

	if(num<0){
		num=num*(-1)
		fl="-"
	}else{
		num=num*1 //泥섏쓬 �낅젰媛믪씠 0遺��� �쒖옉�좊븣 �닿쾬�� �쒓굅�쒕떎.
	}
	num = new String(num)
	temp=""
	co=3
	num_len=num.length
	while (num_len>0){
		num_len=num_len-co
		if(num_len<0){co=num_len+co;num_len=0}
			temp=","+num.substr(num_len,co)+temp
	}
	return fl+temp.substr(1)
}

/*#######################################################
�� �� 紐� : c_numCheck
湲곕뒫�ㅻ챸 : �レ옄�ㅻ쭔 �낅젰諛쏄쾶
�� �� 媛� : 
諛� �� 媛� : 
�� �� �� : onKeyup="c_numCheck(this);"
#######################################################*/
function c_numCheck(form) {
	var inText = form.value;
	var ret;
	for (var i = 0; i < inText.length; i++) {
		ret = inText.charCodeAt(i);
		if ((ret < 48) || (ret > 57)) {
			alert("�レ옄留뚯쓣 �낅젰�섏꽭��");
			form.value = "0";
			form.focus();
			return false;
		}
	}
	return true;
}



function go_gameurl(val,msg,token){
	if (val != "16" && val != "16_2" && val != "16_3" && val != "16_4" && val != "15" && val != "15_2" && val != "15_3" && val != ""){
	sub_frm2.location.href="/game/in_order_g.asp?gameType="+val;
	sub_frm3.location.href="/game/move_order_g.asp?gameType="+val;
	sub_frm4.location.href="/game/event_order_g.asp?gameType="+val;
	}
	if(val == "none"){
		alert(msg);
	}else if (val == "7"){
		main_frm.location.href="/game/gameLink.asp?gameType=7&encryptiontoken="+token;
		chalert_frm.location.href="/game/check_fixing.asp?gameType=7";
	}else if (val == "4"){
		main_frm.location.href="/game/gameLink.asp?gameType=4&encryptiontoken="+token;
		chalert_frm.location.href="/game/check_fixing.asp?gameType=4";
	}else if (val == "1"){
		gameStart_before('1', token);
	}else if (val == "5"){
		main_frm.location.href="/game/gameLink.asp?gameType=5&encryptiontoken="+token;
		chalert_frm.location.href="/game/check_fixing.asp?gameType=5";
	}else if (val == "11"){
		main_frm.location.href="/game/gameLink.asp?gameType=11&encryptiontoken="+token;
		chalert_frm.location.href="/game/check_fixing.asp?gameType=11";
	}else if (val == "12"){
		main_frm.location.href="/game/gameLink.asp?gameType=12&gv=1&encryptiontoken="+token;
		chalert_frm.location.href="/game/check_fixing.asp?gameType=12";
	}else if (val == "13"){
		main_frm.location.href="/game/gameLink.asp?gameType=13&gv=1&encryptiontoken="+token;
		chalert_frm.location.href="/game/check_fixing.asp?gameType=13";
	}else if (val == "121"){
		main_frm.location.href="/game/gameLink.asp?gameType=12&gv=2&encryptiontoken="+token;
		chalert_frm.location.href="/game/check_fixing.asp?gameType=12";
	}else if (val == "14"){
		main_frm.location.href="/game/gameLink.asp?gameType=14&gv=1&encryptiontoken="+token;
		chalert_frm.location.href="/game/check_fixing.asp?gameType=14";
	}else if (val == "20"){
		main_frm.location.href="/game/gameLink.asp?gameType=20&gv=1&encryptiontoken="+token;
		chalert_frm.location.href="/game/check_fixing.asp?gameType=20";
	}else if (val == "22"){
		main_frm.location.href="/game/gameLink.asp?gameType=22&gv=1&encryptiontoken="+token;
		chalert_frm.location.href="/game/check_fixing.asp?gameType=22";
	}else if (val == "23"){
		main_frm.location.href="/game/gameLink.asp?gameType=23&gv=1&encryptiontoken="+token;
		chalert_frm.location.href="/game/check_fixing.asp?gameType=23";
	

	/////////////////////濡쒕삉 愿��� 寃뚯엫李� �몄텧 遺�遺�/////////////////////////////////
	}else if (val == "15"){
		top.window.frames["main_frm"].location.href="/lotto/special_lotto.asp?gameType=15&gv=1&encryptiontoken="+token;
	}else if (val == "15_2"){
		top.window.frames["main_frm"].location.href="/lotto/special_lotto_check.asp?gameType=15_2&gv=1&encryptiontoken="+token;
	}else if (val == "15_3"){
		top.window.frames["main_frm"].location.href="/lotto/special_lotto_price.asp?gameType=15_3&gv=1&encryptiontoken="+token;
	/////////////////////濡쒕삉 愿��� 寃뚯엫李� �몄텧 遺�遺�/////////////////////////////////




	/////////////////////�뚯썙蹂� 愿��� 寃뚯엫李� �몄텧 遺�遺�/////////////////////////////////
	}else if (val == "16"){
		top.window.frames["main_frm"].location.href="/lotto/special_powerball.asp?gameType=16&gv=1&encryptiontoken="+token;
	}else if (val == "16_2"){
		top.window.frames["main_frm"].location.href="/lotto/special_powerball_num.asp?gameType=16_2&gv=1&encryptiontoken="+token;
	}else if (val == "16_3"){
		top.window.frames["main_frm"].location.href="/lotto/special_powerball_check.asp?gameType=16_3&gv=1&encryptiontoken="+token;
	}else if (val == "16_4"){
		top.window.frames["main_frm"].location.href="/lotto/special_powerball_price.asp?gameType=16_4&gv=1&encryptiontoken="+token;
	/////////////////////�뚯썙蹂� 愿��� 寃뚯엫李� �몄텧 遺�遺�/////////////////////////////////
	}
}


/*#######################################################
�� �� 紐� : c_checkAlphanum
湲곕뒫�ㅻ챸 : �レ옄, �곷Ц�ㅻ쭔 �낅젰諛쏄쾶
�� �� 媛� : 
諛� �� 媛� : 
�� �� �� : �쒕툕諛� �섍린�꾩뿉 寃��ъ떇�쇰줈 �ъ슜. c_checkAlphanum(join_form.outBank_account,'異쒓툑怨꾩쥖')
#######################################################*/
function c_checkAlphanum(name, strName){
	var pattern = /^[0-9a-zA-Z]*$/;

	if (pattern.test(name.value)){
		return true;
	}else{
		alert(strName+"�� �レ옄, �곷Ц濡쒕쭔 �낅젰�댁＜�몄슂.");
		name.focus();
		return false;
	}
}

/*#######################################################
�� �� 紐� : c_checkHan
湲곕뒫�ㅻ챸 : �쒓�留뚮쭔 �낅젰諛쏄쾶
�� �� 媛� : 
諛� �� 媛� : 
�� �� �� : �쒕툕諛� �섍린�꾩뿉 寃��ъ떇�쇰줈 �ъ슜. c_checkHan(join_form.outBank_account,'異쒓툑怨꾩쥖')
#######################################################*/
function c_checkHan(name, strName){

	var pattern =/^[媛�-��]*$/;

	if (pattern.test(name.value)){
		return true;
	}else{
		alert(strName+"�� �쒓�濡쒕쭔 �낅젰�댁＜�몄슂.");
		name.focus();
		return false;
	}
}

/*#######################################################
�� �� 紐� : c_checkLen
湲곕뒫�ㅻ챸 : �レ옄, �곷Ц�ㅻ쭔 �낅젰諛쏄쾶
�� �� 媛� : 
諛� �� 媛� : 
�� �� �� : �쒕툕諛� �섍린�꾩뿉 寃��ъ떇�쇰줈 �ъ슜. c_checkLen(join_form.outBank_account,'異쒓툑怨꾩쥖',5,10)
#######################################################*/
function c_checkLen(name,strName,minlen,maxlen) {
	if (name.value.length < minlen){
		alert(strName+" �낅젰�� 媛믪쓽 湲몄씠媛� 吏㏃뒿�덈떎!");
		name.focus();
		return false;
	}else if (name.value.length > maxlen){
		alert(strName+" �낅젰�� 媛믪쓽 湲몄씠媛� �덈Т 源곷땲��!");
		name.focus();
		return false;
	}else{
		return true;
	}
}

//isEmpty(怨듬갚寃��ы븿��)
function isEmpty( data )
{
   for ( var i = 0 ; i < data.length ; i++ ){
		if ( data.substring( i, i+1 ) != " " ){
		return false;
		}
   }
   return true;
}


function go_url(gTyp,token){
	$("#wrap").fadeIn();
	gUrl	=	"/game/gameLink.asp?gameType=5&oddType="+gTyp+"&encryptiontoken="+token;
	location.href = gUrl;
}


//�낅젰湲몄씠 泥댄겕�⑥닔(諛붿씠�몃퉬援�)
function CheckLen(textname,bytesname){
	var t;
	var msglen;
	msglen=0; 
	l=textname.value.length; 
	for(k=0;k<l;k++){
		t=textname.value.charAt(k);
		if(escape(t).length>4) msglen+=2; 
		else msglen++;
	} 
	bytesname.value=msglen; 
}



// �뱀닔臾몄옄 泥댄겕
function Check_nonChar(id_text)
{
	var nonchar		= '~`!@#$%^&*()-_=+\|<>?,./;:"';
	var numeric		= '1234567890';
	var nonkorean	= nonchar+numeric; 
	
	var i ; 
	for ( i=0; i < id_text.length; i++ )  {
		if( nonkorean.indexOf(id_text.substring(i,i+1)) > 0) {
			break; 
		}
	}
	
	if ( i != id_text.length ) {
		return false; 
	}else{
		return true;
	} 
	
	return false;
}

function TrimString(SrcString){
	/* �쇱そ �몃┝   */
	len = SrcString.length;
	for(i=0;i<len;i++){
		if(SrcString.substring(0,1) == " "){
			SrcString = SrcString.substring(1);
		}else{
			break;
		}
	}

	/* �ㅻⅨ履� �몃┝   */
	len = SrcString.length;
	for(i=len;i>0;i--){
		if(SrcString.substring(i-1) == " "){
			SrcString = SrcString.substring(0,i-1);
		}else{
			break;
		}
	}
	return SrcString;
}


/*#######################################################
�� �� 紐� : c_mustValue
湲곕뒫�ㅻ챸 : �꾩닔�낅젰媛� 泥댄겕
�� �� 媛� :
諛� �� 媛� : c_mustValue(rValue)
#######################################################*/
function c_mustValue(rValue){
	if(rValue == ""){
		return false;
	}else{
		return true;
	}

}

/*#######################################################
�� �� 紐� : c_centerPop
湲곕뒫�ㅻ챸 : 媛��대뜲 �앹뾽 �쒕툕�섏씠吏� �닿퀬 �リ린 而⑦듃濡ㅻ윭
�� �� 媛� :
諛� �� 媛� : 
#######################################################*/
function c_centerPop(mth){
	if (mth == 'ON'){
		$("#wrap_cover").fadeIn();
		$("#close_background").fadeIn();
	}else if (mth == 'OFF'){
		$("#wrap_cover").fadeOut();
		$("#close_background").fadeOut();
		$("#center_contents").html('');		// 遺덈윭�� �댁슜 ��젣
	}
}

/*#######################################################
�� �� 紐� : c_reset();
湲곕뒫�ㅻ챸 : 媛��대뜲 �앹뾽 �쒕툕�섏씠吏� �닿퀬 �リ린 而⑦듃濡ㅻ윭
�� �� 媛� :
諛� �� 媛� : 
#######################################################*/
function c_reset(){
	c_centerPop('OFF');
}

/*#######################################################
�� �� 紐� : c_centerDataLoad
湲곕뒫�ㅻ챸 : 媛��대뜲 �앹뾽 �쒕툕�섏씠吏��� �댁슜 遺덈윭�ㅻ뒗 而⑦듃濡ㅻ윭
�� �� 媛� :
諛� �� 媛� : 
#######################################################*/
function c_centerDataLoad(cUrl){
	c_centerPop('ON');
	$.ajax({
		type: "post",
		url: cUrl,
		data: "" ,
		dataType: "html",
		
		error: function(request, status, error){
			alert('�곗씠�� 濡쒕뱶以� �ㅻ쪟媛� 諛쒖깮�덉뒿�덈떎.\n愿�由ъ옄�먭쾶 臾몄쓽�댁＜�몄슂.');
			c_centerPop('OFF');
		},
		
		success: function(html){
			$( "#center_contents" ).html(html);
		}
		,beforeSend: function(){
			$("#centerDataLoading").fadeIn();
		},
		complete: function(){
			$("#centerDataLoading").fadeOut();
		}
	});
}
/*#######################################################
�� �� 紐� : c_leftDataLoad
湲곕뒫�ㅻ챸 : 媛��대뜲 �앹뾽 �쒕툕�섏씠吏��� �댁슜 遺덈윭�ㅻ뒗 而⑦듃濡ㅻ윭
�� �� 媛� :
諛� �� 媛� : 
#######################################################*/
function c_leftDataLoad(cUrl){
	$.ajax({
		type: "post",
		url: cUrl,
		data: "" ,
		dataType: "html",
		
		error: function(request, status, error){
			alert('�곗씠�� 濡쒕뱶以� �ㅻ쪟媛� 諛쒖깮�덉뒿�덈떎.\n愿�由ъ옄�먭쾶 臾몄쓽�댁＜�몄슂.');
		},
		
		success: function(html){
			$( "#lhide_contents" ).html(html);
		}
		,beforeSend: function(){
			// $("#lhideDataLoading").fadeIn();
		},
		complete: function(){
			// $("#lhideDataLoading").fadeOut();
		}
	});
}



///////////////////////////////////////////湲��� 源쒕묀�� �쇱씤/////////////////////////////////
	function blink() {
		var blinks = document.getElementsByTagName('blink');
		for (var i = blinks.length - 1; i >= 0; i--) {
		  var s = blinks[i];
		  s.style.visibility = (s.style.visibility === 'visible') ? 'hidden' : 'visible';
		}
		window.setTimeout(blink, 600);
	}


	  if (document.addEventListener) document.addEventListener("DOMContentLoaded", blink, false);
	  else if (window.addEventListener) window.addEventListener("load", blink, false);
	  else if (window.attachEvent) window.attachEvent("onload", blink);
	  else window.onload = blink;
///////////////////////////////////////////湲��� 源쒕묀�� �쇱씤/////////////////////////////////



function c_orderAgame(sMethod){
	top.location.href = '/';
	c_menuLink(sMethod);
}

function c_menuLink(mMethod){
	if( mMethod == "JOIN"){
		parent.goTerms();
	}else if( mMethod == "JOIN_STEP2"){
		parent.goTerms();

	}else if( mMethod == "GUIDE"){
		c_centerDataLoad('/member/max_welcome.asp');

	}else if( mMethod == "GUIDE2"){
		c_centerDataLoad('/member/max_guide.asp');

	}else if( mMethod == "LOG_IN"){
		parent.goLogin();
		
	}else if( mMethod == "MYPAGE"){
		if (c_loginCheck()){
			parent.goMypage();
		}else{
			c_menuLink("LOG_IN");
		}
		
	}else if( mMethod == "MYPAGE_POINT"){
		if (c_loginCheck()){
			parent.goPoint();
		}else{
			c_menuLink("LOG_IN");
		}
		
	}else if( mMethod == "MYPAGE_LEVEL"){
		if (c_loginCheck()){
			parent.goRank();
		}else{
			c_menuLink("LOG_IN");
		}
		
	}else if( mMethod == "MYPAGE_MSG"){
		if (c_loginCheck()){
			parent.goMail();
		}else{
			c_menuLink("LOG_IN");
		}
		
	}else if( mMethod == "MYPAGE_COUPON"){
		if (c_loginCheck()){
			parent.goCoupon();
		}else{
			c_menuLink("LOG_IN");
		}
		
	}else if( mMethod == "IN"){		
		if (c_loginCheck()){
			parent.goDeposit();
		}else{
			c_menuLink("LOG_IN");
		}

	}else if( mMethod == "IN_EVENT"){		
		if (c_loginCheck()){
			if (c_eventCheck()){
				c_centerDataLoad('/money/event_order_check01.asp');
			}else{
				c_centerDataLoad('/money/bok_event_order.asp');
			}
		}else{
			c_menuLink("LOG_IN");
		}

	}else if( mMethod == "OUT"){
		if (c_loginCheck()){
			parent.goWithdraw();
		}else{
			c_menuLink("LOG_IN");
		}
				
		
	}else if( mMethod == "MOVE"){
		if (c_loginCheck()){
			parent.goMoneymove();
		}else{
			c_menuLink("LOG_IN");
		}
		
	}else if( mMethod == "EVENT"){
		if (c_loginCheck()){
			parent.goEvent();
		}else{
			c_menuLink("LOG_IN");
		}
		
		
	}else if( mMethod == "EVENT2"){
		if (c_loginCheck()){
			if (c_eventCheck()){
				c_centerDataLoad('/money/event_order_check01.asp');
			}else{
				c_centerDataLoad('/money/event_order2.asp');
			}
		}else{
			c_menuLink("LOG_IN");
		}
		
		
	}else if( mMethod == "SLOT_START"){
		if (c_loginCheck()){
			c_centerDataLoad('/game/slot_game.asp');
		}else{
			c_menuLink("LOG_IN");
		}
	}else if( mMethod == "ASLOT_START"){
		if (c_loginCheck()){
			c_centerDataLoad('/game/aslot_game.asp');
		}else{
			c_menuLink("LOG_IN");
		}
		
	}else if( mMethod == "PSLOT_START"){
		if (c_loginCheck()){
			c_centerDataLoad('/game/pslot_game.asp');
		}else{
			c_menuLink("LOG_IN");
		}
		
	}else if( mMethod == "HSLOT_START"){
		if (c_loginCheck()){
			c_centerDataLoad('/game/hslot_game.asp');
		}else{
			c_menuLink("LOG_IN");
		}
		
	}else if( mMethod == "GSLOT_START"){
		if (c_loginCheck()){
			c_centerDataLoad('/game/gslot_game.asp');
		}else{
			c_menuLink("LOG_IN");
		}
		
	}else if( mMethod == "T_START"){
		if (c_loginCheck()){
			//
			//if (c_gameChecker('t')){
			//	alert('�대떦寃뚯엫�� �먭��깆쓽 �댁쑀濡� �꾩옱 �댁슜�� 遺덇��ν빀�덈떎.\n�좎떆�꾩뿉 �ㅼ떆�댁슜�댁＜�몄슂.');
			//	return false;
			//}else{
				gameStart('7');
			//}
		}else{
			c_menuLink("LOG_IN");
		}
	
	}else if( mMethod == "M_START"){
		if (c_loginCheck()){
			//
			//if (c_gameChecker('m')){
			//	alert('�대떦寃뚯엫�� �뺢��깆쓽 �댁쑀濡� �꾩옱 �댁슜�� 遺덇��ν빀�덈떎.\n�좎떆�꾩뿉 �ㅼ떆�댁슜�댁＜�몄슂.');
			//	return false;
			//}else{
				gameStart('4');
			//}
		}else{
			c_menuLink("LOG_IN");
		}
	
	}else if( mMethod == "X_START"){
		if (c_loginCheck()){
			//
			//if (c_gameChecker('x')){
			//	alert('�대떦寃뚯엫�� �뺢��깆쓽 �댁쑀濡� �꾩옱 �댁슜�� 遺덇��ν빀�덈떎.\n�좎떆�꾩뿉 �ㅼ떆�댁슜�댁＜�몄슂.');
			//	return false;
			//}else{
				gameStart('1');
			//}
		}else{
			c_menuLink("LOG_IN");
		}
	
	}else if( mMethod == "A_START"){
		if (c_loginCheck()){
			//
			//if (c_gameChecker('a')){
			//	alert('�대떦寃뚯엫�� �뺢��깆쓽 �댁쑀濡� �꾩옱 �댁슜�� 遺덇��ν빀�덈떎.\n�좎떆�꾩뿉 �ㅼ떆�댁슜�댁＜�몄슂.');
			//	return false;
			//}else{
				gameStart('5');
			//}
		}else{
			c_menuLink("LOG_IN");
		}
	
	}else if( mMethod == "MIDAS"){
		if (c_loginCheck()){
				gameStart('24', '');
		}else{
			window.c_menuLink("LOG_IN");
		}
	}else if( mMethod == "H88"){
		if (c_loginCheck()){
				gameStart('25', '');
		}else{
			window.c_menuLink("LOG_IN");
		}
	}else if( mMethod == "AL_START"){
		if (c_loginCheck()){
				gameStart('13');
		}else{
			c_menuLink("LOG_IN");
		}
	
	}else if( mMethod == "HO_GAME"){
		if (c_loginCheck()){
				gameStart('20');
		}else{
			c_menuLink("LOG_IN");
		}
	
	}else if( mMethod == "VIVO"){
		if (c_loginCheck()){
				gameStart('22');
		}else{
			c_menuLink("LOG_IN");
		}
	
	}else if( mMethod == "EVOLUTION"){
		if (c_loginCheck()){
				gameStart('23');
		}else{
			c_menuLink("LOG_IN");
		}
	
	}else if( mMethod == "LO_START"){
		if (c_loginCheck()){
				gameStart('14');
		}else{
			c_menuLink("LOG_IN");
		}
	
	}else if( mMethod == "S_START"){
		if (c_loginCheck()){
			//
			//if (c_gameChecker('s')){
			//	alert('�대떦寃뚯엫�� �뺢��깆쓽 �댁쑀濡� �꾩옱 �댁슜�� 遺덇��ν빀�덈떎.\n�좎떆�꾩뿉 �ㅼ떆�댁슜�댁＜�몄슂.');
			//	return false;
			//}else{
				gameStart('6');
			//}
		}else{
			c_menuLink("LOG_IN");
		}
	
	}else if( mMethod == "P_START"){
		if (c_loginCheck()){
			//
			//if (c_gameChecker('s')){
			//	alert('�대떦寃뚯엫�� �뺢��깆쓽 �댁쑀濡� �꾩옱 �댁슜�� 遺덇��ν빀�덈떎.\n�좎떆�꾩뿉 �ㅼ떆�댁슜�댁＜�몄슂.');
			//	return false;
			//}else{
				gameStart('11');
			//}
		}else{
			c_menuLink("LOG_IN");
		}
	
	}else if( mMethod == "O_START"){
		if (c_loginCheck()){
			//
			//if (c_gameChecker('s')){
			//	alert('�대떦寃뚯엫�� �뺢��깆쓽 �댁쑀濡� �꾩옱 �댁슜�� 遺덇��ν빀�덈떎.\n�좎떆�꾩뿉 �ㅼ떆�댁슜�댁＜�몄슂.');
			//	return false;
			//}else{
				gameStart('12');
			//}
		}else{
			c_menuLink("LOG_IN");
		}
	
	}else if( mMethod == "HO_GAME"){
		if (c_loginCheck()){
			//
			//if (c_gameChecker('s')){
			//	alert('�대떦寃뚯엫�� �뺢��깆쓽 �댁쑀濡� �꾩옱 �댁슜�� 遺덇��ν빀�덈떎.\n�좎떆�꾩뿉 �ㅼ떆�댁슜�댁＜�몄슂.');
			//	return false;
			//}else{
				gameStart('20');
			//}
		}else{
			c_menuLink("LOG_IN");
		}
	
	}else if( mMethod == "O_START2"){
		if (c_loginCheck()){
			//
			//if (c_gameChecker('s')){
			//	alert('�대떦寃뚯엫�� �뺢��깆쓽 �댁쑀濡� �꾩옱 �댁슜�� 遺덇��ν빀�덈떎.\n�좎떆�꾩뿉 �ㅼ떆�댁슜�댁＜�몄슂.');
			//	return false;
			//}else{
				gameStart('121');
			//}
		}else{
			c_menuLink("LOG_IN");
		}
	
	}else if( mMethod == "COMPANY_MENU"){
		c_leftDataLoad('/common/leftmenu_company.asp');
	
	}else if( mMethod == "COMPANY_ALLBET"){
		if (c_loginCheck()){
			c_centerDataLoad('/info/com_allbet.asp');
		}else{
			c_menuLink("LOG_IN");
		}
	}else if( mMethod == "COMPANY_ASIA"){
		if (c_loginCheck()){
			c_centerDataLoad('/info/com_asia.asp');
		}else{
			c_menuLink("LOG_IN");
		}
	}else if( mMethod == "COMPANY_GAMEPLAY"){
		if (c_loginCheck()){
			c_centerDataLoad('/info/com_gameplay.asp');
		}else{
			c_menuLink("LOG_IN");
		}
	}else if( mMethod == "COMPANY_LOTUS"){
		if (c_loginCheck()){
			c_centerDataLoad('/info/com_lotus.asp');
		}else{
			c_menuLink("LOG_IN");
		}
	}else if( mMethod == "COMPANY_HO"){
		if (c_loginCheck()){
			c_centerDataLoad('/info/com_ho.asp');
		}else{
			c_menuLink("LOG_IN");
		}
	}else if( mMethod == "COMPANY_MICRO"){
		if (c_loginCheck()){
			c_centerDataLoad('/info/com_micro.asp');
		}else{
			c_menuLink("LOG_IN");
		}
	}else if( mMethod == "COMPANY_PLAYTECH"){
		if (c_loginCheck()){
			c_centerDataLoad('/info/com_playtech.asp');
		}else{
			c_menuLink("LOG_IN");
		}
	}else if( mMethod == "COMPANY_TAISHAN"){
		if (c_loginCheck()){
			c_centerDataLoad('/info/com_taishan.asp');
		}else{
			c_menuLink("LOG_IN");
		}
	}else if( mMethod == "COMPANY_EVOLUTION"){
		if (c_loginCheck()){
			c_centerDataLoad('/info/com_evolution.asp');
		}else{
			c_menuLink("LOG_IN");
		}
	}else if( mMethod == "COMPANY_VIVO"){
		if (c_loginCheck()){
			c_centerDataLoad('/info/com_vivo.asp');
		}else{
			c_menuLink("LOG_IN");
		}
	}else if( mMethod == "GAME_MENU"){
		c_leftDataLoad('/common/leftmenu_game.asp');
	
	}else if( mMethod == "GAME_DT"){
		if (c_loginCheck()){
			c_centerDataLoad('/info/game_dt.asp');
		}else{
			c_menuLink("LOG_IN");
		}
	}else if( mMethod == "GAME_BC"){
		if (c_loginCheck()){
			c_centerDataLoad('/info/game_bc.asp');
		}else{
			c_menuLink("LOG_IN");
		}
	}else if( mMethod == "GAME_BJ"){
		if (c_loginCheck()){
			c_centerDataLoad('/info/game_bj.asp');
		}else{
			c_menuLink("LOG_IN");
		}
	}else if( mMethod == "GAME_SB"){
		if (c_loginCheck()){
			c_centerDataLoad('/info/game_sb.asp');
		}else{
			c_menuLink("LOG_IN");
		}
	}else if( mMethod == "GAME_RT"){
		if (c_loginCheck()){
			c_centerDataLoad('/info/game_rt.asp');
		}else{
			c_menuLink("LOG_IN");
		}
	}else if( mMethod == "GAME_DB"){
		if (c_loginCheck()){
			c_centerDataLoad('/info/game_db.asp');
		}else{
			c_menuLink("LOG_IN");
		}
	}else if( mMethod == "NOTICE_LIST"){
		if (c_loginCheck()){
			c_noticeView("LIST", "","1");
		}else{
			c_menuLink("LOG_IN");
		}
	}else if( mMethod == "NEWBIE"){
		if (c_loginCheck()){
			c_centerDataLoad('/money/newbie.asp');
		}else{
			c_centerDataLoad('/money/newbie.asp');
		}
		
	}else if( mMethod == "CUSTOMER_MENU"){
		c_leftDataLoad('/common/leftmenu_customer.asp');
	

	}else if( mMethod == "PARTNER"){
		if (c_loginCheck()){
			c_centerDataLoad('/cs/partner.asp');
		}else{
			c_menuLink("LOG_IN");
		}
		
	}else if( mMethod == "QNA"){
		if (c_loginCheck()){
			c_centerDataLoad('/cs/qna.asp');
		}else{
			c_menuLink("LOG_IN");
		}
		
	}else if( mMethod == "ERROR"){
		if (c_loginCheck()){
			c_centerDataLoad('/cs/error.asp');
		}else{
			c_menuLink("LOG_IN");
		}
		
	}else if( mMethod == "paypal_join"){
		if (c_loginCheck()){
			c_centerDataLoad('/paypal/paypal_join.asp');
		}else{
			c_menuLink("LOG_IN");
		}		
	}else if( mMethod == "paypal_veri"){
		if (c_loginCheck()){
			c_centerDataLoad('/paypal/paypal_veri.asp');
		}else{
			c_menuLink("LOG_IN");
		}
	}else if( mMethod == "paypal_order_pp"){
		if (c_loginCheck()){
			c_centerDataLoad('/paypal/paypal_order_pp.asp');
		}else{
			c_menuLink("LOG_IN");
		}
	}else if( mMethod == "LOTTO"){
		if (c_loginCheck()){
			gameStart('15');
		}else{
			c_menuLink("LOG_IN");
		}
	}else if( mMethod == "POWERBALL"){
		if (c_loginCheck()){
			gameStart('16');
		}else{
			c_menuLink("LOG_IN");
		}
	}else if( mMethod == "paypal_order_card"){
		if (c_loginCheck()){
			c_centerDataLoad('/paypal/paypal_order_card.asp');
		}else{
			c_menuLink("LOG_IN");
		}

	}
}

function c_noticeView(nType, nNum, pNum){
	//alert(c_loginCheck());
	if (c_loginCheck()){
		if(pNum == ""){
			pNum = "1"
		}
		if(nType == "LIST"){
			parent.goNotice("goPage="+pNum+"");
			//c_centerDataLoad('/service/notice_list.asp?goPage='+pNum);
		}else if(nType == "VIEW"){
			parent.goNoticeview("vidx="+nNum+"&goPage="+pNum+"");
			//c_centerDataLoad('/service/notice_view.asp?');
		}
	}else{
			c_menuLink("LOG_IN");
	}

}

function c_NewsView(nType, nNum, pNum){
	//alert(c_loginCheck());
	if (c_loginCheck()){
		if(pNum == ""){
			pNum = "1"
		}
		if(nType == "LIST"){
			c_centerDataLoad('/service/news_list.asp?check_perpage=AMWKE&goPage='+pNum);
		}else if(nType == "VIEW"){
			c_centerDataLoad('/service/news_view.asp?check_perpage=AMWKE&vidx='+nNum+'&goPage='+pNum);
		}
	}else{
			c_menuLink("LOG_IN");
	}

}



function c_gameChecker(gamNum){
	// var checkNum = "a";
	if(checkNum	== gamNum){
		// �대떦寃뚯엫�� �뺢�以묒쑝濡� �ъ슜�� 遺덇��ν븯硫� true瑜� 由ы꽩�쒕떎.
		//return true;
	}else{
		//return false;
	}
	//return false;
}



function c_orderGameSel(s1e, s1c, cl){

	if(s1e == '1'){
		switch (s1c){
			case 't':
				$("#sel_game1").val("7");
				break;
			case 'm':
				$("#sel_game1").val("4");
				break;
			case 'x':
				$("#sel_game1").val("1");
				break;
			case 'a':
				$("#sel_game1").val("5");
				break;
			case 'sm':
				$("#sel_game1").val("8");
				break;
			case 'o':
				$("#sel_game1").val("12");
				break;
			case 'ab':
				$("#sel_game1").val("13");
				break;
			case 'lo':
				$("#sel_game1").val("14");
				break;
			case 'p':
				$("#sel_game1").val("11");
				break;
			case 'rm':
				$("#sel_game1").val("0");
				break;
			case 'ho':
				$("#sel_game1").val("20");
				break;
			case 'ha':
				$("#sel_game1").val("21");
				break;
			case 'vi':
				$("#sel_game1").val("22");
				break;
			case 'ev':
				$("#sel_game1").val("23");
				break;
			case 'da':
				$("#sel_game1").val("24");
				break;
		}
	}else if(s1e == '2'){
		switch (s1c){
			case 't':
				$("#sel_game2").val("7");
				break;
			case 'm':
				$("#sel_game2").val("4");
				break;
			case 'x':
				$("#sel_game2").val("1");
				break;
			case 'a':
				$("#sel_game2").val("5");
				break;
			case 'sm':
				$("#sel_game2").val("8");
				break;
			case 'ab':
				$("#sel_game2").val("13");
				break;
			case 'lo':
				$("#sel_game2").val("14");
				break;
			case 'p':
				$("#sel_game2").val("11");
				break;
			case 'rm':
				$("#sel_game2").val("0");
				break;
			case 'ho':
				$("#sel_game2").val("20");
				break;
			case 'ha':
				$("#sel_game2").val("21");
				break;
			case 'vi':
				$("#sel_game2").val("22");
				break;
			case 'ev':
				$("#sel_game2").val("23");
				break;
			case 'da':
				$("#sel_game2").val("24");
				break;
		}
	
	}
}


function c_orderEventSel(s1e){
	switch (s1e){
		case '7':
			$("#eventSel1_7").attr("src","/images/sub_event_btn_allin_on.png");
			$("#sel_event").val("7");
			eventGameSelectBtn("ALL");
			break;
	}
}


function c_comeBackEventSel(s1e,tp,tp2){

	if (tp != ""){
		$("#tpy").val(tp);
		switch (tp){
			case 'c':
				$("#sel_event").val(s1e);
				break;
			case 'r':
				$("#sel_event").val(s1e);
				break;
		}
	}else{ 
		$("#tpy").val("");
		if (s1e == "1" || s1e == "2" || s1e == "3" || s1e == "4" || s1e == "5" || s1e == "6"){
			$(".evolution").fadeOut();
			$(".gameplay").fadeOut();
			$(".vivo").fadeOut();
			$("#sel_game1").val("");
		}else{
			$(".evolution").fadeIn();
			$(".gameplay").fadeIn();
			$(".vivo").fadeIn();
			$("#sel_game1").val("");
		}
		switch (s1e){
			case '1':
				$("#sel_event").val("1");
				break;
			case '2':
				$("#sel_event").val("2");
				break;
			case '3':
				$("#sel_event").val("3");
				break;
			case '4':
				$("#sel_event").val("4");
				break;
			case '5':
				$("#sel_event").val("5");
				break;
			case '6':
				$("#sel_event").val("6");
				break;
			case '10':
				$("#sel_event").val("10");
				break;
			case '11':
				$("#sel_event").val("11");
				break;
			case '12':
				$("#sel_event").val("12");
				break;
			case '8':
				$("#sel_event").val("8");
				break;
			case '9':
				$("#sel_event").val("9");
				break;
		}
	}
}


function c_gameBtnReset(sType,sNum){
	if(sNum == '1'){
		switch (sType){
			case 'MOVE':
		}
	}else if(sNum == '2'){
		switch (sType){
			case 'MOVE':
		}
	}
}

function check_val_move(game, type){		
		//�곗씠�� �꾩넚遺�
		$.ajax({
			type: "post",
			url: "/money/check_move_val_proc.asp",
			data: { 'game': game} ,
			dataType: "XML",
			error: function(request, status, error){
				var mypoint_now		= "�꾩옱 �곗씠�곕� 遺덈윭�ъ닔 �놁뒿�덈떎.";
				$("#ck_game"+type).html("寃뚯엫 �붿뿬 湲덉븸 濡쒕뱶 �ㅽ뙣");
			},
			success: function(XML){
				var mypoint_now		= $(XML).find("return_datas").find("return_value").text();
				$("#ck_game"+type).html(mypoint_now);
			},beforeSend: function(){
			},complete: function(){
			}
		});
		//�곗씠�� �꾩넚遺�
}

function c_moveGameSel(s1e, s1c, cl){

	if(s1e == '1'){
		switch (s1c){
			case 't':
				$("#sel_game1").val("7");
				$("#sel_game2").val("");
				break;
			case 'm':
				$("#sel_game1").val("4");
				$("#sel_game2").val("");
				break;
			case 'x':
				$("#sel_game1").val("1");
				$("#sel_game2").val("");
				break;
			case 'a':
				$("#sel_game1").val("5");
				$("#sel_game2").val("");
				break;
			case 'p':
				$("#sel_game1").val("11");
				$("#sel_game2").val("");
				break;
			case 'sm':
				$("#sel_game1").val("8");
				$("#sel_game2").val("");
				break;
			case 'o':
				$("#sel_game1").val("12");
				$("#sel_game2").val("");
				break;
			case 'ab':
				$("#sel_game1").val("13");
				$("#sel_game2").val("");
				break;
			case 'lo':
				$("#sel_game1").val("14");
				$("#sel_game2").val("");
				break;
			case 'rm':
				$("#sel_game1").val("0");
				$("#sel_game2").val("");
				break;
			case 'ho':
				$("#sel_game1").val("20");
				$("#sel_game2").val("");
				break;
			case 'ha':
				$("#sel_game1").val("21");
				$("#sel_game2").val("");
				break;
			case 'vi':
				$("#sel_game1").val("22");
				$("#sel_game2").val("");
				break;
			case 'ev':
				$("#sel_game1").val("23");
				$("#sel_game2").val("");
				break;
			case 'da':
				$("#sel_game1").val("24");
				$("#sel_game2").val("");
				break;
		}
	}else if(s1e == '2'){

		switch (s1c){
			case 't':
				$("#sel_game2").val("7");
				break;
			case 'm':
				$("#sel_game2").val("4");
				break;
			case 'x':
				$("#sel_game2").val("1");
				break;
			case 'a':
				$("#sel_game2").val("5");
				break;
			case 'p':
				$("#sel_game2").val("11");
				break;
			case 'sm':
				$("#sel_game2").val("8");
				break;
			case 'o':
				$("#sel_game2").val("12");
				break;
			case 'ab':
				$("#sel_game2").val("13");
				break;
			case 'lo':
				$("#sel_game2").val("14");
				break;
			case 'mm':
				$("#sel_game2").val("0");
				break;
			case 'ho':
				$("#sel_game2").val("20");
				break;
			case 'ha':
				$("#sel_game2").val("21");
				break;
			case 'vi':
				$("#sel_game2").val("22");
				break;
			case 'ev':
				$("#sel_game2").val("23");
				break;
			case 'da':
				$("#sel_game2").val("24");
				break;
		}
		if ($("#sel_game1").val() == $("#sel_game2").val()){
			alert("媛숈�寃뚯엫�먯꽌 �대룞�섏떎 �� �놁뒿�덈떎.\n�ㅼ떆 �좏깮�댁＜�몄슂.");
			$("#sel_game2").val("");
		}
	}

}

/*=== �ъ씠�명럹�댁� �⑥닔 ======================================================================================================================  */


function c_loginProc(typ){
	if (typ == "MAIN"){
		if(chkFrmValue(mainLogin_form)){
			// 濡쒓렇�몄쿂由щ�遺�
			$.ajax({
				type: "post",
				url: "/member/aj_loginProc.asp",
				data: $("#mainLogin_form").serialize() ,
				dataType: "XML",
				error: function(request, status, error){
					alert('吏꾪뻾以� �ㅻ쪟媛� 諛쒖깮�덉뒿�덈떎.\n愿�由ъ옄�먭쾶 臾몄쓽�댁＜�몄슂.');
				},
				success: function(XML){
					var return_state	= $(XML).find("return_datas").find("return_state").text();
					var return_msg		= $(XML).find("return_datas").find("return_msg").text();
					var return_action	= $(XML).find("return_datas").find("return_action").text();
					
					if(return_state == 'Y'){
						alert(return_msg);
						if(return_action == 'HOME'){
							location.href = '/';
							////$("#dataLoading").fadeOut();
						}
					}
				}
				,beforeSend: function(){
					//$("#dataLoading").fadeIn();
				},
				complete: function(){
					////$("#dataLoading").fadeOut();
				}
			});
		}
	}else if (typ == "CENTER"){
		if(chkFrmValue(cLogin_form)){
			// 濡쒓렇�몄쿂由щ�遺�
			$.ajax({
				type: "post",
				url: "/member/aj_loginProc.asp",
				data: $("#cLogin_form").serialize() ,
				dataType: "XML",
				error: function(request, status, error){
					alert('吏꾪뻾以� �ㅻ쪟媛� 諛쒖깮�덉뒿�덈떎.\n愿�由ъ옄�먭쾶 臾몄쓽�댁＜�몄슂.');
				},
				success: function(XML){
					var return_state	= $(XML).find("return_datas").find("return_state").text();
					var return_msg		= $(XML).find("return_datas").find("return_msg").text();
					var return_action	= $(XML).find("return_datas").find("return_action").text();
					var return_value	= $(XML).find("return_datas").find("return_value").text();
					
					if(return_state == 'Y'){
						if(return_msg != ''){
							alert(return_msg);
						}
						if(return_action == 'HOME'){
							parent.location.href = '/';
							////$("#dataLoading").fadeOut();
						}else if(return_action == 'MENU_LINK'){
							// $("#need_login").fadeOut();
							// //$("#dataLoading").fadeOut();
							// c_loginCheck();
							parent.location.href = '/';
						}else if(return_action == 'UNLOAD'){
							//$("#dataLoading").fadeOut();
						}
					}
				}
				,beforeSend: function(){
					//$("#dataLoading").fadeIn();
				},
				complete: function(){
					////$("#dataLoading").fadeOut();
				}
			});
		}
	
	}else if (typ == "OUT"){
		$.ajax({
			type: "post",
			url: "/member/aj_loginProc.asp",
			data: { 'method': 'LOGOUT'} ,
			dataType: "XML",
			error: function(request, status, error){
				alert('吏꾪뻾以� �ㅻ쪟媛� 諛쒖깮�덉뒿�덈떎.\n愿�由ъ옄�먭쾶 臾몄쓽�댁＜�몄슂.');
			},
			success: function(XML){
				var return_state	= $(XML).find("return_datas").find("return_state").text();
				var return_msg		= $(XML).find("return_datas").find("return_msg").text();
				var return_action	= $(XML).find("return_datas").find("return_action").text();
				
				if(return_state == 'Y'){
					// alert(return_msg);
					if(return_action == 'HOME'){
						location.href = '/';
						////$("#dataLoading").fadeOut();
					}
				}
			}
			,beforeSend: function(){
				//$("#dataLoading").fadeIn();
			},
			complete: function(){
				////$("#dataLoading").fadeOut();
			}
		});
	}else if (typ == "MAINTENANCE"){
		$.ajax({
			type: "post",
			url: "/member/aj_loginProc.asp",
			data: $("#mainLogin_form").serialize() ,
			dataType: "XML",
			error: function(request, status, error){
				alert('吏꾪뻾以� �ㅻ쪟媛� 諛쒖깮�덉뒿�덈떎.\n愿�由ъ옄�먭쾶 臾몄쓽�댁＜�몄슂.');
			},
			success: function(XML){
				var return_state	= $(XML).find("return_datas").find("return_state").text();
				var return_msg		= $(XML).find("return_datas").find("return_msg").text();
				var return_action	= $(XML).find("return_datas").find("return_action").text();
				
				if(return_state == 'Y'){
					alert(return_msg);
					if(return_action == 'HOME'){
						//location.href = '/';
						////$("#dataLoading").fadeOut();
					}
				}
			}
			,beforeSend: function(){
				//$("#dataLoading").fadeIn();
			},
			complete: function(){
				////$("#dataLoading").fadeOut();
			}
		});
	}
}

function c_initLoginCheck(){

}
function c_initEventCheck(){

}


function c_idCheckReset(){
	$("#bitIdCheck").val("0");
}

//-------------------------------------------------------------------------------------------
// �⑥닔�ㅻ챸: 
// �곸꽭�ㅻ챸: 
//-------------------------------------------------------------------------------------------
function c_joinCheckId(){
	var check_id =  $("#join_id").val();
	if (check_id != '' && check_id != '�� 6�먯씠�� 12�� �댄븯 �곷Ц/�レ옄濡� �낅젰�� 二쇱꽭��'){

	}else{
				alert('寃��ы븯�� �꾩씠�붾� �щ컮瑜닿쾶 �낅젰�섏뿬 二쇱떆湲� 諛붾엻�덈떎.');
	}
}


function c_joinProc(){
	if(chkFrmValue(join_form)){
		var bitIdCheck	=	$("#bitIdCheck").val();
		var join_pw1	=	$("#join_pw1").val();
		var join_pw2	=	$("#join_pw2").val();
		var mobile_num	= $("#m_num1").val()+$("#m_num2").val()+$("#m_num3").val();
		var checkavale	=	$("#checkavale").val();

		
		if(bitIdCheck == "0"){
			alert("�꾩씠�� 以묐났�뺤씤�� �댁＜�몄슂!!");
		}else if(join_pw1 != join_pw2){
			alert("�⑥뒪�뚮뱶瑜� �뺤씤�댁＜�몄슂!!");
		}else if ( $("#check_to_ch").val() != $("#check_to_ch2").val() && checkavale == "Y" ){
			alert("�몄쬆踰덊샇媛� �쇱튂�섏� �딆뒿�덈떎!!");
		}else if ( mobile_num != $("#sendnum").val() && checkavale == "Y" ){
			alert("�몃뱶�� 踰덊샇媛� �몄쬆�꾩넚踰덊샇�� �쇱튂�섏� �딆뒿�덈떎!!");
		}else{
		

		}
	}
	
}

function memInfoChange(){
	if(chkFrmValue(memInfo_form)){
		var cur_pw	=	$("#cur_pw").val();
		var new_pw1	=	$("#new_pw1").val();
		var new_pw2	=	$("#new_pw2").val();
		
		if(cur_pw == ""){
			alert("�꾩옱 鍮꾨�踰덊샇瑜� 瑗� �낅젰�댁＜�몄슂.!!");
		}else if(new_pw1 != new_pw2){
			alert("蹂�寃쎈맆 鍮꾨�踰덊샇瑜� �뺤씤�댁＜�몄슂!!");
		}else{

		
		}
	}
}

function c_changeBank(){
	if(chkFrmValue(bankInfo_form)){

	}
	
}

function bonusTypeCheck(thsVal){
	
	bonusTypeInputCheck()
}

function bonusTypeInputCheck(){
 checkValue = "N";
 // �ъ씤�� �낅젰李� �쒖꽦�� �щ�
 if($("#bonus_type_p:checked").val()){
  $("#usePoint").removeAttr("disabled");
  $("#usePoint").css("color","#fff");
  $("#usePoint_c").css("color","#fff");  
  checkValue = "P";
 }else{
  $("#usePoint").val("0");
  $("#usePoint").attr("disabled",true);
  $("#usePoint").css("color","#ccc");
  $("#usePoint_c").css("color","#ccc");
  checkValue = "N";
 }
 return checkValue;
}

function c_formAction(formId, actionUrl){
}



function get_checking_e2(){

}

function getTime_etimer2() { 
			//////�묐え 醫낅즺�쒓컙 �몄텧 異붿텧遺�//////////////////////////////////
			year_c		= $("#year_c2").val();
			month_c		= $("#month_c2").val();
			day_c		= $("#day_c2").val();
			hour_c		= $("#hour_c2").val();
			minute_c	= $("#minute_c2").val();
			second_c	= $("#second_c2").val();
			now = new Date();
			dday = new Date(year_c,month_c,day_c,hour_c,minute_c,second_c); 
			days = (dday - now) / 1000 / 60 / 60 / 24; 
			daysRound = Math.floor(days); 
			hours = (dday - now) / 1000 / 60 / 60 - (24 * daysRound); 
			hoursRound = Math.floor(hours); 
			minutes = (dday - now) / 1000 /60 - (24 * 60 * daysRound) - (60 * hoursRound); 
			minutesRound = Math.floor(minutes); 
			seconds = (dday - now) / 1000 - (24 * 60 * 60 * daysRound) - (60 * 60 * hoursRound) - (60 * minutesRound); 
			secondsRound = Math.round(seconds); 
			//////�묐え 醫낅즺�쒓컙 �몄텧 異붿텧遺�//////////////////////////////////
							
			//////�⑥��쒓컙 異쒕젰遺�//////////////////////////////////
			if (hoursRound < 10){
				hoursRound	= "0"+hoursRound;
			}
			if (minutesRound < 10){
				minutesRound	= "0"+minutesRound;
			}
			if (secondsRound < 10){
				secondsRound	= "0"+secondsRound;
			}

			$("#e_hour2").html(hoursRound); 
			$("#e_minute2").html(minutesRound); 
			$("#e_second2").html(secondsRound); 
			//////�⑥��쒓컙 異쒕젰遺�//////////////////////////////////

			if((minutesRound == "0" && secondsRound == "1") || (minutesRound == "0" && secondsRound < 1)){
				$("#qstatus").val("N");
				c_centerPop('OFF');
			}


			newtime = window.setTimeout("getTime_etimer2();", 1000);	//�ㅽ뻾
} 






function get_checking_e3(){


}

function getTime_etimer3() { 
			//////�묐え 醫낅즺�쒓컙 �몄텧 異붿텧遺�//////////////////////////////////
			year_c		= $("#year_c3").val();
			month_c		= $("#month_c3").val();
			day_c		= $("#day_c3").val();
			hour_c		= $("#hour_c3").val();
			minute_c	= $("#minute_c3").val();
			second_c	= $("#second_c3").val();
			now = new Date();
			dday = new Date(year_c,month_c,day_c,hour_c,minute_c,second_c); 
			days = (dday - now) / 1000 / 60 / 60 / 24; 
			daysRound = Math.floor(days); 
			hours = (dday - now) / 1000 / 60 / 60 - (24 * daysRound); 
			hoursRound = Math.floor(hours); 
			minutes = (dday - now) / 1000 /60 - (24 * 60 * daysRound) - (60 * hoursRound); 
			minutesRound = Math.floor(minutes); 
			seconds = (dday - now) / 1000 - (24 * 60 * 60 * daysRound) - (60 * 60 * hoursRound) - (60 * minutesRound); 
			secondsRound = Math.round(seconds); 
			//////�묐え 醫낅즺�쒓컙 �몄텧 異붿텧遺�//////////////////////////////////
							
			//////�⑥��쒓컙 異쒕젰遺�//////////////////////////////////
			if (hoursRound < 10){
				hoursRound	= "0"+hoursRound;
			}
			if (minutesRound < 10){
				minutesRound	= "0"+minutesRound;
			}
			if (secondsRound < 10){
				secondsRound	= "0"+secondsRound;
			}



			if (second_c != ""){
				$("#check_etimer3").css("display","block");
				$("#check_etimer3_1").css("display","none");
			}

			$("#e_hour3").html(hoursRound); 
			$("#e_minute3").html(minutesRound); 
			$("#e_second3").html(secondsRound); 
			//////�⑥��쒓컙 異쒕젰遺�//////////////////////////////////


			newtime = window.setTimeout("getTime_etimer3();", 1000);	//�ㅽ뻾
} 

function c_selgame_q(game,qidx){
	$("#sel_qgame").val(game);
	$("#qidx").val(qidx);
}


function c_submit_quest(){
	sel_qgame	= $("#sel_qgame").val();
	qidx		= $("#qidx").val();
	qstatus		= $("#qstatus").val();
	aqlist		= $("#qlist").val();

	var qlist			= $("#qlist").val();
	var qidx			= $("#qidx").val();
	$("#qlist").val(qlist+","+qidx);



    if(aqlist.indexOf(qidx) != -1 && qidx != "" && aqlist != "") { 
		alert('�꾩옱 泥섎━ ��湲곗쨷�낅땲��.');
		return false;
    } 

	if (qstatus == "N"){
		alert('�대떦 �섏뒪�� �쒓컙�� 留뚮즺�섏뿀�듬땲��.');
		c_centerPop('OFF');
		return false;
	}else if (sel_qgame == ""){
		alert('寃뚯엫�� �좏깮�섏꽭��.');
		return false;
	}else if (qidx == ""){
		alert('�섏뒪�몃� �좏깮�섏꽭��.');
		return false;
	}else{
	}
}




function c_bonusCheck(){
	var returnValue;
	if($("#bonus_type_p:checked").val()){
		var usePoint	= $("#usePoint").val();
		var maxPoint	= $("#maxPoint").val();
		usePoint		= usePoint.replace(/,/g,"")
		usePointLen		= usePoint.length;
		usePointUnit	= usePoint.substring(usePointLen,usePointLen-4);
		
		if((usePoint*1) <= 9999){
			alert('�ъ씤�� �ъ슜�� 留뚰룷�명듃 �댁긽 �좎껌 媛��ν빀�덈떎.');
			returnValue = false;
		}else if(usePointUnit != '0000'){
			alert('�ъ씤�� �ъ슜�� 留뚰룷�명듃 �⑥쐞濡� �좎껌 媛��ν빀�덈떎.');
			returnValue = false;
		}else{
			returnValue = true;
		}
		
	}else{
		returnValue = true;
	}
	
	return returnValue;
}




function c_inOrder_proc(){
	if (c_bonusCheck()){
		var check_price	=	$("#check_price").val();
		check_price		= check_price.replace(/,/g,"");
		check_priceLen	= check_price.length;
		check_priceUnit	= check_price.substring(check_priceLen,check_priceLen-4);
		
		if(check_price < 50000){
			alert('�낃툑�좎껌�� 湲곕낯 50,000�� �댁긽 �좎껌 媛��ν빀�덈떎.');
		//}else if(check_priceUnit != '0000'){
		//	alert('�낃툑�좎껌�� 留뚯썝 �⑥쐞濡� �좎껌 媛��ν빀�덈떎.');
		}else{
			$("#in_price").val(check_price);
			if(chkFrmValue(inOrder_form)){
				c_formAction("#inOrder_form","/money/aj_inOrder_proc.asp");
			}
		}
	}
}

function c_outOrder_proc(){
	var check_price = $("#check_price").val();
	check_price		= check_price.replace(/,/g,"");
	check_priceLen	= check_price.length;
	check_priceUnit	= check_price.substring(check_priceLen,check_priceLen-4);
	
	if(check_price < 100000){
		alert('異쒓툑�≪� 湲곕낯 100,000�� �댁긽�낅땲��.');
	}else if(check_priceUnit != '0000'){
		alert('異쒓툑�좎껌�� 留뚯썝 �⑥쐞濡� 媛��ν빀�덈떎.');
	}else{
		$("#out_price").val(check_price);
		if(chkFrmValue(outOrder_form)){
			c_formAction("#outOrder_form","/money/aj_outOrder_proc.asp");
		}
	}
	
}

function c_moveOrder_proc(){
	var check_price	=	$("#check_price").val();
	check_price		= check_price.replace(/,/g,"");
	check_priceLen	= check_price.length;
	check_priceUnit	= check_price.substring(check_priceLen,check_priceLen-4);
	
	if(check_price < 50000){
		alert('癒몃땲�대룞�� 湲곕낯 50,000�� �댁긽 �좎껌 媛��ν빀�덈떎.');
	}else if(check_priceUnit != '0000'){
		alert('癒몃땲�대룞�� 留뚯썝 �⑥쐞濡� �좎껌 媛��ν빀�덈떎.');
	}else{
	}
}

function c_eventOrder_proc(){
	if(chkFrmValue(eventOrder_form)){
		c_formAction("#eventOrder_form","/money/aj_eventOrder_proc.asp");
	}
}

function c_returnEvent_proc(checkMethod){
	$("#sel_method").val(checkMethod);
	if(chkFrmValue(returnEvent_form)){
		c_formAction("#returnEvent_form","/money/aj_returnEvent_proc.asp");
	}
}

function c_returnEvent_proc_mobile(checkMethod){
	$("#sel_method").val(checkMethod);
	if(chkFrmValue(returnEvent_form)){
		c_formAction_mobile("#returnEvent_form","/money/aj_returnEvent_proc.asp");
	}
}

function c_returnEvent_coupon_proc(checkMethod, CIDX){
	$("#sel_method").val(checkMethod);
	if(chkFrmValue(returnEvent_form)){
		c_formAction("#returnEvent_form","/money/aj_returnEvent_coupon_proc.asp?cidx="+CIDX);
	}
}


function c_returnEvent_coupon_proc_mobile(checkMethod, CIDX){
	$("#sel_method").val(checkMethod);
	if(chkFrmValue(returnEvent_form)){
		c_formAction_mobile("#returnEvent_form","/money/aj_returnEvent_coupon_proc.asp?cidx="+CIDX);
	}
}

function c_loginCheck(){
	c_initLoginCheck();
	//alert(aval);
	if(returnLoginValue == "ON"){
		return true;
	}else{
		return false;
	}
}

function c_eventCheck(){
	c_initEventCheck();
	//alert(aval);
	if(returnEventValue == "ON"){
		return true;
	}else{
		return false;
	}
}

function c_enterLogin(lmethod){
	if ( window.event.keyCode == 13 )  {
		c_loginProc(lmethod);
	}
	
}

/*#####################################################
�� �� 紐� : c_goPage
湲곕뒫�ㅻ챸 : �섏씠吏�瑜� �대룞�좊븣.
�� �� 媛� : strPageName, strArgName, gp
諛� �� 媛� :
#####################################################*/
function c_goPage(strPageName, strPageNum, strSearchValue) {
	if(strPageNum == ''){
		strPageNum = '1'
	}
	var locationPageUrl	=	strPageName+'?goPage='+strPageNum;
	if(strSearchValue != ''){
		locationPageUrl = locationPageUrl+'&'+strSearchValue
	}
	location.href=locationPageUrl;
}




/*#####################################################
�� �� 紐� : c_goPage
湲곕뒫�ㅻ챸 : �섏씠吏�瑜� �대룞�좊븣.
�� �� 媛� : strPageName, strArgName, gp
諛� �� 媛� :
#####################################################*/
function c_goPage_game(strPageName, strPageNum, strSearchValue) {
	if(strPageNum == ''){
		strPageNum = '1'
	}
	var locationPageUrl	=	strPageName+'?goPage='+strPageNum;
	if(strSearchValue != ''){
		locationPageUrl = locationPageUrl+'&'+strSearchValue
	}
	location.href = locationPageUrl;
}



/*#####################################################
�� �� 紐� : c_flashdown()
湲곕뒫�ㅻ챸 : 
�� �� 媛� : 
諛� �� 媛� : 
#####################################################*/
function c_flashdown() {
	// location.href = "http://aihdownload.adobe.com/bin/live/install_flashplayer13x32axau_gtbd_chrd_dn_aaa_aih.exe";
	var downLinkUrl		= "http://get.adobe.com/kr/flashplayer/";
	var w				= 1020;
	var h				= 610;
	var posX			= (screen.width - w) / 2;
	var posY			= (screen.height - h) / 2;
	var option			= ",resizable=no,scrollbars=no,status=no";
	window.open(downLinkUrl, "flashDown","width="+w+",height="+h+",left="+posX +",top="+posY+option);
}

function changeBank(){
	$("#out_member_bank").fadeToggle();
}






//-------------------------------------------------------------------------------------------
// �⑥닔�ㅻ챸: �щ’癒몃땲 怨꾩궛
// �곸꽭�ㅻ챸: 
//-------------------------------------------------------------------------------------------
function calSlotMoney(tId, tVal){
	var curVal	= $(tId).val();
	if (tVal == "0"){
		$(tId).val("0");
	}else{
		curVal	=	new String(curVal)
		curVal	=	curVal.replace(/,/gi,"")
		if(isNaN(curVal)) { alert("臾몄옄�� �ъ슜�� �� �놁뒿�덈떎.");return 0}
		
		curVal	=	Number(curVal) + Number(tVal);
		curVal	=	fnCurrency(curVal)
		$(tId).val(curVal);
	}
}

//-------------------------------------------------------------------------------------------
// �⑥닔�ㅻ챸: �щ’寃뚯엫�쒖옉遺�遺�
// �곸꽭�ㅻ챸: 
//-------------------------------------------------------------------------------------------
function slotGameStart(gId){
	slotLinkUrl	=	"/game/slotGameStart.asp?gId="+gId;
	var w = 1024;
	var h = 768;
	var posX = (screen.width - w) / 2;
	var posY = (screen.height - h) / 2;
	var option = ",resizable=yes,scrollbars=no,status=no";
	window.open(slotLinkUrl, "slotOpen","width="+w+",height="+h+",left="+posX +",top="+posY+option);
}

//-------------------------------------------------------------------------------------------
// �⑥닔�ㅻ챸: 
// �곸꽭�ㅻ챸: 
//-------------------------------------------------------------------------------------------
function slotPointProc(tranTyp){
	chg_cur_point		=	$("#chg_cur_point").text();
	chg_cur_slot			=	$("#chg_cur_slot").text();
	chg_check_point	=	$("#chg_check_point").val();
	chg_check_slot		=	$("#chg_check_slot").val();
	
	chg_cur_point		=	Number(chg_cur_point.replace(/,/gi,""));
	chg_cur_slot			=	Number(chg_cur_slot.replace(/,/gi,""));
	chg_check_point	=	Number(chg_check_point.replace(/,/gi,""));
	chg_check_slot		=	Number(chg_check_slot.replace(/,/gi,""));
	
	proStatus				=	"N"
	
	if(tranTyp == "IN"){
		if(chg_check_slot == 0){
			alert('0 �댁긽�� 湲덉븸�� 5,000�� �⑥쐞濡� �낅젰�댁＜�몄슂.');
			$("#chg_check_slot").css({border:"1px solid #F00"});
			return false;
		}else if(chg_cur_point >= chg_check_slot){
			procAmount	= chg_check_slot
			proStatus		=	"Y"
		}else{
			alert('蹂댁쑀�섍퀬 �덈뒗 �ъ씤�� 蹂대떎 蹂��� �섎젮�� �щ’湲덉븸�� �� 留롮뒿�덈떎. 湲덉븸�� �뺤씤�섍퀬 吏꾪뻾�댁＜�몄슂.');
			$("#chg_check_slot").css({border:"1px solid #F00"});
			return false;
		}
	}else if(tranTyp == "OUT"){
		if(chg_check_point == 0){
			alert('0 �댁긽�� 湲덉븸�� 5,000�� �⑥쐞濡� �낅젰�댁＜�몄슂.');
			$("#chg_check_point").css({border:"1px solid #F00"});
			return false;
		}else if(chg_cur_slot >= chg_check_point){
			procAmount	= chg_check_point
			proStatus		=	"Y"
		}else{
			alert('蹂댁쑀�섍퀬 �덈뒗 �щ’癒몃땲 蹂대떎 蹂��� �섎젮�� �ъ씤�멸� �� 留롮뒿�덈떎. 湲덉븸�� �뺤씤�섍퀬 吏꾪뻾�댁＜�몄슂.');
			$("#chg_check_point").css({border:"1px solid #F00"});
			return false;
		}
	}
	
	
	if(proStatus	==	"Y"){
		$.ajax({
			type: "post",
			url: "/sub/money/aj_slotPoint.asp",
			data: { 'amount': procAmount, 'tranTyp': tranTyp } ,
			dataType: "XML",
			
			error: function(request, status, error){
				alert('�щ’ �ъ씤�� �대룞�� �ㅽ뙣 �섏��듬땲��. 愿�由ъ옄�먭쾶 臾몄쓽�� 二쇱꽭��.');
			},
			
			success: function(XML){
				var return_state					= $(XML).find("return_datas").find("return_state").text();
				if(return_state == 'Y'){
					document.location.reload();
				}else{
					alert('�뺤긽�곸쑝濡� 泥섎━�섏� �딆븯�듬땲��, 愿�由ъ옄�먭쾶 臾몄쓽�� 二쇱꽭��.');
				}
			},
			
			beforeSend: function(){
				$("#slot_proc_load").fadeIn();
			},
			complete: function(){
				$("#slot_proc_load").fadeOut();
			}
		});
	}else{
		alert("�섎せ�� �붿껌�낅땲��.");
	}
}






function gameStart(linkNum){
	var width = screen.width;
	switch(linkNum){
		case '1' : {
			var	man="/game/gameLink.asp?gameType=1";
			if (width < 1310){
				var x = window.open(man,'R_GAMING','width=1310,height=832,resizable=yes,scrollbars=yes,status=0,toolbar=0,screenX=150,screenY=100');
			}else {
				var x = window.open(man,'R_GAMING','width=1310,height=832,resizable=no,scrollbars=yes,status=0,toolbar=0,screenX=150,screenY=100');
			}
			
			if (x != undefined){
				x.focus();
			} 
			
			break;
		}
		case '4' : {
			var	man="/game/gameLink.asp?gameType=4";
			if (width < 1310){
				var x = window.open(man,'M_GAMING','width=1310,height=832,resizable=yes,scrollbars=yes,status=0,toolbar=0,screenX=150,screenY=100');
			}else {
				var x = window.open(man,'M_GAMING','width=1310,height=832,resizable=no,scrollbars=yes,status=0,toolbar=0,screenX=150,screenY=100');
			}
			if (x != undefined){
				x.focus();
			} 
			break;
		}
		case '5' : {
			var WindowOptions = 'directories=0,left=0,top=0,width=1310' +
							',height=832,location=0,menubar=0,resizable=1,' +
							'scrollbars=yes,status=0,titlebar=0,toolbar=0';
			var	man="/game/gameLink.asp?gameType=5";
			var x = window.open(man, 'A_Gaming', WindowOptions);
			
			if (x != undefined){
				x.focus();
			} 
			break;
		}
		case '6' : {
			var WindowOptions = 'directories=0,left=0,top=0,width=1310' +
							',height=832,location=0,menubar=0,resizable=1,' +
							'scrollbars=yes,status=0,titlebar=0,toolbar=0';
			var	man="/game/gameLink.asp?gameType=6";
			var x = window.open(man, '7_Gaming', WindowOptions);
			
			if (x != undefined){
				x.focus();
			} 
			break;
		}
		/*
		1310*830 �꾩껜
		110*830 �곗륫
		1210*80 �섎떒
		1210*750 寃쒖갹
		*/
		case '7' : {
			var WindowOptions = 'directories=0,left=0,top=0,width=1310' +
							',height=832,location=0,menubar=0,resizable=1,' +
							'scrollbars=yes,status=0,titlebar=0,toolbar=0';
			var	man="/game/gameLink.asp?gameType=7";
			//var	man="/game/gameLink.asp?gameType=7";
			var x = window.open(man, 'T_Gaming', WindowOptions);
			
			if (x != undefined){
				x.focus();
			} 
			break;
		}
		case '9' : {
			var	man="/game/gameLink.asp?gameType=9";
			if (width < 1024){
				var x = window.open(man,'RE_GAMING','width=1310,height=832,resizable=yes,scrollbars=yes,status=0,toolbar=0,screenX=150,screenY=100');
			}else {
				var x = window.open(man,'RE_GAMING','width=1310,height=832,resizable=yes,scrollbars=yes,status=0,toolbar=0,screenX=150,screenY=100');
			}
			
			if (x != undefined){
				x.focus();
			} 
			break;
		}
		case '10' : {
			var WindowOptions = 'directories=0,left=0,top=0,width=1310' +
							',height=832,location=0,menubar=0,resizable=1,' +
							'scrollbars=yes,status=0,titlebar=0,toolbar=0';
			var	man="/game/gameLink.asp?gameType=10";
			var x = window.open(man, 'TE_Gaming', WindowOptions);
			
			if (x != undefined){
				x.focus();
			} 
			break;
		}
		case '11' : {
			var WindowOptions = 'directories=0,left=0,top=0,width=1310' +
							',height=832,location=0,menubar=0,resizable=1,' +
							'scrollbars=yes,status=0,titlebar=0,toolbar=0';
			var	man="/game/gameLink.asp?gameType=11";
			var x = window.open(man, 'PT_Gaming', WindowOptions);
			
			if (x != undefined){
				x.focus();
			} 
			
			// alert('寃뚯엫 以�鍮꾩쨷 �낅땲��.');
			break;
		}
		case '12' : {
			var WindowOptions = 'directories=0,left=0,top=0,width=1310' +
							',height=832,location=0,menubar=0,resizable=1,' +
							'scrollbars=yes,status=0,titlebar=0,toolbar=0';
			var	man="/game/gameLink.asp?gameType=12";
			var x = window.open(man, 'OP_Gaming', WindowOptions);
			
			if (x != undefined){
				x.focus();
			} 
			
			// alert('寃뚯엫 以�鍮꾩쨷 �낅땲��.');
			break;
		}
		case '121' : {
			var WindowOptions = 'directories=0,left=0,top=0,width=1310' +
							',height=832,location=0,menubar=0,resizable=1,' +
							'scrollbars=yes,status=0,titlebar=0,toolbar=0';
			var	man="/game/gameLink.asp?gameType=12";
			var x = window.open(man, 'OP_Gaming', WindowOptions);
			
			if (x != undefined){
				x.focus();
			} 
			
			// alert('寃뚯엫 以�鍮꾩쨷 �낅땲��.');
			break;
		}
		case '13' : {
			var WindowOptions = 'directories=0,left=0,top=0,width=1310' +
							',height=832,location=0,menubar=0,resizable=1,' +
							'scrollbars=yes,status=0,titlebar=0,toolbar=0';
			var	man="/game/gameLink.asp?gameType=13";
			var x = window.open(man, 'OP_Gaming', WindowOptions);
			
			if (x != undefined){
				x.focus();
			} 
			
			// alert('寃뚯엫 以�鍮꾩쨷 �낅땲��.');
			break;
		}
		case '14' : {
			var WindowOptions = 'directories=0,left=0,top=0,width=1310' +
							',height=832,location=0,menubar=0,resizable=1,' +
							'scrollbars=yes,status=0,titlebar=0,toolbar=0';
			var	man="/game/gameLink.asp?gameType=14";
			var x = window.open(man, 'OP_Gaming', WindowOptions);
			
			if (x != undefined){
				x.focus();
			} 
			
			// alert('寃뚯엫 以�鍮꾩쨷 �낅땲��.');
			break;
		}
		case '15' : {
			var WindowOptions = 'directories=0,left=0,top=0,width=1310' +
							',height=832,location=0,menubar=0,resizable=1,' +
							'scrollbars=yes,status=0,titlebar=0,toolbar=0';
			var	man="/game/gameLink.asp?gameType=15";
			var x = window.open(man, 'LOT_Gaming', WindowOptions);
			
			if (x != undefined){
				x.focus();
			} 
			
			// alert('寃뚯엫 以�鍮꾩쨷 �낅땲��.');
			break;
		}
		case '16' : {
			var WindowOptions = 'directories=0,left=0,top=0,width=1310' +
							',height=832,location=0,menubar=0,resizable=1,' +
							'scrollbars=yes,status=0,titlebar=0,toolbar=0';
			var	man="/game/gameLink.asp?gameType=16";
			var x = window.open(man, 'POW_Gaming', WindowOptions);
			
			if (x != undefined){
				x.focus();
			} 
			
			// alert('寃뚯엫 以�鍮꾩쨷 �낅땲��.');
			break;
		}
		case '121' : {
			var WindowOptions = 'directories=0,left=0,top=0,width=1310' +
							',height=832,location=0,menubar=0,resizable=1,' +
							'scrollbars=yes,status=0,titlebar=0,toolbar=0';
			var	man="/game/gameLink.asp?gameType=121";
			var x = window.open(man, 'OP_Gaming', WindowOptions);
			
			if (x != undefined){
				x.focus();
			} 
			
			// alert('寃뚯엫 以�鍮꾩쨷 �낅땲��.');
			break;
		}
		case '20' : {
			var WindowOptions = 'directories=0,left=0,top=0,width=1310' +
							',height=832,location=0,menubar=0,resizable=1,' +
							'scrollbars=yes,status=0,titlebar=0,toolbar=0';
			var	man="/game/gameLink.asp?gameType=20";
			var x = window.open(man, 'HO_Gaming', WindowOptions);
			
			if (x != undefined){
				x.focus();
			} 
			
			// alert('寃뚯엫 以�鍮꾩쨷 �낅땲��.');
			break;
		}
		case '22' : {
			var WindowOptions = 'directories=0,left=0,top=0,width=1310' +
							',height=832,location=0,menubar=0,resizable=1,' +
							'scrollbars=yes,status=0,titlebar=0,toolbar=0';
			var	man="/game/gameLink.asp?gameType=22";
			var x = window.open(man, 'vi_Gaming', WindowOptions);
			
			if (x != undefined){
				x.focus();
			} 
			
			// alert('寃뚯엫 以�鍮꾩쨷 �낅땲��.');
			break;
		}
		case '23' : {
			var WindowOptions = 'directories=0,left=0,top=0,width=1310' +
							',height=832,location=0,menubar=0,resizable=1,' +
							'scrollbars=yes,status=0,titlebar=0,toolbar=0';
			var	man="/game/gameLink.asp?gameType=23";
			var x = window.open(man, 'ev_Gaming', WindowOptions);
			
			if (x != undefined){
				x.focus();
			} 
			
			// alert('寃뚯엫 以�鍮꾩쨷 �낅땲��.');
			break;
		}
		case '24' : {
			var WindowOptions = 'directories=0,left=0,top=0,width=1330' +
							',height=740,location=0,menubar=0,resizable=1,' +
							'scrollbars=1,status=0,titlebar=0,toolbar=0';
			var	man="/game/gameLink.asp?gameType=24";
			var x = window.open(man, 'MID_Gaming', WindowOptions);
			
			if (x != undefined){
				x.focus();
			} 
			
			// alert('寃뚯엫 以�鍮꾩쨷 �낅땲��.');
			break;
		}
		case '25' : {
			var WindowOptions = 'directories=0,left=0,top=0,width=1330' +
							',height=740,location=0,menubar=0,resizable=1,' +
							'scrollbars=1,status=0,titlebar=0,toolbar=0';
			var	man="/game/gameLink.asp?gameType=25";
			var x = window.open(man, 'H88_Gaming', WindowOptions);
			
			if (x != undefined){
				x.focus();
			} 
			
			// alert('寃뚯엫 以�鍮꾩쨷 �낅땲��.');
			break;
		}
	}
}


function gameStart_before(linkNum, token){
	var width = screen.width;
	switch(linkNum){
		case '1' : {
			var	man="/game/gameLink.asp?gameType=1&encryptiontoken="+token;
			if (width < 1024){
				var x = window.open(man,'R_GAMING','width=800,height=600,resizable=yes,scrollbars=o,status=0,toolbar=0,screenX=150,screenY=100');
			}else {
				var x = window.open(man,'R_GAMING','width=1000,height=690,resizable=no,scrollbars=0,status=0,toolbar=0,screenX=150,screenY=100');
			}
			
			if (x != undefined){
				x.focus();
			} 
			
			break;
		}
		
		case '4' : {
			var	man="/game/gameLink.asp?gameType=4";
			if (width < 1024){
				var x = window.open(man,'M_GAMING','width=600,height=480,resizable=yes,scrollbars=0,status=0,toolbar=0,screenX=150,screenY=100');
			}else {
				var x = window.open(man,'M_GAMING','width=1043,height=781,resizable=yes,scrollbars=0,status=0,toolbar=0,screenX=150,screenY=100');
			}
			if (x != undefined){
				x.focus();
			} 
			break;
		}
		case '5' : {
			var WindowOptions = 'directories=0,left=0,top=0,width=1280' +
							',height=742,location=0,menubar=0,resizable=1,' +
							'scrollbars=1,status=0,titlebar=0,toolbar=0';
			var	man="/game/gameLink.asp?gameType=5";
			var x = window.open(man, 'A_Gaming', WindowOptions);
			
			if (x != undefined){
				x.focus();
			} 
			break;
		}
		case '6' : {
			var WindowOptions = 'directories=0,left=0,top=0,width=1170' +
							',height=735,location=0,menubar=0,resizable=1,' +
							'scrollbars=1,status=0,titlebar=0,toolbar=0';
			var	man="/game/gameLink.asp?gameType=6";
			var x = window.open(man, '7_Gaming', WindowOptions);
			
			if (x != undefined){
				x.focus();
			} 
			break;
		}
		case '7' : {
			var WindowOptions = 'directories=0,left=0,top=0,width=1280' +
							',height=742,location=0,menubar=0,resizable=1,' +
							'scrollbars=1,status=0,titlebar=0,toolbar=0';
			var	man="/game/gameLink.asp?gameType=7";
			var x = window.open(man, 'T_Gaming', WindowOptions);
			
			if (x != undefined){
				x.focus();
			} 
			break;
		}

		case '8' : {
			var	man="/game/slot_game_gamestarter.asp"+token;
			
			var x = window.open(man,'R_GAMING','width=900,height=600,resizable=yes,scrollbars=yes,status=0,toolbar=0,screenX=150,screenY=100');
		
			if (x != undefined){
				x.focus();
			} 
			
			break;
		}

		case '9' : {
			var	man="/game/gameLink.asp?gameType=9";
			if (width < 1024){
				var x = window.open(man,'RE_GAMING','width=800,height=600,resizable=yes,scrollbars=o,status=0,toolbar=0,screenX=150,screenY=100');
			}else {
				var x = window.open(man,'RE_GAMING','width=1000,height=690,resizable=no,scrollbars=0,status=0,toolbar=0,screenX=150,screenY=100');
			}
			
			if (x != undefined){
				x.focus();
			} 
			break;
		}
		case '10' : {
			var WindowOptions = 'directories=0,left=0,top=0,width=1280' +
							',height=742,location=0,menubar=0,resizable=1,' +
							'scrollbars=1,status=0,titlebar=0,toolbar=0';
			var	man="/game/gameLink.asp?gameType=10";
			var x = window.open(man, 'TE_Gaming', WindowOptions);
			
			if (x != undefined){
				x.focus();
			} 
			break;
		}
		case '11' : {
			var WindowOptions = 'directories=0,left=0,top=0,width=1280' +
							',height=742,location=0,menubar=0,resizable=1,' +
							'scrollbars=1,status=0,titlebar=0,toolbar=0';
			var	man="/game/gameLink.asp?gameType=11";
			var x = window.open(man, 'PT_Gaming', WindowOptions);
			
			if (x != undefined){
				x.focus();
			} 
			
			// alert('寃뚯엫 以�鍮꾩쨷 �낅땲��.');
			break;
		}
		case '12' : {
			var WindowOptions = 'directories=0,left=0,top=0,width=1280' +
							',height=742,location=0,menubar=0,resizable=1,' +
							'scrollbars=1,status=0,titlebar=0,toolbar=0';
			var	man="/game/gameLink.asp?gameType=12";
			var x = window.open(man, 'OP_Gaming', WindowOptions);
			
			if (x != undefined){
				x.focus();
			} 
			
			// alert('寃뚯엫 以�鍮꾩쨷 �낅땲��.');
			break;
		}
		case '13' : {
			var WindowOptions = 'directories=0,left=0,top=0,width=1280' +
							',height=742,location=0,menubar=0,resizable=1,' +
							'scrollbars=1,status=0,titlebar=0,toolbar=0';
			var	man="/game/gameLink.asp?gameType=13";
			var x = window.open(man, 'OP_Gaming', WindowOptions);
			
			if (x != undefined){
				x.focus();
			} 
			
			// alert('寃뚯엫 以�鍮꾩쨷 �낅땲��.');
			break;
		}
		case '14' : {
			var WindowOptions = 'directories=0,left=0,top=0,width=1280' +
							',height=742,location=0,menubar=0,resizable=1,' +
							'scrollbars=1,status=0,titlebar=0,toolbar=0';
			var	man="/game/gameLink.asp?gameType=14";
			var x = window.open(man, 'OP_Gaming', WindowOptions);
			
			if (x != undefined){
				x.focus();
			} 
			
			// alert('寃뚯엫 以�鍮꾩쨷 �낅땲��.');
			break;
		}

		case '12s' : {
			var	man="/game/gslot_gamestarter.asp"+token;
			
			var x = window.open(man,'R_GAMING','width=900,height=600,resizable=yes,scrollbars=yes,status=0,toolbar=0,screenX=150,screenY=100');
		
			if (x != undefined){
				x.focus();
			} 
			
			break;
		}
	}
}



//1:1梨꾪똿
function gohome(){
	location.href = '/';
}

//1:1梨꾪똿
function onChat(){
	tocplus = window.open('/service/tocplus.asp', 'tocplus','resizable=no, width=390, height=500, top=100, left=100 titlebar=no,status=no');
	tocplus.focus();
	return false;
}


// 泥섏쓬�댁꽭�� 遺�遺� 留곹겕
function c_newbie(link_str){
	if(link_str == 'IN'){
		c_menuLink('IN');
	}else if(link_str == 'JOIN'){
		c_menuLink('JOIN');
	}else if(link_str == 'MOVE'){
		c_menuLink('MOVE');
	}else if(link_str == 'OUT'){
		c_menuLink('OUT');
	}else if(link_str == 'EVENT'){
		c_menuLink('EVENT');
	}else if(link_str == 'GAMESTART1'){
		c_menuLink('T_START');
		c_centerPop('OFF');
	}else if(link_str == 'GAMESTART2'){
		c_menuLink('M_START');
		c_centerPop('OFF');
	}else if(link_str == 'GAMESTART3'){
		c_menuLink('X_START');
		c_centerPop('OFF');
	}else if(link_str == 'GAMESTART4'){
		c_menuLink('A_START');
		c_centerPop('OFF');
	}else if(link_str == 'GAMESTART5'){
		c_menuLink('P_START');
		c_centerPop('OFF');
	}else if(link_str == 'GAMESTART6'){
		c_menuLink('P_START');
		c_centerPop('OFF');
	}else if(link_str == 'GAMESTART7'){
		c_menuLink('O_START');
		c_centerPop('OFF');
	}else if(link_str == 'paypal_join'){
		c_menuLink('paypal_join');
	}
}


// faq蹂닿린踰꾪듉
function faqView(cId){
	var check_id = '#faq_'+cId+' dd';
	$(check_id).toggle();
}


function eventOneClick(eNum){
	if(eNum == '1'){
		// c_centerPop('OFF');
		c_centerDataLoad('/money/eventQuickApply.asp');
	}
	
}


function drop_down(classId, cId1, cId2, cId3, cId4, num,gtpy){
	var cId1 = $('.'+cId1);
	var cId2 = $('.'+cId2);
	var cId3 = $('.'+cId3);
	var cId4 = $('.'+cId4);

	if(num == "2"){
	window.frames["sub_frm3"].location.href="/game/move_order_g.asp?gameType="+gtpy;
	}else if(num == "3"){
	window.frames["sub_frm4"].location.href="/game/event_order_g.asp?gameType="+gtpy;
	}else if(num == "4"){
	window.frames["sub_frm2"].location.href="/game/in_order_g.asp?gameType="+gtpy;
	}else if(num == "5"){
	window.frames["sub_frm5"].location.href="/game/mini_game_g.asp";
	}else if(num == "6"){
	window.frames["sub_frm5"].location.href="/game/pmini_game_g.asp";
	}else if(num == "7"){
	window.frames["sub_frm5"].location.href="/game/gmini_game_g.asp";
	}else if(num == "8"){
	top.window.frames["main_frm"].location.href="/lotto/special_lotto.asp?gameType=15&gv=1&encryptiontoken=&gameType=15";
	}else if(num == "9"){
	top.window.frames["main_frm"].location.href="/lotto/special_powerball.asp?gameType=16&gv=1&encryptiontoken=&gameType=16";
	}



	cId1.css("display","none");
	cId2.css("display","none");
	cId3.css("display","none");
	cId4.css("display","none");
	if (num != "8" && num != "9"){
    $("."+classId).slideToggle("fast");
	}


}




/*#######################################################
�� �� 紐� : submit_num
湲곕뒫�ㅻ챸 : sms 蹂대궡湲�
�� �� 媛� : 
諛� �� 媛� : 
�� �� �� : 
#######################################################*/
function submit_num(){

	if ( $("#m_num2").val() == "" || $("#m_num3").val() == "" ){
	alert("�대��곕쾲�몃� �쒕�濡� �낅젰�섏뿬 二쇱떆湲� 諛붾엻�덈떎.");
	return false;
	}
	var mobile_num = $("#m_num1").val()+$("#m_num2").val()+$("#m_num3").val();


	if (mobile_num != ''){
		$.ajax({
			type: "post",
			url: "/member/send_checkcode.asp",
			data: { 'strInput': mobile_num, 'Action': '0' } ,
			dataType: "XML",
			
			error: function(request, status, error){
				alert('吏꾪뻾以� �ㅻ쪟媛� 諛쒖깮�덉뒿�덈떎.\n愿�由ъ옄�먭쾶 臾몄쓽�댁＜�몄슂.');
				alert(error);
			},
			
			success: function(XML){
				var return_msg = $(XML).find("return_datas").find("return_msg").text();
				var return_state = $(XML).find("return_datas").find("return_state").text();
				var return_state2 = $(XML).find("return_datas").find("return_state2").text();
				alert(return_msg);
				$("#check_to_ch2").val(return_state);
				$("#sendnum").val(return_state2);
			}
		});
	}


}

function notab(){
alert("吏�湲덉� �댁슜�섏떎 �� �놁뒿�덈떎.");
}





function hide_warning2(mtype){
	$.ajax({
		type: "post",
		url: "/money/aj_checkstproc.asp",
		data: { 'mtype': mtype} ,
		dataType: "XML",
		error: function(request, status, error){
			alert('吏꾪뻾以� �ㅻ쪟媛� 諛쒖깮�덉뒿�덈떎.\n愿�由ъ옄�먭쾶 臾몄쓽�댁＜�몄슂.');
		},
		success: function(XML){
			var return_state	= $(XML).find("return_datas").find("return_state").text();
			//if(return_state == 'Y'){
		//		alert(return_state);
		//	}
		},
		complete: function(){
		}
	});
	$("#warning_status").hide("slow");
}


function get_checking_e(){

		//�곗씠�� �꾩넚遺�
		$.ajax({
			type: "post",
			url: "/money/check_etimec.asp",
			data: "" ,
			dataType: "XML",
			error: function(request, status, error){
				alert('�먮윭');
			},
			success: function(XML){
				var start_yn			= $(XML).find("return_datas").find("return_state").text();
				var checked_time1		= $(XML).find("return_datas").find("return_value1").text();
				var checked_time2		= $(XML).find("return_datas").find("return_value2").text();
				var checked_time3		= $(XML).find("return_datas").find("return_value3").text();
				var checked_time4		= $(XML).find("return_datas").find("return_value4").text();
				var checked_time5		= $(XML).find("return_datas").find("return_value5").text();
				var checked_time6		= $(XML).find("return_datas").find("return_value6").text();

				if (start_yn == "Y"){
					$("#year_c").val(checked_time1);
					$("#month_c").val(checked_time2);
					$("#day_c").val(checked_time3);
					$("#hour_c").val(checked_time4);
					$("#minute_c").val(checked_time5);
					$("#second_c").val(checked_time6);

					$("#event_checkr_div").css("display","block");
					getTime_etimer();
				}else{
					$("#year_c").val("");
					$("#month_c").val("");
					$("#day_c").val("");
					$("#hour_c").val("");
					$("#minute_c").val("");
					$("#second_c").val("");
				}

			},beforeSend: function(){
			},complete: function(){
			}
		});
		//�곗씠�� �꾩넚遺�
}

function getTime_etimer() { 
			//////�묐え 醫낅즺�쒓컙 �몄텧 異붿텧遺�//////////////////////////////////
			year_c		= $("#year_c").val();
			month_c		= $("#month_c").val();
			day_c		= $("#day_c").val();
			hour_c		= $("#hour_c").val();
			minute_c	= $("#minute_c").val();
			second_c	= $("#second_c").val();
			now = new Date();
			dday = new Date(year_c,month_c,day_c,hour_c,minute_c,second_c); 
			days = (dday - now) / 1000 / 60 / 60 / 24; 
			daysRound = Math.floor(days); 
			hours = (dday - now) / 1000 / 60 / 60 - (24 * daysRound); 
			hoursRound = Math.floor(hours); 
			minutes = (dday - now) / 1000 /60 - (24 * 60 * daysRound) - (60 * hoursRound); 
			minutesRound = Math.floor(minutes); 
			seconds = (dday - now) / 1000 - (24 * 60 * 60 * daysRound) - (60 * 60 * hoursRound) - (60 * minutesRound); 
			secondsRound = Math.round(seconds); 
			//////�묐え 醫낅즺�쒓컙 �몄텧 異붿텧遺�//////////////////////////////////
							
			//////�⑥��쒓컙 異쒕젰遺�//////////////////////////////////
			if (hoursRound < 10){
				hoursRound	= "0"+hoursRound;
			}
			if (minutesRound < 10){
				minutesRound	= "0"+minutesRound;
			}
			if (secondsRound < 10){
				secondsRound	= "0"+secondsRound;
			}

			$("#e_hour").html(hoursRound); 
			$("#e_minute").html(minutesRound); 
			$("#e_second").html(secondsRound); 
			//////�⑥��쒓컙 異쒕젰遺�//////////////////////////////////


			if (second_c != ""){
				$("#check_etimer").css("display","block");
				$("#check_etimer_1").css("display","none");
			}

			newtime = window.setTimeout("getTime_etimer();", 1000);	//�ㅽ뻾
} 




function get_checking_e2(){

		//�곗씠�� �꾩넚遺�
		$.ajax({
			type: "post",
			url: "/money/check_etimec2.asp",
			data: "" ,
			dataType: "XML",
			error: function(request, status, error){
				alert('�먮윭');
			},
			success: function(XML){
				var start_yn			= $(XML).find("return_datas").find("return_state").text();
				var checked_time1		= $(XML).find("return_datas").find("return_value1").text();
				var checked_time2		= $(XML).find("return_datas").find("return_value2").text();
				var checked_time3		= $(XML).find("return_datas").find("return_value3").text();
				var checked_time4		= $(XML).find("return_datas").find("return_value4").text();
				var checked_time5		= $(XML).find("return_datas").find("return_value5").text();
				var checked_time6		= $(XML).find("return_datas").find("return_value6").text();

				if (start_yn == "Y"){
					$("#year_c2").val(checked_time1);
					$("#month_c2").val(checked_time2);
					$("#day_c2").val(checked_time3);
					$("#hour_c2").val(checked_time4);
					$("#minute_c2").val(checked_time5);
					$("#second_c2").val(checked_time6);

					$("#event_checkr_div2").css("display","block");
					getTime_etimer2();
				}else{
					$("#year_c2").val("");
					$("#month_c2").val("");
					$("#day_c2").val("");
					$("#hour_c2").val("");
					$("#minute_c2").val("");
					$("#second_c2").val("");
				}

			},beforeSend: function(){
			},complete: function(){
			}
		});
		//�곗씠�� �꾩넚遺�
}

function getTime_etimer2() { 
			//////�묐え 醫낅즺�쒓컙 �몄텧 異붿텧遺�//////////////////////////////////
			year_c		= $("#year_c2").val();
			month_c		= $("#month_c2").val();
			day_c		= $("#day_c2").val();
			hour_c		= $("#hour_c2").val();
			minute_c	= $("#minute_c2").val();
			second_c	= $("#second_c2").val();
			now = new Date();
			dday = new Date(year_c,month_c,day_c,hour_c,minute_c,second_c); 
			days = (dday - now) / 1000 / 60 / 60 / 24; 
			daysRound = Math.floor(days); 
			hours = (dday - now) / 1000 / 60 / 60 - (24 * daysRound); 
			hoursRound = Math.floor(hours); 
			minutes = (dday - now) / 1000 /60 - (24 * 60 * daysRound) - (60 * hoursRound); 
			minutesRound = Math.floor(minutes); 
			seconds = (dday - now) / 1000 - (24 * 60 * 60 * daysRound) - (60 * 60 * hoursRound) - (60 * minutesRound); 
			secondsRound = Math.round(seconds); 
			//////�묐え 醫낅즺�쒓컙 �몄텧 異붿텧遺�//////////////////////////////////
							
			//////�⑥��쒓컙 異쒕젰遺�//////////////////////////////////
			if (hoursRound < 10){
				hoursRound	= "0"+hoursRound;
			}
			if (minutesRound < 10){
				minutesRound	= "0"+minutesRound;
			}
			if (secondsRound < 10){
				secondsRound	= "0"+secondsRound;
			}

			$("#e_hour2").html(hoursRound); 
			$("#e_minute2").html(minutesRound); 
			$("#e_second2").html(secondsRound); 
			//////�⑥��쒓컙 異쒕젰遺�//////////////////////////////////

			if((minutesRound == "0" && secondsRound == "1") || (minutesRound == "0" && secondsRound < 1)){
				$("#qstatus").val("N");
				c_centerPop('OFF');
			}


			newtime = window.setTimeout("getTime_etimer2();", 1000);	//�ㅽ뻾
} 









/*===============================================================================================================================================================================
紐⑤컮�쇱슜 �ㅽ겕由쏀듃 2015-08-25*/

/*#######################################################
�� �� 紐� : c_noticeView_mobile
湲곕뒫�ㅻ챸 : 怨듭��ы빆 蹂닿린�⑥닔
�� �� 媛� : 
諛� �� 媛� : 
�� �� �� : 
#######################################################*/
function c_noticeView_mobile(nType, nNum, pNum){
	if (c_loginCheck_mobile()){
		if(pNum == ""){
			pNum = "1"
		}
		if(nType == "LIST"){
			location.href="/m/customer/notice.asp?goPage="+pNum;
		}else if(nType == "VIEW"){
			location.href="/m/customer/notice_view.asp?vidx="+nNum+"&goPage="+pNum;
		}
	}else{
		alert("濡쒓렇�몄씠 �꾩슂�� �쒕퉬�ㅼ엯�덈떎.");
		//location.href="/m/login.asp";
		return false;
	}

}



/*#######################################################
�� �� 紐� : c_loginCheck_mobile
湲곕뒫�ㅻ챸 : 濡쒓렇�� 泥댄겕 �⑥닔
�� �� 媛� : 
諛� �� 媛� : 
�� �� �� : 
#######################################################*/
function c_loginCheck_mobile(){
	c_initLoginCheck();
	if(returnLoginValue == "ON"){
		return true;
	}else{
		return false;
	}
}



/*#######################################################
�� �� 紐� : c_goPage_mobile
湲곕뒫�ㅻ챸 : �섏씠吏� �꾨떖 �⑥닔
�� �� 媛� : 
諛� �� 媛� : 
�� �� �� : 
#######################################################*/
function c_goPage_mobile(strPageName, strPageNum, strSearchValue) {
	if(strPageNum == ''){
		strPageNum = '1'
	}
	var locationPageUrl	=	strPageName+'?goPage='+strPageNum;
	if(strSearchValue != ''){
		locationPageUrl = locationPageUrl+'&'+strSearchValue
	}
	location.href = locationPageUrl;
}




/*#######################################################
�� �� 紐� : submit_num
湲곕뒫�ㅻ챸 : sms 蹂대궡湲�
�� �� 媛� : 
諛� �� 媛� : 
�� �� �� : 
#######################################################*/
function submit_num_mobile(){

	if ( $("#m_num2").val() == "" ){
	alert("�대��곕쾲�몃� �쒕�濡� �낅젰�섏뿬 二쇱떆湲� 諛붾엻�덈떎.");
	return false;
	}
	var mobile_num = $("#m_num1").val()+$("#m_num2").val();


	if (mobile_num != ''){
		$.ajax({
			type: "post",
			url: "/member/send_checkcode.asp",
			data: { 'strInput': mobile_num, 'Action': '0' } ,
			dataType: "XML",
			
			error: function(request, status, error){
				alert('吏꾪뻾以� �ㅻ쪟媛� 諛쒖깮�덉뒿�덈떎.\n愿�由ъ옄�먭쾶 臾몄쓽�댁＜�몄슂.');
				alert(error);
			},
			
			success: function(XML){
				var return_msg = $(XML).find("return_datas").find("return_msg").text();
				var return_state = $(XML).find("return_datas").find("return_state").text();
				var return_state2 = $(XML).find("return_datas").find("return_state2").text();
				alert(return_msg);
				$("#check_to_ch2").val(return_state);
				$("#sendnum").val(return_state2);
			}
		});
	}


}




/*#######################################################
�� �� 紐� : c_joinProc_mobile
湲곕뒫�ㅻ챸 : �뚯썝媛��� 泥섎━ �⑥닔 
�� �� 媛� : 
諛� �� 媛� : 
�� �� �� : 
#######################################################*/
function c_joinProc_mobile(){
	if(chkFrmValue(join_form)){
		var bitIdCheck	=	$("#bitIdCheck").val();
		var join_pw1	=	$("#join_pw1").val();
		var join_pw2	=	$("#join_pw2").val();
		var checkavale	=	$("#checkavale").val();
		var mobile_num	=	$("#m_num1").val()+$("#m_num2").val()+$("#m_num3").val();

		
		if(bitIdCheck == "0"){
			alert("�꾩씠�� 以묐났�뺤씤�� �댁＜�몄슂!!");
		}else if(join_pw1 != join_pw2){
			alert("�⑥뒪�뚮뱶瑜� �뺤씤�댁＜�몄슂!!");
		}else if ( $("#check_to_ch").val() != $("#check_to_ch2").val() && checkavale == "Y" ){
			alert("�몄쬆踰덊샇媛� �쇱튂�섏� �딆뒿�덈떎!!");
		}else if ( mobile_num != $("#sendnum").val() && checkavale == "Y" ){
			alert("�몃뱶�� 踰덊샇媛� �몄쬆�꾩넚踰덊샇�� �쇱튂�섏� �딆뒿�덈떎!!");
		}else{
		
			$.ajax({
				type: "post",
				url: "/member/aj_joinProc.asp",
				data: $("#join_form").serialize() ,
				dataType: "XML",
				error: function(request, status, error){
					alert('吏꾪뻾以� �ㅻ쪟媛� 諛쒖깮�덉뒿�덈떎.\n愿�由ъ옄�먭쾶 臾몄쓽�댁＜�몄슂.');
				},
				success: function(XML){
					var return_state	= $(XML).find("return_datas").find("return_state").text();
					var return_msg		= $(XML).find("return_datas").find("return_msg").text();
					var return_action	= $(XML).find("return_datas").find("return_action").text();
					
					if(return_state == 'Y'){
						alert(return_msg);
						if(return_action == 'HOME'){
							location.href = '/m/';
							////$("#dataLoading").fadeOut();
						}
					}
				}
				,beforeSend: function(){
					//$("#dataLoading").fadeIn();
				},
				complete: function(){
					////$("#dataLoading").fadeOut();
				}
			});
		
		}
	}
	
}




/*#######################################################
�� �� 紐� : memInfoChange_mobile
湲곕뒫�ㅻ챸 : �뚯썝�뺣낫 �섏젙 泥섎━ �⑥닔
�� �� 媛� : 
諛� �� 媛� : 
�� �� �� : 
#######################################################*/
function memInfoChange_mobile(){
	if(chkFrmValue(memInfo_form)){
		var cur_pw	=	$("#cur_pw").val();
		var new_pw1	=	$("#new_pw1").val();
		var new_pw2	=	$("#new_pw2").val();
		
		if(cur_pw == ""){
			alert("�꾩옱 鍮꾨�踰덊샇瑜� 瑗� �낅젰�댁＜�몄슂.!!");
		}else if(new_pw1 != new_pw2){
			alert("蹂�寃쎈맆 鍮꾨�踰덊샇瑜� �뺤씤�댁＜�몄슂!!");
		}else{
			$.ajax({
				type: "post",
				url: "/user/aj_myInfoProc.asp",
				data: $("#memInfo_form").serialize() ,
				dataType: "XML",
				error: function(request, status, error){
					alert('吏꾪뻾以� �ㅻ쪟媛� 諛쒖깮�덉뒿�덈떎.\n愿�由ъ옄�먭쾶 臾몄쓽�댁＜�몄슂.');
				},
				success: function(XML){
					var return_state	= $(XML).find("return_datas").find("return_state").text();
					var return_msg		= $(XML).find("return_datas").find("return_msg").text();
					var return_action	= $(XML).find("return_datas").find("return_action").text();
					
					if(return_state == 'Y'){
						alert(return_msg);
						if(return_action == 'HOME'){
						}
					}
				}
				,beforeSend: function(){
				},
				complete: function(){
				}
			});
		
		}
	}
}




//-------------------------------------------------------------------------------------------
// �⑥닔�ㅻ챸: �щ’寃뚯엫�쒖옉遺�遺�
// �곸꽭�ㅻ챸: 
//-------------------------------------------------------------------------------------------




function c_loginProc_mobile(typ){
	if (typ == "MAIN"){
		if(chkFrmValue(mainLogin_form)){
			// 濡쒓렇�몄쿂由щ�遺�
			$.ajax({
				type: "post",
				url: "/member/aj_loginProc.asp",
				data: $("#mainLogin_form").serialize() ,
				dataType: "XML",
				error: function(request, status, error){
					alert('吏꾪뻾以� �ㅻ쪟媛� 諛쒖깮�덉뒿�덈떎.\n愿�由ъ옄�먭쾶 臾몄쓽�댁＜�몄슂.');
				},
				success: function(XML){
					var return_state	= $(XML).find("return_datas").find("return_state").text();
					var return_msg		= $(XML).find("return_datas").find("return_msg").text();
					var return_action	= $(XML).find("return_datas").find("return_action").text();
					
					if(return_state == 'Y'){
						alert(return_msg);
						if(return_action == 'HOME'){
							location.href = '/m/';
						}
							location.href = '/m/';
					}
				}
				,beforeSend: function(){
				},
				complete: function(){
				}
			});
		}
	}else if (typ == "CENTER"){
		if(chkFrmValue(cLogin_form)){
			// 濡쒓렇�몄쿂由щ�遺�
			$.ajax({
				type: "post",
				url: "/member/aj_loginProc.asp",
				data: $("#cLogin_form").serialize() ,
				dataType: "XML",
				error: function(request, status, error){
					alert('吏꾪뻾以� �ㅻ쪟媛� 諛쒖깮�덉뒿�덈떎.\n愿�由ъ옄�먭쾶 臾몄쓽�댁＜�몄슂.');
				},
				success: function(XML){
					var return_state	= $(XML).find("return_datas").find("return_state").text();
					var return_msg		= $(XML).find("return_datas").find("return_msg").text();
					var return_action	= $(XML).find("return_datas").find("return_action").text();
					var return_value	= $(XML).find("return_datas").find("return_value").text();
					
					if(return_state == 'Y'){
						if(return_msg != ''){
							alert(return_msg);
							location.href = '/m/';
						}
						if(return_action == 'HOME'){
							location.href = '/m/';
						}else if(return_action == 'MENU_LINK'){
							location.href = '/m/';
						}else if(return_action == 'UNLOAD'){
							location.href = '/m/';
						}
					}
				}
				,beforeSend: function(){
				},
				complete: function(){
				}
			});
		}
	
	}else if (typ == "OUT"){
		$.ajax({
			type: "post",
			url: "/member/aj_loginProc.asp",
			data: { 'method': 'LOGOUT'} ,
			dataType: "XML",
			error: function(request, status, error){
				alert('吏꾪뻾以� �ㅻ쪟媛� 諛쒖깮�덉뒿�덈떎.\n愿�由ъ옄�먭쾶 臾몄쓽�댁＜�몄슂.');
			},
			success: function(XML){
				var return_state	= $(XML).find("return_datas").find("return_state").text();
				var return_msg		= $(XML).find("return_datas").find("return_msg").text();
				var return_action	= $(XML).find("return_datas").find("return_action").text();
				
				if(return_state == 'Y'){
					if(return_action == 'HOME'){
						location.href = '/m/';
					}
				}
			}
			,beforeSend: function(){
			},
			complete: function(){
			}
		});
	}else if (typ == "MAINTENANCE"){
		$.ajax({
			type: "post",
			url: "/member/aj_loginProc.asp",
			data: $("#mainLogin_form").serialize() ,
			dataType: "XML",
			error: function(request, status, error){
				alert('吏꾪뻾以� �ㅻ쪟媛� 諛쒖깮�덉뒿�덈떎.\n愿�由ъ옄�먭쾶 臾몄쓽�댁＜�몄슂.');
			},
			success: function(XML){
				var return_state	= $(XML).find("return_datas").find("return_state").text();
				var return_msg		= $(XML).find("return_datas").find("return_msg").text();
				var return_action	= $(XML).find("return_datas").find("return_action").text();
				
				if(return_state == 'Y'){
					alert(return_msg);
					if(return_action == 'HOME'){
							location.href = '/m/';
					}
				}
			}
			,beforeSend: function(){
			},
			complete: function(){
			}
		});
	}
}




/*#######################################################
�� �� 紐� : c_centerDataLoad_mobile
湲곕뒫�ㅻ챸 : �대깽�� �댁슜 泥댄겕�� �대떦�ы빆 �덉쓣寃쎌슦 �꾪솚
�� �� 媛� :
諛� �� 媛� : 
#######################################################*/
function c_centerDataLoad_mobile(cUrl){
	c_centerPop('ON');
	$.ajax({
		type: "post",
		url: cUrl,
		data: "" ,
		dataType: "html",
		
		error: function(request, status, error){
			alert('�곗씠�� 濡쒕뱶以� �ㅻ쪟媛� 諛쒖깮�덉뒿�덈떎.\n愿�由ъ옄�먭쾶 臾몄쓽�댁＜�몄슂.');
			c_centerPop('OFF');
		},
		
		success: function(html){
		}
		,beforeSend: function(){
		},
		complete: function(){
		}
	});
}


function c_formAction_mobile(formId, actionUrl){
	$.ajax({
		type: "post",
		url: actionUrl,
		data: $(formId).serialize() ,
		dataType: "XML",
		error: function(request, status, error){
			alert('吏꾪뻾以� �ㅻ쪟媛� 諛쒖깮�덉뒿�덈떎.\n愿�由ъ옄�먭쾶 臾몄쓽�댁＜�몄슂.');
		},
		success: function(XML){
			var return_state	= $(XML).find("return_datas").find("return_state").text();
			var return_type		= $(XML).find("return_datas").find("return_type").text();
			var return_code		= $(XML).find("return_datas").find("return_code").text();
			var return_msg		= $(XML).find("return_datas").find("return_msg").text();
			var return_action	= $(XML).find("return_datas").find("return_action").text();
			if(return_state == 'Y'){
				if(return_msg !=  ''){
					alert(return_msg);
				}
				if(return_action == 'HOME'){
					location.href = '/m/';
					return false;
				}else if(return_action == 'IN_ORDER'){
					//alert("�낃툑�좎껌�� �꾨즺�섏뿀�듬땲��.");
					location.href = '/m//money/order_fin.asp?tp=in';
				}else if(return_action == 'OUT_ORDER'){
					//alert("異쒓툑�좎껌�� �꾨즺�섏뿀�듬땲��.");
					location.href = '/m//money/order_fin.asp?tp=out';
				}else if(return_action == 'MOVE_ORDER'){
					//alert("�대룞�좎껌�� �꾨즺�섏뿀�듬땲��.");
					location.href = '/m//money/order_fin.asp?tp=move';
				}else if(return_action == 'EVENT_ORDER'){
					//alert("�대깽�몄떊泥�씠 �꾨즺�섏뿀�듬땲��.");
					location.href = '/m//money/order_fin.asp?tp=event';
				}
			}
		}
		,beforeSend: function(){
		},
		complete: function(){
		}
	});
}


function c_inOrder_proc_mobile(){
	if (c_bonusCheck()){
		var check_price	=	$("#check_price").val();
		check_price		= check_price.replace(/,/g,"");
		check_priceLen	= check_price.length;
		check_priceUnit	= check_price.substring(check_priceLen,check_priceLen-4);

		var usePoint	= $("#usePoint").val();
		var maxPoint	= $("#maxPoint").val();
		usePoint		= usePoint.replace(/,/g,"")
		usePointLen		= usePoint.length;
		usePointUnit	= usePoint.substring(usePointLen,usePointLen-4);

		if (usePoint > 0){
		$("#bonus_type_p").val("P");
		}else{
		$("#bonus_type_p").val("N");
		}
			
		if((usePoint*1) <= 9999 && usePoint > 0){
			alert('�ъ씤�� �ъ슜�� 留뚰룷�명듃 �댁긽 �좎껌 媛��ν빀�덈떎.');
		}else if(usePointUnit != '0000' && usePoint > 0){
			alert('�ъ씤�� �ъ슜�� 留뚰룷�명듃 �⑥쐞濡� �좎껌 媛��ν빀�덈떎.');
		}else if(check_price < 50000){
			alert('�낃툑�좎껌�� 湲곕낯 50,000�� �댁긽 �좎껌 媛��ν빀�덈떎.');
		}else{
			$("#in_price").val(check_price);
			if(chkFrmValue(inOrder_form)){
				c_formAction_mobile("#inOrder_form","/money/aj_inOrder_proc.asp");
			}
		}
	}
}


function c_outOrder_proc_mobile(){
	var check_price = $("#check_price").val();
	check_price		= check_price.replace(/,/g,"");
	check_priceLen	= check_price.length;
	check_priceUnit	= check_price.substring(check_priceLen,check_priceLen-4);
	
	if(check_price < 100000){
		alert('異쒓툑�≪� 湲곕낯 100,000�� �댁긽�낅땲��.');
	}else if(check_priceUnit != '0000'){
		alert('異쒓툑�좎껌�� 留뚯썝 �⑥쐞濡� 媛��ν빀�덈떎.');
	}else{
		$("#out_price").val(check_price);
		if(chkFrmValue(outOrder_form)){
			c_formAction_mobile("#outOrder_form","/money/aj_outOrder_proc.asp");
		}
	}
	
}


function c_moveOrder_proc_mobile(){
	var check_price	=	$("#check_price").val();
	check_price		= check_price.replace(/,/g,"");
	check_priceLen	= check_price.length;
	check_priceUnit	= check_price.substring(check_priceLen,check_priceLen-4);
	
	if(check_price < 50000){
		alert('癒몃땲�대룞�� 湲곕낯 50,000�� �댁긽 �좎껌 媛��ν빀�덈떎.');
	}else if(check_priceUnit != '0000'){
		alert('癒몃땲�대룞�� 留뚯썝 �⑥쐞濡� �좎껌 媛��ν빀�덈떎.');
	}else{
		$("#move_price").val(check_price);
		if(chkFrmValue(moveOrder_form)){
			c_formAction_mobile("#moveOrder_form","/money/aj_moveOrder_proc.asp");
		}
	}
}



function c_eventOrder_proc_mobile(){
	if(chkFrmValue(eventOrder_form)){
		c_formAction_mobile("#eventOrder_form","/money/aj_eventOrder_proc.asp");
	}
}





function change_bankinfo(){
		if (confirm("異쒓툑怨꾩쥖�뺣낫瑜� 蹂�寃쏀븯�쒓쿋�듬땲源�?")){
			location.href="/m/user.asp";
		}
}





function c_orderGameSel_mobile(s1e, s1c){
	if(s1e == '1'){
		switch (s1c){
			case 't':
				$("#sel_game1").val("7");
				break;
			case 'm':
				$("#sel_game1").val("4");
				break;
			case 'x':
				$("#sel_game1").val("1");
				break;
			case 'a':
				if ($("#sel_event_txt").val() == "1" || $("#sel_event_txt").val() == "2" || $("#sel_event_txt").val() == "3" || $("#sel_event_txt").val() == "4" || $("#sel_event_txt").val() == "5" || $("#sel_event_txt").val() == "6"){
				alert("�꾩떆�� 寃뚯엫�� �곗듅�고뙣 �좎껌�� 遺덇��ν빀�덈떎.");
				$("#sel_game1").val("");
				$("#sel_event_txt").val("");
				$("#sel_game1_txt").val("");
				}else{
				$("#sel_game1").val("5");
				}
				break;
			case 'p':
				$("#sel_game1").val("11");
				break;
			case 'sm':
				$("#sel_game1").val("8");
				break;
			case 'o':
				if ($("#sel_event_txt").val() == "1" || $("#sel_event_txt").val() == "2" || $("#sel_event_txt").val() == "3" || $("#sel_event_txt").val() == "4" || $("#sel_event_txt").val() == "5" || $("#sel_event_txt").val() == "6"){
				alert("�댁삤�몄뒪 寃뚯엫�� �곗듅�고뙣 �좎껌�� 遺덇��ν빀�덈떎.");
				$("#sel_game1").val("");
				$("#sel_event_txt").val("");
				$("#sel_game1_txt").val("");
				}else{
				$("#sel_game1").val("12");
				}
				break;
			case 'ab':
				$("#sel_game1").val("13");
				break;
			case 'lo':
				$("#sel_game1").val("14");
				break;
			case 'mm':
				$("#sel_game1").val("0");
				break;
			case 'vi':
				$("#sel_game1").val("22");
				break;
			case 'ev':
				$("#sel_game1").val("23");
				break;
		}
	}else if(s1e == '2'){
		switch (s1c){
			case 't':
				$("#sel_game2").val("7");
				break;
			case 'm':
				$("#sel_game2").val("4");
				break;
			case 'x':
				$("#sel_game2").val("1");
				break;
			case 'a':
				$("#sel_game2").val("5");
				break;
			case 'p':
				$("#sel_game2").val("11");
				break;
			case 'sm':
				$("#sel_game2").val("8");
				break;
			case 'o':
				$("#sel_game2").val("12");
				break;
			case 'ab':
				$("#sel_game2").val("13");
				break;
			case 'lo':
				$("#sel_game2").val("14");
				break;
			case 'mm':
				$("#sel_game2").val("0");
				break;
			case 'vi':
				$("#sel_game2").val("22");
				break;
			case 'ev':
				$("#sel_game2").val("23");
				break;
		}
	
	}
}



function c_comeBackEventSel_mobile(s1e){
	switch (s1e){
		case '1':
			if ($("#sel_game1_txt").val() == "o" || $("#sel_game1_txt").val() == "p" || $("#sel_game1_txt").val() == "a" || $("#sel_game1_txt").val() == "sm"){
			alert("�곗듅�고뙣�� ��,���댁궛,濡쒗꽣��,�щ껙 寃뚯엫留� �좎껌�� 媛��ν빀�덈떎.");
			$("#sel_event").val("");
			$("#sel_event_txt").val("");
			$("#sel_game1_txt").val("");
			}else{
			$("#sel_event").val("1");
			$("#des_event1").css("display","none");
			$("#des_event2").css("display","none");
			$("#des_event3").css("display","none");
			$("#des_event4").css("display","none");
			$("#des_event5").css("display","none");
			$("#des_event6").css("display","block");
			$(".e_conti_m").css("display","none");
			}
			break;
		case '2':
			if ($("#sel_game1_txt").val() == "o" || $("#sel_game1_txt").val() == "p" || $("#sel_game1_txt").val() == "a" || $("#sel_game1_txt").val() == "sm"){
			alert("�곗듅�고뙣�� ��,���댁궛,濡쒗꽣��,�щ껙 寃뚯엫留� �좎껌�� 媛��ν빀�덈떎.");
			$("#sel_event").val("");
			$("#sel_event_txt").val("");
			$("#sel_game1_txt").val("");
			}else{
			$("#sel_event").val("2");
			$("#des_event1").css("display","none");
			$("#des_event2").css("display","none");
			$("#des_event3").css("display","none");
			$("#des_event4").css("display","none");
			$("#des_event5").css("display","none");
			$("#des_event6").css("display","block");
			$(".e_conti_m").css("display","none");
			}
			break;
		case '3':
			if ($("#sel_game1_txt").val() == "o" || $("#sel_game1_txt").val() == "p" || $("#sel_game1_txt").val() == "a" || $("#sel_game1_txt").val() == "sm"){
			alert("�곗듅�고뙣�� ��,���댁궛,濡쒗꽣��,�щ껙 寃뚯엫留� �좎껌�� 媛��ν빀�덈떎.");
			$("#sel_event").val("");
			$("#sel_event_txt").val("");
			$("#sel_game1_txt").val("");
			}else{
			$("#sel_event").val("3");
			$("#des_event1").css("display","none");
			$("#des_event2").css("display","none");
			$("#des_event3").css("display","none");
			$("#des_event4").css("display","none");
			$("#des_event5").css("display","none");
			$("#des_event6").css("display","block");
			$(".e_conti_m").css("display","none");
			}
			break;
		case '4':
			if ($("#sel_game1_txt").val() == "o" || $("#sel_game1_txt").val() == "p" || $("#sel_game1_txt").val() == "a" || $("#sel_game1_txt").val() == "sm"){
			alert("�곗듅�고뙣�� ��,���댁궛,濡쒗꽣��,�щ껙 寃뚯엫留� �좎껌�� 媛��ν빀�덈떎.");
			$("#sel_event").val("");
			$("#sel_event_txt").val("");
			$("#sel_game1_txt").val("");
			}else{
			$("#sel_event").val("4");
			$("#des_event1").css("display","none");
			$("#des_event2").css("display","none");
			$("#des_event3").css("display","none");
			$("#des_event4").css("display","none");
			$("#des_event5").css("display","none");
			$("#des_event6").css("display","block");
			$(".e_conti_m").css("display","none");
			}
			break;
		case '5':
			if ($("#sel_game1_txt").val() == "o" || $("#sel_game1_txt").val() == "p" || $("#sel_game1_txt").val() == "a" || $("#sel_game1_txt").val() == "sm"){
			alert("�곗듅�고뙣�� ��,���댁궛,濡쒗꽣��,�щ껙 寃뚯엫留� �좎껌�� 媛��ν빀�덈떎.");
			$("#sel_event").val("");
			$("#sel_event_txt").val("");
			$("#sel_game1_txt").val("");
			}else{
			$("#sel_event").val("5");
			$("#des_event1").css("display","none");
			$("#des_event2").css("display","none");
			$("#des_event3").css("display","none");
			$("#des_event4").css("display","none");
			$("#des_event5").css("display","none");
			$("#des_event6").css("display","block");
			$(".e_conti_m").css("display","none");
			}
			break;
		case '6':
			if ($("#sel_game1_txt").val() == "o" || $("#sel_game1_txt").val() == "p" || $("#sel_game1_txt").val() == "a" || $("#sel_game1_txt").val() == "sm"){
			alert("�곗듅�고뙣�� ��,���댁궛,濡쒗꽣��,�щ껙 寃뚯엫留� �좎껌�� 媛��ν빀�덈떎.");
			$("#sel_event").val("");
			$("#sel_event_txt").val("");
			$("#sel_game1_txt").val("");
			}else{
			$("#sel_event").val("6");
			$("#des_event1").css("display","none");
			$("#des_event2").css("display","none");
			$("#des_event3").css("display","none");
			$("#des_event4").css("display","none");
			$("#des_event5").css("display","none");
			$("#des_event6").css("display","block");
			$(".e_conti_m").css("display","none");
			}
			break;
		case '8':
			$("#sel_event").val("8");
			$("#des_event1").css("display","block");
			$("#des_event2").css("display","none");
			$("#des_event3").css("display","none");
			$("#des_event4").css("display","none");
			$("#des_event6").css("display","none");
			$(".e_conti_m").css("display","block");
			break;
		case '9':
			$("#sel_event").val("9");
			$("#des_event1").css("display","none");
			$("#des_event2").css("display","block");
			$("#des_event3").css("display","none");
			$("#des_event4").css("display","none");
			$("#des_event6").css("display","none");
			$(".e_conti_m").css("display","block");
			break;
		case '10':
			$("#sel_event").val("10");
			$("#des_event1").css("display","none");
			$("#des_event2").css("display","none");
			$("#des_event3").css("display","none");
			$("#des_event4").css("display","block");
			break;
		case '11':
			$("#sel_event").val("11");
			$("#des_event1").css("display","none");
			$("#des_event2").css("display","none");
			$("#des_event3").css("display","none");
			$("#des_event4").css("display","block");
			break;
		case '12':
			$("#sel_event").val("12");
			$("#des_event1").css("display","none");
			$("#des_event2").css("display","none");
			$("#des_event3").css("display","none");
			$("#des_event4").css("display","block");
			break;
		case '13':
			$("#sel_event").val("13");
			$("#des_event1").css("display","none");
			$("#des_event2").css("display","none");
			$("#des_event3").css("display","none");
			$("#des_event4").css("display","block");
			break;
		case '14':
			$("#sel_event").val("14");
			$("#des_event1").css("display","none");
			$("#des_event2").css("display","none");
			$("#des_event3").css("display","none");
			$("#des_event4").css("display","block");
			break;
		default:
			$("#sel_event").val(s1e);
			$("#des_event1").css("display","none");
			$("#des_event2").css("display","none");
			$("#des_event3").css("display","block");
			$("#des_event4").css("display","none");
			break;
	}
}





function c_menuLink_mobile(mMethod){
	if( mMethod == "M_START"){
		if (c_loginCheck()){
			location.href="/m/game/gameload.asp?gameType=4";
		}else{
			alert("濡쒓렇�몄씠 �꾩슂�� �쒕퉬�ㅼ엯�덈떎.");
			//location.href="/m/login.asp";
		}
	}else if( mMethod == "ASIA_START"){
		if (c_loginCheck()){
			location.href="/m/game/gameload.asp?gameType=5";
		}else{
			alert("濡쒓렇�몄씠 �꾩슂�� �쒕퉬�ㅼ엯�덈떎.");
			//location.href="/m/login.asp";
		}
		
	}else if( mMethod == "AL_START"){
		if (c_loginCheck()){
			location.href="/m/gameload.asp?gameType=13";
		}else{
			alert("濡쒓렇�몄씠 �꾩슂�� �쒕퉬�ㅼ엯�덈떎.");
			//location.href="/m/login.asp";
		}
		
	}else if( mMethod == "TAISHAN"){
		if (c_loginCheck()){
			location.href="/m/game/gameload.asp?gameType=7";
		}else{
			alert("濡쒓렇�몄씠 �꾩슂�� �쒕퉬�ㅼ엯�덈떎.");
			//location.href="/m/login.asp";
		}
		
	}else if( mMethod == "HO_GAME"){
			location.href="/m/game/gameload.asp?gameType=20";
		
	}else if( mMethod == "MIDAS"){
			location.href="/m/game/gameload.asp?gameType=24";
		
	}else if( mMethod == "H88"){
			location.href="/m/game/gameload.asp?gameType=25";
		
	}else if( mMethod == "VIVO"){
			location.href="/m/game/gameload.asp?gameType=22";
		
	}else if( mMethod == "EVOLUTION"){
			location.href="/m/game/gameload.asp?gameType=23";
		
	}else if( mMethod == "IN"){
		if (c_loginCheck()){
			location.href="/m/money_in.asp";
		}else{
			alert("濡쒓렇�몄씠 �꾩슂�� �쒕퉬�ㅼ엯�덈떎.");
			//location.href="/m/login.asp";
		}
		
	}else if( mMethod == "IN_EVENT"){	
		if (c_loginCheck()){
			location.href="/m/event_bok.asp";
		}else{
			alert("濡쒓렇�몄씠 �꾩슂�� �쒕퉬�ㅼ엯�덈떎.");
			//location.href="/m/login.asp";
		}
	}else if( mMethod == "OUT"){
		if (c_loginCheck()){
			location.href="/m/money_out.asp";
		}else{
			alert("濡쒓렇�몄씠 �꾩슂�� �쒕퉬�ㅼ엯�덈떎.");
			//location.href="/m/login.asp";
		}
		
	}else if( mMethod == "MOVE"){
		if (c_loginCheck()){
			location.href="/m/money_move.asp";
		}else{
			alert("濡쒓렇�몄씠 �꾩슂�� �쒕퉬�ㅼ엯�덈떎.");
			//location.href="/m/login.asp";
		}
		
	}else if( mMethod == "EVENT"){
		if (c_loginCheck()){
			location.href="/m/money_event.asp";
		}else{
			alert("濡쒓렇�몄씠 �꾩슂�� �쒕퉬�ㅼ엯�덈떎.");
			//location.href="/m/login.asp";
		}
		
	}
}



function fn_mypageact(code){
	if (code == "mp_info"){
			$('.mp_info').css('display', 'block');
			$('#mp_info').css({'background': "url('img/marker_b.png') left center no-repeat", 'background-size': 'cover', 'color': '#fff'});
			$('.mp_rank, .mp_point, .mp_mail, .mp_coupon').css('display', 'none');

			$('.mp_info').fadeIn();
			$('ul#filter li a').css({'background': 'none', 'color': '#000'});
			$("#"+code).css({'background': "url('img/marker_b.png') left center no-repeat", 'background-size': 'cover', 'color': '#fff'});

	}else if (code == "mp_rank"){
			$('.mp_rank').fadeIn();
			$('.mp_info, .mp_point, .mp_mail, .mp_coupon').css('display', 'none');
			$('ul#filter li a').css({'background': 'none', 'color': '#000'});
			$("#"+code).css({'background': "url('img/marker_b.png') left center no-repeat", 'background-size': 'cover', 'color': '#fff'});

	}else if (code == "mp_point"){
			$('.mp_point').fadeIn();
			$('.mp_info, .mp_rank, .mp_mail, .mp_coupon').css('display', 'none');
			$('ul#filter li a').css({'background': 'none', 'color': '#000'});
			$("#"+code).css({'background': "url('img/marker_b.png') left center no-repeat", 'background-size': 'cover', 'color': '#fff'});

	}else if (code == "mp_mail"){
			$('.mp_mail').fadeIn();
			$('.mp_info, .mp_rank, .mp_point, .mp_coupon').css('display', 'none');
			$('ul#filter li a').css({'background': 'none', 'color': '#000'});
			$("#"+code).css({'background': "url('img/marker_b.png') left center no-repeat", 'background-size': 'cover', 'color': '#fff'});

	}else if (code == "mp_coupon"){
			$('.mp_coupon').fadeIn();
			$('.mp_info, .mp_rank, .mp_point, .mp_mail').css('display', 'none');
			$('ul#filter li a').css({'background': 'none', 'color': '#000'});
			$("#"+code).css({'background': "url('img/marker_b.png') left center no-repeat", 'background-size': 'cover', 'color': '#fff'});

	}
}



function slotGameStart_mobile(gameid, reperer){
	var bankingURL	= encodeURIComponent("http://"+reperer+"/m/money_in.asp?selgame=8");
	var lobbyurl	= encodeURIComponent("http://"+reperer+"/m/");
	$("#bankingURL").val(bankingURL);
	$("#lobbyurl").val(lobbyurl);
	window.open('','SGAME'); 
	document.loginform.target = "SGAME";
	document.loginform.action = "http://mobile22.gameassists.co.uk/mobilewebservices_40/casino/game/launch/GoldenTree/"+gameid+"/ko/";
	document.loginform.submit();
}


function pslotGameStart_mobile(gameid){
	window.open('','SGAME'); 
	document.loginform.target = "SGAME";
	document.loginform.action = "http://pnb444.com/accessAccount_slot.asp";
	document.loginform.submit();
}

function hslotGameStart_mobile(gameid){
	window.open('','SGAME'); 
	document.loginform.bgid.value = gameid;
	document.loginform.target = "SGAME";
	document.loginform.action = "http://210.151.48.237:21719/hanebaro_api.php";
	document.loginform.submit();
}


function gslotGameStart_mobile(gameid, reperer){
	var bankingURL	= encodeURIComponent("http://"+reperer+"/m/money_in.asp?selgame=12");
	var lobbyurl	= encodeURIComponent("http://"+reperer+"/m/");
	$("#homeURL").val(bankingURL);
	$("#lobbyURL").val(lobbyurl);
	window.open('','GGAME'); 
	document.loginform.target = "GGAME";
	document.loginform.action = "http://mrslots.gpiops.com/"+gameid;
	document.loginform.submit();
}




function MGameStart_mobile(reperer){
	var FailedRedirect	= encodeURIComponent("http://"+reperer+"/m/");
	var LogoutRedirect	= encodeURIComponent("http://"+reperer+"/m/");
	$("#FailedRedirect").val(FailedRedirect);
	$("#LogoutRedirect").val(LogoutRedirect);
	window.open('','MGAME'); 
	document.loginform.target = "MGAME";
	document.loginform.action = "https://webservice.basestatic.net/ETILandingPage/index.aspx";
	document.loginform.submit();
}

function Switching_mode(mode){
	if (mode == "pc"){
		location.href="/";
	}else if (mode == "mobile"){
		location.href="/m/";
	}
}

function Switching_mode_m(mode){
	if (mode == "pc"){
		location.href="/?mode=pc";
	}else if (mode == "mobile"){
		location.href="/m/";
	}
}







function ch_pay_mobile(val){
	if(val == "2"){
		$("#paypal_usd1").css("display","");
	}else{
		$("#paypal_usd1").css("display","none");	
	}
}

 //�レ옄 �� �먮━留덈떎 肄ㅻ쭏 李띻린 �⑥닔
function commify_mobile(n) {
        var reg = /(^[+-]?\d+)(\d{3})/;   // �뺢퇋��
        n += '';                                       // �レ옄瑜� 臾몄옄�대줈 蹂���

        while (reg.test(n))
            n = n.replace(reg, '$1' + ',' + '$2');
        return n;
}

// �묒� �ㅽ��쇱쓽 諛섏삱由� �⑥닔 �뺤쓽
function roundXL_mobile(n, digits) {
  if (digits >= 0) return parseFloat(n.toFixed(digits)); // �뚯닔遺� 諛섏삱由�

  digits = Math.pow(10, digits); // �뺤닔遺� 諛섏삱由�
  var t = Math.round(n * digits) / digits;

  return parseFloat(t.toFixed(0));
}


function kor_to_usd_mobile(val, real_rate){

    while(val.indexOf(",") > -1) { 
     val = val.replace(",", ""); 
    } 

	var amt = val.replace(",", ""); 
	var frm = document.inOrder_form;
	frm.amount.value = commify_mobile(roundXL_mobile(amt/real_rate,2));
}


	function check_out_event(){
				$.ajax({
					type: "post",
					url: "/money/out_event_proc.asp",
					dataType: "XML",
					error: function(request, status, error){
						alert('吏꾪뻾以� �ㅻ쪟媛� 諛쒖깮�덉뒿�덈떎.\n愿�由ъ옄�먭쾶 臾몄쓽�댁＜�몄슂.');
					},
					success: function(XML){
						var return_state	= $(XML).find("return_datas").find("return_state").text();
						if (return_state == "Y"){
							alert("異쒓툑�대깽�몄뿉 �뱀꺼�섏뀲�듬땲��.\n吏�湲됰맂 荑좏룿�� �대깽�명럹�댁��먯꽌 �좎껌�� 媛��ν븯��땲��.");
						}
					}
					,beforeSend: function(){
					},
					complete: function(){
					}
				});
				setTimeout("check_out_event()", 5000);
	}
/*=================================================================================================================================================================================*/