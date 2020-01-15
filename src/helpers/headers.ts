import { isTrueObject } from './utils'

/**
 * 标准化 content-type 字段
 */
function normalizedName(headers: any, name: string): void {
  if (!headers) {
    return
  }
  Object.keys(headers).forEach(key => {
    if (key !== name || key.toUpperCase() === name.toUpperCase()) {
      headers[name] = headers[key]
      delete headers[key]
    }
  })
}
/**
 * 根据传入 data 类型设置 Content-Type
 * 如果传入的值是普通对象类型时，需要设置 content-type 为 application/json
 * 如果用户传入了 headers，则用用户传的
 */
function transformHeaders(headers: any, data: any): any {
  normalizedName(headers, 'Content-Type')
  if (isTrueObject(data)) {
    if (headers && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json;charset=utf-8'
    }
  }
  return headers
}

export default transformHeaders
