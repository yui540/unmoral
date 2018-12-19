import React from 'react'
import { Container, Title, Wrapper, Movie, ThumbWrapper, Thumb, MovieTitle } from './style'
import movieList from '../../config/movie'

export default props => (
  <Container>
    <Title>
      <img src='./images/title/movie.png' alt='movie' />
    </Title>
    <Wrapper>
      {movieList.map((data, key) => (
        <Movie href={data.url} key={key}>
          <ThumbWrapper>
            <Thumb src={data.thumb} alt={data.title} />
          </ThumbWrapper>
          <MovieTitle>{data.title}</MovieTitle>
        </Movie>
      ))}
    </Wrapper>
  </Container>
)
