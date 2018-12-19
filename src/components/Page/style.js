import styled from 'styled-components'
import {
  colorFlash,
  hover,
  quick1,
  quick2,
  quick3,
  quick4,
  slideMenu,
  popup,
  fly,
  showMenuButton,
  turn,
  showPage,
} from './keyframes'
import { fadein, fadeout, slideTop } from '../../common-keyframes'
import { easeInOutSine, easeOutCirc, easeInOutCubic } from '../../easing'
import { pcLayout, spLayout } from '../../breakpoint'
import {
  black,
  white,
  fontColor,
  themeColor1,
  themeColor2,
  themeColor3,
  themeColor4,
} from '../../color'

export const Container = styled.div`
  ${pcLayout(`
    width: 100%;
    min-width: 1100px;
  `)}
`

export const MenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 240px;
  height: 100%;
  background-color: #fff;
  border-right: solid 1px ${fontColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: auto;
  perspective: 500px;

  ${spLayout(`display: none;`)}

  div:nth-child(2) a {
    div:nth-child(1) {
      animation: ${quick1} 0.6s ${easeOutCirc} 0s forwards;
    }
    div:nth-child(2) {
      animation: ${quick2} 0.6s ${easeOutCirc} 0s forwards;
    }
    div:nth-child(3) {
      animation: ${quick3} 0.6s ${easeOutCirc} 0s forwards;
    }
    div:nth-child(4) {
      animation: ${quick4} 0.6s ${easeOutCirc} 0s forwards;
    }
  }
  div:nth-child(2) img {
    animation: ${slideMenu} 0.6s ${easeInOutCubic} 0s forwards;
  }
  div:nth-child(3) a {
    div:nth-child(1) {
      animation: ${quick1} 0.6s ${easeOutCirc} 0.2s forwards;
    }
    div:nth-child(2) {
      animation: ${quick2} 0.6s ${easeOutCirc} 0.2s forwards;
    }
    div:nth-child(3) {
      animation: ${quick3} 0.6s ${easeOutCirc} 0.2s forwards;
    }
    div:nth-child(4) {
      animation: ${quick4} 0.6s ${easeOutCirc} 0.2s forwards;
    }
  }
  div:nth-child(3) img {
    animation: ${slideMenu} 0.6s ${easeInOutCubic} 0.2s forwards;
  }
  div:nth-child(4) a {
    div:nth-child(1) {
      animation: ${quick1} 0.6s ${easeOutCirc} 0.4s forwards;
    }
    div:nth-child(2) {
      animation: ${quick2} 0.6s ${easeOutCirc} 0.4s forwards;
    }
    div:nth-child(3) {
      animation: ${quick3} 0.6s ${easeOutCirc} 0.4s forwards;
    }
    div:nth-child(4) {
      animation: ${quick4} 0.6s ${easeOutCirc} 0.4s forwards;
    }
  }
  div:nth-child(4) img {
    animation: ${slideMenu} 0.6s ${easeInOutCubic} 0.4s forwards;
  }
  div:nth-child(5) a {
    div:nth-child(1) {
      animation: ${quick1} 0.6s ${easeOutCirc} 0.6s forwards;
    }
    div:nth-child(2) {
      animation: ${quick2} 0.6s ${easeOutCirc} 0.6s forwards;
    }
    div:nth-child(3) {
      animation: ${quick3} 0.6s ${easeOutCirc} 0.6s forwards;
    }
    div:nth-child(4) {
      animation: ${quick4} 0.6s ${easeOutCirc} 0.6s forwards;
    }
  }
  div:nth-child(5) img {
    animation: ${slideMenu} 0.6s ${easeInOutCubic} 0.6s forwards;
  }
  div:nth-child(6) a {
    div:nth-child(1) {
      animation: ${quick1} 0.6s ${easeOutCirc} 0.8s forwards;
    }
    div:nth-child(2) {
      animation: ${quick2} 0.6s ${easeOutCirc} 0.8s forwards;
    }
    div:nth-child(3) {
      animation: ${quick3} 0.6s ${easeOutCirc} 0.8s forwards;
    }
    div:nth-child(4) {
      animation: ${quick4} 0.6s ${easeOutCirc} 0.8s forwards;
    }
  }
  div:nth-child(6) img {
    animation: ${slideMenu} 0.6s ${easeInOutCubic} 0.8s forwards;
  }
`

export const Icon = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 120px;
  height: 120px;
  margin: 0px auto;
  margin-bottom: 30px;
  transition: all 0.5s ease 0s;

  &:hover {
    transform: rotateY(8deg) rotateX(-8deg);
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: -15%;
    left: -15%;
    width: 130%;
    height: 130%;
    background-image: url(./images/lolo-help.png);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;

    /* animation */
    animation: ${fly} 2s ease-in-out 0s infinite;
  }

  a {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`

export const Color = styled.div`
  width: 25%;
  height: 25%;
  opacity: 0;
  background-color: ${props => {
    switch (parseInt(props.num)) {
      case 1:
        return themeColor1
      case 2:
        return themeColor2
      case 3:
        return themeColor3
      case 4:
        return themeColor4
    }
  }};

  /* animation */
  animation: ${colorFlash} 2.2s ${easeInOutSine}
    ${props => {
      return 0.5 * (parseInt(props.num) - 1)
    }}s
    infinite;
`

export const Menu = styled.div`
  margin: 10px 28px;

  a {
    position: relative;
    display: inline-block;

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: -1vh;
      width: calc(100% + 2vh);
      height: 100%;
      background-color: #ff575f;
      transform: scale(0);
      transition: 0.25s ease-in-out 0s;
    }

    div {
      position: absolute;
      width: 1.6vh;
      height: 1.6vh;
      border: solid 1px #444;
      box-sizing: border-box;
      opacity: 0;
    }
    div:nth-child(1) {
      top: 0.5vh;
      left: -0.5vh;
      border-right-color: transparent;
      border-bottom-color: transparent;
    }
    div:nth-child(2) {
      top: 0.5vh;
      right: -0.5vh;
      border-left-color: transparent;
      border-bottom-color: transparent;
    }
    div:nth-child(3) {
      bottom: 0.5vh;
      left: -0.5vh;
      border-right-color: transparent;
      border-top-color: transparent;
    }
    div:nth-child(4) {
      bottom: 0.5vh;
      right: -0.5vh;
      border-left-color: transparent;
      border-top-color: transparent;
    }
  }
  a:hover {
    animation: ${hover} 0.3s ease 0.25s forwards;
  }
  a:hover::before {
    transform: scale(1);
  }

  img {
    display: block;
    height: 50px;
    opacity: 0;
    transition: 0.4s ease-in-out 0s forwards;
  }

  a:hover div:nth-child(1) {
    transform: translate(10%, 10%);
  }
  a:hover div:nth-child(2) {
    transform: translate(-10%, 10%);
  }
  a:hover div:nth-child(3) {
    transform: translate(10%, -10%);
  }
  a:hover div:nth-child(4) {
    transform: translate(-10%, -10%);
  }
  a:hover img {
    transform: scale(1.1);
  }
`

export const ShareWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  margin-left: 25px;

  img {
    display: block;
    opacity: 0;
    height: 15px;
    margin: 5px 0;
    margin-right: 10px;
  }

  a {
    font-size: 25px;
    display: block;
    margin: 0 0.3em;
    color: #444;
    text-decoration: none;
    transform: scale(0);
    transition: all 0.4s ease-out 0s;
  }
  a:hover {
    color: #ff575f;
  }

  img {
    animation: ${fadein} 0.8s ease 1s forwards;
  }
  a:nth-child(2) {
    animation: ${popup} 0.6s ${easeInOutCubic} 1.1s forwards;
  }
  a:nth-child(3) {
    animation: ${popup} 0.6s ${easeInOutCubic} 1.2s forwards;
  }
  a:nth-child(4) {
    animation: ${popup} 0.6s ${easeInOutCubic} 1.3s forwards;
  }
`

export const Copyright = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 50px;
  height: 100%;
  background-color: #fff;
  border-left: solid 1px ${fontColor};

  ${spLayout(`display: none;`)}

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-image: url(./images/copyright__tate.png);
    background-size: auto 45%;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0;

    /* animation */
    animation: ${fadein} 0.6s ${easeInOutCubic} 1.4s forwards;
  }
`

export const Content = styled.div`
  width: 100%;
  background-color: #eee;
  background-image: url(./images/bg.png);

  ${pcLayout(`background-size: 40px;`)}
  ${spLayout(`background-size: 30px;`)}
`

export const Body = styled.article`
  ${pcLayout(`
    margin-left: 240px;
    width: calc(100% - 290px);
    background-image: url(./images/bg-mitsuki.png);
    background-position: right -10%;
    background-size: 50% auto;
    background-repeat: no-repeat;
  `)}

  ${spLayout(`
    width: 100%;
    background-image: url(./images/bg-mitsuki.png);
    background-position: right 20%;
    background-size: 90% auto;
    background-repeat: no-repeat;
  `)}

  section {
    opacity: 0;

    /* animation */
    animation: ${showPage} 2s ease 0s forwards;
  }
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;

  /* animation */
  animation: ${fadeout} 0.7s ease 0s forwards, ${slideTop} 0.1s ease 0.7s reverse forwards;
`

export const Frame = styled.div`
  div {
    position: fixed;
    background-color: ${black};
    transform: rotate(45deg);

    ${pcLayout(`
      width: 40px;
      height: 40px;
    `)}

    ${spLayout(`
      width: 30px;
      height: 30px;
    `)}
  }

  div:nth-child(1) {
    ${pcLayout(`top: -20px; left: -20px;`)}
    ${spLayout(`top: -15px; left: -15px;`)}
  }
  div:nth-child(2) {
    ${pcLayout(`top: -20px; right: -20px;`)}
    ${spLayout(`top: -15px; right: -15px;`)}
  }
  div:nth-child(3) {
    ${pcLayout(`bottom: -20px; left: -20px;`)}
    ${spLayout(`bottom: -15px; left: -15px;`)}
  }
  div:nth-child(4) {
    ${pcLayout(`bottom: -20px; right: -20px;`)}
    ${spLayout(`bottom: -15px; right: -15px;`)}
  }
`

export const MenuWrapperSP = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: ${white};
  display: auto;
  -webkit-overflow-scrolling: touch;
  transform: translateX(100%);
  transition: all 0.7s cubic-bezier(0.23, 1, 0.32, 1) 0s;

  ${pcLayout(`display: none;`)}

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(./images/sub__sp.png);
    background-position: right center;
    background-size: cover;
    opacity: 0.3;
  }

  &[data-open='true'] {
    transform: translateX(0);
  }

  /* animation */
  @media screen and (max-width: 760px) {
    &[data-open='true'] {
      div:nth-child(3) a {
        div:nth-child(1) {
          animation: ${quick1} 0.6s ${easeOutCirc} 0s forwards;
        }
        div:nth-child(2) {
          animation: ${quick2} 0.6s ${easeOutCirc} 0s forwards;
        }
        div:nth-child(3) {
          animation: ${quick3} 0.6s ${easeOutCirc} 0s forwards;
        }
        div:nth-child(4) {
          animation: ${quick4} 0.6s ${easeOutCirc} 0s forwards;
        }
      }
      div:nth-child(3) img {
        animation: ${slideMenu} 0.6s ${easeInOutCubic} 0s forwards;
      }
      div:nth-child(4) a {
        div:nth-child(1) {
          animation: ${quick1} 0.6s ${easeOutCirc} 0.2s forwards;
        }
        div:nth-child(2) {
          animation: ${quick2} 0.6s ${easeOutCirc} 0.2s forwards;
        }
        div:nth-child(3) {
          animation: ${quick3} 0.6s ${easeOutCirc} 0.2s forwards;
        }
        div:nth-child(4) {
          animation: ${quick4} 0.6s ${easeOutCirc} 0.2s forwards;
        }
      }
      div:nth-child(4) img {
        animation: ${slideMenu} 0.6s ${easeInOutCubic} 0.2s forwards;
      }
      div:nth-child(5) a {
        div:nth-child(1) {
          animation: ${quick1} 0.6s ${easeOutCirc} 0.4s forwards;
        }
        div:nth-child(2) {
          animation: ${quick2} 0.6s ${easeOutCirc} 0.4s forwards;
        }
        div:nth-child(3) {
          animation: ${quick3} 0.6s ${easeOutCirc} 0.4s forwards;
        }
        div:nth-child(4) {
          animation: ${quick4} 0.6s ${easeOutCirc} 0.4s forwards;
        }
      }
      div:nth-child(5) img {
        animation: ${slideMenu} 0.6s ${easeInOutCubic} 0.4s forwards;
      }
      div:nth-child(6) a {
        div:nth-child(1) {
          animation: ${quick1} 0.6s ${easeOutCirc} 0.6s forwards;
        }
        div:nth-child(2) {
          animation: ${quick2} 0.6s ${easeOutCirc} 0.6s forwards;
        }
        div:nth-child(3) {
          animation: ${quick3} 0.6s ${easeOutCirc} 0.6s forwards;
        }
        div:nth-child(4) {
          animation: ${quick4} 0.6s ${easeOutCirc} 0.6s forwards;
        }
      }
      div:nth-child(6) img {
        animation: ${slideMenu} 0.6s ${easeInOutCubic} 0.6s forwards;
      }
      div:nth-child(7) a {
        div:nth-child(1) {
          animation: ${quick1} 0.6s ${easeOutCirc} 0.8s forwards;
        }
        div:nth-child(2) {
          animation: ${quick2} 0.6s ${easeOutCirc} 0.8s forwards;
        }
        div:nth-child(3) {
          animation: ${quick3} 0.6s ${easeOutCirc} 0.8s forwards;
        }
        div:nth-child(4) {
          animation: ${quick4} 0.6s ${easeOutCirc} 0.8s forwards;
        }
      }
      div:nth-child(7) img {
        animation: ${slideMenu} 0.6s ${easeInOutCubic} 0.8s forwards;
      }
    }
  }
