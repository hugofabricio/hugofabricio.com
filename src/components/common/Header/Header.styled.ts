import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import { darken, linearGradient, rem, rgba } from 'polished'
import { media } from 'utils'
import { appConfig } from 'config'

export const Link = styled.a`
  text-transform: uppercase;
  font-weight: 700;
  font-size: ${rem(14)};
  letter-spacing: ${rem(2)};
`

export const Item = styled.li`
  position: relative;
`

export const List = styled.ul`
  display: flex;
  gap: 80px;

  ${media.greaterThan(appConfig.MENU.desktop)} {
    align-items: center;
  }

  ${media.lessThan('md')} {
    gap: 60px;
  }

  ${media.lessThan(appConfig.MENU.mobile)} {
    gap: 30px;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`

export const Menu = styled.nav`
  margin-left: auto;
`

export const BrandLink = styled.a`
  ${({ theme: { colors } }) => css`
    color: ${colors.neutral0} !important;
  `}
`

export const Brand = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 24px;

  .vector {
    transition: color 200ms ease-in-out;
  }
`

export const Bar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 180px;
  transition: all 400ms ease-in-out;

  ${media.lessThan(appConfig.MENU.mobile)} {
    height: 100px;
  }
`

export const Wrapper = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1999;
  width: 100%;

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 200ms ease-in-out;
    opacity: 0;
  }

  ${({ theme: { colors } }) => css`
    ${Link}:hover,
    ${Link}.active {
      color: ${colors.pink500};
    }

    &.is-affixed {
      &:before {
        opacity: 1;
        ${linearGradient({
          colorStops: [
            `${rgba(colors.neutral1000, 0.75)} 0%`,
            `${rgba(colors.neutral1000, 0)} 100%`
          ],
          toDirection: 'to bottom',
          fallback: 'transparent'
        })};
      }
    }

    &.is-dark {
      ${Link}:hover,
      ${Link}.active {
        color: ${darken(0.3, colors.pink500)};
      }

      .cta:not(:hover) {
        background-color: ${darken(0.15, colors.pink500)};
      }
    }

    ${media.lessThan(appConfig.MENU.mobile)} {
      ${Menu} {
        position: absolute;
        z-index: 2000;
        top: 100%;
        left: 0;
        background-color: ${colors.neutral1000};
        transform: translateX(100%);
        transition: all 400ms ease-in-out;
        width: 100%;
        height: calc(100vh - 100px);
        height: calc(100dvh - 100px);

        ${List} {
          flex-direction: column;
          width: 100%;
          height: 100%;
          padding: 32px;
          overflow-y: auto;
          -ms-overflow-style: none;
        }
      }

      &.is-opened {
        background-color: ${colors.neutral1000};

        ${Menu} {
          transform: translateX(0%);
        }
      }
    }
  `}
`
