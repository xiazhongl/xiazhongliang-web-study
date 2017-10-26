$("#butnShow").click(function(){
    var v=$("animation").val();
    if(v=="1"){
        $("p").toggle();
    }else if(v=="2"){
        $("p").slideToggle("slow");
    }else if(v=="3"){
        $("p").fadeToggle(1000,"linear");
    }
})