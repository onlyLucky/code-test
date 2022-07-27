/*
 * @Author: fg
 * @Date: 2022-07-27 15:07:55
 * @LastEditors: fg
 * @LastEditTime: 2022-07-27 18:42:53
 * @Description: env 
 */
export const config = {
  getEnv() {
    // ...
    return 'test'
  }
}

export const configObj = {
  get env() {
    return 'test'
  }
}

export const getEnv = () => 'test'

export const env = 'test'