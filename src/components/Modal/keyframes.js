import { keyframes } from 'styled-components'

export const showModal = keyframes`
  0%   { transform: translate(-50%, -50%) scale(0.6); opacity: 0; }
  50%  { transform: translate(-50%, -50%) scale(1.05); opacity: 1; }
  100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
`
