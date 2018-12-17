import { connect } from 'react-redux'
import Opening from '../components/Opening'
import { changeChapter } from '../actions/chapter'

const mapPropsToState = state => ({})

const mapPropsToDispatch = dispatch => ({
  changeChapter() {
    dispatch(changeChapter('top'))
  },
})

export default connect(
  mapPropsToState,
  mapPropsToDispatch
)(Opening)
