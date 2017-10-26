$("#exec").click(function() {
    var v = $("#animation").val();
    var $aaron = $("#aaron");
    $aaron.empty();
    if (v == "1") {

        // 遍历数组元素
        $.each(['Aaron', '慕课网'], function(i, item) {
            $aaron.append("索引=" + i + "; 元素=" + item);
        });
    } else if (v == "2") {
        // 遍历对象属性
        $.each({
            name: "张三",
            age: 18
        }, function(property, value) {
            $aaron.append("属性名=" + property + "; 属性值=" + value);
        });
    } 
});