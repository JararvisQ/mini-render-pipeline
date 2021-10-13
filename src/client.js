const images = require('images')
const render = require('./render/render')
const parserHTML = require('./render/parser')

void (async function () {
  const { runFetch } = await import('./request/fetch.mjs')
  let response = await runFetch('http://127.0.0.1:8088', {
    name: 'jarar'
  })
  const body = await response.text()

  // 解析HTML为DOM树
  let dom = parserHTML(body)
  console.log(dom)

  // TODO 创建图片
  // const viewport = images(800, 600)
  // TODO 创建图片
  // render(viewport, dom)
  // viewport.save('viewport.jpg')
})()

