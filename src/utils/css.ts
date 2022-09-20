import { css } from 'styled-components'
import media from './media'

const sizeProps = [
  'width',
  'height',
  'max-width',
  'max-height',
  'min-width',
  'min-height',
  'marign',
  'margin-top',
  'margin-right',
  'margin-bottom',
  'margin-left',
  'padding',
  'padding-top',
  'padding-right',
  'padding-bottom',
  'padding-left',
  'top',
  'right',
  'bottom',
  'left',
  'border-radius',
  'border-width',
  'gap',
  'column-gap',
  'row-gap'
]

const CSSValue = (prop: string, value: string | number) => {
  return sizeProps.includes(prop) ? parseSize(value) : value
}

export const parseSize = (value: string | number) => {
  // @ts-ignore
  if (typeof value === 'number' || !isNaN(value)) {
    return `${value}px`
  }

  return value
}

export const parseResponsive = (breakpoint: any) => {
  return (...args: any) => {
    return css`
      ${media.greaterThan(breakpoint)} {
        ${css(
          // @ts-ignore
          ...args
        )}
      }
    `
  }
}

export const mapCSSPropsToStyled = (values: any) => {
  return Object.entries(values).map(([space, value]: any) => {
    if (!value) {
      return
    }

    const prop = space.replace(/[A-Z]/g, (m: string) => '-' + m.toLowerCase())

    if (typeof value !== 'object') {
      const style = `${prop}: ${CSSValue(prop, value)};`

      return css`
        ${style}
      `
    }

    return Object.entries(value).map(
      ([breakpoint, value]: any) =>
        parseResponsive(breakpoint)`${prop}: ${CSSValue(prop, value)};`
    )
  })
}
