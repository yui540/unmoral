import { CHANGE_CHAPTER } from '../constants/chapter'

const init = 'load'

export default (state = init, action) => {
  const { type, payload } = action

  switch (type) {
    case CHANGE_CHAPTER:
      return (state = payload.chapter)
    default:
      return state
  }
}
