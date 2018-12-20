import React from 'react'
import { Container, Wrapper, Title, SubTitle, ListWrapper, List, Frame, Job, Name } from './style'
import staffcastList from '../../config/staffcast'

export default props => (
  <Container>
    <Title>
      <img src='./images/title/staff.png' alt='staffcast' />
    </Title>
    <Wrapper>
      <SubTitle src='./images/cast.png' alt='cast' />
      <ListWrapper>
        {staffcastList.cast.map((data, key) => (
          <List key={key}>
            <Frame />
            <Job>{data.job}</Job>
            {data.name.map((name, _key) => (
              <Name key={_key}>{name}</Name>
            ))}
          </List>
        ))}
      </ListWrapper>
      <SubTitle src='./images/staff.png' alt='staff' />
      <ListWrapper>
        {staffcastList.staff.map((data, key) => (
          <List key={key}>
            <Frame />
            <Job>{data.job}</Job>
            {data.name.map((name, _key) => (
              <Name key={_key}>{name}</Name>
            ))}
          </List>
        ))}
      </ListWrapper>
    </Wrapper>
  </Container>
)
