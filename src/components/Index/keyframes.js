import { keyframes } from 'styled-components'

export const noise1 = keyframes`
  0%   { transform: translateY(100vh); }
  100% { transform: translateY(-4vh); }
`

export const noise2 = keyframes`
  0%   { transform: translateY(100vh); }
  100% { transform: translateY(-15vh); }
`

export const flash = keyframes`
  0%   { opacity: 1; }
  96%  { opacity: 1; }
  97%  { opacity: 0.6; }
  98%  { opacity: 1; }
  99%  { opacity: 0.6; }
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

export const scale = keyframes`
  0%   { transform: scale(1); }
  50%  { transform: scale(1.02); }
  100% { transform: scale(1); }
`

export const hover = keyframes`
  0%   { opacity: 1; }
  25%  { opacity: 0; }
  50%  { opacity: 1; }
  75%  { opacity: 0; }
  100% { opacity: 1; }
`

export const turn = keyframes`
  from { transform: rotate(0); }
  to   { transform: rotate(-1turn); }
`

export const showMenuButton = keyframes`
  from { transform: translate(100%, -100%); opacity: 0; }
  to   { transform: translate(0%, 0%); opacity: 1; }
`
