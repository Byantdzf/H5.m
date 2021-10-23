import axios from 'axios'
// import store from '@/store'
import {
  $toastClear,
  $toastText
} from '@/config/toast'
// 根据环境不同引入不同api地址
import {
  baseApi
} from '@/config'
const service = axios.create({
  baseURL: baseApi, // url = base api url + request url
  withCredentials: false, // send cookies when cross-domain requests
  timeout: 8000, // request timeout
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    Accept: 'application/json'
  }
})

// request拦截器 request interceptor
service.interceptors.request.use(
  config => {
    // 不传递默认开启loading
    config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token')
    if (config.url.includes('?')) {
      config.url = config.url + `&openid=${localStorage.getItem('openid')}&from_openid=${localStorage.getItem('from_openid')}&from_platform=${localStorage.getItem('from_platform')}&from_user_id=${localStorage.getItem('from_user_id')}`
    } else {
      config.url = config.url + `?openid=${localStorage.getItem('openid')}&from_openid=${localStorage.getItem('from_openid')}&from_platform=${localStorage.getItem('from_platform')}&from_user_id=${localStorage.getItem('from_user_id')}`
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)
// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    // $toastClear()
    if (res.code === 2 && response.status === 200) {
    } else if (response.status === 200 && response.data.code === 1) {
      $toastClear()
      setTimeout(() => {
        $toastText(response.data.message)
      })
      return res.code
    }
    return res.data
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default service
