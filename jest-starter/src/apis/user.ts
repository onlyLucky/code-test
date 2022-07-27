/*
 * @Author: fg
 * @Date: 2022-07-27 09:43:42
 * @LastEditors: fg
 * @LastEditTime: 2022-07-27 13:44:47
 * @Description: user api
 */
import axios from 'axios'

// 用户角色身份

export type UserRoleType = 'user' | 'admin'

// 返回
export interface GetUserRoleRes {
  userType: UserRoleType
}

// 获取用户角色身份

export const getUserRole = async () => {
  // return axios.get<GetUserRoleRes>("https://mysite.com/api/role")
  return new Promise((resolve, reject) => {
    const result = {
      code: 200,
      data: {
        userType: 'user'
      }
    }
    resolve(result)
  })
}
