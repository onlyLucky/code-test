/*
 * @Author: fg
 * @Date: 2022-07-26 14:07:40
 * @LastEditors: fg
 * @LastEditTime: 2022-07-26 16:06:12
 * @Description:  App根组件
 */
import React from 'react';
// import { Button } from 'antd';
import Title from 'components/Title';

const App = ()=>{
  return (
    <div>
      <section>
        <Title type="small" title="小字"></Title>
        <Title type="large" title="大字"></Title>
      </section>
    </div>
  )
}

export default App