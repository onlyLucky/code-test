/*
 * @Author: fg
 * @Date: 2022-07-27 10:34:48
 * @LastEditors: fg
 * @LastEditTime: 2022-07-27 13:47:30
 * @Description: AuthButton
 */
import React, {FC,useEffect,useState} from 'react'
import {Button,ButtonProps,message} from 'antd'
import classnames from 'classnames'
import style from './styles.module.less'
import { getUserRole, UserRoleType } from 'apis/user'

type Props = ButtonProps

// 身份文案 Mapper
const mapper: Record<UserRoleType, string> = {
  user: '普通用户',
  admin: '管理员'
}

const AuthButton: FC<Props> = (props)=>{
  const {children,className,...restProps} = props
  const [userType, setUserType] = useState<UserRoleType>()

  // 获取用户身份并设置
  const getLoginState = async () =>{
    const res:any = await getUserRole()
    setUserType(res.data.userType)
  }
  // // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    getLoginState().catch((e)=>message.error(e.error))
  },[])

  return (
    <Button {...restProps} className={classnames(className, style.authButton)} >
      {mapper[userType!] || ""}
      {children}
    </Button>
  )
}

export default AuthButton
