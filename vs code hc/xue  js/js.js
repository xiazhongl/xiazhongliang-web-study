document.write('<h1>this.is a heading </h1>')
document.write('Hello \
World!')
function a () {
  x = document.getElementById('demo')
  x.innerHTML = 'Hello JavaScript!'
} // 改变html
function b () {
  x = document.getElementById('demo')
  x.style.color = '#ff0000'
} // 改变样式
function c () {
  var x = document.getElementById('mo').value
  if (x == '' || isNaN(x)) {
    alert('not numeric')
  }
}
var momo = ['xia', 'zhong', 'liang']
var message = 'Hello world!'
var x = message.toUpperCase()
var xia = 10
if (xia == 10) {
  document.write('xia')
}
if (xia >= 10) {
  document.write('xia')
}else {
  document.write('no xia')
}
if (xia < 10) {
  document.write('no xia')
}else if (xia < 20) {
  document.write('xia')
}else {
  document.write('not xia')
}

function chen (a, b) {
  return a * b
}
document.getElementById('qq').innerHTML = chen(3, 4)

var qq = 24
switch (qq) {
  case 10:
    x = '大'
    break
  case 1:
    x = '一样'
    break
  case 3:
    x = '小'
    break
  default:
    x = '不是不是不是不是'
}
document.getElementById('ww').innerHTML = x

carv = ['1', '2', '3', '4']
for ( var i = 0;i < carv.length;i++) {
  document.write(carv[i] + '</br>')
}

function ee () {
  var x = '', i = 0
  while(i < 5){
    x = x + i + '</br>'
    i++
  }document.getElementById('ee').innerHTML = x
}

cars = ['a', 'b', 'c', 'd']
var i = 0
for (;cars[i];) {
  document.write(cars[i] + '</br>')
  i++
}
cars = ['a', 'b', 'c', 'd']
var i = 0
while (cars[i]){
  document.write(cars[i] + '</br>')
  i++
}
function moy () {
  var x = '',i = 0
  for (i = 0;i < 10;i++) {
    if (i == 3) break
    x = x + i + '</br>'
  }
  document.getElementById('rr').innerHTML = x
}
function my () {
  var x = '',i = 0
  for (i = 0;i < 10;i++) {
    if (i == 3) continue
    x = x + i + '</br>'
  }
  document.getElementById('tt').innerHTML = x
}
document.getElementById('okj').style.color = '#ffffff'
function ookkl (id) {
  id.innerHTML = '谢谢！'
}
// 点击调用函数
function mOver (obj) {
  obj.innerHTML = '谢谢'
}
// 鼠标移入
function mOut (obj) {
  obj.innerHTML = '把鼠标移到上面'
}
// 鼠标按下
function mDown (obj) {
  obj.style.backgroundColor = '#1ec5e5'
  obj.innerHTML = '请释放鼠标按钮'
}
// 鼠标松开
function mUp (obj) {
  obj.style.backgroundColor = 'green'
  obj.innerHTML = '请点击这里'
}
// 添加html元素
var para = document.createElement('p')
var node = document.createTextNode('这是新段落。')
para.appendChild(node)
var element = document.getElementById('div1')
element.appendChild(para)
// 删除html元素
var parent = document.getElementById('div1')
var child = document.getElementById('p1')
parent.removeChild(child)
// 访问对象的方法
var message = 'Hello world!'
var x = message.toUpperCase()

// person = { }
// person.firstname = 'Bill'
// person.lastname = 'Gates'
// person.age = 56
// person.eyecolor = 'blue'
// document.write(person.firstname + ' is ' + person.age + ' years old.')
// person = { firstname: 'John',lastname: 'Doe',age: 50,eyecolor: 'blue'}
// document.write(person.firstname + ' is ' + person.age + ' years old.')

function person (firstname, lastname, age, eyecolor) {
  this.firstname = firstname
  this.lastname = lastname
  this.age = age
  this.eyecolor = eyecolor
}
myFather = new person('Bill', 'Gates', 56, 'blue')

document.write(myFather.firstname + ' is ' + myFather.age + ' years old.')
//
function person (firstname, lastname, age, eyecolor) {
  this.firstname = firstname
  this.lastname = lastname
  this.age = age
  this.eyecolor = eyecolor

  this.changeName = changeName
  function changeName (name) {
    this.lastname = name
  }
}
myMother = new person('Steve', 'Jobs', 56, 'green')
myMother.changeName('Ballmer')
document.write(myMother.lastname)

function myFunction () {
  var x
  var txt = ''
  var person = {fname: 'Bill',lname: 'Gates',age: 56}

  for (x in person) {
    txt = txt + person[x]
  }

  document.getElementById('asdxzc').innerHTML = txt
}
