import { ChangeEvent, ChangeEventHandler, forwardRef, InputHTMLAttributes } from 'react'
import { FieldErrorsImpl } from 'react-hook-form'
import cn from 'classnames'

import { FormMask, getFieldStatus, hasKey, masks } from 'utils'
import { HelperText } from 'components/helpers'

import Label from '../Label'

import * as S from './Input.styled'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  label?: string
  name: string
  mask?: FormMask
  beforeOnChange?: ChangeEventHandler<HTMLInputElement>
  afterOnChange?: ChangeEventHandler<HTMLInputElement>
  errors?: FieldErrorsImpl
  hideLabel?: boolean
  fieldSize?: FieldSize
  marginBottom?: Size
  borderColor?: Color
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      id,
      name,
      label,
      type = 'text',
      mask,
      errors = {},
      beforeOnChange,
      onChange,
      afterOnChange,
      hideLabel = false,
      fieldSize = 'sm',
      marginBottom = 20,
      borderColor = 'neutral0',
      ...rest
    },
    ref
  ) => {
    const fieldId = id ?? name
    const status = getFieldStatus(name, errors)

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target

      if (mask && hasKey(mask, masks)) {
        event.target.value = masks[mask](value)
      }

      beforeOnChange && beforeOnChange(event)
      onChange && onChange(event)
      afterOnChange && afterOnChange(event)
    }

    return (
      <S.Wrapper
        className={cn(className, { [`has--${status}`]: !!status })}
        marginBottom={marginBottom}
      >
        {!!label && (
          <Label htmlFor={fieldId} hidden={hideLabel}>
            {label}
          </Label>
        )}
        <S.Field
          ref={ref}
          id={fieldId}
          name={name}
          type={type}
          onChange={handleOnChange}
          fieldSize={fieldSize}
          borderColor={borderColor}
          {...rest}
        />
        {!!errors[name] && (
          <HelperText>
            <>{errors?.[name]?.message}</>
          </HelperText>
        )}
      </S.Wrapper>
    )
  }
)

Input.displayName = 'Input'

export default Input
