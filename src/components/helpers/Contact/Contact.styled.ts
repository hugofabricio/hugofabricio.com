import styled, { css } from 'styled-components'
import { media } from 'utils'

type ButtonProps = {
  color: Color
}

export const Button = styled.a.withConfig({
  shouldForwardProp: (prop) => !['color'].includes(prop)
})<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;

  &:hover {
    transform: scale(1.1);
  }

  ${({ theme: { colors }, color }) => css`
    background-color: ${colors[color]};
  `}
`
