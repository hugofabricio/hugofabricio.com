import styled, { css } from 'styled-components'
import { media } from 'utils'
import { CarouselProps } from './Carousel'

type WrapperProps = Required<Pick<CarouselProps, 'navigationAppearance'>>

export const Wrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !['navigationAppearance'].includes(prop)
})<WrapperProps>`
  position: relative;

  .swiper {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
  }

  .swiper-vertical > .swiper-wrapper {
    flex-direction: column;
  }

  .swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    box-sizing: content-box;
  }

  .swiper-android .swiper-slide,
  .swiper-wrapper {
    transform: translate3d(0px, 0, 0);
  }

  .swiper-pointer-events {
    touch-action: pan-y;
    &.swiper-vertical {
      touch-action: pan-x;
    }
  }

  .swiper-slide {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    transition-property: transform;
  }

  .swiper-slide-invisible-blank {
    visibility: hidden;
  }

  /* Auto Height */
  .swiper-autoheight {
    &,
    .swiper-slide {
      height: auto;
    }

    .swiper-wrapper {
      align-items: flex-start;
      transition-property: transform, height;
    }
  }

  .swiper-backface-hidden .swiper-slide {
    transform: translateZ(0);
    backface-visibility: hidden;
  }

  /* 3D Effects */
  .swiper-3d {
    &,
    &.swiper-css-mode .swiper-wrapper {
      perspective: 1200px;
    }
    .swiper-wrapper,
    .swiper-slide,
    .swiper-slide-shadow,
    .swiper-slide-shadow-left,
    .swiper-slide-shadow-right,
    .swiper-slide-shadow-top,
    .swiper-slide-shadow-bottom,
    .swiper-cube-shadow {
      transform-style: preserve-3d;
    }
    .swiper-slide-shadow,
    .swiper-slide-shadow-left,
    .swiper-slide-shadow-right,
    .swiper-slide-shadow-top,
    .swiper-slide-shadow-bottom {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 10;
    }
    .swiper-slide-shadow {
      background: rgba(0, 0, 0, 0.15);
    }
    .swiper-slide-shadow-left {
      background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
    }
    .swiper-slide-shadow-right {
      background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
    }
    .swiper-slide-shadow-top {
      background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
    }
    .swiper-slide-shadow-bottom {
      background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
    }
  }

  /* CSS Mode */
  .swiper-css-mode {
    > .swiper-wrapper {
      overflow: auto;
      scrollbar-width: none; /* For Firefox */
      -ms-overflow-style: none; /* For Internet Explorer and Edge */
      &::-webkit-scrollbar {
        display: none;
      }
    }
    > .swiper-wrapper > .swiper-slide {
      scroll-snap-align: start start;
    }
  }

  .swiper-horizontal.swiper-css-mode {
    > .swiper-wrapper {
      scroll-snap-type: x mandatory;
    }
  }

  .swiper-vertical.swiper-css-mode {
    > .swiper-wrapper {
      scroll-snap-type: y mandatory;
    }
  }

  .swiper-centered {
    > .swiper-wrapper::before {
      content: '';
      flex-shrink: 0;
      order: 9999;
    }

    &.swiper-horizontal {
      > .swiper-wrapper > .swiper-slide:first-child {
        margin-inline-start: var(--swiper-centered-offset-before);
      }
      > .swiper-wrapper::before {
        height: 100%;
        width: var(--swiper-centered-offset-after);
      }
    }

    &.swiper-vertical {
      > .swiper-wrapper > .swiper-slide:first-child {
        margin-block-start: var(--swiper-centered-offset-before);
      }
      > .swiper-wrapper::before {
        width: 100%;
        height: var(--swiper-centered-offset-after);
      }
    }

    > .swiper-wrapper > .swiper-slide {
      scroll-snap-align: center center;
    }
  }

  .swiper-fade {
    &.swiper-free-mode {
      .swiper-slide {
        transition-timing-function: ease-out;
      }
    }
    .swiper-slide {
      pointer-events: none;
      transition-property: opacity;
      .swiper-slide {
        pointer-events: none;
      }

      &:not(.swiper-slide-active) {
        pointer-events: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
      }
    }

    .swiper-slide-active {
      &,
      & .swiper-slide-active {
        pointer-events: auto;
      }
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    cursor: pointer;
    position: absolute;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all ease 400ms;

    &:hover {
      color: var(--swiper-navigation-hover-color, var(--swiper-theme-color));
    }

    &.swiper-button-disabled {
      cursor: auto;
      pointer-events: none;
      opacity: 0.35;
    }

    &.swiper-button-hidden {
      opacity: 0;
      cursor: auto;
      pointer-events: none;
    }

    &:after {
      font-weight: 700;
      font-family: swiper-icons;
      font-size: var(--swiper-navigation-size);
      text-transform: none !important;
      letter-spacing: 0;
      font-variant: initial;
      line-height: 1;
    }
  }

  ${({ theme: { colors }, navigationAppearance }) => {
    if (navigationAppearance === 'default') {
      return css`
        .swiper-button-prev,
        .swiper-button-next {
          top: 50%;
          margin-top: calc(0px - (var(--swiper-navigation-size) / 2));
          width: calc(var(--swiper-navigation-size) / 44 * 27);
          height: var(--swiper-navigation-size);
          color: var(--swiper-navigation-color, var(--swiper-theme-color));
        }

        .swiper-button-prev,
        .swiper-rtl .swiper-button-next {
          left: 0;
          right: auto;
        }
        .swiper-button-next,
        .swiper-rtl .swiper-button-prev {
          right: 0;
          left: auto;
        }
      `
    }

    if (navigationAppearance === 'button') {
      return css`
        .swiper-button-prev,
        .swiper-button-next {
          width: var(--swiper-navigation-size);
          height: var(--swiper-navigation-size);
          background-color: ${colors.neutral0};
          color: var(--swiper-navigation-hover-color, var(--swiper-theme-color));
          border-radius: 50vh;
          bottom: 40px;

          &:after {
            font-size: 100%;
          }

          &:hover {
            color: ${colors.neutral0};
            background-color: var(
              --swiper-navigation-hover-color,
              var(--swiper-theme-color)
            );
          }
        }

        .swiper-button-prev {
          right: 88px;

          &:after {
            margin-right: 2px;
          }
        }

        .swiper-button-next {
          right: 32px;

          &:after {
            margin-left: 2px;
          }
        }
      `
    }
  }}

  .swiper-button-prev,
  .swiper-rtl .swiper-button-next {
    &:after {
      content: 'prev';
    }
  }
  .swiper-button-next,
  .swiper-rtl .swiper-button-prev {
    &:after {
      content: 'next';
    }
  }

  .swiper-button-lock {
    display: none;
  }

  .swiper-pagination {
    position: absolute;
    text-align: center;
    transition: 300ms opacity;
    transform: translate3d(0, 0, 0);
    z-index: 10;
    &.swiper-pagination-hidden {
      opacity: 0;
    }
  }

  /* Common Styles */
  .swiper-pagination-fraction,
  .swiper-pagination-custom,
  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal {
    bottom: -30px;
    left: 0;
    width: 100%;
  }

  /* Bullets */
  .swiper-pagination-bullets-dynamic {
    overflow: hidden;
    font-size: 0;
    .swiper-pagination-bullet {
      transform: scale(0.33);
      position: relative;
    }
    .swiper-pagination-bullet-active {
      transform: scale(1);
    }
    .swiper-pagination-bullet-active-main {
      transform: scale(1);
    }
    .swiper-pagination-bullet-active-prev {
      transform: scale(0.66);
    }
    .swiper-pagination-bullet-active-prev-prev {
      transform: scale(0.33);
    }
    .swiper-pagination-bullet-active-next {
      transform: scale(0.66);
    }
    .swiper-pagination-bullet-active-next-next {
      transform: scale(0.33);
    }
  }

  .swiper-pagination-bullet {
    width: var(
      --swiper-pagination-bullet-width,
      var(--swiper-pagination-bullet-size, 8px)
    );
    height: var(
      --swiper-pagination-bullet-height,
      var(--swiper-pagination-bullet-size, 8px)
    );
    display: inline-block;
    border-radius: 50%;
    background: var(--swiper-pagination-bullet-inactive-color, #000);
    opacity: var(--swiper-pagination-bullet-inactive-opacity, 0.2);
    @at-root button#{&} {
      border: none;
      margin: 0;
      padding: 0;
      box-shadow: none;
      appearance: none;
    }
    .swiper-pagination-clickable & {
      cursor: pointer;
    }

    &:only-child {
      display: none !important;
    }
  }

  .swiper-pagination-bullet-active {
    opacity: var(--swiper-pagination-bullet-opacity, 1);
    background: var(--swiper-pagination-color, var(--swiper-theme-color));
  }

  .swiper-vertical > .swiper-pagination-bullets,
  .swiper-pagination-vertical.swiper-pagination-bullets {
    right: 10px;
    top: 50%;
    transform: translate3d(0px, -50%, 0);
    .swiper-pagination-bullet {
      margin: var(--swiper-pagination-bullet-vertical-gap, 6px) 0;
      display: block;
    }
    &.swiper-pagination-bullets-dynamic {
      top: 50%;
      transform: translateY(-50%);
      width: 8px;
      .swiper-pagination-bullet {
        display: inline-block;
        transition: 200ms transform, 200ms top;
      }
    }
  }

  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-horizontal.swiper-pagination-bullets {
    .swiper-pagination-bullet {
      margin: 0 var(--swiper-pagination-bullet-horizontal-gap, 4px);
    }
    &.swiper-pagination-bullets-dynamic {
      left: 50%;
      transform: translateX(-50%);
      white-space: nowrap;
      .swiper-pagination-bullet {
        transition: 200ms transform, 200ms left;
      }
    }
  }

  .swiper-horizontal.swiper-rtl
    > .swiper-pagination-bullets-dynamic
    .swiper-pagination-bullet {
    transition: 200ms transform, 200ms right;
  }

  /* Progress */
  .swiper-pagination-progressbar {
    background: rgba(0, 0, 0, 0.25);
    position: absolute;
    .swiper-pagination-progressbar-fill {
      background: var(--swiper-pagination-color, var(--swiper-theme-color));
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      transform: scale(0);
      transform-origin: left top;
    }

    .swiper-rtl & .swiper-pagination-progressbar-fill {
      transform-origin: right top;
    }

    .swiper-horizontal > &,
    &.swiper-pagination-horizontal,
    .swiper-vertical > &.swiper-pagination-progressbar-opposite,
    &.swiper-pagination-vertical.swiper-pagination-progressbar-opposite {
      width: 100%;
      height: 4px;
      left: 0;
      top: 0;
    }

    .swiper-vertical > &,
    &.swiper-pagination-vertical,
    .swiper-horizontal > &.swiper-pagination-progressbar-opposite,
    &.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite {
      width: 4px;
      height: 100%;
      left: 0;
      top: 0;
    }
  }

  .swiper-pagination-lock {
    display: none;
  }

  &.full-mobile {
    ${media.lessThan('sm')} {
      .swiper {
        width: 100%;
        display: flex;
        overflow: visible;
        flex-wrap: nowrap;
        align-items: stretch;
      }
    }
  }
`
