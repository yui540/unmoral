import { connect } from 'react-redux'
import Page from '../components/Page'
import { changeChapter } from '../actions/chapter'
import { closeModal } from '../actions/modal'
import { openMenu, closeMenu } from '../actions/menu'

const mapPropsToState = state => ({
  isMenu: state.menu,
})

const mapPropsToDispatch = dispatch => ({
  openMenu() {
    dispatch(openMenu())
  },
  closeMenu() {
    dispatch(closeMenu())
  },
  changeChapter() {
    dispatch(changeChapter('top'))
  },
  closeModal() {
    dispatch(closeModal())
  },
})

export default connect(
  mapPropsToState,
  mapPropsToDispatch
)(Page)
