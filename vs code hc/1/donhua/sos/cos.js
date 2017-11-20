$("#search_input").bind('keyup',function(){
    var jqueryInput=$(this);
    var searchText=jqueryInput.val();
    // var searchTex = $('#search_input').val();
    $.get('http//api.bing.com/qsonhs.aspx?q='+searchText);
    $('#search-suggest').show().css({
        top:$('#search-form').offset().top+$('#search-form').height()+10,
        left:$('#search-form').offset().left,
        position:'absolute'
    })
})