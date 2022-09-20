import React, { PropsWithChildren } from 'react'
import cn from 'classnames'

import * as S from './HelperText.styled'

export interface HelperTextProps {
  status?: FieldStatus
  floating?: boolean
}

const HelperText = ({
  status,
  floating = true,
  children
}: PropsWithChildren<HelperTextProps>) => (
  <S.Wrapper className={cn({ [`is--${status}`]: !!status })} floating={floating}>
    {children}
  </S.Wrapper>
)

export default HelperText
