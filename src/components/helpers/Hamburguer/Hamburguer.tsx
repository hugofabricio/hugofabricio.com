import cn from 'classnames'

import * as S from './Hamburguer.styled'

export interface HamburguerProps extends MarginProps {
  className?: string
  color?: Color
  active: boolean
  toggle: () => void
  display?: Display | Responsive<Display>
}

const Hamburguer = ({
  className = '',
  active,
  toggle,
  color = 'pink500',
  ...rest
}: HamburguerProps) => (
  <S.Button
    className={cn(className, { active })}
    onClick={toggle}
    aria-label="Menu"
    {...rest}
  >
    <S.Icon color={color} />
  </S.Button>
)

export default Hamburguer
