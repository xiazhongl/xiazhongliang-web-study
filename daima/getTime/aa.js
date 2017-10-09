window.onload=function(){
    showTime();
}
function showTime(){
    var myDate=new Date();
    var nian=myDate.getFullYear();
    var yue=myDate.getMonth()+1;
    var ri=myDate.getDate();
    var xiaos=myDate.getHours();
    var fenz=myDate.getMinutes();	
    var miao=myDate.getSeconds();
    document.getElementById('show').innerHTML=('年'+nian+'月'+yue+'日'+ri+'小时'+xiaos+'分钟'+fenz+'秒'+miao);
    setTimeout(showTime,1000);
}


