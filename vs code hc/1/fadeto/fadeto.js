$("#btnFadeSwitch").click(function() {
    var v = $("#animation").val();
    if (v == "1") {
        $("p").fadeTo("slow", 0.5);
    } else if (v == "2") {
        $("p").fadeTo(1000, 0.2);
    } else if (v == "3") {
        $("p").fadeTo(1000, 0.9, function() {
            alert('完成')
        });
    }
});