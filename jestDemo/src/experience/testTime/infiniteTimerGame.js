/*
 * @Author: fg
 * @Date: 2022-07-14 19:44:37
 * @LastEditors: fg
 * @LastEditTime: 2022-07-14 19:50:35
 * @Description: 解决循环定时器问题
 */
'use strict'

function infiniteTimerGame (callback) {
  console.log('Ready...go')
  setTimeout(() => {
    console.log("Time's up! 10 seconds before the next game starts ...")
    callback && callback()
    setTimeout(() => {
      infiniteTimerGame(callback)
    }, 1000)
  }, 1000)
}

module.exports = infiniteTimerGame
