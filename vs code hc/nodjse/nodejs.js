const assert = require('assert')

const obj1 = {
  a: {
    b: 1
  }
}
const obj2 = {
  a: {
    b: 2
  }
}
const obj3 = {
  a: {
    b: 1
  }
}
const obj4 = Object.create(obj1)

assert.deepEqual(obj1, obj1)
// 测试通过，对象与自身相等。

assert.deepEqual(obj1, obj2)
// 抛出 AssertionError: { a: { b: 1 } } deepEqual { a: { b: 2 } }
// 因为 b 属性的值不同。

assert.deepEqual(obj1, obj3)
// 测试通过，两个对象相等。

assert.deepEqual(obj1, obj4)
// 抛出 AssertionError: { a: { b: 1 } } deepEqual {}
// 因为不测试原型。

// 1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
const assert = require('assert')

assert.deepEqual({ a: 1 }, { a: '1' })
// 测试通过，因为 1 == '1'。

assert.deepStrictEqual({ a: 1 }, { a: '1' })
// 抛出 AssertionError: { a: 1 } deepStrictEqual { a: '1' }
// 因为使用全等运算符 1 !== '1'。

// 以下对象都没有自身属性。
const date = new Date()
const object = {}
const fakeDate = {}

Object.setPrototypeOf(fakeDate, Date.prototype)

assert.deepEqual(object, fakeDate)
// 测试通过，不测试原型。
assert.deepStrictEqual(object, fakeDate)
// 抛出 AssertionError: {} deepStrictEqual Date {}
// 因为原型不同。

assert.deepEqual(date, fakeDate)
// 测试通过，不测试类型标签。
assert.deepStrictEqual(date, fakeDate)
// 抛出 AssertionError: 2017-03-11T14:25:31.849Z deepStrictEqual Date {}
// 因为类型标签不同。

assert.deepStrictEqual(new Number(1), new Number(2))
// Fails because the wrapped number is unwrapped and compared as well.
assert.deepStrictEqual(new String('foo'), Object('foo'))
// OK because the object and the string are identical when unwrapped.

assert.doesNotThrow(
  () => {
    throw new TypeError('错误信息')
  },
  SyntaxError
)
assert.doesNotThrow(
  () => {
    throw new TypeError('错误信息')
  },
  TypeError
)
const assert = require('assert')

assert.equal(1, 1)
// 测试通过，1 == 1。
assert.equal(1, '1')
// 测试通过，1 == '1'。

assert.equal(1, 2)
// 抛出 AssertionError: 1 == 2
assert.equal({ a: { b: 1 } }, { a: { b: 1 } })
// 抛出 AssertionError: { a: { b: 1 } } == { a: { b: 1 } }

const assert = require('assert')

assert.fail(1, 2, undefined, '>')
// 抛出 AssertionError [ERR_ASSERTION]: 1 > 2

assert.fail(1, 2, '错误信息')
// 抛出 AssertionError [ERR_ASSERTION]: 错误信息

assert.fail(1, 2, '错误信息', '>')
// 抛出 AssertionError [ERR_ASSERTION]: 错误信息
// 上面两个例子的 `actual` 参数、`expected` 参数与 `operator` 参数不影响错误消息。

assert.fail()
// 抛出 AssertionError [ERR_ASSERTION]: Failed

assert.fail('错误信息')
// 抛出 AssertionError [ERR_ASSERTION]: 错误信息

assert.fail('a', 'b')
// 抛出 AssertionError [ERR_ASSERTION]: 'a' != 'b'
const assert = require('assert')

const obj1 = {
  a: {
    b: 1
  }
}
const obj2 = {
  a: {
    b: 2
  }
}
const obj3 = {
  a: {
    b: 1
  }
}
const obj4 = Object.create(obj1)

assert.notDeepEqual(obj1, obj1)
// 抛出 AssertionError: { a: { b: 1 } } notDeepEqual { a: { b: 1 } }

assert.notDeepEqual(obj1, obj2)
// 测试通过，obj1 与 obj2 不深度相等。

assert.notDeepEqual(obj1, obj3)
// 抛出 AssertionError: { a: { b: 1 } } notDeepEqual { a: { b: 1 } }

assert.notDeepEqual(obj1, obj4)
// 测试通过，obj1 与 obj4 不深度相等。

const assert = require('assert')

assert.notDeepEqual({ a: 1 }, { a: '1' })
// 抛出 AssertionError: { a: 1 } notDeepEqual { a: '1' }

assert.notDeepStrictEqual({ a: 1 }, { a: '1' })
// 测试通过。

const assert = require('assert')

assert.notEqual(1, 2)
// 测试通过。

assert.notEqual(1, 1)
// 抛出 AssertionError: 1 != 1

assert.notEqual(1, '1')
// 抛出 AssertionError: 1 != '1'

const assert = require('assert')

assert.notStrictEqual(1, 2)
// 测试通过。

assert.notStrictEqual(1, 1)
// 抛出 AssertionError: 1 !== 1

assert.notStrictEqual(1, '1')
// 测试通过。

const assert = require('assert')

assert.ok(true)
// 测试通过。
assert.ok(1)
// 测试通过。
assert.ok(false)
// 抛出 "AssertionError: false == true"
assert.ok(0)
// 抛出 "AssertionError: 0 == true"
assert.ok(false, '不是真值')
// 抛出 "AssertionError: 不是真值"
const assert = require('assert')

assert.strictEqual(1, 2)
// 抛出 AssertionError: 1 === 2

assert.strictEqual(1, 1)
// 测试通过。

assert.strictEqual(1, '1')
// 抛出 AssertionError: 1 === '1'
