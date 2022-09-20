import React, { PropsWithChildren } from 'react'
import cn from 'classnames'

import * as S from './Text.styled'

export interface TextProps extends MarginProps {
  className?: string
  tag?:
    | 'p'
    | 'span'
    | 'b'
    | 'i'
    | 'date'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'cite'
  fontSize?: FontSize
  weight?: number | string
  letterSpacing?: Size
  lineHeight?: Size
  color?: Color
  secondColor?: Color
  uppercase?: boolean
  textAlign?: TextAlign | Responsive<TextAlign>
  maxWidth?: Size | Responsive<Size>
  opacity?: string | number
  dangerouslySetInnerHTML?: { __html: string }
}

const Text: React.FC<PropsWithChildren<TextProps>> = ({
  className,
  children,
  fontSize = 'text',
  lineHeight = 1.5,
  tag = 'p',
  ...rest
}) => {
  let defaultClass = `text`

  if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(tag)) {
    defaultClass = 'title'
  }

  return (
    <S.Wrapper
      as={tag}
      className={cn(defaultClass, className)}
      fontSize={fontSize}
      lineHeight={lineHeight}
      {...rest}
    >
      {children}
    </S.Wrapper>
  )
}

export default Text
