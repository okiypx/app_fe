//인스타그램 Data를 저장해놓을 key, value 형태의 MAP 선언
Map = function() {
	this.map = new Object();
};
Map.prototype = {
	put : function(key, value) {
		this.map[key] = value;
	},
	get : function(key) {
		return this.map[key];
	},
	containsKey : function(key) {
		return key in this.map;
	},
	containsValue : function(value) {
		for ( var prop in this.map) {
			if (this.map[prop] == value)
				return true;
		}
		return false;
	},
	isEmpty : function(key) {
		return (this.size() == 0);
	},
	clear : function() {
		for ( var prop in this.map) {
			delete this.map[prop];
		}
	},
	remove : function(key) {
		delete this.map[key];
	},
	keys : function() {
		var keys = new Array();
		for ( var prop in this.map) {
			keys.push(prop);
		}
		return keys;
	},
	values : function() {
		var values = new Array();
		for ( var prop in this.map) {
			values.push(this.map[prop]);
		}
		return values;
	},
	size : function() {
		var count = 0;
		for ( var prop in this.map) {
			count++;
		}
		return count;
	}
};


function instagramAPI(tagname,initCount,perCount){
	this.tagname=tagname;
	this.initCount=initCount;
	this.perCount=perCount;
	this.last = false;
	this.loaded = false;
	this.first = true;
	this.instargramCount = 0;
	this.max_tag_id =0;
	
	
};
instagramAPI.prototype = {
	
	getInstaCount : function() {
		return this.instargramCount;
	},
	changeLast : function(status) {
		this.last=status;
	},
	isLast : function() {
		return this.last;
	},
	changeLoaded : function(status) {
		this.loaded=status;
	},
	isLoaded : function() {
		return this.loaded; 
	},
	getInstagramList : function() {
		this.loaded = false;		
		var me = this;		
		var count = this.perCount;
		
		if (this.first) {
			count = this.initCount;
			instagram_target = "https://api.instagram.com/v1/tags/" + this.tagname
					+ "/media/recent?count=" + count;
			this.first = false;
		}
		var instagram_target = "https://api.instagram.com/v1/tags/" + this.tagname
		+ "/media/recent?count=" + count + "&max_tag_id=" + this.max_tag_id;

		var params = {
			client_id : "1550ddd962ef42e4b76831f196435ffc"
		};

		//$('#disp').empty();//이전 데이터 삭제
		
		$.ajax({
			url : instagram_target,
			data : params,
			dataType : "jsonp",
			jsonp : "callback",
			success : function(data) {
				$list_container = $('#isotope_list');

				$.each(data, function(index, entry) {
					//alert("meta : "+entry["meta"]+"\n"+"code : "+entry["code"]);			

					if (index == "pagination") {
						//alert("next_min_id : "+entry["next_min_id"]+"\n"+"min_tag_id : "+entry["min_tag_id"]+"\n"+"deprecation_warning : "+entry["deprecation_warning"]);							
						if (typeof (entry["next_url"]) == "undefined") {
							//alert("마지막 페이지 입니다");
							me.last = true;

						} else {
							//alert(entry["next_url"]);	
						}
						me.max_tag_id = entry["next_max_tag_id"]; //인스타에서 넘겨준 next_max_tag_id 를 세팅한다.					
					}

					if (index == "meta") {
						//alert(entry["code"]);
						if ("200" != entry["code"]) {
							$list_container.append("<P> [" + entry["code"] + "] "
									+ entry["error_message"] + "</P>");
							return;
						}
					}
					
					
					//var lucky_html = "<tr>";
					//var tdCnt = 0;
					if (index == "data") {
						var imageHtml = "";
						var cnt = 0;

						$.each(data['data'], function(dataList, arrdata) {
							//alert(cnt++);
							
							//
							var map = new Map();
							map.put("link", arrdata["link"]);
							map.put("id", arrdata["id"]);
							$.each(arrdata, function(key, obj) {
								//console.log(key);
								if (key == "created_time") {

								}
								
								if (key == "comments") {
									map.put("comments_count", obj["count"]);
								}
								
								
								if (key == "caption") {								
									//map.put("text", obj["text"]);									
								}

								if (key == "likes") {
									//alert(obj["count"]);								
									map.put("likes_count", obj["count"]);
								}

								if (key == "images") {
									$.each(obj, function(type, image) {

										if (type == "low_resolution") {//low_resolution 306*306										
											img_low = image["url"];
											map.put("images_low_resolution", image["url"]);
										}
										if (type == "thumbnail") {//thumbnail 150*150
											img_thum = image["url"];										
											map.put("images_thumbnail", image["url"]);
										}
										if (type == "standard_resolution") {//standard_resolution 612*612
											img_std = image["url"];
											map.put("images_standard_resolution", image["url"]);
										}

									});
								}
								
								if (key == "user") {
									map.put("user_id", obj["id"]);
									map.put("user_profile_picture", obj["profile_picture"]);
									//map.put("user_full_name", obj["full_name"]);
									map.put("user_username", obj["username"]);
									
								}

								
							});
							
							
							/*console.log(map.size());
							console.log("=================================================================");							
							console.log(map.keys());
							console.log(map.values());
							console.log("=================================================================");*/


							/*
							도배로 해당 아이디 배제
							260815540-kpopcaandy
							269612006-kkamjongi_
							309773336-suaveisland
							19753546-kaisexual
							322619877-xeixaoo
							325641152-soojungnews*/
							if(map.get("user_id").indexOf("260815540") != -1 || 
							   map.get("user_id").indexOf("269612006") != -1 || 
							   map.get("user_id").indexOf("309773336") != -1 || 
							   map.get("user_id").indexOf("19753546")  != -1 || 
							   map.get("user_id").indexOf("322619877") != -1 || 
							   map.get("user_id").indexOf("325641152") != -1 )  {								
								
							}else{								
								//var html = "<li idx='"+map.get("id")+"' userIdx='"+map.get("user_id")+"'><a href='" + map.get("link")+ "' target='_blank');\"><img src='"+map.get("images_low_resolution")+"'  alt='리스트 이미지' /></a><a href='#styleList01' onclick=\"checkDetail('"+map.get("images_standard_resolution")+"','"+map.get("id")+"','"+map.get("link")+"');\"><span class='view'>DETAIL VIEW</span></a></li>";
								var html = "";
								if( content_id == '1523' )
									html = "<div class='element'><a href='" + map.get("link")+ "' target='_blank'><img src='"+map.get("images_low_resolution")+"' alt='리스트이미지' /></a></div>";
								$list_container.append(html);
							}							
							map.clear();
						});
					}					
					me.loaded = true;
					
				
					//로딩이미지 none
					$('#loader').fadeOut("slow");
				});

				
			},
			error : function(data) {
				me.loaded = true;
				//alert("인스타그램과 통신 실패하였습니다.");
			}
		});
	},
	getInstagramListByCommonGround_shop : function() {
		this.loaded = false;		
		var me = this;		
		var count = this.perCount;
		
		if (this.first) {
			count = this.initCount;
			instagram_target = "https://api.instagram.com/v1/tags/" + this.tagname
					+ "/media/recent?count=" + count;
			this.first = false;
		}
		var instagram_target = "https://api.instagram.com/v1/tags/" + this.tagname
		+ "/media/recent?count=" + count + "&max_tag_id=" + this.max_tag_id;

		var params = {
			client_id : "1550ddd962ef42e4b76831f196435ffc"
		};

		//$('#disp').empty();//이전 데이터 삭제
		
		$.ajax({
			url : instagram_target,
			data : params,
			dataType : "jsonp",
			jsonp : "callback",
			success : function(data) {
				$list_container = $('.store_insta_list');

				$.each(data, function(index, entry) {
					//alert("meta : "+entry["meta"]+"\n"+"code : "+entry["code"]);			

					if (index == "pagination") {
						//alert("next_min_id : "+entry["next_min_id"]+"\n"+"min_tag_id : "+entry["min_tag_id"]+"\n"+"deprecation_warning : "+entry["deprecation_warning"]);							
						if (typeof (entry["next_url"]) == "undefined") {
							//alert("마지막 페이지 입니다");
							me.last = true;

						} else {
							//alert(entry["next_url"]);	
						}
						me.max_tag_id = entry["next_max_tag_id"]; //인스타에서 넘겨준 next_max_tag_id 를 세팅한다.					
					}

					if (index == "meta") {
						//alert(entry["code"]);
						if ("200" != entry["code"]) {
							$list_container.append("<P> [" + entry["code"] + "] "
									+ entry["error_message"] + "</P>");
							return;
						}
					}
					
					
					//var lucky_html = "<tr>";
					//var tdCnt = 0;
					if (index == "data") {
						var imageHtml = "";
						var cnt = 0;

						$.each(data['data'], function(dataList, arrdata) {
							//alert(cnt++);
							
							//
							var map = new Map();
							map.put("link", arrdata["link"]);
							map.put("id", arrdata["id"]);
							$.each(arrdata, function(key, obj) {
								//console.log(key);
								if (key == "created_time") {

								}
								
								if (key == "comments") {
									map.put("comments_count", obj["count"]);
								}
								
								
								if (key == "caption") {								
									//map.put("text", obj["text"]);									
								}

								if (key == "likes") {
									//alert(obj["count"]);								
									map.put("likes_count", obj["count"]);
								}

								if (key == "images") {
									$.each(obj, function(type, image) {

										if (type == "low_resolution") {//low_resolution 306*306										
											img_low = image["url"];
											map.put("images_low_resolution", image["url"]);
										}
										if (type == "thumbnail") {//thumbnail 150*150
											img_thum = image["url"];										
											map.put("images_thumbnail", image["url"]);
										}
										if (type == "standard_resolution") {//standard_resolution 612*612
											img_std = image["url"];
											map.put("images_standard_resolution", image["url"]);
										}

									});
								}
								
								if (key == "user") {
									map.put("user_id", obj["id"]);
									map.put("user_profile_picture", obj["profile_picture"]);
									//map.put("user_full_name", obj["full_name"]);
									map.put("user_username", obj["username"]);
									
								}

								
							});
							
							
							/*console.log(map.size());
							console.log("=================================================================");							
							console.log(map.keys());
							console.log(map.values());
							console.log("=================================================================");*/


							/*
							도배로 해당 아이디 배제
							260815540-kpopcaandy
							269612006-kkamjongi_
							309773336-suaveisland
							19753546-kaisexual
							322619877-xeixaoo
							325641152-soojungnews*/
							if(map.get("user_id").indexOf("260815540") != -1 || 
							   map.get("user_id").indexOf("269612006") != -1 || 
							   map.get("user_id").indexOf("309773336") != -1 || 
							   map.get("user_id").indexOf("19753546")  != -1 || 
							   map.get("user_id").indexOf("322619877") != -1 || 
							   map.get("user_id").indexOf("325641152") != -1 )  {								
								
							}else{
								instaIdx ++;
								//var html = "<li idx='"+map.get("id")+"' userIdx='"+map.get("user_id")+"'><a href='" + map.get("link")+ "' target='_blank');\"><img src='"+map.get("images_low_resolution")+"'  alt='리스트 이미지' /></a><a href='#styleList01' onclick=\"checkDetail('"+map.get("images_standard_resolution")+"','"+map.get("id")+"','"+map.get("link")+"');\"><span class='view'>DETAIL VIEW</span></a></li>";
								//var html = "<div class='element'><a href='" + map.get("link")+ "' target='_blank'><img src='"+map.get("images_low_resolution")+"' alt='리스트이미지' /></a></div>";
								//var html  = "<div class='list_wr' id='insta"+instaIdx+"' idx='"+map.get("id")+"' userIdx='"+map.get("user_id")+"' imgAddr='"+map.get("images_low_resolution")+"' likeCnt='"+map.get("likes_count")+"' username='"+map.get("user_username")+"' link='"+map.get("link")+"'><div class='viewDetail'><img src='"+map.get("images_low_resolution")+"' alt='리스트이미지' class='thumb' /><a href='#' class='zoom' onclick=\"viewLayer('"+instaIdx+"');return false;\" ><img src='http://image.fnckolon.com/customellow/images/event/140829/icn_zoom.png' alt='' /></a><div class='btns_wr'><div class='btns'><a href='"+map.get("link")+"' target='_blank' class='bt_like bt_like_on'>좋아요</a>"+map.get("likes_count")+"</div></div></div></div>"
								var html  = "<li  id='insta"+instaIdx+"' idx='"+map.get("id")+"' userIdx='"+map.get("user_id")+"' imgAddr='"+map.get("images_low_resolution")+"' likeCnt='"+map.get("likes_count")+"' username='"+map.get("user_username")+"' link='"+map.get("link")+"'><img src='"+map.get("images_low_resolution")+"' alt='리스트이미지'    onclick=\"open_page('"+instaIdx+"');return false;\"       style=\"cursor:pointer\"         />    </li>"
								$list_container.append(html);
								
							}							
							map.clear();
						});
					}					
					me.loaded = true;
					
					
				
					//로딩이미지 none
					$('#loader').fadeOut("slow");
				});
				areaInit();

				
			},
			error : function(data) {
				me.loaded = true;
				//alert("인스타그램과 통신 실패하였습니다.");
			}
		});
	},
	getInstagramListByCommonground : function() {
		this.loaded = false;		
		var me = this;		
		var count = this.perCount;
		
		if (this.first) {
			count = this.initCount;
			instagram_target = "https://api.instagram.com/v1/tags/" + this.tagname
					+ "/media/recent?count=" + count;
			this.first = false;
		}
		var instagram_target = "https://api.instagram.com/v1/tags/" + this.tagname
		+ "/media/recent?count=" + count + "&max_tag_id=" + this.max_tag_id;

		var params = {
			client_id : "1550ddd962ef42e4b76831f196435ffc"
		};

		//$('#disp').empty();//이전 데이터 삭제
		
		$.ajax({
			url : instagram_target,
			data : params,
			dataType : "jsonp",
			jsonp : "callback",
			success : function(data) {
				$list_container = $('.celeb_snsconts');
				$loader = $('#loader');
				$list_container.isotope({
					itemSelector : '.element'
				});

				$loader.fadeIn("slow");
				$.each(data, function(index, entry) {
					//alert("meta : "+entry["meta"]+"\n"+"code : "+entry["code"]);			
					if (index == "pagination") {
						//alert("next_min_id : "+entry["next_min_id"]+"\n"+"min_tag_id : "+entry["min_tag_id"]+"\n"+"deprecation_warning : "+entry["deprecation_warning"]);							
						if (typeof (entry["next_url"]) == "undefined") {
							//alert("마지막 페이지 입니다");
							me.last = true;

						} else {
							//alert(entry["next_url"]);	
						}
						me.max_tag_id = entry["next_max_tag_id"]; //인스타에서 넘겨준 next_max_tag_id 를 세팅한다.					
					}

					if (index == "meta") {
						//alert(entry["code"]);
						if ("200" != entry["code"]) {
							$list_container.append("<P> [" + entry["code"] + "] "
									+ entry["error_message"] + "</P>");
							return;
						}
					}
					
					
					//var lucky_html = "<tr>";
					//var tdCnt = 0;
					if (index == "data") {
						var imageHtml = "";
						var cnt = 0;
						$.each(data['data'], function(dataList, arrdata) {
							cnt++;

							var map = new Map();
							map.put("link", arrdata["link"]);
							map.put("id", arrdata["id"]);
							$.each(arrdata, function(key, obj) {
								//alert("data cnt : " + cnt + "\nkey : " + key + "\nobj : " + obj);
								//console.log(key);
								if (key == "created_time") {

								}
								
								if (key == "comments") {
									map.put("comments_count", obj["count"]);
								}
								
								
								if (key == "caption") {								
									//map.put("text", obj["text"]);									
								}

								if (key == "likes") {
									//alert(obj["count"]);								
									map.put("likes_count", obj["count"]);
								}

								if (key == "type") {
									//alert(obj["count"]);								
									map.put("type", obj);
								}

								if (key == "images") {
									$.each(obj, function(type, image) {

										if (type == "low_resolution") {//low_resolution 306*306										
											img_low = image["url"];
											map.put("images_low_resolution", image["url"]);
										}
										if (type == "thumbnail") {//thumbnail 150*150
											img_thum = image["url"];										
											map.put("images_thumbnail", image["url"]);
										}
										if (type == "standard_resolution") {//standard_resolution 612*612
											img_std = image["url"];
											map.put("images_standard_resolution", image["url"]);
										}

									});
								}
								
								if (key == "user") {
									map.put("user_id", obj["id"]);
									map.put("user_profile_picture", obj["profile_picture"]);
									//map.put("user_full_name", obj["full_name"]);
									map.put("user_username", obj["username"]);
									
								}

								
							});
							
							
							/*console.log(map.size());
							console.log("=================================================================");							
							console.log(map.keys());
							console.log(map.values());
							console.log("=================================================================");*/


							/*
							도배로 해당 아이디 배제
							260815540-kpopcaandy
							269612006-kkamjongi_
							309773336-suaveisland
							19753546-kaisexual
							322619877-xeixaoo
							325641152-soojungnews*/
							if(map.get("user_id").indexOf("260815540") != -1 || 
							   map.get("user_id").indexOf("269612006") != -1 || 
							   map.get("user_id").indexOf("309773336") != -1 || 
							   map.get("user_id").indexOf("19753546")  != -1 || 
							   map.get("user_id").indexOf("322619877") != -1 || 
							   map.get("user_id").indexOf("325641152") != -1 )  {								
							}else{
								instaIdx ++;
								//커스터멜로우 동작 하던 라인  var html  = "<div class='list_wr' id='insta"+instaIdx+"' idx='"+map.get("id")+"' userIdx='"+map.get("user_id")+"' imgAddr='"+map.get("images_low_resolution")+"' likeCnt='"+map.get("likes_count")+"' username='"+map.get("user_username")+"' link='"+map.get("link")+"'><div class='viewDetail'><img src='"+map.get("images_low_resolution")+"' alt='리스트이미지' class='thumb' /><a href='#' class='zoom' onclick=\"viewLayer('"+instaIdx+"');return false;\" ><img src='http://image.fnckolon.com/customellow/images/event/140829/icn_zoom.png' alt='' /></a><div class='btns_wr'><div class='btns'><a href='"+map.get("link")+"' target='_blank' class='bt_like bt_like_on'>좋아요</a>"+map.get("likes_count")+"</div></div></div></div>"
								//var html  = "<li id='insta"+instaIdx+"' idx='"+map.get("id")+"' userIdx='"+map.get("user_id")+"' imgAddr='"+map.get("images_low_resolution")+"' likeCnt='"+map.get("likes_count")+"' username='"+map.get("user_username")+"' link='"+map.get("link")+"'><img src='"+map.get("images_low_resolution")+"' alt='리스트이미지' class='thumb' /></li>"
								var html = "";
								
								if(map.get("type") == "image") html = "<div class='element' id='insta"+instaIdx+"' idx='"+map.get("id")+"' userIdx='"+map.get("user_id")+"' imgAddr='"+map.get("images_low_resolution")+"' likeCnt='"+map.get("likes_count")+"' username='"+map.get("user_username")+"' link='"+map.get("link")+"'><a href='"+map.get("link")+"' target='_blank'><span class='a_wr'><img src='"+map.get("images_low_resolution")+"' alt='리스트이미지' class='thumb' /></span></a></div>";
								else if(map.get("type") == "video") html = "<div class='element' id='insta"+instaIdx+"' idx='"+map.get("id")+"' userIdx='"+map.get("user_id")+"' imgAddr='"+map.get("images_low_resolution")+"' likeCnt='"+map.get("likes_count")+"' username='"+map.get("user_username")+"' link='"+map.get("link")+"'><a href='"+map.get("link")+"' target='_blank'><img src='"+map.get("images_low_resolution")+"' alt='리스트이미지' class='thumb' /><span class='a_wr'><span class='over_bg'></span><span class='vod_bg'></span></span></a></div>";
								else alert("else : " + map.get("type"));

								var $newItems = $(html);
							    $list_container.append($newItems).isotope( 'addItems', $newItems );
								$list_container.isotope( 'appended', $newItems, function(){
									$list_container.isotope({                                
									    itemSelector : '.element'
									});
									$loader.fadeOut("slow");
								}); 
								
							}							
							map.clear();
						});
					}					
					me.loaded = true;
					
					
				
					//로딩이미지 none
					$('#loader').fadeOut("slow");
				});
				areaInit();

				
			},
			error : function(data) {
				me.loaded = true;
				//alert("인스타그램과 통신 실패하였습니다.");
			}
		});
	},
	getInstagramListByCube90 : function() {
		this.loaded = false;		
		var me = this;		
		var count = this.perCount;
		
		if (this.first) {
			count = this.initCount;
			instagram_target = "https://api.instagram.com/v1/tags/" + this.tagname
					+ "/media/recent?count=" + count;
			this.first = false;
		}
		var instagram_target = "https://api.instagram.com/v1/tags/" + this.tagname
		+ "/media/recent?count=" + count + "&max_tag_id=" + this.max_tag_id;

		var params = {
			client_id : "1550ddd962ef42e4b76831f196435ffc"
		};

		if (this.first) {
			$('#list_wr').empty();//이전 데이터 삭제
		}

		
		$.ajax({
			url : instagram_target,
			data : params,
			dataType : "jsonp",
			jsonp : "callback",
			success : function(data) {
				$list_container = $('#list_wr');
				var html  = "";
				$.each(data, function(index, entry) {
					//alert("meta : "+entry["meta"]+"\n"+"code : "+entry["code"]);			

					if (index == "pagination") {
						//alert("next_min_id : "+entry["next_min_id"]+"\n"+"min_tag_id : "+entry["min_tag_id"]+"\n"+"deprecation_warning : "+entry["deprecation_warning"]);							
						if (typeof (entry["next_url"]) == "undefined") {
							alert("마지막 페이지 입니다");
							$('#loader').fadeOut("slow");
							me.last = true;

						} else {
							//alert(entry["next_url"]);	
						}
						me.max_tag_id = entry["next_max_tag_id"]; //인스타에서 넘겨준 next_max_tag_id 를 세팅한다.					
					}

					if (index == "meta") {
						//alert(entry["code"]);
						/*if ("200" != entry["code"]) {
							$list_container_L.append("<P> [" + entry["code"] + "] "
									+ entry["error_message"] + "</P>");
							return;
						}*/
					}
					
					
					//var lucky_html = "<tr>";
					//var tdCnt = 0;
					if (index == "data") {
						var imageHtml = "";
						var cnt = 0;

						$.each(data['data'], function(dataList, arrdata) {
							//alert(cnt++);
							
							//
							var map = new Map();
							map.put("link", arrdata["link"]);
							map.put("id", arrdata["id"]);
							map.put("inp_date", arrdata["created_time"]);
							$.each(arrdata, function(key, obj) {
								//console.log(key);
								if (key == "created_time") {

								}
								
								if (key == "comments") {
									map.put("comments_count", obj["count"]);
								}
								
								
								if (key == "caption") {								
									map.put("text", obj["text"]);									
								}

								if (key == "likes") {
									//alert(obj["count"]);								
									map.put("likes_count", obj["count"]);
								}

								if (key == "images") {
									$.each(obj, function(type, image) {

										if (type == "low_resolution") {//low_resolution 306*306										
											img_low = image["url"];
											map.put("images_low_resolution", image["url"]);
										}
										if (type == "thumbnail") {//thumbnail 150*150
											img_thum = image["url"];										
											map.put("images_thumbnail", image["url"]);
										}
										if (type == "standard_resolution") {//standard_resolution 612*612
											img_std = image["url"];
											map.put("images_standard_resolution", image["url"]);
										}

									});
								}
								
								if (key == "user") {
									map.put("user_id", obj["id"]);
									map.put("user_profile_picture", obj["profile_picture"]);
									//map.put("user_full_name", obj["full_name"]);
									map.put("user_username", obj["username"]);
									
								}

								
							});
							
							
							/*console.log(map.size());
							console.log("=================================================================");							
							console.log(map.keys());
							console.log(map.values());
							console.log("=================================================================");*/


							/*
							도배로 해당 아이디 배제
							260815540-kpopcaandy
							269612006-kkamjongi_
							309773336-suaveisland
							19753546-kaisexual
							322619877-xeixaoo
							325641152-soojungnews*/
							if(map.get("user_id").indexOf("260815540") != -1 || 
							   map.get("user_id").indexOf("269612006") != -1 || 
							   map.get("user_id").indexOf("309773336") != -1 || 
							   map.get("user_id").indexOf("19753546")  != -1 || 
							   map.get("user_id").indexOf("322619877") != -1 || 
							   map.get("user_id").indexOf("325641152") != -1 )  {								
								
							}else{
								instaIdx ++;
								//var html = "<li idx='"+map.get("id")+"' userIdx='"+map.get("user_id")+"'><a href='" + map.get("link")+ "' target='_blank');\"><img src='"+map.get("images_low_resolution")+"'  alt='리스트 이미지' /></a><a href='#styleList01' onclick=\"checkDetail('"+map.get("images_standard_resolution")+"','"+map.get("id")+"','"+map.get("link")+"');\"><span class='view'>DETAIL VIEW</span></a></li>";
								//var html = "<div class='element'><a href='" + map.get("link")+ "' target='_blank'><img src='"+map.get("images_low_resolution")+"' alt='리스트이미지' /></a></div>";
								//console.log('instaIdx:'+instaIdx);
								var classname = 'list';
								if(instaIdx == 1){
									classname += ' first';
								}
								
								if(map.get("user_username") == "mycustomellow"){
										classname += ' even';	
								}
								
								var date = new Date(parseInt(map.get("inp_date")) * 1000);
								

								html +="<div class='"+classname+"'>  ";
								html 	+="				<div class='wr'>  ";
								html +="					<div class='wr_inner'> ";
								html 	+="						<div class='top_ar'>  ";
								html 	+="							<div class='u_pic'><img src='"+map.get("user_profile_picture")+"' alt='love hanan' /></div>";
								html 	+="							<div class='u_pic_etc'> ";
								html 	+="								<span class='u_id'>"+map.get("user_username")+"</span>  ";
								html 	+="								<!--span class='u_country'>Venezia</span-->";
								html 	+="								<span class='u_like'>  ";
								html 	+="									<span>♥</span>"+  map.get("likes_count") +"";
								html 	+="								</span> ";
								html 	+="							</div>";
								html 	+="						</div> ";
								html 	+="						<div class='img_ar'>  ";
								html 	+="							<a href='"+map.get("link")+"' target='_blank'><img src='"+ map.get("images_low_resolution")	+ "' alt='' /></a>  ";
								html 	+="						</div> ";
								html 	+="						<div class='date_ar'>"+(date.getMonth()+1)+"/"+date.getDate()+"/"+date.getFullYear()+"</div> ";
								html 	+="						<div class='cont_ar'> ";
								html 	+="							"+map.get("text")+"  <span class='red'></span>";
								html 	+="						</div> ";
								html 	+="					</div>  ";
								html 	+="				</div>";
								html 	+="			</div>  ";
								
								
								//$list_container.append(html);
								
								
								
								
								                                                                                                                                                                       
							}							                                                                                                                                               
							map.clear();   
							
						});                                                                                                                                                                             
					}					
					me.loaded = true;
					
					
				});
				
				var $newItems = $(html);
				$list_container.append($newItems).isotope( 'addItems', $newItems );
				$list_container.isotope( 'appended', $newItems, function(){
					$list_container.isotope({
						itemSelector : '.list',
					});
					$('#loader').fadeOut("slow");
				});

				
			},
			error : function(data) {
				me.loaded = true;
				//alert("인스타그램과 통신 실패하였습니다.");
			}
		});
	},
	getInstagramListCount : function() {
		//alert("123123");
		var me = this;
		var instagram_target = "https://api.instagram.com/v1/tags/" + this.tagname;
		var params = {
			client_id : "1550ddd962ef42e4b76831f196435ffc"
		};
		
		$.ajax({
			url : instagram_target,
			data : params,
			dataType : "jsonp",
			jsonp : "callback",
			success : function(data) {
				//$('#pageInfo').empty();
				//$('#pageInfo').append('json 데이터 읽기 성공<br/>'); 
				$.each(data, function(index, entry) {

					if (index == "meta") {
						//alert(entry["code"]);
					}
					if (index == "data") {
						me.instargramCount = entry["media_count"];
						alert(me.instargramCount);
						//$('#pageInfo').append("media_count : "+entry["media_count"]+"<br/>"+"name : "+entry["name"]+"<br/>");
					}

				});

			},
			error : function(data) {
				//alert("인스타그램과 통신 실패하였습니다.");
			}
		});

	}
	
	
};


