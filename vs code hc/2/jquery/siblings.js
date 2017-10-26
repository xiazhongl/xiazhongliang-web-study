$(document).ready(function(){
    $("h2").siblings().css('color','red');//选择所有的同胞元素
    // $("h2").siblings("p").css('color','red');//选择是p的同胞元素
    // $("h2").next().css('color','red');//选择下一个同胞元素
    // $("h2").nextAll().css('color','red');//选择后面所同胞有元素
    // $("h2").nextUntil("h6").css('color','red');//选择之间的同胞元素
    // $("h2").prev().css('color','red');//选择上一个同胞元素
    // $("h2").prevAll().css('color','red');//选择上面所同胞有元素
    // $("h2").prevUntil("h6").css('color','red')//选择之间的同胞元素
    // $("p").filter(".intro");//选择类名为intro的所有p元素
    // $("p").not(".intro");//选择类名不为intro的所有p元素
    // $("div p").first();//选择div里第一个p元素
    // $("div p").last();//选择div里最后一个p元素
    // $("div p").eq(1);//选择第2个p元素
    // $('*');//选择所有的元素
    // $('#id');//选择id
    // $('.class');//选择class
    // $('p');//选择p元素
    // $('.class.class1');//选择类名叫class且class叫class1的元素
    // $('p:first');//选择第一个p元素
    // $('p:last');//选择最后一个p元素
    // $('p:even');//选择偶数p元素
    // $('p:odd');//选择奇数p元素
    // $('[href]');//选择带有 href 属性的元素
    // $("[href='#']");//选择所有href 属性的值等于 "#" 的元素
    // $("[href!='#']");//选择所有 href 属性的值不等于 "#" 的元素
    // $(":input");//选择所有 <input> 元素
    // $(":text");//选择所有 type="text" 的 <input> 元素
    // $(":password");//选择所有 type="password" 的 <input> 元素
    // $(":radio");//选择所有 type="radio" 的 <input> 元素
    // $(":checkbox");//选择所有 type="checkbox" 的 <input> 元素
    // $(":submit");//选择所有 type="submit" 的 <input> 元素
    // $(":reset");//选择所有 type="reset" 的 <input> 元素
    // $(":button");//选择所有 type="button" 的 <input> 元素
    // $(":image");//选择所有 type="image" 的 <input> 元素
    // $(":file");//选择所有 type="file" 的 <input> 元素
    });
  // $("button").bind("click",function(){
  //   $("p").slideToggle();//为被选元素添加一个或多个事件处理程序
  // });
  // $("input").blur(function(){
  //   $("input").css("background-color","#D6D6FF");//当输入域失去焦点时改变颜色
  // });
  // $(".field").change(function(){
  //   $(this).css("background-color","#FFFFCC");//当输入域发生变化时改变颜色
  // });
  // $("button").dblclick(function(){
  //   $("p").slideToggle();//当双击按钮时，隐藏或显示元素
  // });
  // $("div").delegate("button","click",function(){
  //   $("p").slideToggle();//当点击鼠标时，隐藏或显示 p 元素：
  //   $("p").die();//移除所有通过 live() 方法向 p 元素添加的事件处理程序：
  // });
  // $("img").error(function(){
  //   $("img").replaceWith("Missing image!");//如果图像不存在，则用一段预定义的文本取代它：
  // });



  $("a").click(function(event){
    event.preventDefault();
   alert("Default prevented: " + event.isDefaultPrevented());//阻止链接打开
 });
 $(document).mousemove(function(e){
  $("span").text("X: " + e.pageX + ", Y: " + e.pageY);//显示鼠标位置
});
$("button").click(function(e) {
  $("p").html(e.result);//显示最后一次点击事件返回的结果：
});
$("p, button, h1, h2").click(function(event){
  $("div").html("Triggered by a " + event.target.nodeName + " element.");
});//显示哪个 DOM 元素触发了事件：
$("button").click(function(event){
  $("span").html(event.timeStamp);//显示出当对按钮元素的点击事件发生时的时间戳：
});
$("p").bind('click dblclick mouseover mouseout',function(event){
  $("div").html("Event: " + event.type);//显示触发了哪种类型的事件：
});
$("input").keydown(function(event){
  $("div").html("Key: " + event.which);//显示按了哪个键：
});
$("input").focus(function(){
  $("input").css("background-color","#FFFFCC");//当输入框获得焦点时，改变它的背景色：
});
$("input").keydown(function(){
  $("input").css("background-color","#FFFFCC");//当按下按键时，改变文本域的颜色：
});
$("input").keydown(function(){
  $("span").text(i+=1);//计算在输入域中的按键次数
});
$("input").keyup(function(){
  $("input").css("background-color","#D6D6FF");//当按下按键时，改变文本域的颜色：
});
$("img").load(function(){
  $("div").text("Image loaded");//当图像加载时，改变 div 元素的文本：
});
$("button").live("click",function(){
  $("p").slideToggle();//当点击按钮时，隐藏或显示 p 元素：
});
$("button").mousedown(function(){
  $("p").slideToggle();//当按下鼠标按钮时，隐藏或显示元素：
});
$("p").mouseenter(function(){
  $("p").css("background-color","yellow");//当鼠标指针进入（穿过）元素时，改变元素的背景色：
});
$("p").mouseleave(function(){
  $("p").css("background-color","#E9E9E4");//当鼠标指针离开元素时，改变元素的背景色：
});
$(document).mousemove(function(e){
  $("span").text(e.pageX + ", " + e.pageY);//获得鼠标指针在页面中的位置：
});
$("p").mouseout(function(){
  $("p").css("background-color","#E9E9E4");//当鼠标从元素上移开时，改变元素的背景色：
});
$("p").one("click",function(){
  $(this).animate({fontSize:"+=6px"});//当点击 p 元素时，增加该元素的文本大小：
});
$(document).ready(function(){
  $(".btn1").click(function(){
    $("p").slideToggle();//在文档加载后激活函数：
  });
});
$(window).resize(function() {
  $('span').text(x+=1);//对浏览器窗口调整大小进行计数：
});
$("input").select(function(){
  $("input").after(" Text marked!");//在文本域后添加文本，以显示出提示文本：
});
$("form").submit(function(e){
  alert("Submitted");//当提交表单时，显示警告框：
});
$("p").toggle(
  function(){
  $("body").css("background-color","green");},
  function(){
  $("body").css("background-color","red");},
  function(){
  $("body").css("background-color","yellow");}//切换不同的背景色：
);
$("button").click(function(){
  $("input").trigger("select");//触发 input 元素的 select 事件：所有
});
$("button").click(function(){
  $("input").triggerHandler("select");//触发 input 元素的 select 事件：第一个
});
$("button").click(function(){
  $("p").unbind();//移除所有 p 元素的事件处理器：*******
  $("body").undelegate();//从所有元素删除由 delegate() 方法添加的所有事件处理器：
});