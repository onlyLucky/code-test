/*
 * @Author: fg
 * @Date: 2022-07-19 13:37:51
 * @LastEditors: fg
 * @LastEditTime: 2022-07-19 13:56:30
 * @Description: fetch
 */
const axios = require('axios')

async function fetchPostsList (callback) {
  return axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
    return callback(res.data)
  })
}

module.exports = fetchPostsList
