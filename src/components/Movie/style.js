import styled from 'styled-components'
import { pcLayout, spLayout } from '../../breakpoint'
import { themeColor1 } from '../../color'

export const Title = styled.div`
  ${pcLayout(`padding: 80px 0;`)}
  ${spLayout(`
    padding: 50px 0;
    padding-top: 30vw;
  `)}

  img {
    display: block;
    margin: 0 auto;

    ${pcLayout(`width: 800px;`)}
    ${spLayout(`width: 100%;`)}
  }
`

export const Container = styled.div``

export const Wrapper = styled.div`
  margin: 0 auto;

  ${pcLayout(`
    width: 750px;
    display: flex;
    justify-content: center;
    margin-top: 100px;
    margin-bottom: 200px;
  `)}

  ${spLayout(`
    width: 90%;
    margin-top: 100px;
    margin-bottom: 200px;
  `)}
`

export const Movie = styled.a`
  display: block;
  text-decoration: none;
  transition: all 0.5s ease 0s;

  ${pcLayout(`
    width: 350px;
    background-color: #fff;
    margin: 0 25px;
    border: solid 5px #fff;
    box-shadow: 0 0 10px rgba(0,0,0,.3);
  `)}

  ${spLayout(`
    width: 100%;
    margin: 50px 0;
    background-color: #fff;
    border: solid 5px #fff;
    box-shadow: 0 0 5px rgba(0,0,0,.3);
    box-sizing: border-box;
  `)}

  &:hover {
    background-color: ${themeColor1};
    border-color: ${themeColor1};
  }
  &:hover div:nth-child(1) img {
    transform: scale(1.1);
  }
  &:hover h3 {
    color: #fff;
  }
`

export const ThumbWrapper = styled.div`
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-image: url(./images/play.png);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;

    ${pcLayout(`
      width: 80px;
      height: 80px;
    `)}

    ${spLayout(`
      width: 80px;
      height: 80px;
    `)}
  }
`

export const Thumb = styled.img`
  display: block;
  width: 100%;
  opacity: 0.5;
  transition: all 0.5s ease 0s;
`

export const MovieTitle = styled.h3`
  margin: 0;
  transition: all 0.5s ease 0s;

  ${pcLayout(`
    padding: 5px;
    font-size: 16px;
    text-align: center;
    color: #666;
  `)}

  ${spLayout(`
    padding: 2px;
    font-size: 13px;
    text-align: center;
    color: #666;
  `)}
`
