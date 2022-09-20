import styled, { css } from 'styled-components'
import { rem, em, rgba, lighten } from 'polished'
import { mapCSSPropsToStyled } from 'utils'

import Label from '../Label'
import { RadioProps } from './Radio'

type FieldProps = Required<Pick<RadioProps, 'fieldSize' | 'borderColor'>>

type WrapperProps = Pick<RadioProps, 'marginBottom'>

export const FieldLabel = styled(Label)``

export const Field = styled.input.withConfig({
  shouldForwardProp: (prop) =>
    !['tag', 'field', 'validations', 'errors', 'fieldSize', 'borderColor'].includes(prop)
})<FieldProps>`
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
  border-radius: 50%;
  font-weight: 400;
  line-height: 1.5;

  ${({
    theme: {
      colors,
      typography,
      form: { check }
    },
    fieldSize,
    borderColor
  }) => css`
    font-family: ${typography.fonts[0]}, sans-serif;
    font-size: ${rem(check[fieldSize].fontSize)};
    width: ${rem(check[fieldSize].size)};
    height: ${rem(check[fieldSize].size)};
    background-color: ${colors.neutral0};
    border: 1px solid ${colors[borderColor]};

    &:active {
      filter: brightness(90%);
    }

    &:focus {
      border-color: ${colors.neutral300};
      box-shadow: 0 0 0 ${rem(4)} ${rgba(colors.neutral300, 0.3)};
      outline: 0;
    }

    &:checked {
      background-color: ${colors.neutral500};
      border-color: ${colors.neutral500};
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e");
    }

    &:disabled {
      cursor: not-allowed;
      pointer-events: none;
      filter: none;
      opacity: 0.5;
    }

    &[disabled] ~ ${FieldLabel}, &:disabled ~ ${FieldLabel} {
      opacity: 0.5;
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
  display: block;
  min-height: ${rem(24)};
  padding-left: ${em(24)};

  ${({ marginBottom }) => css`
    ${mapCSSPropsToStyled({
      marginBottom
    })}
  `}
`
