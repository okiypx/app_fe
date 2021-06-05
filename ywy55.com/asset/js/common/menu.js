function goHome(){location.href = "/";} //홈

//쿠폰사용
function goCoupon(){TINY.box.show({iframe :'/exchange/coupon',width:1060,height:650});}
//입금신청
function goDeposit(){TINY.box.show({iframe :'/exchange/deposit',width:1060,height:720});}
//출금신청
function goWithdraw(){TINY.box.show({iframe :'/exchange/withdraw',width:1060,height:720});}
//체험머니신청
function goVirtual(){TINY.box.show({iframe :'/exchange/virtual',width:1060,height:430});}
//이벤트신청
function goEventReg(){TINY.box.show({iframe :'/exchange/event',width:1060,height:500});}
//게임머니 이동신청
function goMoneyMove(){TINY.box.show({iframe :'/exchange/move',width:1060,height:520});}
//입금계좌 재전송
function goAcctSend(){TINY.box.show({iframe :'/exchange/send',width:1060,height:330});}
//입출금내역
function goHistory(){TINY.box.show({iframe :'/exchange/history',width:1060,height:650});}

//회원가입
//function goJoin(){TINY.box.show({iframe :'/user/join',width:1060,height:650});}
function goJoin(){location.href='/user/join';}
//마이페이지
function goMypage(){TINY.box.show({iframe :'/user/mypage',width:1060,height:720});}
//친구 추천
function goRecommend(){TINY.box.show({iframe :'/user/recommend',width:1060,height:720});}
//아이디, 패스워드 찾기
function goIdSearch(){alert('고객센터로 문의하세요.');}
//로그아웃
function goLogout(){location.href="/user/logout";}

//실시간 출금 현황
function goRank(){TINY.box.show({iframe :'/etc/rank',width:1060,height:600});}
//1인 보안계좌
function goAcct(){TINY.box.show({iframe :'/etc/acct',width:1060,height:600});}
//파트너제휴
function goPartner(){TINY.box.show({iframe :'/etc/partner',width:1060,height:600});}
//1:1원격지원
function goRemote(){TINY.box.show({iframe :'/etc/remote',width:1060,height:450});}
//고객센터
function goCustomer(){TINY.box.show({iframe :'/etc/customer',width:1060,height:550});}
//게임규칙
function goRule(type){TINY.box.show({iframe :'/etc/rule/'+type,width:1060,height:600});}
//게임 가이드
function goGuide(type){TINY.box.show({iframe :'/etc/game_guide/'+type,width:1060,height:650});}

//게시판 리스트
function goBoardList(type){TINY.box.show({iframe :'/board/blist/'+type,width:1060,height:650});}
//게시판 보기
function goBoardView(type, num){TINY.box.show({iframe :'/board/bview/'+type+'?num='+num,width:1060,height:650});}