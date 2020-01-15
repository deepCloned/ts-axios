import axios from '../../src/index'

axios({
  url: '/params/get',
  method: 'get',
  params: {
    username: ['z', 'x'],
    password: '123123111'
  }
})

axios({
  url: '/params/get',
  method: 'get',
  params: {
    username: 'zx',
    password: '123123111'
  }
})

axios({
  url: '/params/get',
  method: 'get',
  params: {
    username: undefined,
    password: '123123111'
  }
})