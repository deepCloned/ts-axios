import { isDate, isObject } from './utils'

function encode(val: string): string {
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}

/**
 * 工具函数，拼接参数到 url 后面
 * 首先判断参数有没有，没有直接返回 url
 * 有，因为 params 是一个对象，通过遍历（Object.key()）获取key，
 * 遍历每一个属性的值
 */
function buildUrl(url: string, params?: any): string {
  if (!params) {
    return url
  }
  let arr: string[] = []
  Object.keys(params).forEach(key => {
    let value = params[key]
    if (value === null || typeof value === 'undefined') {
      // 这里的 return 只会终止这次循环，不会中断整个函数的执行
      return
    }
    // 定义一个中间数组，临时存储 params 每一个key对应的值
    let templateArr: string[]
    // 判断值是不是数组
    if (Array.isArray(value)) {
      key = key + '[]'
      templateArr = value
    } else {
      // 统一转化为数组，方面统一处理
      templateArr = [value]
    }
    // 遍历值，如果是数组，会有多个值，其他就是一个值
    templateArr.forEach(ele => {
      if (isDate(ele)) {
        ele = ele.toISOString()
      } else if (isObject(ele)) {
        ele = JSON.stringify(ele)
      }
      arr.push(`${encode(key)}=${encode(ele)}`)
    })
  })
  let dealedParams = arr.join('&')
  if (dealedParams) {
    const markIndex = url.indexOf('#')
    if (markIndex !== -1) {
      url = url.slice(0, markIndex)
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + dealedParams
  }
  return url
}

export default buildUrl
