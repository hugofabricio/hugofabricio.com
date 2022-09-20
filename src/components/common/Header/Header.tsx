/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'
import { Container } from 'react-awesome-styled-grid'
import { useTranslation } from 'next-i18next'
import { useLockBodyScroll, useWindowScroll, useWindowSize } from 'react-use'
import cn from 'classnames'

import { Hamburguer, Link } from 'components/helpers'
import { Brand, Button } from 'components/common'

import { headerVariant } from './Header.animations'
import menu from './Header.menu'
import * as S from './Header.styled'

const Header = () => {
  const { t } = useTranslation('menu')
  const { y } = useWindowScroll()
  const { asPath } = useRouter()
  const [openedMenu, setOpenedMenu] = useState(false)
  const [affixed, setAffixed] = useState(false)
  const { width } = useWindowSize()

  const affixHeader = useCallback(() => {
    if (y > 1) {
      !affixed && setAffixed(true)
    } else if (y <= 1) {
      affixed && setAffixed(false)
    }
  }, [y, affixed])

  useLockBodyScroll(openedMenu)

  useEffect(() => {
    const isDesktopAndOpenedMenu = width >= 993 && openedMenu

    if (isDesktopAndOpenedMenu) {
      setOpenedMenu(false)
    }
  }, [width, openedMenu])

  useEffect(() => {
    !openedMenu && affixHeader()
  }, [y])

  const closeMenu = () => {
    return width <= 992 && setOpenedMenu(false)
  }

  return (
    <S.Wrapper
      className={cn({
        'is-affixed': affixed,
        'is-opened': openedMenu,
        'is-dark': asPath === '/contato/'
      })}
      variants={headerVariant}
      initial="hidden"
      animate="visible"
    >
      <Container>
        <S.Bar>
          <S.Brand>
            <Link href="/" partiallyActive={false}>
              <S.BrandLink title="Hugo Fabricio" onClick={closeMenu}>
                <Brand />
              </S.BrandLink>
            </Link>
          </S.Brand>
          <S.Menu>
            <S.List>
              {menu.map(({ href, label }) => (
                <S.Item key={href}>
                  <Link href={href}>
                    <S.Link
                      onClick={closeMenu}
                      // @ts-ignore
                      title={t(label)}
                    >
                      {/* @ts-ignore */}
                      {t(label)}
                    </S.Link>
                  </Link>
                </S.Item>
              ))}
              <S.Item>
                <Button
                  as="link"
                  className="cta"
                  appearance="solid"
                  color="pink500"
                  href="/contato/"
                  title={t('contact')}
                  onClick={closeMenu}
                  uppercase
                >
                  {t('contact')}
                </Button>
              </S.Item>
            </S.List>
          </S.Menu>
          <Hamburguer
            active={openedMenu}
            toggle={() => setOpenedMenu(!openedMenu)}
            display={{ xxxs: 'block', sm: 'none' }}
            marginLeft="auto"
            color="neutral0"
          />
        </S.Bar>
      </Container>
    </S.Wrapper>
  )
}

export default Header
