/*
 * @Author: fg
 * @Date: 2022-07-23 11:21:48
 * @LastEditors: fg
 * @LastEditTime: 2022-07-23 11:34:45
 * @Description: 全局 Mock
 */
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