`

export const MenuFrame = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  div {
    position: absolute;
    width: 10vw;
    height: 10vw;

    &::before,
    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: solid 1px #444;
    }
  }
  div:nth-child(1) {
    top: 10px;
    left: 10px;

    &::before,
    &::after {
      border-bottom-color: transparent;
      border-right-color: transparent;
    }
    &::before {
      transform: translateX(22%);
    }
    &::after {
      transform: translateY(22%);
    }
  }
  div:nth-child(2) {
    bottom: 10px;
    left: 10px;

    &::before,
    &::after {
      border-top-color: transparent;
      border-right-color: transparent;
    }
    &::before {
      transform: translateX(22%);
    }
    &::after {
      transform: translateY(-22%);
    }
  }
  div:nth-child(3) {
    bottom: 10px;
    right: 10px;

    &::before,
    &::after {
      border-top-color: transparent;
      border-left-color: transparent;
    }
    &::before {
      transform: translateX(-22%);
    }
    &::after {
      transform: translateY(-22%);
    }
  }
`

export const Top = styled.div`
  position: relative;
  display: block;
  margin: 0 auto;
  margin-bottom: 20px;

  a {
    display: block;
  }

  img {
    display: block;
    width: 70%;
    margin: 0 auto;
  }
`

export const MenuSP = styled.div`
  display: flex;
  justify-content: center;
  margin: 8px 0;

  &[data-match='true'] {
    background-color: ${themeColor1};
  }

  a {
    position: relative;
    display: inline-block;

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: -1vh;
      width: calc(100% + 2vh);
      height: 100%;
      background-color: ${white};
      transform: scale(0);
      transition: 0.25s ease-in-out 0s;
    }

    div {
      position: absolute;
      width: 1.6vh;
      height: 1.6vh;
      border: solid 1px #444;
      box-sizing: border-box;
      opacity: 0;
    }
    div:nth-child(1) {
      top: 0.5vh;
      left: -0.5vh;
      border-right-color: transparent;
      border-bottom-color: transparent;
    }
    div:nth-child(2) {
      top: 0.5vh;
      right: -0.5vh;
      border-left-color: transparent;
      border-bottom-color: transparent;
    }
    div:nth-child(3) {
      bottom: 0.5vh;
      left: -0.5vh;
      border-right-color: transparent;
      border-top-color: transparent;
    }
    div:nth-child(4) {
      bottom: 0.5vh;
      right: -0.5vh;
      border-left-color: transparent;
      border-top-color: transparent;
    }
  }
  a:hover {
    animation: ${hover} 0.3s ease 0.25s forwards;
  }
  a:hover::before {
    transform: scale(1);
  }

  img {
    display: block;
    height: 7vh;
    opacity: 0;
    transition: 0.4s ease-in-out 0s forwards;
  }

  a:hover div:nth-child(1) {
    transform: translate(10%, 10%);
  }
  a:hover div:nth-child(2) {
    transform: translate(-10%, 10%);
  }
  a:hover div:nth-child(3) {
    transform: translate(10%, -10%);
  }
  a:hover div:nth-child(4) {
    transform: translate(-10%, -10%);
  }
  a:hover img {
    transform: scale(1.1);
  }
`

