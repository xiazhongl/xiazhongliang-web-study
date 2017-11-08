$("button:first").click(function() {
    $("#a1").slideDown(3000)
});
$("button:last").click(function() {
    $("#a2").slideDown(3000,function(){
        alert('动画执行结束')
    })
});

