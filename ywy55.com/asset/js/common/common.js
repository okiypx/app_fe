function ajaxContents(getUrl, getDiv) {

    var dataString = "";

    $.ajax({
        type: 'GET',
        url: getUrl,
        async: true,
        dataType: 'html', //데이터 유형
        data: dataString,
        beforeSend: function() {

            $('#centerLoading').show();

        },
        success: function(msg) {
            //console.log(getDiv);
            $("#" + getDiv).html(msg);
            if (getDiv == "msgTxt" && msg != "") {
                //console.log(msg+"aaa");
                loginMessage();
            }
        },
        error: function(msg) {
            //alert("error");
        }
    });

}


function popWin(URL, width, height) {

    var left = Math.ceil((window.screen.width - width) / 2);
    var top = Math.ceil((window.screen.height - height) / 2);

    window.open(URL, 'pop', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,copyhistory=no,width=' + width + ',height=' + height + ', left=' + left + ',top=' + top + '');

}

function writeObject(Ftrans, wid, hei) {
    mainbody = "<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0' id='" + Ftrans + "'  width='" + wid + "' height='" + hei + "'>";
    mainbody += "<param name='movie' value= '" + Ftrans + "'>";
    mainbody += "<param name='quality' value='high'>";
    mainbody += "<param name='wmode' value='transparent'>";
    mainbody += "<param name='menu' value='false'>";
    mainbody += "<param name='allowScriptAccess' value='sameDomain'>";
    mainbody += "<embed src='" + Ftrans + "' quality='high' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash' width='" + wid + "' height='" + hei + "'  wmode='transparent'></embed>"
    mainbody += "</object>";
    //document.body.innerHTML = mainbody;
    document.write(mainbody);
    return;
}

//레이어 팝업 닫기
function popClose() {
    $('.tbox').hide();
}

//로그인
function loginSubmit(frm) {
    if (frm.userid.value == "") {
        alert("로그인 아이디를 입력해 주세요");
        frm.userid.focus();
        return;
    }
    if (frm.password.value == "") {
        alert("비밀번호를 입력해 주세요");
        frm.password.focus();
        return;
    }
    frm.action = "/user/login/";
    frm.submit();
}

function KeyCapEvent_GO(type) {
    if (event.keyCode == 13) {
        loginSubmit(type);
    }
}

//공백이 있는지 없는지 체크
function Space_chk(chk_val) {
    var val_len;
    var spc = 0;
    val_len = chk_val.length;

    if (val_len == 0) {
        return true;
    } else {
        for (i = 0; i < val_len; i++) {
            if (chk_val.charAt(i) == " ") {
                return true;
            }
        }
    }

    return false;
}

//숫자와 영문자 체크
function isChk(str) {

    var chkStr = str;

    var re = /(^([a-z0-9]+)([a-z0-9_]+$))/;

    if (re.test(chkStr)) {
        return false;
    } else {
        return true;
    }
}

// 숫자만체크
function isNums(strNums) {
    var id_ck = strNums;
    if (isNaN(id_ck) == false) {
        return true;
    } else {
        return false;
    }
}

//계좌번호 숫자 체크
function isAccNum(str) {
    var strVal = "0123456789";
    for (i = 0; i < str.length; i++) {
        ch = str.charAt(i);

        for (j = 0; j < strVal.length; j++)
            if (ch == strVal.charAt(j))
                break;
        if (j == strVal.length)
            return false;
    }
    return true;
}

//한글 및 영문만 포함 되었는지 체크
function kor_eng_chk(instr) {

    for (kk = 0; kk < instr.length; kk++) {
        mmstr = instr.substr(kk, 1).charCodeAt(0);
        if (mmstr < 65 || mmstr > 90 && mmstr < 97 || mmstr > 122 && mmstr < 44032 || mmstr > 63086) {
            return false;
            break;
        }
    }
    return true;

}

function Add_MoneyComma(Name) {
    var src;
    var i;
    var factor;
    var su;
    var SpaceSize = 0;
    var chkValue;

    chkValue = "";
    su = Name.value.length;
    for (i = 0; i < su; i++) {
        src = Name.value.substring(i, i + 1);
        if (src != ",") {
            factor = parseInt(src);
            if (isNaN(factor)) // < 0 || src > 9)^M
            {
                alert("숫자가 아닌 값이 입력되었습니다. 숫자만 입력해주세요.");
                Name.focus();
                //return false;
            } else {
                chkValue += src;
            }
        }
    }
    Name.value = chkValue;

    factor = Name.value.length % 3;
    su = (Name.value.length - factor) / 3;
    src = Name.value.substring(0, factor);

    for (i = 0; i < su; i++) {
        if ((factor == 0) && (i == 0)) // "XXX" 인경우
        {
            src += Name.value.substring(factor + (3 * i), factor + 3 + (3 * i));
        } else {
            src += ",";
            src += Name.value.substring(factor + (3 * i), factor + 3 + (3 * i));
        }
    }
    Name.value = src;

    return true;
}

//centering popup
function centerPopup(divname) {
    //request data for centering
    var windowWidth = document.documentElement.clientWidth;
    var windowHeight = document.documentElement.clientHeight;
    var popupHeight = $("#" + divname).height();
    var popupWidth = $("#" + divname).width();
    //centering
    $("#" + divname).css({
        "position": "absolute",
        "top": windowHeight / 2 - popupHeight / 2,
        "left": windowWidth / 2 - popupWidth / 2
    });
}

//centering popup
function centerWidthPopup(divname, topPos) {
    //request data for centering
    var windowWidth = document.documentElement.clientWidth;
    var popupWidth = $("#" + divname).width();
    //centering
    $("#" + divname).css({
        "position": "absolute",
        "top": topPos,
        // "left": windowWidth/2-popupWidth/2
        "left": "15%"
    });
}



//centering popup
function centerWidthPopup_new(divname, topPos) {
    //request data for centering


    var obj = $('#' + divname);
    var iHeight = (document.body.clientHeight / 2) - obj.height() / 2 + document.body.scrollTop;
    // var iWidth = (document.body.clientWidth / 2) - obj.width() / 2 + document.body.scrollLeft;
    var iWidth = "15%";



    var windowWidth = document.documentElement.clientWidth;
    var popupWidth = $("#" + divname).width();
    //centering
    $("#" + divname).css({
        "position": "absolute",
        "top": topPos,
        "left": iWidth
    });
}



function comma_add_return(n) {
    var reg = /(^[+-]?\d+)(\d{3})/; // 정규식
    n += ''; // 숫자를 문자열로 변환

    while (reg.test(n))
        n = n.replace(reg, '$1' + ',' + '$2');

    return n;
}

//금액 소숫점 표시
function number_change_sosu(num) {
    num = String(num);
    num = num.replace(",", "");
    num = num.replace(".", "");
    num = num.substring(0, num.length - 2) + "." + num.substring(num.length - 2, num.length);
    num = comma_add_return(num);

    return num;
}

//잭팟 금액 이미지 표시
function jackpot_image_echo(jackpot, jackpotImageUrl, commaImageUrl, sosuImageUrl) {
    str = "";

    for (i = 0; i < jackpot.length; i++) {
        jackpot_str = jackpot.substring(i, i + 1);

        if (jackpot_str == ",") {
            jackpot_img = commaImageUrl;
        } else if (jackpot_str == ".") {
            jackpot_img = sosuImageUrl;
        } else {
            jackpot_img = jackpotImageUrl.replace("%s", jackpot_str);
        }
        str += "<img src='" + jackpot_img + "'>";
    }

    return str;
}