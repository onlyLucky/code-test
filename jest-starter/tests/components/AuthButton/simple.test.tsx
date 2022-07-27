/*
 * @Author: fg
 * @Date: 2022-07-27 13:52:20
 * @LastEditors: fg
 * @LastEditTime: 2022-07-27 14:40:20
 * @Description: AuthButton simple.test
 */
import {render, screen} from '@testing-library/react'
import AuthButton from "components/AuthButton/index"
import React from 'react'

describe('AuthButton', () => {
  it('可以正常展示',()=>{
    render(<AuthButton>登录</AuthButton>)
    // 这里的toBeDefined不是很靠谱
    // expect(screen.queryByText('登录')).toBeDefined()
    expect(screen.getByText('登录')).toBeInTheDocument();
  })
})