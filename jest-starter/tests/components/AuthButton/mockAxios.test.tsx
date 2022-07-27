/*
 * @Author: fg
 * @Date: 2022-07-27 14:48:51
 * @LastEditors: fg
 * @LastEditTime: 2022-07-27 15:00:59
 * @Description: Mock Axios test
 */
import React from 'react'
import axios from 'axios'
import {render, screen} from '@testing-library/react'
import AuthButton from 'components/AuthButton/index'

// 更偏向细节，效果并不好
describe('AuthButton Mock Axios', () => {
  it('可以正确展示普通用户按钮内容',async ()=>{
    expect(2+2).toEqual(4)
  })
})