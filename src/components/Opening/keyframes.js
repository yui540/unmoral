import { keyframes } from 'styled-components'

export const openEye1 = keyframes`
  from { transform: translateY(0px); }
  to   { transform: translateY(-100px); }
`

export const openEye2 = keyframes`
  from { transform: translateY(0px); }
  to   { transform: translateY(100px); }
`

export const closeEye1 = keyframes`
  from { transform: translateY(-100px); }
  to   { transform: translateY(0px); }
`

export const closeEye2 = keyframes`
  from { transform: translateY(100px); }
  to   { transform: translateY(0px); }
`

export const openEye1__sp = keyframes`
  from { transform: translateY(0px); }
  to   { transform: translateY(-50px); }
`

export const openEye2__sp = keyframes`
  from { transform: translateY(0px); }
  to   { transform: translateY(50px); }
`

export const closeEye1__sp = keyframes`
  from { transform: translateY(-50px); }
  to   { transform: translateY(0px); }
`

export const closeEye2__sp = keyframes`
  from { transform: translateY(50px); }
  to   { transform: translateY(0px); }
`

export const sway = keyframes`
  from { transform: translate(-.8px, -.8px); }
  to   { transform: translate(.8px, .8px); }
`
