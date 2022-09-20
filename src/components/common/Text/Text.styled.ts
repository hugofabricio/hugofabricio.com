import styled, { css } from 'styled-components'
import { between } from 'polished'
import { mapCSSPropsToStyled, parseSize } from 'utils'

import { TextProps } from './Text'

type WrapperProps = Omit<TextProps, 'className' | 'tag'> & {
  fontSize: FontSize
}

export const Wrapper = styled.p.withConfig({
  shouldForwardProp: (prop) =>
    ![
      'tag',
      'fontSize',
      'weight',
      'lineHeight',
      'letterSpacing',
      'color',
      'secondColor',
      'uppercase',
      'textAlign',
      'maxWidth',
      'marginTop',
      'marginRight',
      'marginBottom',
      'marginLeft'
    ].includes(prop)
})<WrapperProps>`
  line-height: ${({ lineHeight }) => lineHeight};

  span {
    font-weight: 700;
  }

  ${({ theme: { typography } }) => css`
    font-family: ${typography.fonts[0]}, sans-serif;
  `}

  ${({ theme: { typography, breakpoints }, fontSize }) =>
    fontSize &&
    css`
      font-size: ${between(
        `${typography.sizes[fontSize].min}px`,
        `${typography.sizes[fontSize].max}px`,
        `${breakpoints.xxxs}px`,
        `${breakpoints.xl}px`
      )};
    `}

  ${({ weight }) =>
    !!weight &&
    css`
      font-weight: ${weight};
    `}

  ${({ letterSpacing }) =>
    !!letterSpacing &&
    css`
      letter-spacing: ${parseSize(letterSpacing)};
    `}

  ${({ opacity }) =>
    !!opacity &&
    css`
      opacity: ${opacity};
    `}

  ${({ uppercase }) =>
    !!uppercase &&
    css`
      text-transform: uppercase;
    `}

  ${({ theme: { colors } }) =>
    css`
      > a {
        color: ${colors.pink500};
        font-weight: 700;

        &:hover {
          text-decoration: underline;
        }
      }
    `}

  ${({ theme, color }) =>
    !!color &&
    css`
      color: ${theme.colors[color]};
    `}

  ${({ theme, secondColor }) =>
    !!secondColor &&
    css`
      span {
        color: ${theme.colors[secondColor]};
      }
    `}

  ${({ textAlign, maxWidth, marginTop, marginRight, marginBottom, marginLeft }) => css`
    ${mapCSSPropsToStyled({
      textAlign,
      maxWidth,
      marginTop,
      marginRight,
      marginBottom,
      marginLeft
    })}
  `}
`
