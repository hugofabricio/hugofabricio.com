import React, { ReactNode, forwardRef } from 'react'
import cn from 'classnames'

import { getFieldStatus } from 'utils'
import Checkbox, { CheckboxProps } from '../Checkbox/Checkbox'
import Label from '../Label'

import * as S from './Accept.styled'

interface AcceptProps
  extends Omit<CheckboxProps, 'appearance' | 'label' | 'hideLabel' | 'marginRight'> {
  children?: ReactNode
}

const Accept = forwardRef<HTMLInputElement, AcceptProps>(
  (
    {
      className,
      children,
      id,
      name,
      errors,
      beforeOnChange,
      onChange,
      afterOnChange,
      fieldSize = 'md',
      marginBottom = 20,
      borderColor = 'neutral300',
      ...rest
    },
    ref
  ) => {
    const fieldId = id ?? name
    const status = getFieldStatus(name, errors)

    return (
      <S.Wrapper className={cn(className, { [`has--${status}`]: !!status })}>
        <Checkbox
          ref={ref}
          {...rest}
          id={fieldId}
          name={name}
          hideLabel
          marginBottom={0}
        />
        {!!children && (
          <Label htmlFor={fieldId} marginBottom={0}>
            {children}
          </Label>
        )}
      </S.Wrapper>
    )
  }
)

Accept.displayName = 'Accept'

export default Accept
