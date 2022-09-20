import { LabelHTMLAttributes } from 'react'
import cn from 'classnames'

import * as S from './Label.styled'

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  hidden?: boolean
  marginBottom?: Size
}

const Label: React.FC<LabelProps> = ({
  children,
  hidden = false,
  marginBottom = 8,
  ...rest
}) => (
  <S.Wrapper className={cn({ hidden })} marginBottom={marginBottom} {...rest}>
    {children}
  </S.Wrapper>
)

export default Label
