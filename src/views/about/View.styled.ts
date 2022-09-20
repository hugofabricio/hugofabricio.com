import styled from 'styled-components'
import NextImage from 'next/future/image'
import { media } from 'utils'

export const Image = styled(NextImage)`
  max-width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: bottom;
`

export const Figure = styled.div`
  width: 50%;
  height: 100%;
  position: absolute;
  z-index: -1;
  bottom: 0;
  right: 5%;
  opacity: 0.7;

  ${media.lessThan('sm')} {
    opacity: 0.3;
  }

  ${media.lessThan('xs')} {
    width: 100%;
    right: 0;
  }
`
