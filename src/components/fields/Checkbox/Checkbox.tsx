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

import Label from '../Label'
import * as S from './Checkbox.styled'

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  appearance?: 'checkbox' | 'switch' | 'button'
  label?: string
  name: string
  beforeOnChange?: ChangeEventHandler<HTMLInputElement>
  afterOnChange?: ChangeEventHandler<HTMLInputElement>
  errors?: FieldErrorsImpl
  hideLabel?: boolean
  fieldSize?: FieldSize
  marginRight?: Size
  marginBottom?: Size
  borderColor?: Color
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      appearance = 'checkbox',
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
      marginRight = 0,
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
        appearance={appearance}
        borderColor={borderColor}
        fieldSize={fieldSize}
        marginRight={marginRight}
        marginBottom={marginBottom}
      >
        <S.Field
          ref={ref}
          id={fieldId}
          name={name}
          onChange={handleOnChange}
          {...rest}
          type="checkbox"
        />
        {!!label && (
          <Label htmlFor={fieldId} hidden={hideLabel} marginBottom={0}>
            {label}
          </Label>
        )}
      </S.Wrapper>
    )
  }
)

Checkbox.displayName = 'Checkbox'

export default Checkbox
