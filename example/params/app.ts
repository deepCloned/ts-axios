import axios from '../../src/index'

axios({
  url: '/simple/get',
  method: 'get',
  params: {
    username: 'dell',
    password: '123123111'
  }
})