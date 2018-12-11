import styled from 'styled-components'
import { fadein } from '../../common-keyframes'

export const Title = styled.h1`
  font-size: 40px;
  color: #444;
  margin: 50px;
  text-align: center;
  opacity: 0;
  animation: ${fadein} 1s ease 0s forwards;
`
