//定义数组
var mian=new Array(4);
mian[0]=30;
mian[1]=10;
console.log(mian);
//添加数组
var mm= [];
mm[0]=10;
mm[1]=20;
mm[2]=30;
mm[3]=40;
console.log(mm);
//if--else
var m=80;
if( m>60){
   document.write("及格了<br/>")
}else{
   document.write("不及格"+"<br/>")
}
//定义函数
function mmm(){
    sun="asdfghjkl";
    document.write(sun+"<br/>")
}
mmm();
//输出document.write()
document.write("编程"+"<br/>");        //第一种：直接用“”输出
document.write(mm+"<br/>");            //第二种：用变量名
document.write(mm+"我喜欢编程"+"<br/>") //第三种：输出多个，中间用加号隔开
document.write("编程"+"<hr/>")         //第四种：输出html标签
//消息弹出框
//alert(m);
//对话框
// var mn=confirm("你有认真学习吗")
// if(mn==true){
//       alert("很棒，继续加油")
// }else{
//       alert("不可以不认真学习哦")
// }
//提问框
// var aa=prompt("你的成绩是多少")
// if(aa>=80){
//      document.write("很棒")
// }else if(aa>=60){
//     document.write("刚刚及格")
// }else{
//     document.write("不及格哦，要继续加油")
// }
//通过id获取元素
// var ad=document.getElementById("id");
// document.write(ad);
//修改标签元素
var ad=document.getElementById("id");
document.write("修改前："+ad.innerHTML);
ad.innerHTML="no  love javascript";
document.write("修改后："+ad.innerHTML);
//修改标签样式
var ad1=document.getElementById("id1")
ad1.style.color="red";
//显示和隐藏
function xians(){
    document.getElementById("id2").style.display="none";
}
function yinc(){
    document.getElementById("id2").style.display="block";
}