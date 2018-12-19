export const preload = (images, fn, progress) => {
  const len = images.length
  let load = 0

  images.forEach((image, key) => {
    const img = new Image()
    img.src = image
    img.onload = () => {
      load += 1
      progress({
        size: len,
        load: load,
        per: load / len,
      })

      if (load >= len) fn()
    }
  })
}

export const isSP = () => {
  const useragent = navigator.userAgent.toLowerCase()
  const reg = /(iphone|ipad|ipod|android|mobile)/

  return reg.test(useragent)
}

export const isPC = () => {
  return !isSP()
}
