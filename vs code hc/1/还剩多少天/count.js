window.onload =function(){
    var curtime=new Date();
    var endtime = new Date("2017,10,7");
    var lefttime=Math.ceil((endtime.getTime()-curtime.getTime())/(24*60*60*1000));
    alert(lefttime);
    document.getElementById('timeshow').innerHTML=lefttime;
}