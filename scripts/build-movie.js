'use strict'

const path = require('path')
const fs = require('fs')

const POSTS_PATH = path.resolve(__dirname, '../posts/movie')
const CONFIG_PATH = path.resolve(__dirname, '../src/config/movie.js')

const movie = []
const files = fs.readdirSync(POSTS_PATH, 'utf8')

console.log(`[build] movie posts.`)
files.forEach(file => {
  if (!file.includes('.json')) return

  const fpath = path.resolve(POSTS_PATH, file)
  const data = JSON.parse(fs.readFileSync(fpath, { encoding: 'utf8' }))

  console.log(data)
  movie.push(data)
})
fs.writeFileSync(CONFIG_PATH, `export default ${JSON.stringify(movie.reverse(), null, '  ')}`, {
  encoding: 'utf8',
})
console.log('finished!')
