import { css } from 'styled-components'
import { darken, readableColor, rem, rgba } from 'polished'

import { BaseButtonProps } from './Button'

type ButtonAppearanceProps = Required<Pick<BaseButtonProps, 'appearance' | 'color'>>

export const getAppearance = ({ appearance, color }: ButtonAppearanceProps) => {
  const appearances = {
    link: css`
      vertical-align: baseline;

      ${({ theme: { colors } }) => css`
        color: ${colors[color]};

        &:hover {
          color: ${darken(0.1, colors[color])};
        }
      `}
    `,
    solid: css`
      font-weight: 600;
      text-align: center;
      letter-spacing: ${rem(1)};

      ${({ theme: { colors } }) => css`
        color: ${colors.neutral0};
        border-color: ${colors[color]};
        background-color: ${colors[color]};

        &:hover {
          color: ${colors.neutral0};
          background-color: ${darken(0.1, colors[color])};
          border-color: ${darken(0.1, colors[color])};
        }

        &:focus {
          box-shadow: 0 0 0 ${rem(4)} ${rgba(colors[color], 0.25)};
        }

        ${color === 'neutral0' &&
        css`
          color: ${colors.pink500};

          &:hover {
            color: ${colors[color]};
            background-color: ${darken(0.1, colors.pink500)};
            border-color: ${darken(0.1, colors.pink500)};
          }
        `}
      `}
    `,
    outline: css`
      font-weight: 600;
      text-align: center;
      letter-spacing: ${rem(1)};

      ${({ theme: { colors } }) => css`
        color: ${colors[color]};
        border-color: ${colors[color]};

        &.active,
        &:hover {
          color: ${readableColor(colors[color])};
          background-color: ${colors[color]};
        }

        &:focus {
          box-shadow: 0 0 0 ${rem(4)} ${rgba(colors[color], 0.25)};
        }
      `}
    `
  }

  return appearances[appearance]
}
