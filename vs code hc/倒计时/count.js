window.onload=function(){
    showTime2();
}

function showTime2(){
    var bb=new Date("2018,1,1");
    var aa=new Date();
    var a=aa.getTime(); 
    var b=bb.getTime();
    c=b-a;//毫秒
    d=parseInt(c/(1000*60*60*24));   // 等于两个时间的差有多少个整数天
    n=d*24*60*60*1000 // 整数天还有多少毫秒
    m=c-n;  //毫秒
    h=parseInt(m/(1000*60*60));//整数小时数
    l=m-h*60*60*1000 // 还有多少毫秒
    p=parseInt(l/(1000*60)); // 整数分钟
    ll=l-p*60*1000; // 还有多少毫秒
    s=parseInt(ll/1000); // 整数秒
    document.getElementById('lefttime').innerHTML=d+'天'+h+'小时'+p+'分钟'+s+'秒';
    
    console.log(d+'天'+h+'小时'+p+'分钟'+s+'秒');
    setTimeout(showTime2,1000);
}


function showTime3(){
    var dat=Date();
    
}