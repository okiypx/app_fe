function reflash() {
	window.location.reload();
}
function Go(url){
	window.location.href=url;
}
//수정登录암호
function check_submit_login(){
	if($("#oldpass").val().length<=0){
		//$("#oldpass_txt").html('您的原登录암호');
		alert('您的原登录암호')
		$("#oldpass").select();
		return false;
	}
	if($("#newpass").val().length<6 || $("#newpass").val().length>20){
		//$("#newpass_txt").html('新登录암호只能예6-20位');

        alert('新登录암호只能예6-20位')
		$("#newpass").select();
		return false;
	}
	if($("#newpass").val()!=$("#newpass2").val()){
		//$("#newpass2_txt").html('비밀번호가 일치하지 않습니다');

        alert('비밀번호가 일치하지 않습니다')
		$("#newpass2").select();
		return false;
	}
}
//수정출금 비번
function check_submit_money(){
	if($("#oldmoneypass").val().length<=0){
		//$("#oldmoneypass_txt").html('您的原출금 비번');
        alert('您的原출금 비번')
		$("#oldmoneypass").select();
		return false;
	}
    var p_reg = /^\d{6}$/;
    if(!p_reg.test($("#newmoneypass").val())) {
        //$("#newmoneypass_txt").html('6位数字的新출금 비번');
        alert('6位数字的新출금 비번')
        $("#newmoneypass").select();
        return false;
    }
    if($("#newmoneypass").val()!=$("#newmoneypass2").val()){
        //$("#newmoneypass2_txt").html('비밀번호가 일치하지 않습니다');
        alert('비밀번호가 일치하지 않습니다')
        $("#newmoneypass2").select();
        return false;
    }
}
//设置财务资料
function check_submit_pay(){
	if($("#pay_card").val().length<=0){
		alert('您的수취인 은행');
		$("#pay_card").select();
		return false;
	}
	if($("#pay_name").val().length<=0){
		alert('您的은행 계좌 번호持有人이름');
		$("#pay_name").select();
		return false;
	}
	if($("#pay_num").val().length<10){
		alert('您正确的은행 계좌 번호');
		$("#pay_num").select();
		return false;
	}
	if($("#pay_address").val().length<=0){
		alert('您的은행 주소');
		$("#pay_address").select();
		return false;
	}
	if($("#vlcodes").val().length<=0){
		alert('验证码');
		$("#vlcodes").select();
		return false;
	}
}
//새롭게 하다验证码
function next_checkNum_img() {
	document.getElementById("checkNum_img").src = "../yzm.php?"+Math.random()+(new Date).getTime();
	return false;
}
