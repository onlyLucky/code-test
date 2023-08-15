/*
 * @Author: fg
 * @Date: 2023-08-15 19:19:02
 * @LastEditors: fg
 * @LastEditTime: 2023-08-15 19:51:18
 * @Description: content
 */
import { searchName, functionNoTested } from "../../src/basic/searchName"
import { getNames } from "../../src/basic/services"

jest.mock("../../src/basic/services", () => ({
  getNames: jest.fn()
}))

// 测试不能搜索到结果
test('should return empty result when not search', () => {
  const keyword = 'Frank'
  getNames.mockImplementation(() => [])

  const result = searchName(keyword)

  expect(result).toEqual([])
})

// 测试能搜索到值
test('should return target result when found search', () => {
  const keyword = 'Frank'
  getNames.mockImplementation(() => ['John', 'Paul', 'George', 'Ringo', 'Frank'])

  const result = searchName(keyword)

  expect(result).toEqual(['Frank'])
})

// 测试搜索大于三个的时候
test('should not return more then 3 matches', () => {
  const keyword = 'John'
  getNames.mockImplementation(() => ['John', 'John1', 'John2', 'John3', 'George', 'Ringo', 'Frank'])

  const result = searchName(keyword)

  expect(result).toHaveLength(3)
})

// 测试搜索值在为null或者undefined
test('should handle null or undefined as input', () => {
  getNames.mockImplementation(() => [])

  expect(searchName(null)).toEqual([])
  expect(searchName(undefined)).toEqual([])
})

test('should say hi when search', () => {
  const result = functionNoTested('John')
  // 快照测试，可以自动更新（toMatchSnapshot 会有多余文件生成）
  expect(result).toMatchInlineSnapshot(`"Hello John"`)
})