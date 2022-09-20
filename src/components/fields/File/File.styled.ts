import styled, { css } from 'styled-components'
import { rem, rgba } from 'polished'
import { mapCSSPropsToStyled } from 'utils'

import { FileProps } from './File'

type FieldProps = Required<Pick<FileProps, 'fieldSize' | 'borderColor'>>

type WrapperProps = Required<Pick<FileProps, 'marginBottom'>>

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
    color: ${colors.neutral500};
    background-color: ${colors.neutral0};
    border: 1px solid ${colors[borderColor]};
    padding: ${rem(input[fieldSize].paddingY)} ${rem(input[fieldSize].paddingX)};

    &::placeholder {
      color: ${colors.neutral300};
      opacity: 1;
    }

    &:-ms-input-placeholder {
      color: ${colors.neutral300};
    }

    &::-ms-input-placeholder {
      color: ${colors.neutral300};
    }

    &:focus {
      border-color: ${colors.neutral300};
      box-shadow: 0 0 0 ${rem(4)} ${rgba(colors.neutral300, 0.3)};
      outline: 0;
    }

    &:disabled {
      cursor: not-allowed;
    }

    &:disabled,
    &[readonly] {
      background-color: ${rgba(colors.neutral300, 0.2)};
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
