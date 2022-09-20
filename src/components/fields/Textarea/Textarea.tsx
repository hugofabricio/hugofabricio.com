import {
  ChangeEvent,
  ChangeEventHandler,
  forwardRef,
  TextareaHTMLAttributes
} from 'react'
import { FieldErrorsImpl } from 'react-hook-form'
import cn from 'classnames'

import { getFieldStatus } from 'utils'
import { HelperText } from 'components/helpers'

import Label from '../Label'

import * as S from './Textarea.styled'

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string
  label?: string
  name: string
  beforeOnChange?: ChangeEventHandler<HTMLTextAreaElement>
  afterOnChange?: ChangeEventHandler<HTMLTextAreaElement>
  errors?: FieldErrorsImpl
  hideLabel?: boolean
  fieldSize?: FieldSize
  marginBottom?: Size
  borderColor?: Color
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      id,
      name,
      label,
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

    const handleOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
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

Textarea.displayName = 'Textarea'

export default Textarea
