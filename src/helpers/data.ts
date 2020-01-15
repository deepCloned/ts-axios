import { isTrueObject } from './utils'

export default function transformData(data: any): any {
  if (isTrueObject(data)) {
    data = JSON.stringify(data)
  }
  return data
}
