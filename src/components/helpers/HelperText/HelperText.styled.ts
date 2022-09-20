import styled, { css } from 'styled-components'
import { rem } from 'polished'

import { HelperTextProps } from './HelperText'

type WrapperProps = Required<Pick<HelperTextProps, 'floating'>>

export const Wrapper = styled.span<WrapperProps>`
  width: 100%;
  display: flex;
  overflow: hidden;
  color: currentColor;
  font-weight: 500;
  font-size: ${rem(12)};

  ${({ floating }) =>
    !!floating &&
    css`
      position: absolute;
      margin-top: 2px;
    `}

  ${({ theme: { colors } }) => css`
    &.is--success {
      color: ${colors.success};
    }

    &.is--danger {
      color: ${colors.danger};
    }
  `}
`
