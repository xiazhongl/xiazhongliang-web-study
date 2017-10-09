var data=["加班","在家","去旅游","去逛街","iPhone","谢谢惠顾"],
     timer=null;

     window.onload=function(){
         var play=document.getElementById('play'),
             stop=document.getElementById('stop');
   play.onclick=playFun;
   stop.onclick=stopFun;
  }

function playFun(){
    var title=document.getElementById('title');
    clearInterval(timer);
    timer=setInterval(function(){
        var random=Math.floor(Math.random()*data.length);
             title.innerHTML=data[random];
    },50);
    this.style.background="#999";
}
function stopFun(){
         clearInterval(timer);
         var play=document.getElementById('play');
         play.style.background='#036';
}