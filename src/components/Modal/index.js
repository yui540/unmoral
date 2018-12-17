import React from 'react'
import { Container, Sheet, VideoWrapper, Frame, Video, CloseButton } from './style'

export default props => (
  <Container data-state={props.isOpen}>
    <Sheet onClick={() => props.closeModal()} />
    <VideoWrapper>
      <Frame>
        <div />
        <div />
        <div />
        <div />
      </Frame>
      <Video>
        <iframe
          src='https://www.youtube.com/embed/svP4F3HH9Qk'
          frameBorder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        />
      </Video>
    </VideoWrapper>
    <CloseButton onClick={() => props.closeModal()} />
  </Container>
)
