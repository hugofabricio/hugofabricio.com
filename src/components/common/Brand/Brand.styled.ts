import styled from 'styled-components'
import { rem } from 'polished'
import { media } from 'utils'

export const Wrapper = styled.span`
  display: flex;
  font-size: ${rem(80)};
  font-weight: 700;
  user-select: none;
  line-height: 1;

  ${media.lessThan('xs')} {
    font-size: ${rem(60)};
  }
`
