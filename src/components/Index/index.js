import React, { Component } from 'react'
import Modal from '../Modal'
import { Container } from './style'

export default class Index extends Component {
  render() {
    const { isOpen, closeModal } = this.props

    return (
      <Container>
        <Modal closeModal={closeModal} isOpen={isOpen} />
      </Container>
    )
  }
}
