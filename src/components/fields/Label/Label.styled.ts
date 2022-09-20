import styled from 'styled-components'
import { parseSize } from 'utils'

import { LabelProps } from './Label'

type WrapperProps = Required<Pick<LabelProps, 'marginBottom'>>

export const Wrapper = styled.label.withConfig({
  shouldForwardProp: (prop) => !['marginBottom'].includes(prop)
})<WrapperProps>`
  font-weight: 500;
  margin-bottom: ${({ marginBottom }) => parseSize(marginBottom)};

  a {
    font-weight: 700;
  }
`
