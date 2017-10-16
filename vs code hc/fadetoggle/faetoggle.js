$("#btnFadeSwitch").click(function() {
    var v = $("#animation").val();
    if (v == "1") {
        $("p").fadeToggle();
    } else if (v == "2") {
        $("p").fadeToggle("slow");
    } else if (v == "3") {
        $("p").fadeToggle(3000);
    } else if (v == "4") {
        $("p").fadeToggle(1000, function() {
            alert("切换完毕!");
        });
    } else if (v == "5") {
        $("p").fadeToggle(1000, "linear");
    } else if (v == "6") {
        $("p").fadeToggle({
            duration: 1000
        });
    }
});