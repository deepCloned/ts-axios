const express = require('express')
const bodyParser = require('body-parser')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const WebpackConfig = require('./webpack.config')
const router = express.Router()

const app = express()
const compiler = webpack(WebpackConfig)

app.use(webpackDevMiddleware(compiler, {
  publicPath: '/__build__/',
  stats: {
    colors: true,
    chunks: false
  }
}))

// 新建接口
router.get('/simple/get', function (req, res) {
  res.json({
    msg: `hello express`
  })
})

router.get('/params/get', function (req, res) {
  res.json({
    msg: 'hello params express'
  })
})

router.post('/data/get', function (req, res) {
  console.log(req.url, req.method, req.data, req.params)
  res.json({
    res: `${req.method}-${req.url}`
  })
})

app.use(router)

app.use(webpackHotMiddleware(compiler))

app.use(express.static(__dirname))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const port = process.env.PORT || 8080
module.exports = app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}, Ctrl+C to stop`)
})