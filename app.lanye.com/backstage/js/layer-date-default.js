var start = {
    elem: '#start_at',
    format: 'YYYY-MM-DD hh:mm:ss',
    //min: laydate.now(), //设定最小日期为当前日期
    max: '2099-06-16 23:59:59', //최고日期
    istime: true,
    istoday: false,
    choose: function(datas){
        end.min = datas; //스타트日选好后，초기화종료日的最小日期
        end.start = datas //将종료日的初始值设定为스타트日
    }
};
var end = {
    elem: '#end_at',
    format: 'YYYY-MM-DD 23:59:59',
    //min: laydate.now(),
    max: '2099-06-16 23:59:59',
    istime: true,
    istoday: true,
    choose: function(datas){
        start.max = datas; //종료日选好后，초기화스타트日的최고日期
    }
};
laydate(start);
laydate(end);
