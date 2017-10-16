// Request.open("POST","create.php",true);
// Request.setRequesHeader("Content-type",application/x-www-form-urlencode);
// Request.send("name=王二狗&sex=男");

$(document).ready(function(){
    $(window).scroll(function(){
        var top=$(document).scrollTop();
        var menu=$("#menu");
        var items=$("#content").find(".item");
        var currentid="";
        items.each(function(){
            var itemTop=m.offset().top;
            if(top>itemTop-200){
                currentid="#"+m.attr("id");
            }else{
                return false;
            }
        });
        var curentLink=menu.find("current");
        if(currentid && currentLink.attr("href")!=currentid){
            currentLink.removeClass("current");
            menu.find("[href="+currentid+"]").addClass("current");
        }
    })
})