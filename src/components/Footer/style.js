import styled from 'styled-components'
import { pcLayout, spLayout } from '../../breakpoint'

export const Container = styled.footer`
  background-image: linear-gradient(to bottom, #28303d, #6d84a5);

  ${pcLayout(`
    padding-top: 80px;
    padding-bottom: 30px;
  `)}

  ${spLayout(`
    padding-top: 50px;
    padding-bottom: 20px;
  `)}
`

export const Info = styled.div`
  ${pcLayout(`
    display: flex;
    justify-content: center;
  `)}
`

export const Logo = styled.img`
  display: block;
  align-self: flex-start;

  ${pcLayout(`
    width: 280px;
    margin: 0 40px;
  `)}
  ${spLayout(`
    width: 70%;
    margin: 0 auto;
  `)}
`

export const Ad = styled.a`
  display: block;
  cursor: pointer;
  transition: all 0.4s ease 0s;

  ${pcLayout(`margin: 0 40px;`)}
  ${spLayout(`margin: 50px 0px;`)}

  img {
    display: block;
    align-self: center;
    margin: 0 auto;

    ${pcLayout(`width: 280px;`)}
    ${spLayout(`width: 70%;`)}
  }

  &:hover {
    opacity: 0.6;
  }
`

export const Copyright = styled.div`
  background-image: url(./images/copright-white.png);
  background-size: auto 90%;
  background-position: center;
  background-repeat: no-repeat;

  ${pcLayout(`
    height: 10px;
    margin-top: 80px;
  `)}
  ${spLayout(`
    height: 7px;
    margin-top: 50px;
  `)}
`
