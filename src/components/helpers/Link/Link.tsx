import React, {
  isValidElement,
  Children,
  cloneElement,
  ReactElement,
  PropsWithChildren
} from 'react'
import { useRouter } from 'next/router'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import cn from 'classnames'

interface ChildLink {
  className?: string | null
}

export interface LinkProps extends NextLinkProps {
  activeClassName?: string
  className?: string
  partiallyActive?: boolean
}

const Link: React.FC<PropsWithChildren<LinkProps>> = ({
  activeClassName = 'active',
  partiallyActive = true,
  children,
  href,
  ...rest
}) => {
  const { asPath } = useRouter()

  const getClassNames = (child: ReactElement<PropsWithChildren<ChildLink>>) => {
    const childClassName = child.props.className || ''

    const isPathEqualsHref = asPath.split('?')[0] === href
    const isPathEqualsAs = asPath === rest.as
    const isPathStartsWithSegment =
      partiallyActive && typeof href === 'string' && asPath.includes(href)

    const isActive = isPathEqualsHref || isPathEqualsAs || isPathStartsWithSegment

    return isActive ? cn(childClassName, activeClassName) : childClassName
  }

  const getChildren = () => {
    const child = Children.only(children) as ReactElement<PropsWithChildren<ChildLink>>

    if (isValidElement(child)) {
      return cloneElement(child, { className: getClassNames(child) || null })
    }
  }

  return (
    <NextLink href={href} {...rest} passHref>
      {getChildren()}
    </NextLink>
  )
}

export default Link
