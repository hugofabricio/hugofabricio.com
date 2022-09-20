import styled, { css } from 'styled-components'

import { mapCSSPropsToStyled } from 'utils'
import { BlockProps } from './Block'

type BlockWrapperProps = Omit<BlockProps, 'className' | 'tag'>

export const Wrapper = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    ![
      'tag',
      'display',
      'flexWrap',
      'flexDirection',
      'justifyContent',
      'alignItems',
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'zIndex',
      'overflow',
      'color',
      'textAlign',
      'bgColor',
      'borderColor',
      'borderRadius',
      'borderStyle',
      'borderWidth',
      'width',
      'height',
      'maxWidth',
      'maxHeight',
      'minWidth',
      'minHeight',
      'transform',
      'paddingTop',
      'paddingRight',
      'paddingBottom',
      'paddingLeft',
      'marginTop',
      'marginRight',
      'marginBottom',
      'marginLeft',
      'margin',
      'padding',
      'gap',
      'rowGap',
      'columnGap',
      'gridTemplateColumns'
    ].includes(prop)
})<BlockWrapperProps>`
  ${({ zIndex }) =>
    zIndex &&
    `
    z-index: ${zIndex};
  `}

  ${({ overflow }) =>
    overflow &&
    `
      overflow: ${overflow};
    `}

  ${({ color, theme }) =>
    color &&
    `
    color: ${theme.colors[color]};
  `}

  ${({ bgColor, theme }) =>
    bgColor &&
    `
    background-color: ${theme.colors[bgColor]};
  `}

  ${({ borderColor, theme }) =>
    borderColor &&
    `
    border-color: ${theme.colors[borderColor]};
  `}

  ${({ borderStyle }) =>
    borderStyle &&
    `
      border-style: ${borderStyle};
    `}

  ${({
    display,
    flexWrap,
    flexDirection,
    justifyContent,
    alignItems,
    position,
    top,
    right,
    bottom,
    left,
    textAlign,
    borderRadius,
    borderWidth,
    width,
    height,
    maxWidth,
    maxHeight,
    minWidth,
    minHeight,
    transform,
    margin,
    padding,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    gridTemplateColumns,
    gap,
    columnGap,
    rowGap
  }) => css`
    ${mapCSSPropsToStyled({
      display,
      flexWrap,
      flexDirection,
      justifyContent,
      alignItems,
      position,
      top,
      right,
      bottom,
      left,
      textAlign,
      borderRadius,
      borderWidth,
      width,
      height,
      maxWidth,
      maxHeight,
      minWidth,
      minHeight,
      transform,
      margin,
      padding,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      marginTop,
      marginRight,
      marginBottom,
      marginLeft,
      gridTemplateColumns,
      gap,
      columnGap,
      rowGap
    })}
  `}
`
