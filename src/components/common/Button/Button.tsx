import {
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  ReactNode,
  PropsWithChildren
} from 'react'
import cn from 'classnames'

import { Link, LinkProps, Spinner } from 'components/helpers'

import * as S from './Button.styled'

export type BaseButtonProps = {
  className?: string
  appearance?: 'link' | 'solid' | 'outline'
  color?: Color
  weight?: number | string
  letterSpacing?: number | string
  fieldSize?: 'xs' | 'sm' | 'md' | 'lg'
  uppercase?: boolean
  fluid?: boolean
  fluidOnMobile?: boolean
  disabled?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  isLoading?: boolean
} & MarginProps

type ButtonAsButton = BaseButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> & {
    as?: 'button'
  }

type ButtonAsExternal = BaseButtonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps> & {
    as: 'external'
  }

type ButtonAsLink = BaseButtonProps &
  Omit<LinkProps, keyof BaseButtonProps> &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: 'link'
  }

export type ButtonProps = ButtonAsButton | ButtonAsExternal | ButtonAsLink

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  className,
  children,
  appearance = 'link',
  color = 'pink500',
  weight = 700,
  fieldSize = 'md',
  uppercase = false,
  fluid = false,
  fluidOnMobile = false,
  disabled = false,
  letterSpacing = 2,
  leftIcon,
  rightIcon,
  isLoading = false,
  ...props
}) => {
  let buttonClassNames = []

  if (!!leftIcon) {
    buttonClassNames.push(`has--left-icon`)
  }

  if (!!rightIcon) {
    buttonClassNames.push(`has--right-icon`)
  }

  const buttonProps = {
    className: cn(className, buttonClassNames, 'button'),
    appearance: appearance,
    color: color,
    fieldSize,
    weight,
    letterSpacing,
    uppercase: uppercase ? 1 : 0,
    fluid: fluid ? 1 : 0,
    fluidOnMobile: fluidOnMobile ? 1 : 0,
    disabled: isLoading === true || disabled === true
  }

  const renderChildren = () => {
    return (
      <>
        {leftIcon && <S.Icon>{leftIcon}</S.Icon>}
        {!isLoading ? <S.Label>{children}</S.Label> : <Spinner />}
        {rightIcon && <S.Icon>{rightIcon}</S.Icon>}
      </>
    )
  }

  if (props.as === 'link') {
    const { as, href, activeClassName, partiallyActive, ...rest } = props

    return (
      <Link
        href={href}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
      >
        {/* @ts-ignore */}
        <S.Button as="a" {...buttonProps} {...rest}>
          {renderChildren()}
        </S.Button>
      </Link>
    )
  }

  if (props.as === 'external') {
    const { as, ...rest } = props

    return (
      // @ts-ignore
      <S.Button as="a" {...buttonProps} {...rest}>
        {renderChildren()}
      </S.Button>
    )
  }

  const { as, ...rest } = props

  return (
    // @ts-ignore
    <S.Button as="button" {...buttonProps} {...rest}>
      {renderChildren()}
    </S.Button>
  )
}

export default Button
