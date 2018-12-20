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

export const SubTitle = styled.img`
  display: block;

  ${pcLayout(`
    margin: 30px auto;
    margin-top: 80px;
    width: 220px;
  `)}
  ${spLayout(`
    margin: 30px auto;
    margin-top: 80px;
    width: 50%;
  `)}
`

export const ListWrapper = styled.div`
  ${pcLayout(`
    width: 700px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `)}

  ${spLayout(`
    display: flex;
    flex-direction: column;
    align-items: center;
  `)}
`

export const List = styled.section`
  position: relative;

  ${pcLayout(`
    display: inline-block;
    padding: 5px 30px;
    margin: 30px;
    align-self: flex-start;
  `)}

  ${spLayout(`
    display: inline-block;
    padding: 5px 30px;
    margin: 20px auto;
  `)}
`

export const Frame = styled.div`
  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    height: 100%;
    border: solid 1px #888;

    ${pcLayout(`width: 10px;`)}
    ${spLayout(`width: 5px;`)}
  }
  &::before {
    left: 0;
    border-right-color: transparent;
  }
  &::after {
    right: 0;
    border-left-color: transparent;
  }
`

export const Job = styled.p`
  margin: 0;
  padding: 0;
  text-align: center;
  color: #c45c66;
  font-weight: bold;

  ${pcLayout(`
    font-size: 14px;
    margin-bottom: 10px;
  `)}

  ${spLayout(`
    font-size: 12px;
    margin-bottom: 6px;
  `)}
`

export const Name = styled.h3`
  margin: 0;
  padding: 0;
  text-align: center;
  color: #666;

  ${pcLayout(`
    font-size: 25px;
    margin-top: 10px;
  `)}

  ${spLayout(`
    font-size: 20px;
    margin-top: 6px;
  `)}
`
