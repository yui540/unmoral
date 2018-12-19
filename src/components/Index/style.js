import styled from 'styled-components'
import { pcLayout, spLayout } from '../../breakpoint'
import {
  noise1,
  noise2,
  flash,
  quick1,
  quick2,
  quick3,
  quick4,
  slideMenu,
  popup,
  scale,
  hover,
  turn,
  showMenuButton,
} from './keyframes'
import { fadeout, fadein, slideTop } from '../../common-keyframes'
import { easeInOutCubic, easeOutCirc } from '../../easing'
import { white, black } from '../../color'

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${white};
  overflow: hidden;

  ${pcLayout(`
    min-width: 1100px;
  `)}
`

export const MainVisual = styled.div`
  position: absolute;
  background-color: ${white};

  ${pcLayout(`
    top: 50px;
    left: 15px;
    width: calc(100% - 30px);
    height: calc(100% - 100px);
  `)}
  ${spLayout(`
    top: 40px;
    left: 5px;
    width: calc(100% - 10px);
    height: calc(100% - 80px);
  `)}

  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
  }
  &::before {
    background-image: url(./images/room.png);
    background-position: center;
  }
  &::after {
    ${pcLayout(`
      background-image: url(./images/main.png);
      background-position: center;
    `)}
    ${spLayout(`
      background-image: url(./images/main__sp.png);
      background-position: right center;
    `)}

    /* animation */
    animation: ${flash} 7s ease 0s infinite;
  }

  /* animation */
  animation: ${scale} 3s ease-in-out 0s infinite;
`

export const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
`

export const Noise = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  ${spLayout(`
    border-top: solid 40px ${white};
    border-bottom: solid 40px ${white};
    border-left: solid 5px ${white};
    border-right: solid 5px ${white};
  `)}

  ${pcLayout(`
    border-top: solid 50px ${white};
    border-bottom: solid 50px ${white};
    border-left: solid 15px ${white};
    border-right: solid 15px ${white};
  `)}

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.2);
    transform: translateY(100vh);
  }
  &::before {
    height: 4%;

    /* animation */
    animation: ${noise1} 6s linear 0s infinite;
  }
  &::after {
    height: 15%;

    /* animation */
    animation: ${noise2} 6s linear 2s infinite;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${black};

  /* animation */
  animation: ${fadeout} 1.2s ease 0s forwards;
`

export const LogoWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;

  ${spLayout(`transition: all .5s ease 0s;`)}

  &:hover {
    animation: ${hover} 0.3s ease 0s forwards;
  }
`

export const Logo = styled.img`
  display: block;
  transform: translateY(100%);

  ${pcLayout(`height: 15vh;`)}
  ${spLayout(`width: 90vw;`)}

  /* animation */
  &[data-state=false] {
    animation: ${slideTop} 0.75s ${easeInOutCubic} 0.2s forwards;
  }
`

export const PanelWrapper = styled.div`
  position: absolute;
  overflow: hidden;

  ${pcLayout(`
    top: 50%;
    left: 70px;
    transform: translate(0%, -50%);
  `)}

  ${spLayout(`
    top: 45px;
    left: 10px;
  `)}

  &:hover {
    animation: ${hover} 0.3s ease 0s forwards;
  }
`

export const Panel = styled.img`
  display: block;
  height: 35vh;
  transform: translateY(100%);

  ${spLayout(`display: none;`)}

  /* animation */
  &[data-state=false] {
    animation: ${slideTop} 0.75s ${easeInOutCubic} 0s forwards;
  }
`

export const PanelSP = styled.img`
  display: block;
  width: 50vw;
  transform: translateY(100%);

  ${pcLayout(`display: none;`)}

  /* animation */
  &[data-state=false] {
    animation: ${slideTop} 0.75s ${easeInOutCubic} 0s forwards;
  }
`

export const MenuWrapper = styled.div`
  position: absolute;

  ${pcLayout(`
    top: 50%;
    right: 30px;
    transform: translate(0%, -50%);
  `)}

  ${spLayout(`
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
    transition: all .7s cubic-bezier(0.23, 1, 0.32, 1) 0s;

    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url(./images/sub__sp.png);
      background-position: right center;
      background-size: cover;
      opacity: .3;
    }

    &[data-open=true] { transform: translateX(0); }
  `)}

  /* animation */
  @media screen and (min-width: 761px) {
    &[data-state='false'] {
      div:nth-child(2) a {
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
      div:nth-child(2) img {
        animation: ${slideMenu} 0.6s ${easeInOutCubic} 0.8s forwards;
      }
      div:nth-child(3) a {
        div:nth-child(1) {
          animation: ${quick1} 0.6s ${easeOutCirc} 1s forwards;
        }
        div:nth-child(2) {
          animation: ${quick2} 0.6s ${easeOutCirc} 1s forwards;
        }
        div:nth-child(3) {
          animation: ${quick3} 0.6s ${easeOutCirc} 1s forwards;
        }
        div:nth-child(4) {
          animation: ${quick4} 0.6s ${easeOutCirc} 1s forwards;
        }
      }
      div:nth-child(3) img {
        animation: ${slideMenu} 0.6s ${easeInOutCubic} 1s forwards;
      }
      div:nth-child(4) a {
        div:nth-child(1) {
          animation: ${quick1} 0.6s ${easeOutCirc} 1.2s forwards;
        }
        div:nth-child(2) {
          animation: ${quick2} 0.6s ${easeOutCirc} 1.2s forwards;
        }
        div:nth-child(3) {
          animation: ${quick3} 0.6s ${easeOutCirc} 1.2s forwards;
        }
        div:nth-child(4) {
          animation: ${quick4} 0.6s ${easeOutCirc} 1.2s forwards;
        }
      }
      div:nth-child(4) img {
        animation: ${slideMenu} 0.6s ${easeInOutCubic} 1.2s forwards;
      }
      div:nth-child(5) a {
        div:nth-child(1) {
          animation: ${quick1} 0.6s ${easeOutCirc} 1.4s forwards;
        }
        div:nth-child(2) {
          animation: ${quick2} 0.6s ${easeOutCirc} 1.4s forwards;
        }
        div:nth-child(3) {
          animation: ${quick3} 0.6s ${easeOutCirc} 1.4s forwards;
        }
        div:nth-child(4) {
          animation: ${quick4} 0.6s ${easeOutCirc} 1.4s forwards;
        }
      }
      div:nth-child(5) img {
        animation: ${slideMenu} 0.6s ${easeInOutCubic} 1.4s forwards;
      }
      div:nth-child(6) a {
        div:nth-child(1) {
          animation: ${quick1} 0.6s ${easeOutCirc} 1.6s forwards;
        }
        div:nth-child(2) {
          animation: ${quick2} 0.6s ${easeOutCirc} 1.6s forwards;
        }
        div:nth-child(3) {
          animation: ${quick3} 0.6s ${easeOutCirc} 1.6s forwards;
        }
        div:nth-child(4) {
          animation: ${quick4} 0.6s ${easeOutCirc} 1.6s forwards;
        }
      }
      div:nth-child(6) img {
        animation: ${slideMenu} 0.6s ${easeInOutCubic} 1.6s forwards;
      }
    }
  }
  @media screen and (max-width: 760px) {
    &[data-open='true'] {
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
    }
  }
`

