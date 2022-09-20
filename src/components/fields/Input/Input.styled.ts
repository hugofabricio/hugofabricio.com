import styled, { css } from 'styled-components'
import { darken, rem, rgba } from 'polished'
import { mapCSSPropsToStyled } from 'utils'

import { InputProps } from './Input'

type FieldProps = Required<Pick<InputProps, 'fieldSize' | 'borderColor'>>

type WrapperProps = Required<Pick<InputProps, 'marginBottom'>>

export const Field = styled.input.withConfig({
  shouldForwardProp: (prop) =>
    !['tag', 'field', 'validations', 'errors', 'fieldSize', 'borderColor'].includes(prop)
})<FieldProps>`
  display: block;
  width: 100%;
  background-clip: padding-box;
  appearance: none;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  font-weight: 400;
  line-height: 1.5;
  border-radius: 0;

  ${({
    theme: {
      colors,
      typography,
      form: { input }
    },
    fieldSize,
    borderColor
  }) => css`
    font-family: ${typography.fonts[0]}, sans-serif;
    font-size: ${rem(input[fieldSize].fontSize)};
    color: ${colors.neutral0};
    background-color: transparent;
    border: none;
    border-bottom: 2px solid ${colors[borderColor]};
    padding: ${rem(input[fieldSize].paddingY)} 0;

    &::placeholder {
      color: ${colors.neutral0};
      opacity: 1;
      font-weight: 500;
    }

    &:-ms-input-placeholder {
      color: ${colors.neutral0};
      font-weight: 500;
    }

    &::-ms-input-placeholder {
      color: ${colors.neutral0};
      font-weight: 500;
    }

    &:focus {
      background-color: ${rgba(colors[borderColor], 0.2)};
      outline: 0;
    }

    &:disabled {
      cursor: not-allowed;
    }

    &:disabled,
    &[readonly] {
      background-color: ${colors.neutral100};
      opacity: 1;
    }
  `}

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

export const Wrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !['marginBottom'].includes(prop)
})<WrapperProps>`
  position: relative;
  width: 100%;

  ${({ theme: { colors } }) => `
    &.has--danger {
      color: ${darken(0.3, colors.pink500)};

      ${Field} {
        border-color: ${darken(0.3, colors.pink500)};
        color: ${darken(0.3, colors.pink500)};
      }
    }
  `}

  ${({ marginBottom }) => css`
    ${mapCSSPropsToStyled({
      marginBottom
    })}
  `}
`
