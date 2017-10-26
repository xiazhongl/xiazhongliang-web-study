$("#exec").click(function() {
    var v = $("#animation").val();
    var $aaron = $("#aaron");
       $aaron.empty();
    if (v == "1") {

        var index = $.inArray('Aaron',['test','Aaron', 'array','慕课网']);

        $aaron.text('Aaron的索引是: '+ index)

    } else if (v == "2") {

        //指定索引开始的位置
        var index = $.inArray('a',['a','b','c','d','a','c'],2);

        $aaron.text('a的索引是: '+ index)
    } 
});