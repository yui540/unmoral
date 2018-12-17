import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Top from '../../containers/Top'

export default () => (
  <Router>
    <>
      <Route path='/' exact component={Top} />
    </>
  </Router>
)
