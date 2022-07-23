/*
 * @Author: fg
 * @Date: 2022-07-23 10:50:42
 * @LastEditors: fg
 * @LastEditTime: 2022-07-23 11:38:54
 * @Description: storage
 */
import storage from "utils/storage"

describe("Storage", () => {
  it('set storage', () => {
    storage.set('newKey', 'hello')
    expect(localStorage.getItem('my-app-newKey')).toEqual('hello')
  })
  it('localStorage.setItem', () => {
    localStorage.setItem('my-app-newKey', 'hello')
    expect(storage.get('newKey')).toEqual('hello')
  })
})

