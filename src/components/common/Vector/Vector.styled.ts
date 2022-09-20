import styled, { css } from 'styled-components'
import { mapCSSPropsToStyled } from 'utils'
import { VectorProps } from './Vector'

type VectorWrapperProps = Omit<VectorProps, 'className' | 'name' | 'onClick'> & {
  w: Size | Responsive<Size>
  h: Size | Responsive<Size>
}

export const Wrapper = styled.svg.withConfig({
  shouldForwardProp: (prop) =>
    ![
      'name',
      'color',
      'width',
      'height',
      'w',
      'h',
      'position',
      'zIndex',
      'top',
      'right',
      'bottom',
      'left',
      'marginTop',
      'marginRight',
      'marginBottom',
      'marginLeft'
    ].includes(prop)
})<VectorWrapperProps>`
  flex-shrink: 0;

  ${({ theme: { colors }, color }) => !!color && `color: ${colors[color]};`}
  ${({ zIndex }) => !!zIndex && `z-index: ${zIndex};`}
  ${({ position }) => !!position && `position: ${position};`}

  ${({
    top,
    right,
    bottom,
    left,
    w,
    h,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft
  }) => css`
    ${mapCSSPropsToStyled({
      top,
      right,
      bottom,
      left,
      width: w,
      height: h,
      marginTop,
      marginRight,
      marginBottom,
      marginLeft
    })}
  `}
`
