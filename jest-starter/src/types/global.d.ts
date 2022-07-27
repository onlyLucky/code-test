/*
 * @Author: fg
 * @Date: 2022-07-25 15:01:23
 * @LastEditors: fg
 * @LastEditTime: 2022-07-27 13:40:11
 * @Description: 全局声明文件
 */
declare namespace globalThis {
  // 属性声明一定要用 var！否则不生效！
  var jsdom: any;
}
// 添加 .less 文件的类型定义
declare module "*.less" {
  const content: any;
  export default content;
}