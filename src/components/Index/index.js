import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../Modal'
import { startAnimation, stopAnimation } from '../../canvas/top'
import logo from '../../images/logo.svg'
import panel from '../../images/panel.svg'
import panelSP from '../../images/panel__sp.svg'
import news from '../../images/menu/news.svg'
import intro from '../../images/menu/intro.svg'
import movie from '../../images/menu/movie.svg'
import character from '../../images/menu/chara.svg'
import staff from '../../images/menu/staff.svg'
import share from '../../images/menu/share.svg'
import copyright from '../../images/copyright.svg'
import {
  Container,
  MainVisual,
  Canvas,
  Noise,
  Overlay,
  LogoWrapper,
  Logo,
  PanelWrapper,
  Panel,
  PanelSP,
  MenuWrapper,
  Menu,
  MenuFrame,
  ShareWrapper,
  Frame,
  MenuButton,
  MenuButtonFrame,
  MenuButtonBg,
  MenuButtonLine,
  MessageWrapper,
  Message,
} from './style'

const menuList = [
  {
    title: 'news',
    img: news,
  },
  {
    title: 'introduction',
    img: intro,
  },
  {
    title: 'movie',
    img: movie,
  },
  {
    title: 'character',
    img: character,
  },
  {
    title: 'staffcast',
    img: staff,
  },
]

export default class Index extends Component {
  constructor(props) {
    super(props)

    this.state = {
      rotateX: 0,
      rotateY: 0,
    }
  }

  componentDidMount() {
    startAnimation(this.canvas)
  }

  toggleMenu() {
    const { isMenu, openMenu, closeMenu } = this.props

    if (isMenu) closeMenu()
    else openMenu()
  }

  render() {
    const { isOpen, closeModal, isMenu } = this.props
    const { rotateX, rotateY } = this.state

    return (
      <Container>
        <MainVisual />
        <Canvas ref={canvas => (this.canvas = canvas)} />
        <Noise />
        <Frame>
          <div />
          <div>
            <img src={copyright} alt='copyright' />
          </div>
        </Frame>
        <Overlay />
        <LogoWrapper>
          <Logo data-state={isOpen} src={logo} alt='ロゴ' />
        </LogoWrapper>
        <PanelWrapper>
          <Panel data-state={isOpen} src={panel} alt='リリース' />
          <PanelSP data-state={isOpen} src={panelSP} alt='リリース' />
        </PanelWrapper>
        <MessageWrapper>
          <Message data-state={isOpen} src='./images/message.png' alt='これは、愛情表現？' />
        </MessageWrapper>
        <MenuWrapper data-open={isMenu} data-state={isOpen}>
          <MenuFrame>
            <div />
            <div />
            <div />
          </MenuFrame>
          {menuList.map((menu, key) => (
            <Menu key={key}>
              <Link to={`/${menu.title}`}>
                <div />
                <div />
                <div />
                <div />
                <img src={menu.img} alt='' />
              </Link>
            </Menu>
          ))}
          <ShareWrapper data-open={isMenu} data-state={isOpen}>
            <img src={share} alt='シェア' />
            <a href='#' target='_blank' className='fab fa-twitter' />
            <a href='#' target='_blank' className='fab fa-facebook-f' />
            <a href='#' target='_blank' className='fab fa-line' />
          </ShareWrapper>
        </MenuWrapper>
        <MenuButton data-state={isOpen} onClick={this.toggleMenu.bind(this)}>
          <MenuButtonBg>
            <div />
            <div />
            <div />
            <div />
          </MenuButtonBg>
          <MenuButtonFrame>
            <div />
            <div />
            <div />
            <div />
          </MenuButtonFrame>
          <MenuButtonLine data-open={isMenu}>
            <div />
            <div />
            <div />
          </MenuButtonLine>
        </MenuButton>
        <Modal closeModal={closeModal} isOpen={isOpen} />
      </Container>
    )
  }
}
