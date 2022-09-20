import { ChangeEvent, ChangeEventHandler, forwardRef, SelectHTMLAttributes } from 'react'
import { FieldErrorsImpl } from 'react-hook-form'
import cn from 'classnames'

import { getFieldStatus } from 'utils'
import { HelperText } from 'components/helpers'

import Label from '../Label'

import * as S from './Select.styled'

export type OptionProps =
  | string
  | number
  | { value: string | number; label: string | number }

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string
  label?: string
  name: string
  options?: OptionProps[]
  beforeOnChange?: ChangeEventHandler<HTMLSelectElement>
  afterOnChange?: ChangeEventHandler<HTMLSelectElement>
  errors?: FieldErrorsImpl
  hidePlaceholder?: boolean
  hideLabel?: boolean
  fieldSize?: FieldSize
  marginBottom?: Size
  borderColor?: Color
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      id,
      name,
      options = [],
      label,
      placeholder = 'Selecione',
      hidePlaceholder = false,
      errors = {},
      beforeOnChange,
      onChange,
      afterOnChange,
      hideLabel = false,
      fieldSize = 'sm',
      marginBottom = 24,
      borderColor = 'neutral300',
      ...rest
    },
    ref
  ) => {
    const fieldId = id ?? name
    const status = getFieldStatus(name, errors)

    const handleOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
      beforeOnChange && beforeOnChange(event)
      onChange && onChange(event)
      afterOnChange && afterOnChange(event)
    }

    const renderOptions = options.map((option) => {
      if (typeof option === 'object') {
        return (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        )
      }

      return (
        <option key={option} value={option}>
          {option}
        </option>
      )
    })

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
          onChange={handleOnChange}
          fieldSize={fieldSize}
          borderColor={borderColor}
          {...rest}
        >
          {!hidePlaceholder && <option value="">{placeholder || label}</option>}
          {renderOptions}
        </S.Field>
        {!!errors[name] && (
          <HelperText>
            <>{errors?.[name]?.message}</>
          </HelperText>
        )}
      </S.Wrapper>
    )
  }
)

Select.displayName = 'Select'

export default Select
