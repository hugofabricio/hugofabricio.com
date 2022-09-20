import { Children, MutableRefObject, PropsWithChildren } from 'react'
import { Navigation, Pagination, Autoplay, SwiperOptions, EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useTheme } from 'styled-components'
import cn from 'classnames'

import { parseSize } from 'utils'

import * as S from './Carousel.styled'

export interface CarouselProps {
  className?: string
  swiperRef?: MutableRefObject<HTMLElement | undefined>
  swiperOptions?: SwiperOptions
  themeColor?: Color
  navigationAppearance?: 'default' | 'button'
  navigationSize?: Size
  navigationColor?: Color
  navigationHoverColor?: Color
  bulletColor?: Color
  activeBulletColor?: Color
  fullMobile?: boolean
}

const Carousel = ({
  className = '',
  children,
  swiperRef,
  swiperOptions,
  themeColor = 'pink500',
  navigationAppearance = 'default',
  navigationSize = 20,
  navigationColor = 'pink700',
  navigationHoverColor = 'pink500',
  bulletColor = 'pink500',
  activeBulletColor = 'pink500',
  fullMobile = false
}: PropsWithChildren<CarouselProps>) => {
  const { colors } = useTheme()

  return (
    <S.Wrapper
      className={cn('carousel', className, { 'full-mobile': fullMobile })}
      navigationAppearance={navigationAppearance}
      style={{
        '--swiper-navigation-size': parseSize(navigationSize),
        '--swiper-theme-color': colors[themeColor],
        '--swiper-navigation-color': colors[navigationColor],
        '--swiper-navigation-hover-color': colors[navigationHoverColor],
        '--swiper-pagination-color': colors[activeBulletColor],
        '--swiper-pagination-bullet-inactive-color': colors[bulletColor]
      }}
    >
      <Swiper
        modules={[Navigation, EffectFade, Pagination, Autoplay]}
        onInit={(core) => {
          if (swiperRef) {
            swiperRef.current = core.el
          }
        }}
        {...swiperOptions}
      >
        {Children.map(children, (child) => (
          <SwiperSlide>{child}</SwiperSlide>
        ))}
      </Swiper>
    </S.Wrapper>
  )
}

export default Carousel
