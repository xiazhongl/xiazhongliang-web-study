$("button:first").click(function() {
    $("#a1").slideUp(3000)
});
$("button:last").click(function() {
    $("#a2").slideUp(3000,function(){
        alert('动画执行结束')
    })
});