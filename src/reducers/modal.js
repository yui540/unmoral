import { CLOSE_MODAL } from '../constants/modal'

const init = true

export default (state = init, action) => {
  const { type, payload } = action

  switch (type) {
    case CLOSE_MODAL:
      return (state = false)
    default:
      return state
  }
}
