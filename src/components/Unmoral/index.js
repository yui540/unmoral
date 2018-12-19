import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Top from '../../containers/Top'
import Page from '../../containers/Page'

export default () => (
  <Router>
    <>
      <Route path='/' exact component={Top} />
      <Route path='/news' component={Page} />
      <Route path='/introduction' component={Page} />
      <Route path='/movie' component={Page} />
      <Route path='/character' component={Page} />
      <Route path='/staffcast' component={Page} />
    </>
  </Router>
)
