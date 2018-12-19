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

export const TopImage = styled.img`
  display: block;
  margin: 0 auto;

  ${pcLayout(`
    width: 750px;
    border-radius: 10px;
  `)}

  ${spLayout(`
    width: 95%;
    border-radius: 5px;
  `)}
`

export const BottomImage = styled.img`
  display: block;
  margin: 0 auto;

  ${pcLayout(`
    width: 750px;
    margin-bottom: 80px;
    border-radius: 10px;
  `)}

  ${spLayout(`
    width: 95%;
    border-radius: 5px;
    margin-bottom: 80px;
  `)}
`

export const Text = styled.p`
  white-space: pre-line;
  margin: 0 auto;
  color: #666;

  ${pcLayout(`
    font-size: 19px;
    width: 720px;
    padding: 60px 0;
    line-height: 3.5;
  `)}

  ${spLayout(`
    font-size: 13px;
    width: 90%;
    padding: 30px 0;
    line-height: 3;
  `)}
`
