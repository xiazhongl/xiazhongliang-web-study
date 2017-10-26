$("#btnFadeIn").click(function() {
    var v = $("#animation").val();
    if (v == "1") {
        $("p").fadeIn();
    } else if (v == "2") {
        $("p").fadeIn("slow");
    } else if (v == "3") {
        $("p").fadeIn(3000);
    } else if (v == "4") {
        $("p").fadeIn(2000, function() {
            alert("显示完毕!");
        });
    } else if (v == "5") {
        $("p").fadeIn(1000, "linear");
    } else if (v == "6") {
        $("p").fadeIn({
            duration: 1000
        });
    }
});

$("#btnHide").click(function() {
    $("p").hide();
});