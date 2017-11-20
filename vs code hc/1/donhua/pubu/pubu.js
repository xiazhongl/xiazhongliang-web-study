window.onload=function(){
    
    var dataInt={"date":[{"src":"./24.jpg"}]}
    window.onscroll=function(){
        if(checkscrollSlide){
            for(var i=0;i<dataInt.data.length;i++){
                var oBox=document.createElement('div');
                oBox.className='box';
                oParent.appendchild(oBox);
                var oPic=document.createElement('div');
                oPic,className='pic';
                oBox.appendchild(oPic);
                var oImg=document.createElement('img');
                oImg.src="images/"+dataInt.data[i].src;
                oPic.appendChild(oImg);
            }
            waterfall('main','box');
        }
    }
}
function waterfall(parent,box){
    var oParent=document.getElementById(parent);
    var oBoxs=getByClass(oParent,box);
    var oBoxW=oBoxs[0].offsetwidth;
    var cols=Math.floor(document.documentElement.clientWidth/oBoxW);
    oParent.style.cssText='width:'+oBoxW*cols+'px;margin:0 auto';
    var hArr=[];
    for(var i=0;i<oBoxs.length;i++){
        if(i<cols){
            hArr.push(oBoxs[i].offsetwidth);
        }else{
            var minH=Math.min.apply(null,hArr);
            var index=getMinhIndex(Harr,minH);
            oBoxs[i].style.position='absolute';
            oBoxs[i].style.top=minH+'px';
            oBoxs[i].style.left=oBoxW*index+'p';
            oBoxs[i].style.left=oBoxs[index],offsetLeft+'px';
            hArr[index]+=oBoxs[i].offsetHeight;
        }
    }
}
function getByClass(parent,clsName){
    var boxArr=new Array();//用来存储获取到的所有的class为box的元素
    oElements=parent.getElementByTagNmae('*');
    for(var i=0;i<oElements.length;i++){
        if(oElements[i].className==clsName){
            boxArr.push(oElements[i]);
        }
    }
    return boxArr;
}
function getMinhIndex(arr,val){
    for(vari in arr){
        if(arr[i]==val){
            return i;
        }
    }
}
function checkscrollSlide(){
    var oParent=document.getElementById('main');
    var oBox=getByClass(oParent,'box');
    var lastBoxH=oBoxs[oBoxs.length-1].offsetTop+Math.floor(oBoxs[oBoxs.length-1].offsetHeight/2);
    var scrollTop=document.body.scrollTop || document.documentElement.scrollTop;
    var heigth=document.body.clientHeight || documentElement.clientHeight;
    return (lastBoxH<scrollTop+heigth)?true:false;
}
console.log($);