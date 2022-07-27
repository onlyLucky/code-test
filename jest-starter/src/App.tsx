/*
 * @Author: fg
 * @Date: 2022-07-26 14:07:40
 * @LastEditors: fg
 * @LastEditTime: 2022-07-27 13:37:38
 * @Description:  App根组件
 */
import React from 'react';
// import { Button } from 'antd';
import Title from 'components/Title';
import AuthButton from 'components/AuthButton/index';

const App = ()=>{
  return (
    <div>
      <section>
        <Title type="small" title="小字"></Title>
        <Title type="large" title="大字"></Title>
        <AuthButton>登录</AuthButton>
      </section>
    </div>
  )
}

export default App