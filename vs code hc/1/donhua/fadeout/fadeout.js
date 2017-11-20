$("#btnShow").click(function() {
    $("p").show();
});

$("#btnFadeOut").click(function() {
    var v = $("#animation").val();
    if (v == "1") {
        $("p").fadeOut();
    } else if (v == "2") {
        $("p").fadeOut("slow");
    } else if (v == "3") {
        $("p").fadeOut(3000);
    } else if (v == "4") {
        $("p").fadeOut(2000, function() {
            alert("隐藏完毕!");
        });
    } else if (v == "5") {
        $("p").fadeOut(1000, "linear");
    } else if (v == "6") {
        $("p").fadeOut({
            duration: 1000
        });
    }
});