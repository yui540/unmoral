import React, { Component } from 'react'
import { Container, Title, Wrapper, List } from './style'
import newsList from '../../config/news'

export default class News extends Component {
  render() {
    return (
      <Container>
        <Title>
          <img src='./images/title/news.png' alt='news' />
        </Title>
        <Wrapper>
          {newsList.map((data, key) => (
            <List key={key}>
              <img
                src={data.thumbnail ? data.thumbnail : '/images/news/noimage.png'}
                alt={data.title}
              />
              <div>
                <h3>{data.title}</h3>
                <span>{data.date}</span>
              </div>
            </List>
          ))}
        </Wrapper>
      </Container>
    )
  }
}
