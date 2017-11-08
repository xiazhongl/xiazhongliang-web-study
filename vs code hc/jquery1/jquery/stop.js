$("#c").click(function(){
    $("p").animate({marginLeft:'100px'},5000);
    $("p").animate({fontSize:'3em'},5000);
  });
  
  $("#d").click(function(){
    $("p").stop();      //停止
  });

  $("#e").click(function(){
    $("p").stop(true);//停止所有
  });

  $("#f").click(function(){
    $("p").stop(true,true);//停止并完成
  });

  // $("#p1").css("color","red")
  // .slideUp(2000)
  // .slideDown(2000);
  

  $(".btn1").click(function(){
    $("#box").animate({height:"300px"});//自定义动画
  });
  $("#stop").click(function(){//停止当前正在运行的动画：
    $("#box").clearQueue();
  });
  $(".btn2").click(function(){//使用淡入效果来显示一个隐藏的 <p> 元素：
    $("p").fadeIn();
  });
  $(".btn1").click(function(){//使用淡出效果来隐藏一个 <p> 元素：
    $("p").fadeOut();
  });
  $(".btn1").click(function(){//使用淡出效果来隐藏一个 <p> 元素：
    $("p").fadeTo(1000,0.4);
  });
  $(".btn1").click(function(){
    $("p").hide();//隐藏可见的 <p> 元素：
  });
  $(".btn2").click(function(){//显示出隐藏的 <p> 元素。
    $("p").show();
  });
  $(".btn2").click(function(){//以滑动方式显示隐藏的 <p> 元素：
    $("p").slideDown();
  });
  $(".btn1").click(function(){//通过使用滑动效果，在显示和隐藏状态之间切换 <p> 元素：
    $("p").slideToggle();
  });
  $(".btn1").click(function(){//以滑动方式隐藏 <p> 元素：
    $("p").slideUp();
  });
  $("#stop").click(function(){//停止当前正在运行的动画：
    $("#box").stop();
  });
  $(".btn1").click(function(){//切换 <p> 元素的显示与隐藏状态：
    $("p").hide();
  });
  $("button").click(function(){//向第一个 p 元素添加一个类：
    $("p:first").addClass("intro");
  });
  $("button").click(function(){
    $("p").after("<p>Hello world!</p>");//在每个 p 元素后插入内容：
  });
  $("button").click(function(){
    $("p").append(" <b>Hello world!</b>");//在每个 p 元素结尾插入内容：
  });
  $("button").click(function(){
    $("<b>Hello World!</b>").appendTo("p");//在每个 p 元素结尾插入内容：
  });
  $("button").click(function(){
    $("img").attr("width","180");//改变图像的 width 属性：
  });
  $("button").click(function(){
    $("p").before("<p>Hello world!</p>");//在每个 p 元素前插入内容：
  });
  $("button").click(function(){
    $("body").append($("p").clone());//克隆并追加一个 p 元素：
  });
  $("button").click(function(){
    $("p").detach();//移除所有 p 元素：
  });
  $(".btn1").click(function(){//移除 p 元素的内容：
    $("p").empty();
  });
  $("button").click(function(){//检查第一个 <p> 元素是否包含 "intro" 类：
    alert($("p:first").hasClass("intro"));
  });
  $(".btn1").click(function(){//设置所有 p 元素的内容：
    $("p").html("Hello <b>world</b>!");
  });
  $("button").click(function(){
    $("<span>Hello world!</span>").insertAfter("p");//在每个 p 元素之后插入 span 元素：
  });
  $("button").click(function(){
    $("<span>Hello world!</span>").insertBefore("p");//在每个 p 元素之前插入 span 元素：
  });
  $(".btn1").click(function(){
    $("p").prepend("<b>Hello world!</b>");//在 p 元素的开头插入内容：
  });
  $(".btn1").click(function(){
    $("<b>Hello World!</b>").prependTo("p");//在每个 p 元素的开头插入内容：
  });
  $("button").click(function(){//移除所有 <p> 元素：
    $("p").remove();
  });


  $(".btn1").click(function(){//设置或返回匹配元素的样式属性。
    $("p").css("color","red");
  });
  $(".btn1").click(function(){//设置或返回匹配元素的高度.
    $("p").height(50);
  });
  $(".btn1").click(function(){//返回第一个匹配元素相对于文档的位置。
    x=$("p").offset();
    $("#span1").text(x.left);
    $("#span2").text(x.top);
  });
  $("button").click(function(){//返回最近的定位祖先元素。
    $("p").offsetParent().css("background-color","red");
  });
  $(".btn1").click(function(){//获得 <p> 元素的当前位置：
    x=$("p").position();
    $("#span1").text(x.left);
    $("#span2").text(x.top);
  });
  $(".btn1").click(function(){//设置 <div> 元素中滚动条的水平偏移：
    $("div").scrollLeft(100);
  });
  $(".btn1").click(function(){//设置 <div> 元素中滚动条的垂直偏移：
    $("div").scrollLeft(100);
  });
  $(".btn1").click(function(){//设置 <p> 元素的宽度：
    $("p").width(200);
  });
  $(document).ready(function(){//通过 AJAX 加载一段文本：
    $("#b01").click(function(){
    htmlobj=$.ajax({url:"/jquery/test1.txt",async:false});
    $("#myDiv").html(htmlobj.responseText);
    });
  });



  $("div").append("<p>" + $("div").context + "</p>")//检测上下文：
  .append("<p>" + $("div",document.body).context.nodeName + "</p>");
  $("#txt").ajaxStart(function(){//当 AJAX 请求正在进行时显示“正在加载”的指示：
    $("#wait").css("display","block");
  });
  $("#txt").ajaxComplete(function(){
    $("#wait").css("display","none");
  });
  $("div").ajaxError(function(){//当 AJAX 请求失败时，触发提示框：
    alert("An error occurred!");
  });
  $("div").ajaxSend(function(e,xhr,opt){//当 AJAX 请求即将发送时，改变 div 元素的内容：
    $(this).html("Requesting " + opt.url);
  });
  $("button").click(function(){//为所有 AJAX 请求设置默认 URL 和 success 函数：
    $.ajaxSetup({url:"demo_ajax_load.txt",success:function(result){
      $("div").html(result);}});
    $.ajax();
  });
  $("div").ajaxStart(function(){//当 AJAX 请求开始时，显示“加载中”的指示：
    $(this).html("<img src='demo_wait.gif' />");
  });
  $("div").ajaxStop(function(){//当所有 AJAX 请求完成时，触发一个提示框：
    alert("所有 AJAX 请求已完成");
  });
  $("div").ajaxSuccess(function(){//当 AJAX 请求成功完成时，触发提示框：
    alert("AJAX 请求已成功完成");
  });
  $("button").click(function(){//使用 AJAX 请求来获得 JSON 数据，并输出结果：
    $.getJSON("demo_ajax_json.js",function(result){
      $.each(result, function(i, field){
        $("div").append(field + " ");
      });
    });
  });
  $("button").click(function(){//通过 AJAX 请求来获得并运行一个 JavaScript 文件：
    $.getScript("demo_ajax_script.js");
  });
  $("button").click(function(){//使用 AJAX 请求来改变 div 元素的文本：
    $("div").load('demo_ajax_load.txt');
  });
  var params = { width:1900, height:1200 };//序列化一个 key/value 对象：
  var str = jQuery.param(params);
  $("#results").text(str);
  $("input").keyup(function(){//通过 AJAX POST 请求改变 div 元素的文本：
    txt=$("input").val();
    $.post("demo_ajax_gethint.asp",{suggest:txt},function(result){
      $("span").html(result);
    });
  });
  $("button").click(function(){
    x=$("form").serializeArray();//输出以数组形式序列化表单值的结果：
    $.each(x, function(i, field){
      $("#results").append(field.name + ":" + field.value + " ");
    });
  });
  $("button").click(function(){
    x=$("form").serializeArray();//输出以数组形式序列化表单值的结果：
    $.each(x, function(i, field){
      $("#results").append(field.name + ":" + field.value + " ");
    });
  });

  $("div").css("border", "2px solid red")//找到所有 div 并添加边框。然后将所有段落添加到该 jQuery 对象，并把它们的背景设置为黄色：
  .add("p")
  .css("background", "yellow");
  $("div").find("p").andSelf().addClass("border");//把堆栈中之前的元素集添加到当前集合中。
  $("div").find("p").addClass("background");
  $("div").children(".selected").css("color", "blue");//找到类名为 "selected" 的所有 div 的子元素，并将其设置为蓝色：
  $( document ).bind("click", function( e ) {//
    $( e.target ).closest("li").toggleClass("hilight");
  });
  $("p").contents().filter(function(){ return this.nodeType != 1; }).wrap("<b/>");//找到段落中的所有文本节点，并用粗体标签包装它们。
  $("button").click(function(){//输出每个 li 元素的文本：
    $("li").each(function(){
      alert($(this).text())
    });
  });
  
  $("p").find("span").end().css("border", "2px red solid");//选择所有段落，找到这些段落中的 span 元素，然后将它们恢复为段落，并把段落设置为两像素的红色边框：
  $("body").find("div").eq(2).addClass("blue");//通过为 index 为 2 的 div 添加适当的类，将其变为蓝色：
  $("div").css("background", "#c8ebcc")//改变所有 div 的颜色，然后向类名为 "middle" 的类添加边框：
  .filter(".middle")
  .css("border-color", "red");
  $("p").find("span").css('color','red');//搜索所有段落中的后代 span 元素，并将其颜色设置为红色：
  $("p span").first().addClass('highlight');//高亮显示段落中的第一个 span ：
  $("ul").append("<li>" + ($("ul").has("li").length ? "Yes" : "No") + "</li>");
  $("ul").has("li").addClass("full");//检测某个元素是否在另一个元素中：
  var isFormParent = $("input[type='checkbox']").parent().is("form");//返回 false，因为 input 元素的父元素是 p 元素：
  $("div").text("isFormParent = " + isFormParent);
  <li><a href="#" class="top_li_one">首页</a></li>
<li><a href="#">服务</a></li>
<li><a href="#">发现</a></li>
<li><a href="#">申请入驻</a></li>