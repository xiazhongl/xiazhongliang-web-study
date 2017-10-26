window.onload=function(){
    showTime();
}
function checkTime(i){
    if(i<=10){  
        i="0"+i;
    }
    return i;
}
function showTime(){
    var myDate=new Date();
    var year=myDate.getFullYear();//年
    var month = myDate.getMonth()+1;//月
    var date=myDate.getDate();//日
    var d =myDate.getDay();//星期
    var h =myDate.getHours();//小时
    var m =myDate.getMinutes();//分钟
    var s =myDate.getSeconds();//秒
    m=checkTime(m);
    s=checkTime(s);
    var weekday=new Array(7);
    weekday[0]="星期日";
    weekday[1]="星期一";
    weekday[2]="星期二";
    weekday[3]="星期三";
    weekday[4]="星期四";
    weekday[5]="星期五";
    weekday[6]="星期六";
    document.getElementById('show').innerHTML=year+'年'+month+'月'+date+'日'+weekday[d]+h+':'+m+':'+s;
    setTimeout(showTime,500);
}
