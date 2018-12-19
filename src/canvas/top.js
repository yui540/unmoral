import { themeColor1 } from '../color'

let canvas = null
let ctx = null
let timer = null

export const startAnimation = _canvas => {
  canvas = _canvas
  ctx = canvas.getContext('2d')

  canvas.width = document.documentElement.clientWidth
  canvas.height = document.documentElement.clientHeight

  let start = Date.now()
  ;(function tick() {
    let current = Date.now()
    if (current - start > 80) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ;[...Array(3).keys()].forEach(i => {
        const width = (canvas.width / 4) * Math.random()
        const height = Math.random() / 3
        const x = canvas.width * Math.random()
        const y = canvas.height * Math.random()

        ctx.fillStyle = themeColor1
        ctx.beginPath()
        ctx.rect(x, y, width, 0.5)
        ctx.closePath()
        ctx.fill()
      })
      start = Date.now()
    }

    timer = requestAnimationFrame(tick)
  })()
}

export const stopAnimation = () => {
  cancelAnimationFrame(timer)
  timer = null
  canvas = null
  ctx = null
}
