import React, { Component } from 'react'
import { startAnimation, stopAnimation } from '../../canvas/opening'
import { Containers, Bg, Eyes, Human, AI, Catchcopy, Canvas, Overlay } from './style'

export default class Opening extends Component {
  componentDidMount() {
    startAnimation(this.canvas)
  }

  componentWillUnmount() {
    stopAnimation()
  }

  render() {
    const { changeChapter } = this.props

    return (
      <Containers>
        <Bg />
        <Eyes />
        <Human />
        <AI />
        <Catchcopy />
        <Canvas ref={canvas => (this.canvas = canvas)} />
        <Overlay onAnimationEnd={() => changeChapter()} />
      </Containers>
    )
  }
}
