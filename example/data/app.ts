import axios from '../../src/index'

axios({
  url: '/data/get',
  method: 'post',
  params: {
    username: 'dell',
    password: '123123111'
  },
  data: {
    id: 1,
    key: 'value'
  },
  headers: {
    'content-type': 'application/json'
  }
})