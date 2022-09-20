import React, { forwardRef, InputHTMLAttributes } from 'react'
import { FieldErrorsImpl } from 'react-hook-form'

import * as S from './Hidden.styled'

interface HiddenProps extends InputHTMLAttributes<HTMLInputElement> {
  errors?: FieldErrorsImpl
}

const Hidden = forwardRef<HTMLInputElement, HiddenProps>(({ id, name, ...rest }, ref) => (
  <S.Field ref={ref} id={id ?? name} name={name} {...rest} type="hidden" />
))

Hidden.displayName = 'Hidden'

export default Hidden
