'use strict'

const path = require('path')
const fs = require('fs')

const POSTS_PATH = path.resolve(__dirname, '../posts/news')
const CONFIG_PATH = path.resolve(__dirname, '../src/config/news.js')

const news = []
const files = fs.readdirSync(POSTS_PATH, 'utf8')

console.log(`[build] news posts.`)
files.forEach(file => {
  if (!file.includes('.json')) return

  const fpath = path.resolve(POSTS_PATH, file)
  const data = JSON.parse(fs.readFileSync(fpath, { encoding: 'utf8' }))

  console.log(data)
  news.push(data)
})
fs.writeFileSync(CONFIG_PATH, `export default ${JSON.stringify(news.reverse(), null, '  ')}`, {
  encoding: 'utf8',
})
console.log('finished!')
