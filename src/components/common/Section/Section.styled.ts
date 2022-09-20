import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import { mapCSSPropsToStyled } from 'utils'

import { SectionProps } from './Section'

type WrapperProps = Required<Pick<SectionProps, 'padding'>>

export const Wrapper = styled(motion.section).withConfig({
  shouldForwardProp: (prop) => !['padding'].includes(prop)
})<WrapperProps>`
  position: relative;
  min-height: 100%;

  ${({ padding }) => css`
    ${mapCSSPropsToStyled({
      padding
    })}
  `}
`
