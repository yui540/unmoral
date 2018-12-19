import styled from 'styled-components'
import { showModal } from './keyframes'
import { fadein } from '../../common-keyframes'
import { pcLayout, spLayout } from '../../breakpoint'
import { black, white, fontColor } from '../../color'
import { easeOutCirc } from '../../easing'

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);

  &[data-state='false'] {
    display: none;
  }
`

export const VideoWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: ${white};
  transform: translate(-50%, -50%);
  opacity: 0;

  ${pcLayout(`
    width: 750px;
    padding: 30px 0;
    border-radius: 3px;
    box-shadow: 0px 0px 50px rgba(255,255,255,.6);
  `)}

  ${spLayout(`
    width: 95%;
    padding: 15px 0;
    border-radius: 2px;
    box-shadow: 0px 0px 30px rgba(255,255,255,.6);
  `)}

  /* animation */
  animation: ${showModal} .6s ease 0s forwards;
`

export const Frame = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  div {
    position: absolute;
    background-color: ${fontColor};
  }
  div:nth-child(1),
  div:nth-child(2) {
    width: 100%;
    height: 1px;
    left: 0;
  }
  div:nth-child(3),
  div:nth-child(4) {
    width: 1px;
    height: 100%;
    top: 0;
  }
  div:nth-child(1) {
    ${pcLayout(`top: calc(15px - .5px);`)}
    ${spLayout(`top: calc(7.5px - .5px);`)}
  }
  div:nth-child(2) {
    ${pcLayout(`bottom: calc(15px - .5px);`)}
    ${spLayout(`bottom: calc(7.5px - .5px);`)}
  }
  div:nth-child(3) {
    ${pcLayout(`left: calc(15px - .5px);`)}
    ${spLayout(`left: calc(7.5px - .5px);`)}
  }
  div:nth-child(4) {
    ${pcLayout(`right: calc(15px - .5px);`)}
    ${spLayout(`right: calc(7.4px - .5px);`)}
  }
`

export const Video = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 55%;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    vertical-align: bottom;
    opacity: 0;

    /* animation */
    animation: ${fadein} 1.5s ease 0.5s forwards;
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #eee;
  }
`

export const Sheet = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const CloseButton = styled.button`
  appearance: none;
  border: none;
  padding: 0;
  background-color: transparent;
  position: absolute;
  cursor: pointer;
  opacity: 0;
  transition: all 0.6s ${easeOutCirc} 0s;

  ${pcLayout(`
    top: 10px;
    right: 10px;
    width: 100px;
    height: 100px;
  `)}

  ${spLayout(`
    top: 5px;
    right: 5px;
    width: 50px;
    height: 50px;
  `)}

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: calc(50% - 0.5px);
    left: 10%;
    width: 80%;
    height: 1px;
    background-color: ${white};
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }

  &:hover {
    transform: scale(1.2);
  }

  /* animation */
  animation: ${fadein} 0.8s ease 0.7s forwards;
`
