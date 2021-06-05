var gameRunStatus = false;

function miniGame()
{
    var url = "/miniGame/roullete";
    window.open(url,"mini",'top=0,left=50,width=900,height=765,menubar=no,scrollbars=yes,status=no,toolbar=no,resizable=yes,location=no');
}

//추가
function goSP(){
	gameStart('SPCD', 'slot');
}

//SPCD 게임 실행
function goSPExec(gameType){
	if(gameRunStatus == true) {
		alert('게임이 실행중입니다. 잠시만 기다려 주시기 바랍니다.');
		return;
	}
	gameRunStatus = true;

	$.ajax({
		type:"GET",
		url:"/game/sp_start",
		data:{"game_code":'SPCD'},
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



function goRT(){
	gameStart('RTCD', '');
}

//RTCD 게임 실행
function goRTExec(){
	if(gameRunStatus == true) {
		alert('게임이 실행중입니다. 잠시만 기다려 주시기 바랍니다.');
		return;
	}
	gameRunStatus = true;
      $.ajax({
              type:"GET",
              url:"/game/rt_start",
              data:{"game_code":'RTCD'},
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

//호게이밍
function goHgame(){gameStart('HCD','');}
//VIP
function goVipgame(){gameStart('VCD','');}
//호게이밍
function goSuncity(){gameStart('SCD','');}
//마이크로 라이브
function goMicroLive(){gameStart('NMCD','live');}
//마이크로 슬롯
function goMicroSlot(){gameStart('NMSCD','slot');}
//마이크로 프로그래시브
function goMicroSlotPv(){gameStart('MPCD','slotpv');}
//W게임

function goWawa(){
	if(MEM_TST_YN == 'Y'){ //체험 아이디 일때
		gameStart('WCD','');
	}else{
		gameStart('WCD','');
		//goWawaNotice();
		//goWawaSelect();
	}
}

function goGgame(){gameStart('GCD','');}

function goSA(){
	gameStart('SAG', '');
}

function clientDown(){
	location.href="https://w-img.oss-ap-northeast-1.aliyuncs.com/download/wawa.exe";
	$('#wawa_select').hide();

}

function goEbet(){
    gameStart('EBCD');
}

function goEbetExec(gameType){

	if(gameRunStatus == true) {
		alert('게임이 실행중입니다. 잠시만 기다려 주시기 바랍니다.');
		return;
	}
	gameRunStatus = true;

	$.ajax({
        type:"GET",
        url:"/game/ebet_start",
        data:{"game_code":'EBCD'},
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

function goN2CD(){
    gameStart('N2CD', '');
}

//n2cd 게임 실행
function goN2CDExec(){

	if(gameRunStatus == true) {
		alert('게임이 실행중입니다. 잠시만 기다려 주시기 바랍니다.');
		return;
	}
	gameRunStatus = true;

    $.ajax({
        type:"GET",
        url:"/game/n2live_start",
        data:{"game_code":'N2CD'},
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


//추가
function goSASlot(){
    gameStart('SAG', 'slot');
}

//추가 : SA Slot 게임 실행
function goSASlotExec(gameType, gameId){

	if(gameRunStatus == true) {
		alert('게임이 실행중입니다. 잠시만 기다려 주시기 바랍니다.');
		return;
	}
	gameRunStatus = true;

    $.ajax({
        type:"GET",
        url:"/game/sagame_start",
        data:{"game_code":'SAG',"gameType":gameType,"gameId":gameId},
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






//플래시 버전 체크
function flashVerCheck(){
	/*var chk = onLoad();
    chk = 28;
  	if(chk < 11){
  		if(confirm('게임을 실행하기 위해서는 회원님의 PC에 Adobe Flash Player 11버전 이상이 설치되어있어야 합니다.\n\n[확인]을 누르시면 다운로드페이지로 이동합니다.')){
        	domain='http://get.adobe.com/kr/flashplayer/'; //설치전 페이지
          	window.open(domain,'flashdown','');
      	}else{
      		alert('취소하였습니다.');
      	}

      	return false;
  	}*/
  	return true;
}

var gamecount = 0;

//게임 실행하기
function gameStart(game_code, type){
    if(loginYN == "N"){
    	if(gamecount == 0){
    		gamecount += 1;
	    	if(!alert("로그인 후 이용해주세요."))
	    	{
	    		gamecount += -1;
	    	}
    	}
    }else{
		$.ajax({
			type:"GET",
			url:"/game/game_check",
			data:{"game_code":game_code},
			dataType:"text",
			success:function(data, textStatus) {
	            var retdata = data;
	            var array_data = retdata.split("|");
	            if(array_data[0] == 'Y'){
	            	alert(array_data[1]);
	            }else if(array_data[0] == 'L'){
	            	alert('로그인 후 이용해주세요.');
	            	location.href = "/";
	            } else {
	                if(game_code == 'HCD'){
	                	goHgameExec();
	                } else if(game_code == 'SCD'){
	                	goSuncityExec();
	                } else if (game_code == 'NMCD'){
	                	if(type == "live"){
	                		goMicroExec(type, '');
	                	}else if(type == "slot"){
	                		goMicroExec(type, '');
	                	}
	                } else if (game_code == 'NMSCD'){
	                		goMicroExec(type, '');

	                } else if (game_code == 'MPCD'){
	                	goMicroExec(type, '');
	                } else if (game_code == 'VCD'){
	                	goVipgameExec();
	                } else if(game_code == 'WCD'){
	                	goWawaExec();
	                } else if(game_code == 'GCD'){
	                	goGoldExec();
                    }else if(game_code == 'EBCD'){
                        goEbetExec();
                    }else if(game_code == 'N2CD'){
                        goN2CDExec();
                    }else if(game_code == 'SAG'){
                        if(type == "slot"){
                            goSASlotExec(type);
                        }else{
                            goSAExec();
                        }
                    }else if(game_code == 'RTCD'){
	                	goRTExec();
					}else if(game_code == 'SPCD'){
						goSPExec('slot');
					}else if(game_code == 'DMCD'){
						goMicroExec3(type, '');

					}else if(game_code == 'EAS2CD'){
						goEas2Exec();

					}else if(game_code == 'QMCD'){
						goQmExec();

                    } else{
	                	alert('게임코드가 올바르지 않습니다.');
	                }
	            }
			},
			error:function(data, textStatus) {
				alert('게임접속이 원할하지 않습니다.[GAMESTART]');
			}
		});
    }
}

//G 실행
function goGoldExec(){

	if(gameRunStatus == true) {
		alert('게임이 실행중입니다. 잠시만 기다려 주시기 바랍니다.');
		return;
	}
	gameRunStatus = true;

	$.ajax({
		type:"GET",
		url:"/game/gold_game_start",
		data:{"game_code":'GCD'},
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

//SA 게임 실행
function goSAExec(){

	if(gameRunStatus == true) {
		alert('게임이 실행중입니다. 잠시만 기다려 주시기 바랍니다.');
		return;
	}
	gameRunStatus = true;

	$.ajax({
		type:"GET",
		url:"/game/sagame_start",
		data:{"game_code":'SAG'},
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


//호게이밍 실행
function goHgameExec(){

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

//VIP 게임 실행
function goVipgameExec(){

	if(gameRunStatus == true) {
		alert('게임이 실행중입니다. 잠시만 기다려 주시기 바랍니다.');
		return;
	}
	gameRunStatus = true;

	$.ajax({
		type:"GET",
		url:"/game/hgame_start",
		data:{"game_code":'VCD'},
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

google.load("swfobject", "2.1");
google.setOnLoadCallback(onLoad);

function onLoad(){
	var flashVersion = swfobject.getFlashPlayerVersion();
    return flashVersion.major;
}

//선시티 게임 실행
function goSuncityExec(){
	if(loginYN == "N"){
    	alert("로그인 후 이용하세요.");
        return ;
	}else{
		if(flashVerCheck() == false){
			return;
		}


		if(gameRunStatus == true) {
			alert('게임이 실행중입니다. 잠시만 기다려 주시기 바랍니다.');
			return;
		}
		gameRunStatus = true;

    	$.ajax({
    		type:"GET",
    		url:"/game/suncity_start",
    		data:"",
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
}

//마이크로 게임 실행
function goMicroExec(gameType, gameId){
	if(flashVerCheck() == false){
		return;
	}

	if(gameRunStatus == true) {
		alert('게임이 실행중입니다. 잠시만 기다려 주시기 바랍니다.');
		return;
	}
	gameRunStatus = true;

	$.ajax({
		type:"GET",
		url:"/game/micro_start",
		data:{"gameType":gameType,"gameId":gameId},
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

//와와 게임 공지
function goWawaNotice(){
	if(loginYN == "N"){
    	alert("로그인 후 이용하세요.");
        return ;
	}else{
		if(flashVerCheck() == false){
			return;
		}

		centerWidthPopup_new("wawa_notice",10);
		$("#wawa_notice").show();
	}
}

//와와 게임 선택
function goWawaSelect(){
	if(loginYN == "N"){
    	alert("로그인 후 이용하세요.");
        return ;
	}else{
		if(flashVerCheck() == false){
			return;
		}

		centerWidthPopup_new("wawa_select",10);
		$("#wawa_select").show();
	}
}


//와와 게임 실행
function goWawaExec(){

	if(gameRunStatus == true) {
		alert('게임이 실행중입니다. 잠시만 기다려 주시기 바랍니다.');
		return;
	}
	gameRunStatus = true;

	$.ajax({
		type:"GET",
		url:"/game/wawa_start",
		data:"",
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


//추가
function goMicroLive3(type){
	gameStart('DMCD', type);
}

//추가
function goMicroSlot3(type, gameId){
	goMicroExec3(type, gameId);
}

//추가
function goMicroExec3(gameType, gameId){

	if(gameRunStatus == true) {
		alert('게임이 실행중입니다. 잠시만 기다려 주시기 바랍니다.');
		return;
	}
	gameRunStatus = true;

	$.ajax({
		type:"GET",
		url:"/game/micro_start3",
		data:{"gameType":gameType, "gameId":gameId},
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


//추가
function goEas2(){
	gameStart('EAS2CD', '');
}

//EAS2CD 게임 실행
function goEas2Exec(){

	if(gameRunStatus == true) {
		alert('게임이 실행중입니다. 잠시만 기다려 주시기 바랍니다.');
		return;
	}
	gameRunStatus = true;

	$.ajax({
		type:"GET",
		url:"/game/eas2_start",
		data:{"game_code":'EAS2CD'},
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

function goQm(){
	gameStart('QMCD', '');
}

//QMCD 게임 실행
function goQmExec(){

	if(gameRunStatus == true) {
		alert('게임이 실행중입니다. 잠시만 기다려 주시기 바랍니다.');
		return;
	}
	gameRunStatus = true;

	$.ajax({
		type:"GET",
		url:"/game/qm_start",
		data:{"game_code":'QMCD'},
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
