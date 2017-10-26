
$(".aaron1").mousemove(function(e) {
    $(this).find('p:last').html('移动的X位置：' + e.pageX)
})
function data(e){
    $(this).find('p:last').html('数据:'+e.data)
}
function a(){
    $(".right").mousemove(1111,data)
}
a();
// $('h2').mouseover(function(e){
//     document.write('触发绑定事件')
// })
// $("button").click(function(e){
//     $('h2').mouseover()
// })

var i = 0;
$(".aaron2 p").mouseenter(function(e) {
    $(".aaron2 a:first").html('mouseenter事件触发次数：' + (++i))
})

var n = 0;
$(".aaron2").mouseenter(function() {
    $(".aaron2 a:last").html('mouseenter冒泡事件触发次数：' + (++n))
})

$('p').hover(function(){
    $(this).css('background','red');
},function(){
    $(this).css('background','#bbffaa');
})

$('input:first').focusin(function(){
    $(this).css('border','20px solid red')
})
function fn(e){
    $(this).val(e.data)
}
function a(){
    $("input:last").focusin('mukewang',fn)
}
a();


    $('.target1').change(function(e) {
        $("#result").html(e.target.value)
    });
    $(".target2").change(function(e) {
        $("#result").html(e.target.value)
    })
    $(".target3").change(function(e) {
        $("#result").html(e.target.value)
    })

    $('#target1').submit(function(e) {
        alert('捕获提交表达动作,不阻止页面跳转')
    });

    $('#target2').submit(function() {
        alert('捕获提交表达动作,阻止页面跳转')
        return false;
    });


    $('.target1').keydown(function(e) {
        $("em:first").text(e.target.value)
    });

    $('.target2').keyup(function(e) {
        $("em:last").text(e.target.value)
    });

    //不会显示，回车才显示
    $('.target1').keypress(function(e) {
        $("em").text(e.target.value)
    });

    $("#test2").on('mousedown mouseup', function(e) {
        $(this).text('触发事件：' + e.type)
    })

    $("#test3").on({
        mousedown: function(e) {
            $(this).text('触发事件：' + e.type)
        },
        mouseup: function(e) {
            $(this).text('触发事件：' + e.type)
        }
    })

    $('body').on('click','a',function(e){
            alert(e.target.textContent)
    })

   // 删除绑定 
    $('body').off('mousedown')   // 删除一个
    $('body').off()    // 删除所有

    // 为 <span> 元素绑定 click 事件  
    $("span").click(function() {
        $("#msg").html($("#msg").html() + "<p>内层span元素被单击</p>");
    });
    // 为 Id 为 content 的 <div> 元素绑定 click 事件  
    $("#content").click(function(event) {
        $("#msg").html($("#msg").html() + "<p>外层div元素被单击</p>");
        event.stopPropagation(); //阻止事件冒泡  
    });
    // 为 <body> 元素绑定 click 事件  
    $("body").click(function() {
        $("#msg").html($("#msg").html() + "<p>body元素被单击</p>");
    });

