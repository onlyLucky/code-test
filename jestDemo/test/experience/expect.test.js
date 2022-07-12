
/*
 * @Author: fg
 * @Date: 2022-07-08 17:21:27
 * @LastEditors: fg
 * @LastEditTime: 2022-07-12 10:17:15
 * @Description: expect
 */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

test('the best flavor is grapefruit', () => {
  expect('grapefruit').toBe('grapefruit')
})

// expect.extend(matchers)可以将自己的matcher添加到jest对象中

expect.extend({
  toBeWithinRange (received, floor, ceiling) {
    // console.log(this, 'this:')
    const pass = received >= floor && received <= ceiling
    if (pass) {
      return {
        message: () => `expected ${received} not to be within range ${floor}-${ceiling}`,
        pass: true
      }
    } else {
      return {
        message: `expected ${received} to be within range ${floor} - ${ceiling}`,
        pass: false
      }
    }
  }
})

test('numeric ranges', () => {
  expect(100).toBeWithinRange(90, 110)
  expect(101).not.toBeWithinRange(0, 100)
  expect({ apples: 6, bananas: 3 }).toEqual({
    apples: expect.toBeWithinRange(1, 10),
    bananas: expect.not.toBeWithinRange(11, 20)
  })
})

// expect.extension 异步 Matcher

function getExternalValueFromRemoteSource () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(10)
    })
  })
}

expect.extend({
  async toBeDivisibleByExternalValue (received) {
    const externalValue = await getExternalValueFromRemoteSource()
    // console.log('externalValue:', externalValue)
    const pass = received % externalValue === 0
    if (pass) {
      return {
        message: () =>
          `expected ${received} not to be divisible by ${externalValue}`,
        pass: true
      }
    } else {
      return {
        message: () =>
          `expected ${received} to be divisible by ${externalValue}`,
        pass: false
      }
    }
  }
})

test('is divisible by external value', async () => {
  await expect(100).toBeDivisibleByExternalValue()
  await expect(101).not.toBeDivisibleByExternalValue()
})

const { diff } = require('jest-diff')

// 自定义快照测试
const { toMatchSnapshot } = require('jest-snapshot')

expect.extend({
  toMatchTrimmedSnapshot (received, length) {
    return toMatchSnapshot.call(this, received.substring(0, length), 'toMatchTrimmedSnapshot')
  }
})

it('stores only 10 characters', () => {
  expect('extra long string oh my grd').toMatchTrimmedSnapshot(10)
})

const { toMatchInlineSnapshot } = require('jest-snapshot')

function observe (fn) {
  return new Promise((resolve) => {
    resolve(fn())
  })
}
// 异步快照
expect.extend({
  async toMatchObservationLineSnapshot (fn, ...rest) {
    this.error = new Error()
    const observation = await observe(async () => {
      await fn()
    })
    return toMatchInlineSnapshot.call(this, 'async action', ...rest)
  }
})

it('observes something', async () => {
  /* 这个在执行前是
  await expect(async () => {
    return 'async action'
  }).toMatchObservationLineSnapshot() */
  await expect(async () => {
    return 'async action'
  }).toMatchObservationLineSnapshot('"async action"')
})
