var global_page_idx             = 1;                        //현재페이지
    var global_residual_page_count  = 1;                        //잔여페이지 갯수
    var row                         = 6;                        //한번에 가져올 아이템
    var content_id                  = '1511';
    var main_edit_close = true;
    var instaIdx = 0;
    var currentIdx = 0;
    instaAPI=new instagramAPI("commonground1st",6, 6);
    function accessInstagramAPI() {
        instaAPI.getInstagramListByCommonground();
    }

    $(document).ready(function(){
        //############### start ############################//
      	$('.cg_main_slide .slider1').bxSlider({//cg_main_slide 이미지 슬라이더
            controls: false,
            auto: true
        });

        $('.main_slide123').bxSlider({//main_slide123 이미지 슬라이더
            pager: false,
            auto: true
        });
        //############### end ##############################//
    });


    var page_num = 1;
    function loadData2(){
        if (page_num == 5)
        {
            $('#main_slide_more').hide();
        }
        if (page_num > 5)
        {
            return false;
        }
        var $container = $('.main_contsslide');
        $container.isotope({
            itemSelector : '.list_inner'
        });

        //기본파라미터세팅
        $parameter_string = "?pageIdx="+global_page_idx;
        $parameter_string += "&ChRowsPerPage="+row;
        $parameter_string += "&content_id="+content_id;

        $create_data_url = "/comground/createList.jsp"+$parameter_string;;//데이터 불러오는 파일입니다.
        $.get($create_data_url, function(data,status){
            var $newItems = $(data);
            $container.append($newItems).isotope( 'addItems', $newItems );
            $container.isotope( 'appended', $newItems, function(){
                $container.isotope({
                    itemSelector : '.list_inner'
                });
            });
        });
        if (page_num <= 5)
        {
            page_num++;
            global_page_idx++;
        }
    }