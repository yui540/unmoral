import { connect } from 'react-redux'
import Index from '../components/Index'
import { closeModal } from '../actions/modal'
import { openMenu, closeMenu } from '../actions/menu'

const mapPropsToState = state => ({
  isOpen: state.modal,
  isMenu: state.menu,
})

const mapPropsToDispatch = dispatch => ({
  closeModal() {
    dispatch(closeModal())
  },
  openMenu() {
    dispatch(openMenu())
  },
  closeMenu() {
    dispatch(closeMenu())
  },
})

export default connect(
  mapPropsToState,
  mapPropsToDispatch
)(Index)
