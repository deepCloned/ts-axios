import xhr from './xhr'
import { AxiosRequestConfig } from './types'
import buildUrl from './helpers/url'
import transformData from './helpers/data'
import transformHeaders from './helpers/headers'

function axios(config: AxiosRequestConfig): void {
  processConfig(config)
  xhr(config)
}

// 请求参数处理中间层
function processConfig(config: AxiosRequestConfig): void {
  config.url = transformRequestParams(config)
  config.data = transformRequestData(config)
  config.headers = transformRequestHeaders(config)
  console.log(config)
}

// params处理函数
function transformRequestParams(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildUrl(url, params)
}

// data处理函数
function transformRequestData(config: AxiosRequestConfig): string {
  return transformData(config.data)
}

// headers处理函数
function transformRequestHeaders(config: AxiosRequestConfig): any {
  const { headers, data } = config
  return transformHeaders(headers, data)
}

export default axios
