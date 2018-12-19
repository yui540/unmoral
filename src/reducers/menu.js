import { OPEN_MENU, CLOSE_MENU } from '../constants/menu'

const init = false

export default (state = init, action) => {
  const { type, payload } = action

  switch (type) {
    case OPEN_MENU:
      return (state = true)
    case CLOSE_MENU:
      return (state = false)
    default:
      return state
  }
}
