import { keyframes } from 'styled-components'

export const colorFlash = keyframes`
  0%   { opacity: 0; }
  50%  { opacity: 1; }
  100% { opacity: 0; }
`

export const hover = keyframes`
  0%   { opacity: 1; }
  25%  { opacity: 0; }
  50%  { opacity: 1; }
  75%  { opacity: 0; }
  100% { opacity: 1; }
`

export const quick1 = keyframes`
  from { transform: translate(-100%, -100%); opacity: 0; }
  to   { transform: translate(0%, 0%); opacity: 1; }
`

export const quick2 = keyframes`
  from { transform: translate(100%, -100%); opacity: 0; }
  to   { transform: translate(0%, 0%); opacity: 1; }
`

export const quick3 = keyframes`
  from { transform: translate(-100%, -100%); opacity: 0; }
  to   { transform: translate(0%, 0%); opacity: 1; }
`

export const quick4 = keyframes`
  from { transform: translate(100%, -100%); opacity: 0; }
  to   { transform: translate(0%, 0%); opacity: 1; }
`

export const slideMenu = keyframes`
  from { transform: translateY(10%); opacity: 0; }
  to   { transform: translateY(0%); opacity: 1; }
`

export const popup = keyframes`
  from { transform: scale(0); }
  to   { transform: scale(1); }
`

export const fly = keyframes`
  0%   { transform: translateY(-3%); }
  50%  { transform: translateY(3%); }
  100% { transform: translateY(-3%); }
`

export const showMenuButton = keyframes`
  from { transform: translate(100%, -100%); opacity: 0; }
  to   { transform: translate(0%, 0%); opacity: 1; }
`

export const turn = keyframes`
  from { transform: rotate(0); }
  to   { transform: rotate(-1turn); }
`

export const showPage = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to   { transform: translateY(0px); opacity: 1; }
`
