import {
  ChangeEvent,
  ChangeEventHandler,
  forwardRef,
  InputHTMLAttributes,
  useId
} from 'react'
import { FieldErrorsImpl } from 'react-hook-form'
import cn from 'classnames'

import { getFieldStatus } from 'utils'

import * as S from './Radio.styled'

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  label?: string
  name: string
  beforeOnChange?: ChangeEventHandler<HTMLInputElement>
  afterOnChange?: ChangeEventHandler<HTMLInputElement>
  errors?: FieldErrorsImpl
  hideLabel?: boolean
  fieldSize?: FieldSize
  marginBottom?: Size
  borderColor?: Color
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      className,
      id,
      name,
      label,
      errors,
      beforeOnChange,
      onChange,
      afterOnChange,
      hideLabel = false,
      fieldSize = 'md',
      marginBottom = 20,
      borderColor = 'neutral300',
      ...rest
    },
    ref
  ) => {
    const hash = useId()

    const fieldId = id ?? `${name}-${hash}`
    const status = getFieldStatus(name, errors)

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
      beforeOnChange && beforeOnChange(event)
      onChange && onChange(event)
      afterOnChange && afterOnChange(event)
    }

    return (
      <S.Wrapper
        className={cn(className, { [`has--${status}`]: !!status })}
        marginBottom={marginBottom}
      >
        <S.Field
          ref={ref}
          id={fieldId}
          name={name}
          onChange={handleOnChange}
          fieldSize={fieldSize}
          borderColor={borderColor}
          {...rest}
          type="radio"
        />
        {!!label && (
          <S.FieldLabel htmlFor={fieldId} hidden={hideLabel} marginBottom={0}>
            {label}
          </S.FieldLabel>
        )}
      </S.Wrapper>
    )
  }
)

Radio.displayName = 'Radio'

export default Radio
