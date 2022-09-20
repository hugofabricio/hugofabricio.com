import styled, { css } from 'styled-components'
import { rem, em, rgba, lighten } from 'polished'
import { mapCSSPropsToStyled } from 'utils'

import { CheckboxProps } from './Checkbox'
import { getAppearance } from './Checkbox.appearance'

type WrapperProps = Required<
  Pick<
    CheckboxProps,
    'appearance' | 'fieldSize' | 'borderColor' | 'marginRight' | 'marginBottom'
  >
>

export const Field = styled.input.withConfig({
  shouldForwardProp: (prop) => !['tag', 'field', 'validations', 'errors'].includes(prop)
})`
  float: left;
  margin-left: -1.5em;
  margin-top: 0.25em;
  vertical-align: top;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  appearance: none;
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  font-weight: 400;
  line-height: 1.5;

  ${({ theme: { colors, typography } }) => css`
    font-family: ${typography.fonts[0]}, sans-serif;
    background-color: ${colors.neutral0};

    &:active {
      filter: brightness(90%);
    }

    &:focus {
      box-shadow: 0 0 0 ${rem(4)} ${rgba(colors.neutral300, 0.3)};
      outline: 0;
    }

    &:checked {
      background-color: ${colors.neutral500} !important;
      border-color: ${colors.neutral500} !important;
    }

    &:indeterminate {
      background-color: ${colors.neutral500} !important
      border-color: ${colors.neutral500} !important
    }

    &:disabled {
      cursor: not-allowed;
      pointer-events: none;
      filter: none;
      opacity: 0.5;
    }

    &[disabled] ~ label, &:disabled ~ label {
      opacity: 0.5;
    }
  `}

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

export const Wrapper = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !['appearance', 'borderColor', 'fieldSize', 'marginRight', 'marginBottom'].includes(
      prop
    )
})<WrapperProps>`
  display: block;
  position: relative;

  ${({
    theme: {
      colors,
      typography,
      form: { check }
    },
    appearance,
    borderColor,
    fieldSize
  }) => css`
    font-family: ${typography.fonts[0]}, sans-serif;
    font-size: ${rem(check[fieldSize].fontSize)};
    font-weight: 400;
    line-height: 1.5;

    ${Field} {
      border: 1px solid ${colors[borderColor]};
      ${getAppearance({ appearance, borderColor, fieldSize })}
    }
  `}

  ${({ marginRight, marginBottom }) => css`
    ${mapCSSPropsToStyled({
      marginRight,
      marginBottom
    })}
  `}

  ${({ appearance }) =>
    appearance !== 'button' &&
    `
    min-height: ${rem(24)};
    padding-left: ${rem(24)};
  `}
`
