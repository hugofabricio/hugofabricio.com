import styled, { css } from 'styled-components'
import { mapCSSPropsToStyled, parseSize } from 'utils'

import { HamburguerProps } from './Hamburguer'

type IconProps = Required<Pick<HamburguerProps, 'color'>>

type ButtonProps = Omit<HamburguerProps, 'className' | 'active' | 'toggle' | 'color'>

export const Icon = styled.span.withConfig<IconProps>({
  shouldForwardProp: (prop) => !['color'].includes(prop)
})`
  position: relative;

  &:after,
  &:before {
    content: '';
    position: absolute;
    height: 100%;
  }

  &:before {
    top: -8px;
  }

  &:after {
    bottom: -8px;
  }

  ${({ theme: { colors }, color }) => `
    height: ${parseSize(2)};

    &,
    &:after,
    &:before {
      display: block;
      width: 100%;
      transition: 300ms ease-in-out;
      background-color: ${colors[color]};
    }
  `}
`

export const Button = styled.button.withConfig({
  shouldForwardProp: (prop) =>
    !['display', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft'].includes(prop)
})<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  cursor: pointer;
  padding: 0;
  border: none;
  background: transparent;
  box-shadow: none;
  width: ${parseSize(24)};
  height: ${parseSize(24)};

  &.active {
    ${Icon} {
      transform: rotate(45deg);

      &:before {
        transform: rotate(90deg);
        top: 0;
      }

      &:after {
        transform: rotate(90deg);
        bottom: 0;
      }
    }
  }

  ${({ display, marginTop, marginRight, marginBottom, marginLeft }) => css`
    ${mapCSSPropsToStyled({
      display,
      marginTop,
      marginRight,
      marginBottom,
      marginLeft
    })}
  `}
`
