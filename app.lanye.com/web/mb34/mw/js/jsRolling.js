/**
##jsRolling

#�ㅻ챸
�먯떇 �몃뱶瑜� 濡ㅻ쭅 �쒗궓��.
濡ㅻ쭅諛곕꼫瑜� 留뚮뱺��.

#�뺣낫
媛쒕컻�� : 怨듬��ъ옄(http://mins01.com)
留뚮뱺�� : 2010-04-05
怨좎튇�� : NULL

#�쒖빟議곌굔
"怨듬��ъ옄�� �댁걯��"�� 嫄� �뚯븘�쇳븿.

#�뚯뒪��
IE7
FF 3.6.x
Crome 4.x
Opera 9.x
*/
/*
二쇱쓽 
direction �� 2,4�� �� �쒓렇 �ъ씠�� 以꾨컮轅�, 鍮덉뭏 �깅룄 �덉쑝硫� �덈맂��(IE怨꾩뿴�먯꽌 鍮덉뭏�쇰줈 蹂댁씪 �� �덈떎.)
*/
var jsRolling = function(target){
	//alert(target);
	this.timer = null; //interval ���대㉧
	this.timerNextPause = null;
	
	this.direction = 1; //諛⑺뼢
	this.gapTime = 10; //�대룞�쒕젅��
	this.gapMove = 1; //�대룞媛꾧꺽
	this.gapNextPause = 1000; //�ㅼ쓬 ���� �숈옉�� ���� �쒕젅��, 0�대㈃ �ъ슜�덊븿.
	
	this.target = null;
	this.targetW = 0;
	this.chilNodesW = 0;
	
	this.started = false; //�꾩옱 �숈옉以묒씤媛�?
	this.paused = false; //�꾩옱 �좎떆 硫덉땄 以묒씤媛�?
	this.nextPaused = false; //�ㅼ쓬 媛쒖껜媛� 蹂댁씪�� �좎떆 硫덉땄 以묒씤媛�?
	this.checkStart = true; //start �좊븣 �먯떇�몃뱶�ㅼ쓽 �덈퉬瑜� 泥댄겕�댁꽌 start媛��ν븳吏� 泥댄겕, �놁쑝硫� 臾댁“嫄� �숈옉!
	
	if(target){
		this.init(target);
	}
}
jsRolling.prototype = {
	//珥덇린��, ��寃잛쓣 吏��뺥븯怨� ��寃잛쓽 child瑜� 珥덇린�붿떆�⑤떎.
	'init':function(target){
		this.target = target;

	}
	//--- ��寃� �ㅼ젙 珥덇린��
	,'initChild':function(child){
		child.style.margin = '0';
	}
	//--- 諛⑺뼢怨� �먯떇 �ㅼ젙 珥덇린��
	,'setDirection':function(direction){
		this.changeDirection(direction);
		var tNode = [];
		//--- ��寃� 珥덇린��
		this.target.style.overflow = 'hidden';
		this.target.style.position = 'relative';
		this.target.onmouseover = function(thisC){
														return function(){
															thisC.onmouseover()
														}
													}(this);
		this.target.onmouseout = function(thisC){
																return function(){
																	thisC.onmouseout()
																}
															}(this);
		
		if(this.direction == 1 || this.direction == 3){
			this.target.style.whiteSpace = 'normal';
			this.targetW = this.target.offsetWidth;
			
			for(var child = this.target.firstChild 	; child 	; child = child.nextSibling){
				if(child.nodeType==1){	
					child.style.margin = 0;
					child.style.display = 'block';
					this.chilNodesW += child.offsetWidth;
				}else{
					tNode.push(child);
				}
			}
		}else if(this.direction == 2 || this.direction == 4){
			this.target.style.whiteSpace = 'nowrap';
			this.targetW = this.target.offsetHeight;
			
			for(var child = this.target.firstChild 	; child 	; child = child.nextSibling){
				if(child.nodeType==1){	
					child.style.margin = 0;
					child.style.display = 'inline-block';
					child.style.cssText += ';/display:inline'; //FOR IE6,7
					this.chilNodesW += child.offsetHeight;
				}else{
					tNode.push(child);
				}
			}
		}
		for(var i=0,m=tNode.length;i<m;i++){
			tNode[i].parentNode.removeChild(tNode[i]); //�앹뒪�� �몃뱶 �쒓굅
			
		}
		tNode = null;
	}
	//--- 諛⑺뼢 蹂�寃�
	,'changeDirection':function(direction){
		this.direction = direction
	}
	//--- 泥섏쓬�몃뱶 媛��몄삤湲�
	,'getFirst':function(){
		return this.target.firstChild;
	}
	//--- 留덉�留됰끂�� 媛��몄삤湲�
	,'getLast':function(){
		return this.target.lastChild;
	}
	//--- �숈옉
	,'_act':function(){
		if(this.paused || this.nextPaused){return;}
		switch(this.direction){
			case 1:this._act_up();	break;
			case 2:this._act_right(); break;
			case 3:this._act_down(); break;
			case 4:this._act_left();	break;
		}
	}
	//--- �숈옉 �� (1)
	,'_act_up':function(){
		//---珥덇린��
		var n = this.getFirst();
		var mt = Math.abs(parseInt(n.style.marginTop));
		var mtg = mt+this.gapMove
		var h = n.offsetHeight;
		if(mtg>=h){
			this.target.appendChild(n);
			this.initChild(n);
			this.nextPause();
			this._act();
			return;
		}else{
			n.style.marginTop = '-'+mtg.toString()+'px';
		}
		//document.title = n.style.marginTop;
	}
	//--- �숈옉 �ㅻⅨ履� (2)
	,'_act_right':function(){
		//---珥덇린��
		var n = this.getFirst();
		var ml = Math.abs(parseInt(n.style.marginLeft));
		var mlg = ml-this.gapMove
		if(mlg<=0){
			var l = this.getLast();
			var w = l.offsetWidth;
			l.style.marginLeft = '-'+w+'px';
			this.target.insertBefore(l,n); //留덉�留� �몃뱶瑜� 留� 泥섏쓬�쇰줈
			
			this.initChild(n);
			this.nextPause();
			this._act();
			return;
		}else{
			n.style.marginLeft = '-'+mlg.toString()+'px';
		}
		//document.title = n.style.marginLeft;
	}
	//--- �숈옉 �꾨옒(3)
	,'_act_down':function(){
		//---珥덇린��
		var n = this.getFirst();
		var mt = Math.abs(parseInt(n.style.marginTop));
		var mtg = mt-this.gapMove;
		
		if(mtg<=0){
			var l = this.getLast();
			var h = l.offsetHeight;
			l.style.marginTop = '-'+h+'px';
			this.target.insertBefore(l,n); //留덉�留� �몃뱶瑜� 留� 泥섏쓬�쇰줈
			this.initChild(n);
			this.nextPause();
			this._act();
			return;
		}else{
			n.style.marginTop = '-'+mtg.toString()+'px';
		}
		//document.title = n.style.marginTop;
	}
	//--- �숈옉 �쇱そ (4)
	,'_act_left':function(){
		//---珥덇린��
		var n = this.getFirst();
		var ml = Math.abs(parseInt(n.style.marginLeft));
		var mlg = ml+this.gapMove
		var w = n.offsetWidth;
		if(mlg>=w){
			this.target.appendChild(n);
			this.initChild(n);
			this.nextPause();
			this._act();
			return;
		}else{
			n.style.marginLeft = '-'+mlg.toString()+'px';
		}
		//document.title = n.style.marginLeft;
	}
	//---  濡ㅻ쭅�쒖옉
	,'start':function(){
		if(!this.started && this.startAble()){
			this.nextPause();
			var timer22 = this.timer = setInterval(function(thisC){return function(){thisC._act()}}(this),this.gapTime);
			this.started = true;
		}
	}
	//--- 濡ㅻ쭅 硫덉땄
	,'stop':function(){
		clearInterval(this.timer);
		this.started = false;
	}
	//--- 濡ㅻ쭅�� �쒖옉�� �� �덈뒗媛�? �멸컖�� 1.5諛곕쭔�쇱쓽 �먯떇 �몃뱶媛� �덉뼱�쇳븳��.
	,'startAble':function(){
		if(!this.checkStart){return true;}
		if(this.chilNodesW > (this.targetW*1.5)){
			return true;
		}
		return false;
	}
	//--- pause(bool�� true硫� 硫덉텣��. false硫� 硫덉땄�� �댁젣)
	//stop怨� 李⑥씠�먯� clearInterval�� �섏� �딅뒗�ㅻ뒗 寃�!
	,'pause':function(bool){
		this.paused = bool?true:false;
	}
	//--- �ㅼ쓬 媛앹껜媛� 蹂댁씪�� �좎떆 硫덉텣��.
	,'nextPause':function(){
		if(this.nextPaused){
			clearTimeout(this.timerNextPause);
		}
		this.nextPaused = true;
		this.timerNextPause = setTimeout(function(thisC){
								return function(){
									thisC.nextPaused = false;
								}
							}(this)
							,this.gapNextPause);
	}
	//--- 留덉슦�� �ㅻ쾭 �대깽��, 蹂댄넻 �좎떆 硫덉텣��.
	,'onmouseover':function(){
		this.pause(true);
	}
	//--- 留덉슦�� �꾩썐 �대깽��, 蹂댄넻 �좎떆 硫덉텣�� �댁젣�쒕떎.
	,'onmouseout':function(){
		this.pause(false);
	}
	//--- �꾨줈 �섍�
	,'up':function(){
		var n = this.getFirst();
		var l = this.getLast();
		this.target.appendChild(n);	
		this.initChild(n);
		this.nextPause();
	}
	//--- �꾨옒濡� �섍�
	,'down':function(){
		var n = this.getFirst();
		var l = this.getLast();
		this.target.insertBefore(l,n); //留덉�留� �몃뱶瑜� 留� 泥섏쓬�쇰줈
		this.initChild(l);
		this.initChild(n);
		this.nextPause();
	}
	//--- �쇱そ�쇰줈 �섍�, up怨� �숈옉�� 媛숇떎.
	,'left':function(){
		this.up();
	}
	//--- �ㅻⅨ履쎌쑝濡� �섍� , down怨� �숈옉�� 媛숇떎.
	,'right':function(){
		this.down();
	}
}