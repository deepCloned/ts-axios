## 请求参数 params，需要拼接到 url 后面
* 一个对象
```
axios({
  method: 'get',
  url: '/simple/get',
  params: {
    name: 'zx',
    age: 18
  }
})
url = '/simple/get?name=zx&age=18'
```

* 一个数组

```
axios({
  method: 'get',
  url: '/simple/get',
  params: {
    list: [1, 2]
  }
})
url = '/simple/get?list[0]=1&list[1]=2'
```

* 一个日期类型

```
const date = new Date()
axios({
  method: 'get',
  url: '/simple/get',
  params: {
    date
  }
})
url = '/simple/get?date=2020'
```

* 一个对象

```
axios({
  method: 'get',
  url: '/simple/get',
  params: {
    info: {
      message: 'hello',
      name: 'world'
    }
  }
})
url = '/simple/get?date=2020'
```

### 定义工具类，判断参数的类型和拼接 params 到 url 后
* isDate
* isObject
* dealUrlParams