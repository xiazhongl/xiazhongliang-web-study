$("button:first").click(function(){
    $("#a1").hide()
});

$("button:last").click(function(){
    $("#a2").hide({
        duration:3000,
        complete:function(){
            alert("执行3000ms动画完毕")
        }
    })
});
