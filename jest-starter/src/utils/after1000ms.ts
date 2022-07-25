/*
 * @Author: fg
 * @Date: 2022-07-25 16:08:20
 * @LastEditors: fg
 * @LastEditTime: 2022-07-25 16:15:45
 * @Description: 官网的示例 Mock Timer
 */

type AnyFunction = (...args: any[]) => any;

// ?: 可选参
export const after1000ms = (callback?: AnyFunction) => {
  console.log('准备计时')
  setTimeout(() => {
    console.log('after1000ms-执行了')
    callback && callback()
  }, 1000);
}
