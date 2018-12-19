import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Footer from '../Footer'
import News from '../../containers/News'
import { twitter, facebook, line } from '../../config/shareLink'
import {
  Container,
  MenuWrapper,
  Icon,
  Color,
  Menu,
  ShareWrapper,
  Copyright,
  Content,
  Body,
  Overlay,
  Frame,
  MenuWrapperSP,
  MenuFrame,
  MenuSP,
  ShareWrapperSP,
  MenuButton,
  MenuButtonFrame,
  MenuButtonBg,
  MenuButtonLine,
  Top,
} from './style'

const colorList = [1, 4, 3, 1, 4, 3, 2, 3, 2, 1, 3, 4, 3, 2, 1, 2]
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

export default class Page extends Component {
  componentDidMount() {
    const { changeChapter, closeModal, closeMenu } = this.props

    closeModal()
    closeMenu()
    changeChapter()
  }

  toggleMenu() {
    const { isMenu, openMenu, closeMenu } = this.props

    if (isMenu) closeMenu()
    else openMenu()
  }

  render() {
    const { isMenu, openMenu, closeMenu } = this.props
    const path = this.props.match.path

    return (
      <Container>
        <MenuWrapper>
          <Icon>
            {colorList.map((i, key) => (
              <Color num={i} key={key} />
            ))}
            <Link to='/' />
          </Icon>
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
          <ShareWrapper>
            <img src='./images/menu/share.png' alt='シェア' />
            <a href={twitter} target='_blank' className='fab fa-twitter' />
            <a href={facebook} target='_blank' className='fab fa-facebook-f' />
            <a href={line} target='_blank' className='fab fa-line' />
          </ShareWrapper>
        </MenuWrapper>
        <Copyright />
        <Content>
          <Body>
            <section>
              <Route path='/news' component={News} />
            </section>
            <Footer />
          </Body>
        </Content>
        <Overlay />
        <Frame>
          <div />
          <div />
          <div />
          <div />
        </Frame>
        <MenuWrapperSP data-open={isMenu}>
          <MenuFrame>
            <div />
            <div />
            <div />
          </MenuFrame>
          <Top>
            <Link to='/'>
              <img src='./images/logo.png' alt='top' />
            </Link>
          </Top>
          {menuList.map((menu, key) => (
            <MenuSP key={key} data-match={path === `/${menu.title}`}>
              <Link to={`/${menu.title}`}>
                <div />
                <div />
                <div />
                <div />
                <img src={menu.img} alt='' />
              </Link>
            </MenuSP>
          ))}
          <ShareWrapperSP data-open={isMenu}>
            <img src='./images/menu/share.png' alt='シェア' />
            <a href={twitter} target='_blank' className='fab fa-twitter' />
            <a href={facebook} target='_blank' className='fab fa-facebook-f' />
            <a href={line} target='_blank' className='fab fa-line' />
          </ShareWrapperSP>
        </MenuWrapperSP>
        <MenuButton onClick={this.toggleMenu.bind(this)}>
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
      </Container>
    )
  }
}
