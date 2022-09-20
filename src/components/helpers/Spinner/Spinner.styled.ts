import styled, { css, keyframes } from 'styled-components'
import { rgba } from 'polished'
import { parseSize } from 'utils'
import { SpinnerProps } from './Spinner'

type WrapperProps = Required<SpinnerProps>

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Loader = styled.span`
  display: flex;
  transform: translateZ(0);
  animation: ${rotate} 1.6s infinite linear;

  &,
  &:after {
    border-radius: 50vh;
    width: 100%;
    height: 100%;
  }
`

export const Wrapper = styled.span.withConfig({
  shouldForwardProp: (prop) => !['size', 'color'].includes(prop)
})<WrapperProps>`
  display: flex;

  ${({ theme: { colors }, size, color }) => css`
    width: ${parseSize(size)};
    height: ${parseSize(size)};

    ${Loader} {
      border: calc(${parseSize(size)} / 6) solid ${rgba(colors[color], 0.2)};
      border-left-color: ${colors[color]};
    }
  `}
`
