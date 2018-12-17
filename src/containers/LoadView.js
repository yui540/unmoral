import { connect } from 'react-redux'
import LoadView from '../components/LoadView'
import { changeChapter } from '../actions/chapter'

const mapPropsToState = state => ({})

const mapPropsToDispatch = dispatch => ({
  changeChapter() {
    dispatch(changeChapter('opening'))
  },
})

export default connect(
  mapPropsToState,
  mapPropsToDispatch
)(LoadView)
