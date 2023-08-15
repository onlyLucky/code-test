/*
 * @Author: fg
 * @Date: 2023-08-15 19:09:28
 * @LastEditors: fg
 * @LastEditTime: 2023-08-15 19:17:17
 * @Description: content
 */
import * as services from "./services"

const searchName = (term) => {
  const matches = services.getNames().filter((name) => {
    return name.includes(term)
  })
  return matches.length > 3 ? matches.slice(0, 3) : matches
}

const functionNoTested = (term) => {
  return `Hello ${term}`
}

export {
  searchName,
  functionNoTested
};