import styled from 'styled-components'
import { pcLayout, spLayout } from '../../breakpoint'
import {
  openEye1,
  openEye2,
  closeEye1,
  closeEye2,
  openEye1__sp,
  openEye2__sp,
  closeEye1__sp,
  closeEye2__sp,
  sway,
} from './keyframes'
import { fadein, slideRight, slideLeft } from '../../common-keyframes'
import { easeOutCirc, easeOutSine } from '../../easing'
import { white, black } from '../../color'

export const Containers = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${white};
  overflow: hidden;
`

export const Bg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

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
    background-image: url(./images/room.png);
    background-size: 100% auto;
    background-position: center;
    opacity: 0.2;
  }

  &::after {
    background-image: url(./images/opening/message.png);
    background-position: center;
    background-repeat: no-repeat;

    ${pcLayout(`background-size: auto 30px;`)}
    ${spLayout(`background-size: 80% auto`)}
  }
`

export const Eyes = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &::before,
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 50%;
    background-color: ${black};
  }

  /* animation */
  &::before {
    @media screen and (min-width: 761px) {
      animation: ${openEye1} 0.8s ${easeOutCirc} 0.2s forwards,
        ${closeEye1} 0.5s ${easeOutCirc} 1s forwards;
    }
    @media screen and (max-width: 760px) {
      animation: ${openEye1__sp} 0.8s ${easeOutCirc} 0.2s forwards,
        ${closeEye1__sp} 0.5s ${easeOutCirc} 1s forwards;
    }
  }
  &::after {
    @media screen and (min-width: 761px) {
      animation: ${openEye2} 0.8s ${easeOutCirc} 0.2s forwards,
        ${closeEye2} 0.5s ${easeOutCirc} 1s forwards;
    }
    @media screen and (max-width: 760px) {
      animation: ${openEye2__sp} 0.8s ${easeOutCirc} 0.2s forwards,
        ${closeEye2__sp} 0.5s ${easeOutCirc} 1s forwards;
    }
  }
`

export const Human = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(./images/opening/zinrui.png);
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${black};
  opacity: 0;

  ${pcLayout(`background-size: auto 110%;`)}
  ${spLayout(`background-size: 120% auto;`)}

  /* animation */
  animation:
    ${sway} .2s ease-in-out 1.4s infinite,
    ${fadein} .4s ease 1.4s forwards;
`

export const AI = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(./images/opening/ai.png);
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${black};
  opacity: 0;

  ${pcLayout(`background-size: auto 110%;`)}
  ${spLayout(`background-size: 120% auto;`)}

  /* animation */
  animation:
    ${sway} .2s ease-in-out 1.54s infinite,
    ${fadein} .4s ease 1.54s forwards;
`

export const Catchcopy = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${black};
  opacity: 0;

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
  }

  &::before {
    top: calc(50% - 0.5px);
    left: 0;
    width: 100%;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.6);
    transform: translateX(-100%);
  }

  &::after {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(./images/opening/catchcopy.png);
    background-position: center;
    background-repeat: no-repeat;

    ${pcLayout(`background-size: auto 55px;`)}
    ${spLayout(`background-size: 75% auto;`)}
  }

  /* animation */
  animation: ${sway} 0.2s ease-in-out 1.54s infinite, ${fadein} 0.4s ease 1.68s forwards;

  &::before {
    animation: ${slideRight} 0.3s ease 1.85s forwards, ${slideLeft} 0.4s ease 2.15s reverse forwards;
  }
`

export const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${black};
  opacity: 0;

  /* animation */
  animation: ${fadein} 0.8s ease 2.5s forwards;
`
