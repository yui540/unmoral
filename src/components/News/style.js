import styled from 'styled-components'
import { pcLayout, spLayout } from '../../breakpoint'

export const Container = styled.div``

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
  ${pcLayout(`padding-bottom: 80px;`)}
  ${spLayout(`padding-bottom: 100px;`)}
`

export const List = styled.section`
  position: relative;
  margin: 0 auto;
  display: flex;

  ${pcLayout(`
    width: 700px;
    padding: 45px 0;
  `)}

  ${spLayout(`
    width: 95%;
    padding: 20px 0;
  `)}

  img {
    display: block;
    align-self: flex-start;

    ${pcLayout(`width: 220px;`)}
    ${spLayout(`width: 35%;`)}
  }

  div {
    ${pcLayout(`margin-left: 20px;`)}
    ${spLayout(`margin-left: 10px;`)}
  }

  h3 {
    word-break: break-word;
    color: #666;
    letter-spacing: 0.2em;

    ${pcLayout(`
      font-size: 15px;
      margin-bottom: 50px;
    `)}

    ${spLayout(`
      font-size: 13px;
      margin-bottom: 30px;
    `)}
  }

  span {
    display: block;
    color: #777;
    text-align: right;
    padding-right: 10px;

    ${pcLayout(`
      font-size: 14px;
    `)}

    ${spLayout(`
      font-size: 11px;
    `)}
  }

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    width: 100%;
    height: 1px;
    border-top: dashed 1px #444;
  }
  &::before {
    top: 0;
  }
  &::after {
    display: none;
  }
  &:last-child::after {
    display: block;
    bottom: 0;
  }
`
