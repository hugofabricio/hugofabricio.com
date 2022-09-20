import styled, { css } from 'styled-components'
import { rem } from 'polished'
import { mapCSSPropsToStyled, media, parseSize } from 'utils'

import { BaseButtonProps } from './Button'
import { getAppearance } from './Button.appearance'

type WrapperProps = Pick<
  BaseButtonProps,
  | 'fluid'
  | 'fluidOnMobile'
  | 'uppercase'
  | 'weight'
  | 'letterSpacing'
  | 'marginTop'
  | 'marginRight'
  | 'marginBottom'
  | 'marginLeft'
> &
  Required<Pick<BaseButtonProps, 'appearance' | 'color' | 'fieldSize'>>

export const Icon = styled.i`
  display: inline-block;
  align-self: center;
`

export const Label = styled.span`
  width: 100%;
`

export const Button = styled.button.withConfig({
  shouldForwardProp: (prop) =>
    ![
      'field',
      'appearance',
      'color',
      'gradient',
      'weight',
      'letterSpacing',
      'fieldSize',
      'fluid',
      'fluidOnMobile',
      'uppercase',
      'pill',
      'marginTop',
      'marginRight',
      'marginBottom',
      'marginLeft',
      'partiallyActive'
    ].includes(prop)
})<WrapperProps>`
  cursor: pointer;
  display: inline-flex;
  line-height: 1.5;
  text-decoration: none;
  vertical-align: middle;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  font-size: ${({ theme: { button }, fieldSize }) => rem(button[fieldSize].fontSize)};

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  &:focus {
    outline: 0;
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.6;
  }

  ${({ appearance, color }) => getAppearance({ appearance, color })}

  ${({ theme: { typography } }) =>
    css`
      font-family: ${typography.fonts[0]}, sans-serif;
    `}

  ${({ fluid }) =>
    !!fluid &&
    css`
      width: 100%;
      justify-content: center;
    `}

  ${({ weight }) =>
    weight &&
    css`
      font-weight: ${weight};
    `}

  ${({ letterSpacing }) =>
    letterSpacing &&
    css`
      letter-spacing: ${parseSize(letterSpacing)};
    `}

  ${({ uppercase }) =>
    !!uppercase &&
    css`
      text-transform: uppercase;
    `}

  ${({ theme: { button }, appearance, fieldSize }) => {
    if (appearance !== 'link') {
      return css`
        border-radius: 50vh;
        padding: ${rem(button[fieldSize].paddingY)} ${rem(button[fieldSize].paddingX)};
      `
    }
  }}

  ${({ theme: { button }, fieldSize }) => {
    return css`
      ${Icon} {
        .vector {
          width: ${parseSize(button[fieldSize].iconSize)};
          height: ${parseSize(button[fieldSize].iconSize)};
          margin-top: -2px;
        }
      }

      &.has--left-icon {
        ${Icon} {
          margin-right: ${rem(button[fieldSize].iconSize / 2)};
        }
      }

      &.has--right-icon {
        ${Icon} {
          margin-left: ${rem(button[fieldSize].iconSize / 2)};
        }
      }

      &.has--left-icon,
      &.has--right-icon {
        ${Label} {
          display: inline-flex;
          align-items: center;
        }
      }
    `
  }}

  ${media.lessThan('sm')} {
    ${({ fluidOnMobile }) =>
      !!fluidOnMobile &&
      css`
        width: 100%;
        justify-content: center;
      `}
  }

  ${({ marginTop, marginRight, marginBottom, marginLeft }) => css`
    ${mapCSSPropsToStyled({
      marginTop,
      marginRight,
      marginBottom,
      marginLeft
    })}
  `}
`
