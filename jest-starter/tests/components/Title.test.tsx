/*
 * @Author: fg
 * @Date: 2022-07-26 16:22:19
 * @LastEditors: fg
 * @LastEditTime: 2022-07-26 16:26:37
 * @Description: Title 组件 快照测试
 */

import React from 'react'
import {render} from '@testing-library/react'
import Title from 'components/Title'

describe('Title', () => {
  it('可以正确渲染大字',()=>{
    const {baseElement} = render(<Title type="large" title="大字"/>);
    expect(baseElement).toMatchSnapshot()
  })

  it('可以正确渲染小字',()=>{
    const {baseElement} = render(<Title type="small" title="小字"/>);
    expect(baseElement).toMatchSnapshot()
  })
})