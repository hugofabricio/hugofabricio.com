import { FormHTMLAttributes, forwardRef } from 'react'
import * as S from './Form.styled'

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  className?: string
}

const Form = forwardRef<HTMLFormElement, FormProps>(
  ({ className, children, ...rest }, ref) => (
    <S.Wrapper ref={ref} className={className} {...rest}>
      {children}
    </S.Wrapper>
  )
)

Form.displayName = 'Form'

export default Form
