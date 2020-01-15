import { AxiosRequestConfig } from './types'

// 定义请求发送请求函数
function xhr(config: AxiosRequestConfig): void {
  // 结构赋值
  const { url, method = 'get', data = null } = config
  const request = new XMLHttpRequest()
  request.open(method.toUpperCase(), url, true)
  request.send(data)
}

export default xhr
