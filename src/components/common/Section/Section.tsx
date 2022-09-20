import { PropsWithChildren } from 'react'

import * as S from './Section.styled'

export interface SectionProps {
  className?: string
  padding?: Size | Responsive<Size>
}

const Section = ({
  className,
  padding = { xxxs: '140px 0 50px', sm: '200px 0 100px 0' },
  children
}: PropsWithChildren<SectionProps>) => (
  <S.Wrapper
    className={className}
    initial="hidden"
    animate="visible"
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          delay: 0.4,
          duration: 0.6
        }
      }
    }}
    padding={padding}
  >
    {children}
  </S.Wrapper>
)

export default Section
