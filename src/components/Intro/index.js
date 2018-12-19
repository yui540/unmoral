import React from 'react'
import { Container, Title, TopImage, Text, BottomImage } from './style'
import text from '../../config/intro'

export default props => (
  <Container>
    <Title>
      <img src='./images/title/introduction.png' alt='news' />
    </Title>
    <TopImage src='./images/intro/top.png' alt='top' />
    <Text>{text}</Text>
    <BottomImage src='./images/intro/bottom.png' alt='bottom' />
  </Container>
)
