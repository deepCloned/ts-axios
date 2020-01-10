import axios from '../../src/index'

const date = new Date()

axios({
  url: '/simple/get',
  method: 'get',
  params: {
    date
  }
})