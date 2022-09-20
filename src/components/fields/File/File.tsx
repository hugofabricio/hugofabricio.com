import { ChangeEvent, forwardRef, InputHTMLAttributes } from 'react'
import { FieldErrorsImpl } from 'react-hook-form'
import cn from 'classnames'

import { getFieldStatus } from 'utils'
import { HelperText } from 'components/helpers'

import Label from '../Label'

import * as S from './File.styled'

export interface FileProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  label?: string
  name: string
  errors?: FieldErrorsImpl
  hideLabel?: boolean
  fieldSize?: FieldSize
  marginBottom?: Size
  borderColor?: Color
}

const File = forwardRef<HTMLInputElement, FileProps>(
  (
    {
      className,
      id,
      name,
      label,
      errors = {},
      onChange,
      hideLabel = false,
      fieldSize = 'md',
      marginBottom = 20,
      borderColor = 'neutral300',
      ...rest
    },
    ref
  ) => {
    const fieldId = id ?? name
    const status = getFieldStatus(name, errors)

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(event)
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
          type="file"
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

File.displayName = 'File'

export default File
