import { connect } from 'react-redux'
import Index from '../components/Index'
import { closeModal } from '../actions/modal'

const mapPropsToState = state => ({
  isOpen: state.modal,
})

const mapPropsToDispatch = dispatch => ({
  closeModal() {
    dispatch(closeModal())
  },
})

export default connect(
  mapPropsToState,
  mapPropsToDispatch
)(Index)
