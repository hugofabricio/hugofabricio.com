import React, { ComponentPropsWithoutRef } from 'react'
import cn from 'classnames'

import * as S from './Block.styled'

type BlockTag =
  | 'div'
  | 'span'
  | 'section'
  | 'header'
  | 'aside'
  | 'article'
  | 'footer'
  | 'blockquote'

export interface BlockProps extends SpacingProps, ComponentPropsWithoutRef<'div'> {
  className?: string
  tag?: BlockTag
  display?: Display | Responsive<Display>
  flexDirection?: FlexDirection | Responsive<FlexDirection>
  flexWrap?: FlexWrap | Responsive<FlexWrap>
  justifyContent?: JustifyContent | Responsive<JustifyContent>
  alignItems?: AlignItems | Responsive<AlignItems>
  position?: Position | Responsive<Position>
  top?: Size | Responsive<Size>
  right?: Size | Responsive<Size>
  bottom?: Size | Responsive<Size>
  left?: Size | Responsive<Size>
  zIndex?: Size
  overflow?: Overflow
  color?: Color
  textAlign?: TextAlign | Responsive<TextAlign>
  bgColor?: Color
  borderColor?: Color
  borderStyle?: 'solid' | 'dotted' | 'dashed'
  borderRadius?: Size | Responsive<Size>
  borderWidth?: Size | Responsive<Size>
  width?: Size | Responsive<Size>
  height?: Size | Responsive<Size>
  maxWidth?: Size | Responsive<Size>
  maxHeight?: Size | Responsive<Size>
  minWidth?: Size | Responsive<Size>
  minHeight?: Size | Responsive<Size>
  transform?: string | Responsive<string>
  margin?: Size | Responsive<Size>
  padding?: Size | Responsive<Size>
  gridTemplateColumns?: string | Responsive<string>
  gap?: Size | Responsive<Size>
  columnGap?: Size | Responsive<Size>
  rowGap?: Size | Responsive<Size>
}

const Block = React.forwardRef<HTMLElement, BlockProps>(
  ({ children, className, tag = 'div', ...rest }, ref) => (
    <S.Wrapper ref={ref} as={tag} className={cn('block', className)} {...rest}>
      {children}
    </S.Wrapper>
  )
)

Block.displayName = 'Block'

export default Block
