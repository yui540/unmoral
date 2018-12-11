import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import Unmoral from './components/Unmoral'
import createjs from 'createjs'

console.log(createjs)

const store = configureStore()

render(
  <Provider store={store}>
    <Unmoral />
  </Provider>,
  document.getElementById('root')
)
