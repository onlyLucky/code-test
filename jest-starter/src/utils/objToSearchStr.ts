/*
 * @Author: fg
 * @Date: 2022-07-25 15:54:57
 * @LastEditors: fg
 * @LastEditTime: 2022-07-25 16:04:02
 * @Description: TDD test
 */
const objToSearchStr = (obj: Record<string, string | number>): string => {
  // ['a=1', 'b=2']
  let strParis: string[] = []
  Object.entries(obj).forEach((keyValue) => {
    const [key, value] = keyValue//[a,1]
    const pair = key + '=' + String(value);//a=1
    strParis.push(pair);
  }, [])

  // a=1&b=2
  return strParis.join("&");
}

export default objToSearchStr