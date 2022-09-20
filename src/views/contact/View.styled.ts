import styled from 'styled-components'
import NextImage from 'next/future/image'

export const Image = styled(NextImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: Red;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.1;
  z-index: -1;
`
