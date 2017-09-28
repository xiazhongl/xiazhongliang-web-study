function mess(){
    alert("你好")
}
//DOM0级事件处理程序     (可以调用多个事件处理程序)
var buto=document.getElementById("but2");
buto.onclick=function(){
    alert("DOM0级事件处理程序")
}
//清除事件  buto.onclick=null;
//DOM2级事件处理程序     (在IE里没有用，要用ie的事件处理程序)
var buto1=document.getElementById("but3");
buto1.addEventListener('click',mess,false);
//删除    buto1.removeEventListener('click',mess,false);
//ie的事件处理程序
var buto1=document.getElementById("but3");
buto1=document.attributes("onclick",mess);
buto1=document.detachEvent("onclick",mess)
//跨浏览器
var even={
    //添加
    addHandler:function(elemant,type,hand){
                if (elemant.addEventListener) {
                    elemant.addEventListener(type,hand,false);
                    }else if(elemant.attributes){
                        elemant.attributes("on"+type,hand,);
                    }else{
                        elemant.onclick=hand;
                    } 
                },
    //删除
    removeHandler:function(elemant,type,hand){
                    if (elemant.removeEventListener) {
                        elemant.removeEventListener(type,hand,false);
                        }else if(elemant.detaributes){
                            elemant.detaributes("on"+type,hand,);
                        }else{
                            elemant.onclick=null;
                        } 
                    }        
            }
            even.addHandler=(but3,"click",mess);
    //删除        even.removeHandler=(but3,"click",mess);
//