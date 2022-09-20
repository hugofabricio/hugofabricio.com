import { css } from 'styled-components'
import { lighten, rem, rgba } from 'polished'

import { CheckboxProps } from './Checkbox'

type CheckboxAppearanceProps = Required<
  Pick<CheckboxProps, 'appearance' | 'fieldSize' | 'borderColor'>
>

export const getAppearance = ({
  appearance,
  fieldSize,
  borderColor
}: CheckboxAppearanceProps) => {
  const appearances = {
    checkbox: css`
      ${({
        theme: {
          colors,
          form: { check }
        }
      }) => css`
        width: ${rem(check[fieldSize].size)};
        height: ${rem(check[fieldSize].size)};
        border-radius: ${rem(check[fieldSize].borderRadius)};

        &:checked {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
        }

        &:focus {
          border-color: ${lighten(0.1, colors[borderColor])};
        }

        &:indeterminate {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e");
        }
      `}
    `,
    switch: css`
      ${({
        theme: {
          colors,
          form: { check }
        }
      }) => css`
        background-color: ${colors.neutral500};
        border-color: ${colors[borderColor]};
        width: ${rem(check[fieldSize].size * 1.8)};
        height: ${rem(check[fieldSize].size)};
        margin-right: ${rem(check[fieldSize].size / 2)};
        border-radius: 50vh;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23FFFFFF'/%3e%3c/svg%3e");
        background-position: left center;
        transition: background-position 0.15s ease-in-out;

        &:focus {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23F3F4FF'/%3e%3c/svg%3e");
        }

        &:checked {
          background-position: right center;
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
        }
      `}
    `,
    button: css`
      ${({
        theme: {
          colors,
          typography,
          button,
          form: { check }
        }
      }) => css`
        position: absolute;
        clip: rect(0, 0, 0, 0);
        pointer-events: none;

        & + label {
          display: inline-block;
          font-weight: 400;
          text-align: center;
          text-decoration: none;
          vertical-align: middle;
          cursor: pointer;
          user-select: none;
          background-color: transparent;
          border: 1px solid ${colors.neutral300};
          font-family: ${typography.fonts[0]}, sans-serif;
          font-size: ${rem(check[fieldSize].fontSize)};
          line-height: 1.5;
          padding: ${rem(button[fieldSize].paddingY)} ${rem(button[fieldSize].paddingX)};
          transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
            border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
          border-radius: 50vh;
        }

        &:checked {
          + label {
            color: ${colors.neutral0};
            border-color: ${colors[borderColor]};
            background-color: ${colors.neutral500};
            background-repeat: no-repeat;
            background-position: calc(100% - 8px) center;
            background-size: 16px 16px;
          }
        }

        &:focus {
          + label {
            box-shadow: 0 0 0 0.25rem ${rgba(colors[borderColor], 0.25)};
          }
        }

        &[disabled] + label,
        &:disabled + label {
          pointer-events: none;
          filter: none;
          opacity: 0.65;
        }
      `}
    `
  }

  return appearances[appearance]
}
