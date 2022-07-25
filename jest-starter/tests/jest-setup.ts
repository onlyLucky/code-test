/*
 * @Author: fg
 * @Date: 2022-07-23 11:21:48
 * @LastEditors: fg
 * @LastEditTime: 2022-07-25 17:38:51
 * @Description: 全局 Mock
 */
// 使用 Jest 的 Spy 和扩展 expect 来 Mock `window.location`
import "jest-location-mock";
import mockConsole from "jest-mock-console";

Object.defineProperty(global, 'localStorage', {
  value: {
    store: {} as Record<string, string>,
    setItem(key: string, value: string): void {
      this.store[key] = value;
    },
    getItem(key: string) {
      return this.store[key];
    },
    removeItem(key: string): void {
      delete this.store[key];
    },
    clear(): void {
      this.store = {};
    }
  },
  configurable: true
})

// 把 Logger 给 Mock 掉
jest.spyOn(console, 'log').mockReturnValue();
jest.spyOn(console, 'info').mockReturnValue();
jest.spyOn(console, 'warn').mockReturnValue();
jest.spyOn(console, 'error').mockReturnValue();
mockConsole()