$("#exec").click(function() {
    var v = $("#animation").val();
    var $aaron = $("#aaron");
    if (v == "1") {
        //观察每一次动画的改变
        $aaron.animate({
            height: '50'
        }, {
            duration :2000,
            //每一个动画都会调用
            step: function(now, fx) {
               $aaron.text('高度的改变值:'+now)
            }
        })
    } else if (v == "2") {
        //观察每一次进度的变化
        $aaron.animate({
            height: '50'
        }, {
            duration :2000,
            //每一步动画完成后调用的一个函数，
            //无论动画属性有多少，每个动画元素都执行单独的函数
            progress: function(now, fx) {
               $aaron.text('进度:'+arguments[1])

            }
        })
    } 
});