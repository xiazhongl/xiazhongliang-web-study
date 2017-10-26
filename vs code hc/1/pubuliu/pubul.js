$(window).on('load',function(){
    warefall();
    $(window).on('scroll',function(){
        if(checksrollslide){
            $.each(dataint.data,function(key,calue){
                var obox=$('<div>').addclass('box').appendto($('#main'));
                var opic=$('<div>').addclass('pic').appendto($(obox));
                var oimg=$('<img>').attr('src','images/'+$(value).attr('src')).appendto($(opic));
            })
            warefall();
        }
    })
})
function warefall(){
    var $boxs=$('#main>div');
    var w=$boxs.eq(0).outerwidth();
    var cols=Math.floor($(window).width()/w);
    $('#main').width(w*cols).css('margin','0 auto');
    var harr=[];
    $boxs.each(function(index,value){
        var h=$boxs.eq(index).outerheigth();
        if(index<cols){
            harr[index]=h;
        }else{
            var minh=math.min.apply(null,harr);
            var minhindex=$.inarray(minh,harr);
            $(value).css({
                'position':'absolute',
                'top':minh+'px',
                'left':minhindex*w+'px'
            })
            harr[minhindex]+=$boxs.eq(index).outerheigth();
        }
    })
}

function checksrollslide(){
    var $lastbox=$('#mian>div').last();
    var lastboxdis=$lastbox.offset().top+Math.floor($lastbox.outerheigth()/2);
    var scrolltop=$(window).scrolltop();
    var documenth=$(window).height();
    return(lastboxdis<scrolltop+documenth)?true:false;
}
