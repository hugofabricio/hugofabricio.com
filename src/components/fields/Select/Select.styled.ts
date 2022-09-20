import styled, { css } from 'styled-components'
import { rem, rgba } from 'polished'
import { mapCSSPropsToStyled } from 'utils'

import { SelectProps } from './Select'

type FieldProps = Required<Pick<SelectProps, 'fieldSize' | 'borderColor'>>

type WrapperProps = Required<Pick<SelectProps, 'marginBottom'>>

export const Field = styled.select.withConfig({
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
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23B0BEDD' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right ${rem(12)} center;
  background-size: 16px 12px;

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
    border-radius: ${rem(input[fieldSize].borderRadius)};
    color: ${colors.pink500};
    background-color: ${colors.neutral0};
    border: 2px solid ${colors[borderColor]};
    padding: ${rem(input[fieldSize].paddingY)} ${rem(input[fieldSize].paddingX * 2)}
      ${rem(input[fieldSize].paddingY)} ${rem(input[fieldSize].paddingX)};

    &:focus {
      border-color: ${colors.neutral400};
      background-color: ${colors.neutral0};
      box-shadow: 0 0 0 ${rem(4)} ${rgba(colors[borderColor], 0.3)};
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

    &[multiple],
    &[size]:not([size='1']) {
      padding-right: ${rem(input[fieldSize].paddingX)};
      background-image: none;
    }

    &:-moz-focusring {
      color: transparent;
      text-shadow: 0 0 0 ${colors.neutral500};
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
      color: ${colors.danger};

      ${Field} {
        border-color: ${colors.danger};
        color: ${colors.danger};

        &:focus {
          box-shadow: 0 0 0 ${rem(4)} ${rgba(colors.danger, 0.25)};
        }
      }
    }
  `}

  ${({ marginBottom }) => css`
    ${mapCSSPropsToStyled({
      marginBottom
    })}
  `}
`