export const ShareWrapperSP = styled.div`
  text-align: center;

  img {
    display: block;
    opacity: 0;
    height: 2.5vh;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  a {
    font-size: 5vh;
    margin: 0 0.7em;
    color: #444;
    text-decoration: none;
    transform: scale(0);
    transition: all 0.4s ease-out 0s;
  }
  a:hover {
    color: #ff575f;
  }

  /* animation */
  @media screen and (max-width: 760px) {
    &[data-open='true'] {
      img {
        animation: ${fadein} 0.8s ease 1s forwards;
      }
      a:nth-child(2) {
        animation: ${popup} 0.6s ${easeInOutCubic} 1.1s forwards;
      }
      a:nth-child(3) {
        animation: ${popup} 0.6s ${easeInOutCubic} 1.2s forwards;
      }
      a:nth-child(4) {
        animation: ${popup} 0.6s ${easeInOutCubic} 1.3s forwards;
      }
    }
  }
`

export const MenuButton = styled.button`
  appearance: none;
  border: none;
  position: fixed;
  top: 0;
  right: 0;
  width: 20vw;
  height: 20vw;
  padding: 0;

  ${pcLayout(`display: none;`)}

  &:focus {
    outline: none;
  }
`

export const MenuButtonBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }

  /* animation */
  div:nth-child(2) {
    animation: ${turn} 8s linear 0s infinite;
  }
  div:nth-child(3) {
    animation: ${turn} 10s linear 0s infinite;
  }
  div:nth-child(4) {
    animation: ${turn} 14s linear 0s infinite;
  }
