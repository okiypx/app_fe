//==============================================================================
//  SYSTEM      :  �ュ츣�덀궚��궧�뽧꺀�╉궣Ajax�ⓦ꺀�ㅳ깣�⒲꺁
//  PROGRAM     :  XMLHttpRequest�ャ굠�뗩�곩룛岳▲굮烏뚣걚�얇걲
//  FILE NAME   :  jslb_ajaxXXX.js
//  CALL FROM   :  Ajax ��꺀�ㅳ궋�녈깉
//  AUTHER      :  Toshirou Takahashi http://jsgt.org/mt/01/
//  SUPPORT URL :  http://jsgt.org/mt/archives/01/000409.html
//  CREATE      :  2005.6.26
//  UPDATE      :  v0.38  2005.10.18 chkAjaBrowser()�믦옙��
//  UPDATE      :  v0.372 2005.10.14 uriEncode�믢엶閭�
//  UPDATE      :  v0.371 2005.10.7 GET�쮛load�귙겗?��퍡�묉뼶�믢엶閭ｃ��
//  UPDATE      :  v0.37 2005.10.5.1 岳��BSD�⒲궎�삠꺍�밤굜�곥겲�쀣걼��
//                       �쀤퐳?烏①ㅊ獰⒴떃�▲걮�귛븚�ⓨ닶�ⓦ�곫뵻�졼�곮눎�긱�귡�ｇ덧訝띹쫨�㎯걲��
//  UPDATE      :  v0.37 2005.10.5 �ゃ궚�ⓦ궧�덀깦�껁�enctype��궩�껁깉�방퀡嶺됥굮?��
//                       setEncHeader�걏riEncode�믦옙��
//                       @see http://jsgt.org/ajax/ref/test/enctype/test1.htm
//                       岳��BSD�⒲궎�삠꺍�밤겓�쀣겲�쀣걼
//  UPDATE      :  v0.36 2005.7.20 (oj.setRequestHeader)�똷inie�쬾nknown
//                  �믦퓭�쇻걪�ⓦ걣�ㅶ삇�쀤엶閭ｏ펷unknown�ゃ겗�ャ�곩땿鵝쒌겘�쀣겲�숋펹
//  UPDATE      :  v0.35 2005.7.19 POST�췈ontent-Type鼇�츣�뭀pera8.01??
//  UPDATE      :  v0.34 2005.7.16 sendRequest()�쳕ser,password凉�?�믦옙��
//  UPDATE      :  v0.33 2005.7.3  Query Component(GET)��&��=餓ε쨼��
//                                encodeURIComponent�㎩츑�ⓦ궓�밤궞?�쀣��
//  TEST-URL    :  �섅긿�� http://jsgt.org/ajax/ref/lib/test_head.htm
//  TEST-URL    :  沃�?   http://jsgt.org/mt/archives/01/000428.html
//  TEST-URL    :  �욃릪��
//        http://allabout.co.jp/career/javascript/closeup/CU20050615A/index.htm
//  TEST-URL    :  SQL     http://jsgt.org/mt/archives/01/000392.html
//------------------------------------------------------------------------------
// ���경깄��   : http://jsgt.org/mt/archives/01/000409.html
// �쀤퐳?烏①ㅊ獰⒴떃�▲걮�귛븚�ⓨ닶�ⓦ�곫뵻�졼�곮눎�긱�귡�ｇ덧訝띹쫨��
//
//

	////
	// �뺜퐳��꺗�ゃ깣�⒲궑�뜹닩若�
	//
	// @sample        if(chkAjaBrowser()){ location.href='nonajax.htm' }
	// @sample        oj = new chkAjaBrowser();if(oj.bw.safari){ /* Safari code */ }
	// @return        �⒲궎�뽧꺀�ゃ걣�뺜퐳��꺗�ゃ깣�⒲궑�뜰걽�몋rue  true|false
	//
	//  Enable list (v038�얍쑉)
	//   WinIE 5.5+
	//   Konqueror 3.3+
	//   AppleWebKit楹�(Safari,OmniWeb,Shiira) 124+
	//   Mozilla楹�(Firefox,Netscape,Galeon,Epiphany,K-Meleon,Sylera) 20011128+
	//   Opera 8+
	//
	function chkAjaBrowser()
	{
		var a,ua = navigator.userAgent;
		this.bw= {
		  safari    : ((a=ua.split('AppleWebKit/')[1])?a.split('(')[0]:0)>=124 ,
		  konqueror : ((a=ua.split('Konqueror/')[1])?a.split(';')[0]:0)>=3.3 ,
		  mozes     : ((a=ua.split('Gecko/')[1])?a.split(" ")[0]:0) >= 20011128 ,
		  opera     : (!!window.opera) && ((typeof XMLHttpRequest)=='function') ,
		  msie      : (!!window.ActiveXObject)?(!!createHttpRequest()):false
		}
		return (this.bw.safari||this.bw.konqueror||this.bw.mozes||this.bw.opera||this.bw.msie)
	}


	////
	// XMLHttpRequest�ゃ깣�멥궒��깉�잍닇
	//
	// @sample        oj = createHttpRequest()
	// @return        XMLHttpRequest�ゃ깣�멥궒��깉(�ㅳ꺍�밤궭�녈궧)
	//
	function createHttpRequest()
	{
		if(window.ActiveXObject){
			 //Win e4,e5,e6��
			try {
				return new ActiveXObject("Microsoft.XMLHTTP") ;

			} catch (e) {
				try {
					return new ActiveXObject("Msxml2.XMLHTTP") ;
				} catch (e2) {
					return null ;
	 			}
	 		}
		} else if(window.XMLHttpRequest){
			 //Win Mac Linux m1,f1,o8 Mac s1 Linux k3��
			return new XMLHttpRequest() ;
		} else {
			return null ;
		}
	}

	////
	// �곩룛岳�??
	//
	// @sample         sendRequest(onloaded,'&prog=1','POST','./about2.php',true,true)
	// @param callback �쀤에�귙겓壅룟땿�쇻굥??��
	// @param data	   �곦에�쇻굥��?�� (&�띶뎺1=��1&�띶뎺2=��2...)
	// @param method   "POST" or "GET"
	// @param url      �ゃ궚�ⓦ궧�덀걲�뗣깢�▲궎�ャ겗URL
	// @param async	   �욃릪�잆겒�뎥rue �뚧쐿�ゃ굢false
	// @param sload	   ��?��?��?�� true��?�뜰�곭쐛�γ겲�잆겘false�㎯깈�뺛궔�ャ깉
	// @param user	   沃�?��?�며뵪��?��?��
	// @param password 沃�?��?�며뵪�묆궧��?��
	//
	function sendRequest(callback,data,method,url,async,sload,user,password)
	{
		//XMLHttpRequest�ゃ깣�멥궒��깉�잍닇
		var oj = createHttpRequest();
		if( oj == null ) return null;

		//?�뜰꺆?�됥겗鼇�츣
		var sload = (!!sendRequest.arguments[5])?sload:false;
		if(sload || method.toUpperCase() == 'GET')url += "?";
		if(sload)url=url+"t="+(new Date()).getTime();

		//�뽧꺀�╉궣�ㅵ츣
		var bwoj = new chkAjaBrowser();
		var opera	  = bwoj.bw.opera;
		var safari	  = bwoj.bw.safari;
		var konqueror = bwoj.bw.konqueror;
		var mozes	  = bwoj.bw.mozes ;

		//�쀤에?��
		//opera�칚nreadystatechange�ュ쩀�띲꺃�밤깘�겹걣�귙굥��겎onload�뚦츎��
		//Moz,FireFox�칚j.readyState==3�㎯굚�쀤에�쇻굥��겎�싧만�칚nload�뚦츎��
		//Win ie�㎯겘onload��땿鵝쒌걮�ゃ걚
		//Konqueror�칚nload�뚥툖若됧츣
		//?�긤ttp://jsgt.org/ajax/ref/test/response/responsetext/try1.php
		if(opera || safari || mozes){
			oj.onload = function () { callback(oj); }
		} else {

			oj.onreadystatechange =function ()
			{
				if ( oj.readyState == 4 ){
					callback(oj);
				}
			}
		}

		//URL�ⓦ꺍��?��
		data = uriEncode(data)
		if(method.toUpperCase() == 'GET') {
			url += data
		}

		//open �▲궫�껁깋
		oj.open(method,url,async,user,password);

		//�섅긿��application/x-www-form-urlencoded�삠긿��
			setEncHeader(oj)

		//�뉎깘�껁궚
		//alert("////jslb_ajaxxx.js//// \n data:"+data+" \n method:"+method+" \n url:"+url+" \n async:"+async);

		//send �▲궫�껁깋
			oj.send(data);

		//URI�ⓦ꺍��?�됥깦�껁��삠긿��
		function setEncHeader(oj){

			//�섅긿��application/x-www-form-urlencoded�삠긿��
			// @see  http://www.asahi-net.or.jp/~sd5a-ucd/rec-html401j/interact/forms.html#h-17.13.3
			// @see  #h-17.3
			//   ( enctype ��깈�뺛궔�ャ깉�ㅳ겘 "application/x-www-form-urlencoded")
			//   h-17.3�ャ굠�듽�갥OST/GET�뤵굩�싪Þ若�
			//   POST��"multipart/form-data"�믤뙁若싥걲�뗥퓚誤곥걣�귙굥�닷릦��궖�밤궭�욁궎�뷩걮�╉걦�졼걬�꾠��
			//
			//  �볝겗�▲궫�껁깋�똚in Opera8.0�㎯궓��?�ャ겒�ｃ걼��겎�녶쾺(8.01�츾K)
			//var contentTypeUrlenc = 'application/x-www-form-urlencoded; charset=utf-8';
			var contentTypeUrlenc = 'application/x-www-form-urlencoded; charset=euc-kr';
			if(!window.opera){
				oj.setRequestHeader('Content-Type',contentTypeUrlenc);
			} else {
				if((typeof oj.setRequestHeader) == 'function')
					oj.setRequestHeader('Content-Type',contentTypeUrlenc);
			}
			return oj
		}

		//URL�ⓦ꺍��?��
		function uriEncode(data){

			if(data!=""){
				//&��=�㏛���늽鰲ｃ걮encode
				var encdata = '';
				var datas = data.split('&');
				for(i=1;i<datas.length;i++)
				{
					var dataq = datas[i].split('=');
					encdata += '&'+encodeURIComponent(dataq[0])+'='+encodeURIComponent(dataq[1]);
				}
			} else {
				encdata = "";
			}
			return encdata;
		}


		return oj
	}



	function objectid(objId){
		return document.getElementById(objId);
	}