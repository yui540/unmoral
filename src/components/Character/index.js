import React, { Component } from 'react'
import {
  Container,
  Title,
  Wrapper,
  CharaIconWrapper,
  CharaIcon,
  CharaProfile,
  Frame,
  CharaVisual,
  CharaInfo,
  CharaName,
  CharaDescription,
  ControlButton,
  PrevButton,
  NextButton,
} from './style'
import characters from '../../config/chara'

export default class Character extends Component {
  constructor(props) {
    super(props)

    this.state = {
      chara: 'mitsuki',
    }
  }

  changeChara(chara) {
    this.setState({ chara })
  }

  render() {
    const { chara } = this.state
    const { name, visual, pic, profile, prev, next } = characters[chara]

    return (
      <Container>
        <Title>
          <img src='./images/title/character.png' alt='character' />
        </Title>
        <Wrapper>
          <CharaIconWrapper>
            <CharaIcon
              data-match={chara === 'mitsuki'}
              src='./images/character/icon/mitsuki.png'
              onClick={() => this.changeChara('mitsuki')}
            />
            <CharaIcon
              data-match={chara === 'lolo'}
              src='./images/character/icon/lolo.png'
              onClick={() => this.changeChara('lolo')}
            />
            <CharaIcon
              data-match={chara === 'amor'}
              src='./images/character/icon/amor.png'
              onClick={() => this.changeChara('amor')}
            />
          </CharaIconWrapper>
          <CharaProfile data-state={chara}>
            <CharaVisual src={visual} alt={chara} />
            <CharaInfo>
              <CharaName src={name} alt={chara} />
              <CharaDescription>
                <Frame>
                  <div />
                  <div />
                  <div />
                  <div />
                </Frame>
                <p>{profile}</p>
                <img src={pic} alt={chara} />
              </CharaDescription>
            </CharaInfo>
          </CharaProfile>
          <ControlButton>
            <PrevButton onClick={() => this.changeChara(prev)}>Prev</PrevButton>
            <NextButton onClick={() => this.changeChara(next)}>Next</NextButton>
          </ControlButton>
        </Wrapper>
      </Container>
    )
  }
}
