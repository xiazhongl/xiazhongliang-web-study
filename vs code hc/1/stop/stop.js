$("#exec").click(function(){
    $("#aaron").animate({
        height: 300
    }, 5000)
    $("#aaron").animate({
        width: 300
    }, 5000)
    $("#aaron").animate({
        opacity: 0.6
    }, 2000)
})


$("#stop").click(function() {
    var v = $("#animation").val();
    var $aaron = $("#aaron");
    if (v == "1") {
        //当前当前动画
        $aaron.stop()
    } else if (v == "2") {
        //停止所以队列
        $aaron.stop(true)
    } else if (v == "3") {
        //停止动画，直接跳到当前动画的结束
        $aaron.stop(true,true)
    } 
});