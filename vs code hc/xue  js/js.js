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
var tom = {
  firstname="boll",
  lastname: "Gates",
  id: 5566
}
var message = "Hello world!"; 
var x = message.toUpperCase();