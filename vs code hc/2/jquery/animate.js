$("#c").click(function(){
    $("p").animate({
      height:'toggle',  //变高变低
      left:'250px'      //在左边增加250px；
    });
  });
  $("#c").click(function(){
    var div=$("p");
    div.animate({height:'300px',opacity:'0.4'},"fast");//高度增加300px，透明度设置为0.4，快速
    div.animate({width:'300px',opacity:'0.8'},"slow");
    div.animate({height:'100px',opacity:'0.4'},"slow");//高度减少100px，透明度设置为0.4，慢速
    div.animate({width:'100px',opacity:'0.8'},"slow");
  });
    $("#c").click(function(){
      var div=$("p");  
      div.animate({left:'100px'},"slow");//左边增加100px；
      div.animate({fontSize:'3em'},"slow");//字体大小改变成3em；
    });