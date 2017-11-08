$('#c').click(function(){
    alert($('#b').text());//返回元素的文本内容
});
$("#c").click(function(){
    alert($("#b").attr("href")); //返回元素的href里的内容
  });
  $("#c").click(function(){
    alert("Value: " + $("#input_a").val()); //获取元素里的val值
  });

  $("#c").click(function(){
    $("#b").text("Hello world!");//赋值
  });
  $("#c").click(function(){
    $("#b").html("<b>Hello world!</b>");
  });
  $("#c").click(function(){
    $("#input_a").val("Dolly Duck");
  });
  $("#c").click(function(){
    $("#b").attr("href","http://www.w3school.com.cn/jquery");
  });