var gameRunStatus = false;

function miniGameMobile()
{
	var url = "/miniGame/roullete";
	/*if(checkMobileDevice() == "iPhone" || checkMobileDevice() == "iPad")
		alert("아이폰 미니게임은 현재 준비중입니다. 안드로이드폰 혹은 PC버전을 이용해주시기 바랍니다. 이용에 불편을 드려 죄송합니다.");
	else*/
		window.open(url,"mini",);
}

//호게이밍
function goHgameMobile(){gameStartMobile('HCD','');}
function goSaMobile(){gameStartMobile('HCD','');}
function goHgameMobile(){gameStartMobile('HCD','');}
function goHgameMobile(){gameStartMobile('HCD','');}
function goHgameMobile(){gameStartMobile('HCD','');}

//게임 실행하기
function gameStartMobile(game_code, type){
    if(loginYN == "N"){
    	if(gamecount == 0){
    		gamecount += 1;
	    	if(!alert("로그인 후 이용해주세요."))
	    	{
	    		gamecount += -1; 
	    	}
    	}
    }else{

		if(gameRunStatus == true) {
			alert('게임이 실행중입니다. 잠시만 기다려 주시기 바랍니다.');
			return;
		}
		gameRunStatus = true;

		$.ajax({
			type:"GET",
			url:"/game/mobile_game_start",
			data:{"game_title":game_code},
			dataType:"text",
			success:function(data, textStatus) {
				gameRunStatus = false;
	            var retdata = data;
				//alert(retdata);
				//eval(data);
				//window.open(retdata);
				location.href=retdata;

				var settings = "";


			},
			error:function(data, textStatus) {
				alert('게임접속이 원할하지 않습니다.[GAMESTART]');
			}
		});
    }
}

//호게이밍 실행
function goHgameMobileExec(){

	if(gameRunStatus == true) {
		alert('게임이 실행중입니다. 잠시만 기다려 주시기 바랍니다.');
		return;
	}
	gameRunStatus = true;

	$.ajax({
		type:"GET",
		url:"/game/hgame_start",
		data:{"game_code":'HCD'},
		dataType:"text",
		success:function(data, textStatus) {
			gameRunStatus = false;
			eval(data);
		},
		error:function(data, textStatus) {
			alert('게임접속이 원할하지 않습니다.');
		}
	});
}


function goEbetPop(){
    $('#ebetPop').modal();
}

function checkMobileDevice() {
    var device = "";
    var mobileKeyWords = new Array('Android','iPad', 'iPhone', 'iPod', 'BlackBerry', 'Windows CE', 'SAMSUNG', 'LG', 'MOT', 'SonyEricsson');
    for (var info in mobileKeyWords) {
        if (navigator.userAgent.match(mobileKeyWords[info]) != null) {
            device = mobileKeyWords[info];

        }
    }
    return device;
}

function ebetDonwLink(){
    var device = checkMobileDevice();
    if(device == "iPhone")
        downLink = "itms-services://?action=download-manifest&url=https://www.ebetapp.com/applib/188/ebet.plist";
    else if(device == "Android")
        downLink = "https://www.ebetapp.com/applib/188/ebet.apk";
    return downLink;
}

function ebetDown(){
    var downLink = ebetDonwLink();
    location.href=downLink;
}


//추가
var varMicroConfig = {game_cat:'', tab_tp:'', flash_check:true};	//마이크로 슬롯 게임에서 카테고리 변수로 활용

//변경
function goMicroExec2(gameType,gameId){
    $.ajax({type:"GET",url:"/gameMobile/micro_start2",data:{"gameType":gameType,"gameId":gameId,"game_cat":varMicroConfig.game_cat,"tab_tp":varMicroConfig.tab_tp},dataType:"text",success:function(data,textStatus){eval(data);},error:function(data,textStatus){alert('게임접속이 원할하지 않습니다.');}});}

function goMicroExec3(gameType,gameId){
	$.ajax({type:"GET",url:"/gameMobile/micro_start3",data:{"gameType":gameType,"gameId":gameId,"game_cat":varMicroConfig.game_cat,"tab_tp":varMicroConfig.tab_tp},dataType:"text",success:function(data,textStatus){eval(data);},error:function(data,textStatus){alert('게임접속이 원할하지 않습니다.');}});}


//추가
//ex) gameSlotStartMobile("최신 Top20", "H");, gameSlotStartMobile("5릴 슬롯", "A"); 식으로 게임 링크
//1번째 인자(카테고리) : 최신 Top20, 보너스 스크린 슬롯, 테이블 게임, 3릴 슬롯, 5릴 슬롯, 비디오 포커, 프로그래시브 잭팟, Others
//2번째 인자(H : HOT, A : 전체) - HOT의 표시는 관리자에서 해당 슬롯 게임을 HOT으로 체크한 경우입니다.
function gameSlotStartMobile(game_cat, tab_tp){
    varMicroConfig.game_cat = game_cat;
    varMicroConfig.tab_tp = tab_tp;
    varMicroConfig.flash_check = false;

    goMicroSlot2();
}
