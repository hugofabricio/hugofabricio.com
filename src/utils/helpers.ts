import { FieldErrors } from 'react-hook-form'

export const hasKey = <O>(key: keyof any, obj: O): key is keyof O => key in obj

export const getFieldStatus = (name: string, errors: FieldErrors | undefined = {}) => {
  return hasKey(name, errors) ? 'danger' : undefined
}
