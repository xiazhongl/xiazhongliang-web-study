
    // $("#c").click(function(){
    //   $("p").append(" <b>Appended text</b>.");//插入内容，prepend是在前面加内容after是在被选元素之后插入内容，before是造前面插入内容
    // });
    // //删除，remove，empty是删除被选元素的子元素
    // $("#c").click(function(){
    //     $("h1,h2,p").addClass("blue");
    //     $("div").addClass("important");//添加class
    //   });
    //   $("#c").click(function(){
    //     $("#b").addClass("important blue");
    //   });
    //   $("#c").click(function(){
    //     $("h1,h2,p").removeClass("blue");
    //   });
    //   $("#c").click(function(){
    //     $("h1,h2,p").toggleClass("blue");
    //   });


    //   $("p").css({"background-color":"yellow","font-size":"200%"});//设置css样式
      
      
      // $("#c").click(function(){
      //   var txt="";
      //   txt+="Inner width: " + $("div").innerWidth() + "</br>";
      //   txt+="Inner height: " + $("div").innerHeight();
      //   $("div").html(txt);//设置和返回元素的宽和高，前面加innner就是返回元素的宽和高当是包括内边距，加上outer就是返回宽和高但是包括内边距和边框，在后面加上徒惹得值就是会返回外边距

      // });
      // $(document).ready(function(){
      //   $("span").parent().css('color','red');//选择span的祖先元素
      // });
      $(document).ready(function(){
        $("span").parentsUntil("div").css('color','red');//返回span和div之间的祖元素
      });
      
      $(document).ready(function(){
        $("div").children();//返回直接子元素
      });
      $(document).ready(function(){
        $("div").children("p.1");//返回class为1的所有p元素，并且是div的子元素
      });
      $(document).ready(function(){
        $("div").find("span");//返回后代里面所有span子元素
      });
      $(document).ready(function(){
        $("div").find("*");//返回所有子元素
      });
    // $("#c").click(function(){
    //     $("p").before(" <b>Appended text</b>.");//插入内容，prepend是在前面加内容after是在被选元素之后插入内容，before是造前面插入内容
    //   });