import { keyframes } from 'styled-components'

export const flash = keyframes`
  0%   { opacity: .1; }
  50%  { opacity: 1; }
  100% { opacity: .1; }
`

export const colorFlash = keyframes`
  0%   { opacity: 0; }
  50%  { opacity: 1; }
  100% { opacity: 0; }
`
