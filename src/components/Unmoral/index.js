import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Title } from './style'
import photo from '../../images/main.png'
import logo from '../../images/logo.svg'

const Index = () => (
  <>
    <Title>Home</Title>
    <img src={logo} width='100%' />
  </>
)
const About = () => <Title>About</Title>
const Photo = () => (
  <>
    <Title>Photo</Title>
    <img style={{ width: '100%', display: 'block' }} src={photo} alt='photo' />
  </>
)

export default () => (
  <Router>
    <>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/photo'>Photo</Link>
      </nav>
      <Route path='/' exact component={Index} />
      <Route path='/about' component={About} />
      <Route path='/photo' component={Photo} />
    </>
  </Router>
)
