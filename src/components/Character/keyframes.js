import { keyframes } from 'styled-components'

export const fadein1 = keyframes`
  from { opacity: 0.02; }
  to   { opacity: 1; }
`

export const fadein2 = keyframes`
  from { opacity: 0.01; }
  to   { opacity: 1; }
`

export const fadein3 = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`

export const hover = keyframes`
  0%   { opacity: 1; }
  25%  { opacity: 0; }
  50%  { opacity: 1; }
  75%  { opacity: 0; }
  100% { opacity: 1; }
`
