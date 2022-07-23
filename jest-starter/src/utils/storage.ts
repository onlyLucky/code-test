/*
 * @Author: fg
 * @Date: 2022-07-23 10:36:38
 * @LastEditors: fg
 * @LastEditTime: 2022-07-23 10:49:01
 * @Description: 测试环境
 */

const KEY_NAME = 'my-app-'

const set = (key: string, value: string) => {
  localStorage.setItem(KEY_NAME + key, value)
}

const get = (key: string) => {
  return localStorage.getItem(KEY_NAME + key)
}

const storage = {
  get,
  set
}

export default storage
