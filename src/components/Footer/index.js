import React from 'react'
import { Container, Info, Logo, Ad, Copyright } from './style'
import { github } from '../../config/link'

export default () => (
  <Container>
    <Info>
      <Logo src='./images/logo-white.png' alt='ロゴ' />
      <Ad target='_blank' href={github}>
        <img src='./images/ad.png' alt='open-source-project' />
      </Ad>
    </Info>
    <Copyright />
  </Container>
)
