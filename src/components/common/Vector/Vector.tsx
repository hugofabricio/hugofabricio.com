import React, { MouseEventHandler } from 'react'
import cn from 'classnames'
import svg, { SvgProps } from 'svg'

import * as S from './Vector.styled'

export interface VectorProps extends MarginProps {
  className?: string
  name?: SvgProps
  color?: Color
  width?: Size | Responsive<Size>
  height?: Size | Responsive<Size>
  onClick?: MouseEventHandler<HTMLOrSVGElement>
  position?: 'relative' | 'absolute'
  zIndex?: Size
  top?: Size | Responsive<Size>
  right?: Size | Responsive<Size>
  bottom?: Size | Responsive<Size>
  left?: Size | Responsive<Size>
}

const Vector: React.FC<VectorProps> = ({
  className,
  name = 'not-found',
  width = 'auto',
  height = 'auto',
  ...rest
}) => (
  <S.Wrapper
    as={svg[name]}
    className={cn('vector', className)}
    w={width}
    h={height}
    {...rest}
  />
)

export default Vector
