window.onload=function(){console.log('a');
    var odiv=document.getElementById('div1');
    odiv.onmouseover = function(){
        aa();       
    }
}
var timer=null;
function aa(){
    var odiv=document.getElementById('div1');
   timer=setInterval(function(){
       if(odiv.offsetLeft == 0){
         clearInterval(timer);
       }else{
           odiv.style.left=odiv.offsetLeft+10+'px';
       }
   },30)
}