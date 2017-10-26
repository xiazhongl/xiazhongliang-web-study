$("#exec").click(function() {
    var v = $("#animation").val();
    var $aaron = $("#aaron a");

    //通过get找到第二个a元素，并修改蓝色字体
    if (v == "1") {
       $aaron.get(1).style.color = "blue"
    } else if (v == "2") {
        //通过get找到最后一个a元素，并修改字体颜色
        $aaron.get(-1).style.color = "#8A2BE2"
    }
});