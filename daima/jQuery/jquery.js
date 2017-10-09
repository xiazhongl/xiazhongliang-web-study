
// $(document).ready(function(){
//     $("div").html("你好！国庆节快乐。");
// });
// var $p = $('#imooc');
// $p.html('您好！通过慕课网学习jQuery才是最佳的途径').css('color','red');

// // var $div = $('div');
// // var div = $div.get(0);
// // div.style.color = 'red';

// var div=document.getElementsByTagName('div');
// var $div=$(div);
// var $first = $div.first();
// $first.css('fontSize','20px');

// // $(".imo:first").css('color','red');
// // $(".imo:last").css('color','yellow');
// $(".imo:not(:last)").css('color','black');
// // $(".imo:not(div)").css('color','blue');
// // $("[bgcolor]").css('color','purple');
// // $("p.intro").css('color','orange');
// // $("p:eq(3)").css('color','green');
$("p:contains('m')").css('color','red');
// $("div:empty").css('color','blue');
// $("p:hidden").css('display','block');
// $(".imo,.imo1").css('color','red');
// // $(":text").css('color','red');
// $(":checked").css('width','40px' ).css('height','40px' );

var $body = $('body');
$body.on('click', function() {
    //通过jQuery生成div元素节点
    var div = $("<div class='right'><div class='aaron'>动态创建DIV元素节点</div></div>")
    $body.append(div)
})

$("#bt1").on('click', function() {
    //.append(), 内容在方法的后面，
    //参数是将要插入的内容。
    $(".content").append('<div class="append">通过append方法添加的元素</div>')
})

