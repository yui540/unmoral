import React from 'react'
import { Container, Progress, Wrapper, Icon, Color, Label, Frame, Box, Cross, Eyes } from './style'
import label from '../../images/load-view/label.svg'

const colorList = [1, 4, 3, 1, 4, 3, 2, 3, 2, 1, 3, 4, 3, 2, 1, 2]

export default props => (
  <Container>
    <Progress />
    <Wrapper>
      <Icon>
        {colorList.map((i, key) => (
          <Color num={i} key={key} />
        ))}
      </Icon>
      <Label src={label} alt='unmoral official website' />
    </Wrapper>
    <Frame>
      {[...Array(4).keys()].map(i => (
        <Box num={i} key={i} />
      ))}
      {[...Array(4).keys()].map(i => (
        <Cross num={i} key={i} />
      ))}
    </Frame>
    <Eyes onAnimationEnd={() => props.changeChapter()} />
  </Container>
)
