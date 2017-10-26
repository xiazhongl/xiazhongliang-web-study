$("#exec").click(function() {
    var v = $("#animation").val();

    var $span = $("span");
    $span.empty();

    if (v == "1") {
        //找到第一个li的同辈节点中的索引位置
        $span.text($("li").index())
    } else if (v == "2") {

        //通过传递dom查找
        $span.text($("li").index(document.getElementById("test5")))

    } else if (v == "3") {
        //通过传递jQuery对象查找
        $span.text($("li").index($("#test6")))

    }
});