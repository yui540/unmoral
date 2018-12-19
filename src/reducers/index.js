import { combineReducers } from 'redux'
import chapter from './chapter'
import modal from './modal'
import menu from './menu'

export default combineReducers({
  chapter,
  modal,
  menu,
})