export const MenuFrame = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  ${pcLayout(`display: none;`)}

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

export const Menu = styled.div`
  ${pcLayout(`
    margin: 10px 0;
  `)}

  ${spLayout(`
    display: flex;
    justify-content: center;
    margin: 10px 0;
  `)}

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

export const ShareWrapper = styled.div`
  ${pcLayout(`
    display: flex;
    margin-top: 20px;
    margin-left: 15px;
  `)}

  ${spLayout(`
    text-align: center;
  `)}

  img {
    display: block;
    opacity: 0;

    ${pcLayout(`
      height: 2vh;
      margin: .5vh 0;
      margin-right: 10px;
    `)}

    ${spLayout(`
      height: 2.5vh;
      margin: 0 auto;
      margin-top: 40px;
      margin-bottom: 20px;
    `)}
  }

  a {
    ${pcLayout(`
      font-size: 3vh;
      display: block;
      margin: 0 .3em;
    `)}

    ${spLayout(`
      font-size: 5vh;
      margin: 0 .7em;
    `)}

    color: #444;
    text-decoration: none;
    transform: scale(0);
    transition: all 0.4s ease-out 0s;
  }
  a:hover {
    color: #ff575f;
  }

  /* animation */
  @media screen and (min-width: 761px) {
    &[data-state='false'] {
      img {
        animation: ${fadein} 0.8s ease 1.8s forwards;
      }
      a:nth-child(2) {
        animation: ${popup} 0.6s ${easeInOutCubic} 1.9s forwards;
      }
      a:nth-child(3) {
        animation: ${popup} 0.6s ${easeInOutCubic} 2s forwards;
      }
      a:nth-child(4) {
        animation: ${popup} 0.6s ${easeInOutCubic} 2.1s forwards;
      }
    }
  }
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

export const Frame = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  div {
    position: absolute;
    left: 0;
    width: 100%;

    ${pcLayout(`height: 50px;`)}
    ${spLayout(`height: 40px;`)}

    &::before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      top: 50%;
      width: 100%;
      height: 1px;
      border-top: dashed 0.5px #666;
      transform: translateY(-0.5px);
    }

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      display: block;
      transform: translate(-50%, -50%);
      background-color: #fff;

      ${pcLayout(`height: 8px;`)}
      ${spLayout(`height: 6px;`)}
    }
  }
  div:nth-child(1) {
    top: 0;
  }
  div:nth-child(2) {
    bottom: 0;
  }
`

export const MenuButton = styled.button`
  appearance: none;
  border: none;
  position: absolute;
  top: 5px;
  right: 5px;
  width: 22vw;
  height: 22vw;
  padding: 0;
  opacity: 0;

  ${pcLayout(`display: none;`)}

  &:focus {
    outline: none;
  }

  /* animation */
  &[data-state='false'] {
    animation: ${showMenuButton} 1s ${easeInOutCubic} 0.4s forwards;
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

export const MessageWrapper = styled.div`
  position: absolute;
  overflow: hidden;

  ${pcLayout(`
    bottom: 60px;
    left: 25px;
  `)}

  ${spLayout(`
    bottom: 50px;
    right: 15px;
  `)}

  &:hover {
    animation: ${hover} 0.3s ease 0s forwards;
  }
`

export const Message = styled.img`
  display: block;
  transform: translateY(100%);

  ${pcLayout(`width: 50vh;`)}
  ${spLayout(`width: 80vw;`)}

  /* animation */
  &[data-state=false] {
    @media screen and (min-width: 761px) {
      animation: ${slideTop} 0.75s ${easeInOutCubic} 1.8s forwards;
    }
    @media screen and (max-width: 760px) {
      animation: ${slideTop} 0.75s ${easeInOutCubic} 0.6s forwards;
    }
  }
`
