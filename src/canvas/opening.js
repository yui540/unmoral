const colors = ['#f04225', '#7dd7e4', '#7dff5c']
let canvas = null
let ctx = null
let timer = null

export const startAnimation = _canvas => {
  canvas = _canvas
  ctx = canvas.getContext('2d')

  canvas.width = document.documentElement.clientWidth
  canvas.height = document.documentElement.clientHeight
  ;(function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ;[...Array(3).keys()].forEach(i => {
      const width = (canvas.width / 4) * Math.random()
      const height = Math.random() * 2
      const x = canvas.width * Math.random()
      const y = canvas.height * Math.random()

      ctx.fillStyle = colors[Math.round(colors.length * Math.random())]
      ctx.beginPath()
      ctx.rect(x, y, width, height)
      ctx.closePath()
      ctx.fill()
    })

    timer = requestAnimationFrame(tick)
  })()
}

export const stopAnimation = () => {
  cancelAnimationFrame(timer)
  timer = null
  canvas = null
  ctx = null
}
