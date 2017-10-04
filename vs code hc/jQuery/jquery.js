
$(document).ready(function(){
    $("div").html("你好！国庆节快乐。");
});
var $p = $('#imooc');
$p.html('您好！通过慕课网学习jQuery才是最佳的途径').css('color','red');

// var $div = $('div');
// var div = $div.get(0);
// div.style.color = 'red';

var div=document.getElementsByTagName('div');
var $div=$(div);
var $first = $div.first();
$first.css('fontSize','20px');

// $(".imo:first").css('color','red');
// $(".imo:last").css('color','yellow');
// $(".imo:not(:last)").css('color','black');
// $(".imo:not(div)").css('color','blue');
// $("[bgcolor]").css('color','purple');
// $("p.intro").css('color','orange');
// $("p:eq(3)").css('color','green');
// $("p:contains('madfg')").css('color','red');
$("div:empty").css('color','blue');
$("p:hidden").css('display','block');
$(".imo,.imo1").css('color','red');
// $(":text").css('color','red');
$(":checked").css('width','40px' ).css('height','40px' );