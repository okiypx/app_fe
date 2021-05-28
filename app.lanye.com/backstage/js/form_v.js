/**
 * Created by Administrator on 2016/7/20.
 */
$(function(){
    //原生제출表单必填字段验证
    //$("#form").validate();
    $(".select2").select2();
    //초기화
    $('#restSearchForm').click(function(){
        var f = $(this).parents('form');
        f.find('input').val('');
        f.find('select').val('');
    });

    //导出
    $('#export').click(function (){
        var f = $(this).parents('form');
        var route = $(this).attr('data-route')
        f.attr('action', route);
        f.submit();
        f.attr('action', "");
    })
});