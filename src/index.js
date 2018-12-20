import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import Unmoral from './components/Unmoral'
import { github } from './config/link'
import { preload } from './lib/util'
import preloadImages from './config/preloadImages'

// preload
preload(
  preloadImages,
  () => {
    console.log(`[running] unmoral official website.`)
    console.log(`[message] 初めまして、このサイトを制作したyui540だよ。`)
    console.log(`[message] このメッセージをみてるってことは、僕と同業者の人かな...？`)
    console.log(`[message] 内向的だから、あんまり人と絡まないけど仲良くしてね。`)
    console.log(`[message] 実はこのサイト、OSSでGitHubに公開してるので気になったら見てみてね。`)
    console.log(`[message] じゃーねー。`)
    console.log(`[repository] ${github}`)
  },
  () => {}
)

const store = configureStore()

render(
  <Provider store={store}>
    <Unmoral />
  </Provider>,
  document.getElementById('root')
)
