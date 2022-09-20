import styled from 'styled-components'
import { motion } from 'framer-motion'
import { media } from 'utils'

export const WavePath = styled(motion.path)``

export const Wave = styled(motion.svg)`
  display: flex;
  align-items: flex-end;
  width: calc(50vw - 140px);

  ${media.lessThan('xs')} {
    width: 75%;
  }
`
