var a = []
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i)
  }
}
a[6]() // 10
var a = []
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i)
  }
}
a[6]() // 10
// var 的情况
console.log(foo); // 输出undefined
var foo = 2

// let 的情况
console.log(bar); // 报错ReferenceError
let bar = 2

var tmp = 123

if (true) {
  tmp = 'abc' // ReferenceError
  let tmp
}
if (true) {
  // TDZ开始
  tmp = 'abc' // ReferenceError
  console.log(tmp) // ReferenceError

  let tmp; // TDZ结束
  console.log(tmp) // undefined

  tmp = 123
  console.log(tmp) // 123
}

typeof x // ReferenceError
let x //

typeof undeclared_variable // "undefined"

function bar (x = y , y = 2) {
  return [x, y]
}

bar(); // 报错

function bar (x = 2 , y = x) {
  return [x, y]
}
bar(); // [2, 2]

// 不报错
var x = x

// 报错
let x = x
// ReferenceError: x is not defined
// 使用let声明变量时，只要变量在还没有声明完成前使用，就会报错。

// 报错
function func () {
  let a = 10
  var a = 1
}

// 报错
function func () {
  let a = 10
  let a = 1
}

function func (arg) {
  let arg; // 报错
}

function func (arg) {
  {
    let arg; // 不报错
  }
}
// let不允许在相同作用域内，重复声明同一个变量。

function f1 () {
  let n = 5
  if (true) {
    let n = 10
  }
  console.log(n) // 5
}
// 这表示外层代码块不受内层代码块的影响。

// 不报错
'use strict';
if (true) {
    function f() { }
}

// 报错
'use strict';
if (true)
    function f() { }