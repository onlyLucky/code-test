/*
 * @Author: fg
 * @Date: 2022-07-26 16:22:19
 * @LastEditors: fg
 * @LastEditTime: 2022-07-26 21:57:50
 * @Description: Title 组件 快照测试
 */

import React from 'react'
import {render} from '@testing-library/react'
import Title from 'components/Title'

describe('Title', () => {
  it('可以正确渲染大字',()=>{
    const {getByText} = render(<Title type="large" title="大字"/>);
    const content = getByText('大字')
    expect(content).toMatchSnapshot()
  })

  it('可以正确渲染小字',()=>{
    const {getByText} = render(<Title type="small" title="小字"/>);
    const content = getByText('小字')
    expect(content).toMatchSnapshot()
  })
})