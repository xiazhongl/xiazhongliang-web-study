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
    document.getElementById("id2").style.display="block";
}
function yinc(){
    document.getElementById("id2").style.display="none";
}
//特殊符号++和--
var dd=10;
dd--;
dd++;
document.write(dd+"<br/>");
//逻辑操作符&&:意思是并且
var qq,ww;
qq=60;
ww=100;
if(qq>=ww && qq==ww ){
     document.write("厉害！")
}else{
     document.write("加油啊")
}
//逻辑操作符||:意思是或者
if(qq<=ww || qq==ww ){
    document.write("厉害！")
}else{
    document.write("加油啊<br/>")
}
//数组属性
var ee=new Array(10,20,30,40,50,60,70,80,90,100);
document.write(ee.length+"<br/>");
ee[15]=160;
document.write(ee.length+"<br/>");
//switch语句
var r=8;
switch (r) {
    case 1:
    case 2:
    document.write("还不错");
        break;
    case 3:
    case 4:
    document.write("有点差");
    break;
    default:
    document.write("继续努力<br/>")
}
//for循环
var w=1;
for(w=1;w<=3;w++){
  document.write("第"+w+"个球<br/>")
}
//whlie循环
var t=0;
while(t<=6){
   document.write("第"+t+"个鸡蛋<br/>")
   t=t+1;
}
//do--while循环
tt=0;
do{
    document.write("第"+tt+"个石榴<br/>");
    tt=tt+1;
}while(tt<=3);
//有参数的函数
function qqq(x,y){
   sun=x+y;
   document.write(sun);
}
qqq(2,3);
//鼠标经过
function v(){
    alert("经过了，好厉害！")
}
//鼠标移开
function vv(){
    alert("不要移开")
}
//光标聚焦
function vvv(){
    document.write("请输入你的姓名")
}
//光标失焦
function nam(){
    alert("请输入了密码后再离开")
}
//文本内容选中
function Conselect(){
    alert("你选中了这些文字")
}
//四舍五入
document.write(Math.round(0.1)+"<br/>");
document.write(Math.round(2.8)+"<br/>");
document.write(Math.round(3.6)+"<br/>");
document.write(Math.round(3.2)+"<br/>");
document.write(Math.round(9.8)+"<br/>");
//获取随机数
document.write((Math.random())*10+"<br/>");
//数组连接
var concat=new Array(3);
concat[0]=1;
concat[1]=2;
concat[2]=3;
document.write(concat.concat(4,5,6)+"<br/>")
document.write(concat+"<br/>")
//分割开
var join=new Array(3);
join[0]=1;
join[1]=2;
join[2]=3;
document.write(join.join(".")+"<br/>");
//颠倒顺序
var rev=new Array(3);
rev[0]=1;
rev[1]=2;
rev[2]=3;
document.write(rev+"<br/>");
document.write(rev.reverse()+"<br/>");
//选定数组
var sli=new Array(6);
sli[0]=1;
sli[1]=2;
sli[2]=3;
sli[3]=4;
sli[4]=5;
sli[5]=6;
sli[6]=7;
document.write(sli+"<br/>");
document.write(sli.slice(2,4)+"<br/>");
document.write(sli+"<br/><hr/>");
//history对象
var his=window.history.length;
document.write(his);
//getElementsByName
function getnum(){
    var mynode=document.getElementsByName("myt");  
    alert(mynode.length);
  }
//getElementsByTagName
var tag=document.getElementsByTagName('li<br/>');
li=tag[0];
document.write(tag.length);
document.write(tag.innerHTML);
//getAttribute
function bute(){
    var link=document.getElementById("bute");
    var ilnk1=link.getAttribute("id");
    var ilnk2=link.getAttribute("title");
    document.write(ilnk1+"<br/>");
    document.write(ilnk2);
}