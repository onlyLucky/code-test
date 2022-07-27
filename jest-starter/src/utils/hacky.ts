/*
 * @Author: fg
 * @Date: 2022-07-27 19:23:38
 * @LastEditors: fg
 * @LastEditTime: 2022-07-27 19:27:26
 * @Description: Mock hacky
 */

export function getPlanet() {
  return 'world'
}

export default function getGreeting(_getPlanet = getPlanet) {
  return `hello ${_getPlanet()}!`
}


