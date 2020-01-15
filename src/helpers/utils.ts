const myToString = Object.prototype.toString

// 判断是否是对象
export function isObject(val: any): val is Object {
  return val !== null && typeof val === 'object'
}

// 判断是否是正儿八经的对象
export function isTrueObject(val: any): Boolean {
  return toString.call(val) === '[object Object]'
}

// 判断是否是日期类型
export function isDate(val: any): val is Date {
  return myToString.call(val) === '[object Date]'
}
