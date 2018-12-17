import { connect } from 'react-redux'
import Top from '../components/Top'

const mapPropsToState = state => ({
  chapter: state.chapter,
})

export default connect(mapPropsToState)(Top)
