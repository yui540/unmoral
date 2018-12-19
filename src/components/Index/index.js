import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../Modal'
import { twitter, facebook, line } from '../../config/shareLink'
import { startAnimation, stopAnimation } from '../../canvas/top'
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
    img: './images/menu/news.png',
  },
  {
    title: 'introduction',
    img: './images/menu/intro.png',
  },
  {
    title: 'movie',
    img: './images/menu/movie.png',
  },
  {
    title: 'character',
    img: './images/menu/chara.png',
  },
  {
    title: 'staffcast',
    img: './images/menu/staff.png',
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
    const { closeMenu } = this.props

    startAnimation(this.canvas)
    closeMenu()
  }

  componentWillUnmount() {
    stopAnimation()
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
            <img src='./images/copyright.png' alt='copyright' />
          </div>
        </Frame>
        <Overlay />
        <LogoWrapper>
          <Logo data-state={isOpen} src='./images/logo.png' alt='ロゴ' />
        </LogoWrapper>
        <PanelWrapper>
          <Panel data-state={isOpen} src='./images/panel.png' alt='リリース' />
          <PanelSP data-state={isOpen} src='./images/panel__sp.png' alt='リリース' />
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
            <img src='./images/menu/share.png' alt='シェア' />
            <a href={twitter} target='_blank' className='fab fa-twitter' />
            <a href={facebook} target='_blank' className='fab fa-facebook-f' />
            <a href={line} target='_blank' className='fab fa-line' />
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
