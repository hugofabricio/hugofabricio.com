import { theme } from 'styles'
import { SvgProps } from 'svg'

declare global {
  type Color = keyof typeof theme.colors

  type Size = string | number

  type Display =
    | 'none'
    | 'inline'
    | 'block'
    | 'table'
    | 'inline-table'
    | 'flex'
    | 'inline-flex'
    | 'grid'
    | 'inline-grid'

  type JustifyContent =
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'

  type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse' | 'inherit' | 'initial' | 'unset'
  type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse'
  type AlignItems = 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline'
  type Position = 'static' | 'relative' | 'fixed' | 'absolute' | 'sticky'
  type Overflow = 'visible' | 'hidden' | 'scroll' | 'auto'
  type Orientation = 'portrait' | 'landscape'

  type TextAlign = 'left' | 'center' | 'right' | 'justify'
  type FontSize = keyof typeof theme.typography.sizes
  type Breakpoint = keyof typeof theme.breakpoints
  type Responsive<T> = {
    xxxs?: T
    xxs?: T
    xs?: T
    sm?: T
    md?: T
    lg?: T
    xl?: T
    xxl?: T
  }

  type MarginProps = {
    marginTop?: Size | Responsive<Size>
    marginRight?: Size | Responsive<Size>
    marginBottom?: Size | Responsive<Size>
    marginLeft?: Size | Responsive<Size>
  }

  type PaddingProps = {
    paddingTop?: Size | Responsive<Size>
    paddingRight?: Size | Responsive<Size>
    paddingBottom?: Size | Responsive<Size>
    paddingLeft?: Size | Responsive<Size>
  }

  type SpacingProps = MarginProps & PaddingProps

  type UrlProps = {
    href: string
    label?: string
    title?: string
    rel?: string
    target?: '_blank' | '_self' | '_parent' | '_top'
    appearance?: 'solid' | 'link'
    color?: Color
    vector?: SvgProps
  }

  type FieldStatus = 'success' | 'danger'
  type FieldSize = 'sm' | 'md'
}

declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number
  }
}
