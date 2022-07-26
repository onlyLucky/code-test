/*
 * @Author: fg
 * @Date: 2022-07-23 11:21:48
 * @LastEditors: fg
 * @LastEditTime: 2022-07-26 21:39:47
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

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
})

// 把 Logger 给 Mock 掉
jest.spyOn(console, 'log').mockReturnValue();
jest.spyOn(console, 'info').mockReturnValue();
jest.spyOn(console, 'warn').mockReturnValue();
jest.spyOn(console, 'error').mockReturnValue();
mockConsole()