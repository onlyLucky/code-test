/*
 * @Author: fg
 * @Date: 2022-07-26 15:43:52
 * @LastEditors: fg
 * @LastEditTime: 2022-07-26 16:03:55
 * @Description: content
 */
import React, {CSSProperties, FC} from 'react';

interface Props {
  type: 'large' | 'small';
  title: string;
}

// large 样式
const largeStyle: CSSProperties = {
  fontSize: '2em',
  color: 'red'
}

// small 样式
const smallStyle: CSSProperties = {
  fontSize: '0.5em',
  color: 'green'
}

// 样式 Mapper
const styleMapper: Record<'small'|'large',CSSProperties> = {
  small: smallStyle,
  large: largeStyle
}

// 组件
const Title: FC<Props> = (props) => {
  const {type, title} = props;
  return <p style={styleMapper[type]}>{title}</p>
}

export default Title

