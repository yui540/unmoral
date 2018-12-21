import styled from 'styled-components'
import { pcLayout, spLayout } from '../../breakpoint'
import { fadein1, fadein2, fadein3, hover } from './keyframes'
import { themeColor1, themeColor2, themeColor3, themeColor4 } from '../../color'

export const Container = styled.div`
  overflow: hidden;
`

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

export const Wrapper = styled.div`
  ${pcLayout(`
    width: 810px;
    margin: 0 auto;
  `)}
`

export const CharaIconWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  z-index: 10;

  ${pcLayout(`
    width: 800px;
  `)}

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 2px;
    border-top: dashed 2px #666;
    transform: translateY(-50%);
  }
`

export const CharaIcon = styled.img`
  position: relative;
  border-radius: 50%;
  background-color: #fff;
  display: block;
  align-self: flex-start;
  cursor: pointer;

  ${pcLayout(`
    width: 100px;
    border: solid 3px #fff;
    margin: 0 30px;
  `)}

  ${spLayout(`
    width: 20%;
    border: solid 2px #fff;
    margin: 0 12px;
  `)}

  &:hover {
    animation: ${hover} 0.25s ease 0s forwards;
  }

  &[data-match='true'] {
    background-color: ${themeColor1};
    border-color: ${themeColor1};
  }
`

export const CharaProfile = styled.div`
  margin-top: 40px;
  opacity: 0;

  ${pcLayout(`display: flex;`)}

  &[data-state=mitsuki] {
    animation: ${fadein1} 1.4s ease 0s forwards;
  }
  &[data-state='lolo'] {
    animation: ${fadein2} 1.4s ease 0s forwards;
  }
  &[data-state='amor'] {
    animation: ${fadein3} 1.4s ease 0s forwards;
  }
`

export const CharaVisual = styled.img`
  display: block;

  ${pcLayout(`
    align-self: flex-start;
    width: 50%;
  `)}
  ${spLayout(`width: 100%;`)}

  &[alt=amor] {
    transform: scale(1.6);
  }
`

export const CharaInfo = styled.div`
  position: relative;
  z-index: 10;

  ${pcLayout(`
    width: 50%;
    margin-top: 100px;
    align-self: flex-start;
  `)}
`

export const CharaName = styled.img`
  display: block;
  height: 100px;
  margin: 0 auto;
  margin-bottom: 40px;
`

export const CharaDescription = styled.div`
  position: relative;
  background-color: #fff;
  padding: 50px 0;
  box-sizing: border-box;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);

  p {
    margin: 0;
    padding: 0 20px;
    padding-bottom: 20px;
    line-height: 2.5;
    font-size: 14px;
    color: #666;
    white-space: pre-line;
  }

  img {
    display: block;
    width: 100%;
  }
`

export const Frame = styled.div`
  div {
    position: absolute;
    width: 18px;
    height: 18px;
    background-color: ${themeColor1};

    &::before,
    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    &::before {
      background-color: ${themeColor2};
    }
    &::after {
      background-color: ${themeColor3};
    }
  }

  div:nth-child(1) {
    top: 0;
    left: 0;

    &::before {
      transform: translateX(100%);
    }
    &::after {
      transform: translateY(100%);
    }
  }
  div:nth-child(2) {
    top: 0;
    right: 0;

    &::before {
      transform: translateX(-100%);
    }
    &::after {
      transform: translateY(100%);
    }
  }
  div:nth-child(3) {
    bottom: 0;
    left: 0;

    &::before {
      transform: translateX(100%);
    }
    &::after {
      transform: translateY(-100%);
    }
  }
  div:nth-child(4) {
    bottom: 0;
    right: 0;

    &::before {
      transform: translateX(-100%);
    }
    &::after {
      transform: translateY(-100%);
    }
  }
`

export const ControlButton = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  z-index: 10;

  ${pcLayout(`
    width: 500px;
    margin: 20px auto;
    margin-bottom: 80px;
  `)}

  ${spLayout(`
    width: 100%;
    margin: 50px auto;
    margin-bottom: 80px;
  `)}
`

export const PrevButton = styled.div`
  font-size: 20px;
  letter-spacing: 0.2em;
  color: #fff;
  text-align: center;
  background-color: ${themeColor1};
  padding: 10px 0;
  cursor: pointer;

  ${pcLayout(`width: 140px;`)}
  ${spLayout(`width: calc(50% - 5px);`)}

  &:hover {
    animation: ${hover} 0.25s ease 0s forwards;
  }
`

export const NextButton = styled.div`
  font-size: 20px;
  letter-spacing: 0.2em;
  color: #fff;
  text-align: center;
  background-color: ${themeColor1};
  padding: 10px 0;
  cursor: pointer;

  ${pcLayout(`width: 140px;`)}
  ${spLayout(`width: calc(50% - 5px);`)}

  &:hover {
    animation: ${hover} 0.25s ease 0s forwards;
  }
`