`

export const MenuButtonFrame = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  div {
    position: absolute;
    width: 12%;
    height: 12%;
    border: solid 1px ${white};
  }
  div:nth-child(1) {
    top: 0;
    left: 0;
    border-bottom-color: transparent;
    border-right-color: transparent;
    transform: translate(40%, 40%);
  }
  div:nth-child(2) {
    top: 0;
    right: 0;
    border-bottom-color: transparent;
    border-left-color: transparent;
    transform: translate(-40%, 40%);
  }
  div:nth-child(3) {
    bottom: 0;
    left: 0;
    border-top-color: transparent;
    border-right-color: transparent;
    transform: translate(40%, -40%);
  }
  div:nth-child(4) {
    bottom: 0;
    right: 0;
    border-top-color: transparent;
    border-left-color: transparent;
    transform: translate(-40%, -40%);
  }
`

export const MenuButtonLine = styled.div`
  div {
    position: absolute;
    top: calc(50% - 0.5px);
    left: 30%;
    width: 40%;
    height: 1px;
    background-color: ${white};
    transition: all 0.4s ${easeInOutCubic} 0s;
  }
  div:nth-child(1) {
    transform: translateY(-1200%);
  }
  div:nth-child(3) {
    transform: translateY(1200%);
  }

  &[data-open='true'] {
    div:nth-child(1) {
      transform: translateY(0%) rotate(45deg);
    }
    div:nth-child(2) {
      opacity: 0;
    }
    div:nth-child(3) {
      transform: translateY(0%) rotate(-45deg);
    }
  }
`
