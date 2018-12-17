import styled from 'styled-components'
import { pcLayout, spLayout } from '../../breakpoint'
import { flash, colorFlash } from './keyframes'
import { slideRight, slideBottom, slideTop } from '../../common-keyframes'
import { easeInOutSine, easeOutCirc } from '../../easing'
import {
  black,
  white,
  gray,
  themeColor1,
  themeColor2,
  themeColor3,
  themeColor4,
  fontColor,
} from '../../color'

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: ${white};
`

export const Progress = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-color: ${gray};
    transform: translateX(-100%);

    /* animation */
    animation: ${slideRight} 3s linear 0s forwards;
  }
`

export const Wrapper = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`

const pcIconSize = '150px'
const spIconSize = '25vw'
export const Icon = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${pcLayout(`
    width: ${pcIconSize};
    height: ${pcIconSize};
  `)}
  ${spLayout(`
    width: ${spIconSize};
    height: ${spIconSize};
  `)}
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

const pcLabelSize = '250px'
const spLabelSize = '43vw'
export const Label = styled.img`
  display: block;
  opacity: .1;

  ${pcLayout(`
    width: ${pcLabelSize};
    margin-top: calc(${pcLabelSize} / 9);
  `)}
  ${spLayout(`
    width: ${spLabelSize};
    margin-top: calc(${spLabelSize} / 9);
  `)}

  /* animation */
  animation: ${flash} 1.5s ${easeInOutSine} 0s infinite;
`

const pcMargin = '20px'
const spMargin = '10px'
const pcFrameSize = '50px'
const spFrameSize = '20px'
export const Frame = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  div:nth-child(1) {
    /* Box */
    ${pcLayout(`
      top: ${pcMargin};
      left: ${pcMargin};
    `)}
    ${spLayout(`
      top: ${spMargin};
      left: ${spMargin};
    `)}

    &::before,
    &::after {
      border-bottom-color: transparent;
      border-right-color: transparent;
    }
    &::before {
      transform: translateX(30%);
    }
    &::after {
      transform: translateY(30%);
    }
  }

  div:nth-child(2) {
    /* Box */
    ${pcLayout(`
      top: ${pcMargin};
      right: ${pcMargin};
    `)}
    ${spLayout(`
      top: ${spMargin};
      right: ${spMargin};
    `)}

    &::before,
    &::after {
      border-bottom-color: transparent;
      border-left-color: transparent;
    }
    &::before {
      transform: translateX(-30%);
    }
    &::after {
      transform: translateY(30%);
    }
  }

  div:nth-child(3) {
    /* Box */
    ${pcLayout(`
      bottom: ${pcMargin};
      left: ${pcMargin};
    `)}
    ${spLayout(`
      bottom: ${spMargin};
      left: ${spMargin};
    `)}

    &::before,
    &::after {
      border-top-color: transparent;
      border-right-color: transparent;
    }
    &::before {
      transform: translateX(30%);
    }
    &::after {
      transform: translateY(-30%);
    }
  }

  div:nth-child(4) {
    /* Box */
    ${pcLayout(`
      bottom: ${pcMargin};
      right: ${pcMargin};
    `)}
    ${spLayout(`
      bottom: ${spMargin};
      right: ${spMargin};
    `)}

    &::before,
    &::after {
      border-top-color: transparent;
      border-left-color: transparent;
    }
    &::before {
      transform: translateX(-30%);
    }
    &::after {
      transform: translateY(-30%);
    }
  }

  div:nth-child(5) {
    /* Cross */
    left: 50%;
    height: 1px;
    transform: translateX(-50%);

    ${pcLayout(`
      top: ${pcMargin};
      width: calc(${pcFrameSize} * 2);
    `)}
    ${spLayout(`
      top: ${spMargin};
      width: calc(${spFrameSize} * 2);
    `)}

    &::after {
      top: 0;
      left: 50%;
      width: 1px;
      transform: translate(-50%, -20%);

      ${pcLayout(`height: calc(${pcFrameSize} / 2);`)}
      ${spLayout(`height: calc(${spFrameSize} / 2);`)}
    }
  }

  div:nth-child(6) {
    /* Cross */
    left: 50%;
    height: 1px;
    transform: translateX(-50%);

    ${pcLayout(`
      bottom: ${pcMargin};
      width: calc(${pcFrameSize} * 2);
    `)}
    ${spLayout(`
      bottom: ${spMargin};
      width: calc(${spFrameSize} * 2);
    `)}

    &::after {
      bottom: 0;
      left: 50%;
      width: 1px;
      transform: translate(-50%, 20%);

      ${pcLayout(`height: calc(${pcFrameSize} / 2);`)}
      ${spLayout(`height: calc(${spFrameSize} / 2);`)}
    }
  }

  div:nth-child(7) {
    /* Cross */
    top: 50%;
    width: 1px;
    transform: translateY(-50%);

    ${pcLayout(`
      left: ${pcMargin};
      height: calc(${pcFrameSize} * 2);
    `)}
    ${spLayout(`
      left: ${spMargin};
      height: calc(${spFrameSize} * 2);
    `)}

    &::after {
      left: 0;
      top: 50%;
      height: 1px;
      transform: translate(-20%, -50%);

      ${pcLayout(`width: calc(${pcFrameSize} / 2);`)}
      ${spLayout(`width: calc(${spFrameSize} / 2);`)}
    }
  }

  div:nth-child(8) {
    /* Cross */
    top: 50%;
    width: 1px;
    transform: translateY(-50%);

    ${pcLayout(`
      right: ${pcMargin};
      height: calc(${pcFrameSize} * 2);
    `)}
    ${spLayout(`
      right: ${spMargin};
      height: calc(${spFrameSize} * 2);
    `)}

    &::after {
      right: 0;
      top: 50%;
      height: 1px;
      transform: translate(20%, -50%);

      ${pcLayout(`width: calc(${pcFrameSize} / 2);`)}
      ${spLayout(`width: calc(${spFrameSize} / 2);`)}
    }
  }
`

export const Box = styled.div`
  position: absolute;
  ${pcLayout(`
    width: ${pcFrameSize};
    height: ${pcFrameSize};
  `)}
  ${spLayout(`
    width: ${spFrameSize};
    height: ${spFrameSize};
  `)}

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: solid 1px ${themeColor1};
  }
  &::before {
    transform: translateX(30%);
  }
  &::after {
    transform: translateY(30%);
  }
`

export const Cross = styled.div`
  position: absolute;
  background-color: ${themeColor1};

  &::after {
    content: '';
    display: block;
    position: absolute;
    background-color: ${themeColor1};
  }
`

export const Eyes = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  div {
    content: '';
    display: block;
    width: 100%;
    height: 50%;
    background-color: ${black};
  }
  div:nth-child(1) {
    transform: translateY(-100%);
  }
  div:nth-child(2) {
    transform: translateY(100%);
  }

  /* animation */
  div:nth-child(1) {
    animation: ${slideBottom} 1.2s ${easeOutCirc} 3.2s forwards;
  }
  div:nth-child(2) {
    animation: ${slideTop} 1.2s ${easeOutCirc} 3.2s forwards;
  }
`
