/*
 * @Author: fg
 * @Date: 2022-07-20 14:35:34
 * @LastEditors: fg
 * @LastEditTime: 2022-07-20 15:11:14
 * @Description: Jest 中的钩子函数
 */

/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Counter from '../../src/experience/hook'

const counter = new Counter()

test('测试 counter.add', () => {
  counter.addOne()
  expect(counter.number).toBe(1)
})

test('测试 counter.minusOne', () => {
  counter.minusOne()
  expect(counter.number).toBe(0)
})
let counterBeforeEach = null
beforeEach(() => {
  counterBeforeEach = new Counter()
})

test('测试 beforeEach counter.addOne', () => {
  counterBeforeEach.addOne()
  expect(counterBeforeEach.number).toBe(1)
})

test('测试 beforeEach counter.addOne', () => {
  counterBeforeEach.minusOne()
  expect(counterBeforeEach.number).toBe(-1)
})

describe('测试describe', () => {
  let dCounter = null
  beforeEach(() => {
    dCounter = new Counter()
  })

  describe('test add', () => {
    test('counter.addOne result', () => {
      dCounter.addOne()
      expect(dCounter.number).toBe(1)
    })
    test('counter.addOne result', () => {
      dCounter.addOne()
      expect(dCounter.number).toBe(1)
    })
  })

  describe('test minus',()=>{
    test('counter.minusOne',()=>{
      dCounter.minusOne()
      expect(dCounter.number).toBe(-1)
    })
    test('counter.minusOne',()=>{
      dCounter.minusOne()
      expect(dCounter.number).toBe(-1)
    })
  })
})
