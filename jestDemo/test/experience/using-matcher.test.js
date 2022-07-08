/*
 * @Author: fg
 * @Date: 2022-07-08 15:03:18
 * @LastEditors: fg
 * @LastEditTime: 2022-07-08 17:05:04
 * @Description: content
 */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

test('two plus two is four', () => {
  expect(2 + 2).toBe(4)
})

// toEqual 会递归检查对象或数组每一项
test('object assignment', () => {
  const data = { one: 1 }
  data.two = 2
  expect(data).toEqual({ one: 1, two: 2 })
})
test('adding positive number is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0)
    }
  }
})

test('null', () => {
  const n = null
  expect(n).toBeNull()
  expect(n).toBeDefined()
  expect(n).not.toBeUndefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})

test('zero', () => {
  const z = 0
  expect(z).not.toBeNull()
  expect(z).toBeDefined()
  expect(z).not.toBeUndefined()
  expect(z).not.toBeTruthy()
  expect(z).toBeFalsy()
})

// number

test('two plus two', () => {
  const value = 2 + 2
  expect(value).toBeGreaterThan(3)
  expect(value).toBeGreaterThanOrEqual(4)
  expect(value).toBeLessThan(5)
  expect(value).toBeLessThanOrEqual(4)
  // toBe 和 toEqual 都是用于等于number类型
  expect(value).toBe(4)
  expect(value).toEqual(4)
})

// toBeCloseTo 等价于 toEqual
test('adding floating point number', () => {
  const value = 0.1 + 0.2
  expect(value).toBeCloseTo(0.3)
})

// strings

test('there is no I in team', () => {
  expect('team').not.toMatch(/I/)
})

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toBe('Christoph')
  expect('Christoph').toMatch(/stop/)
})

// Arrays and iterables
const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk'
]

test('the shopping list has milk on it', () => {
  expect(shoppingList).toContain('milk')
  expect(new Set(shoppingList)).toContain('milk')
})

// Exceptions 异常

function compileAndroidCode () {
  throw new Error('you are using the wrong JDK')
}

test('compiling android goes as expect', () => {
  expect(() => compileAndroidCode()).toThrow()
  expect(() => compileAndroidCode()).toThrow(Error)
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK')
  expect(() => compileAndroidCode()).toThrow(/JDK/)
})
