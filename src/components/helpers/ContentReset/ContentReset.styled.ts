import styled, { css } from 'styled-components'
import { rem } from 'polished'
import { media } from 'utils'

export const Wrapper = styled.div`
  font-size: ${rem(15)};
  line-height: 1.8;

  a,
  b,
  strong,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700 !important;
  }

  > * {
    &:not(:last-child) {
      margin-bottom: 24px !important;
    }
  }

  img {
    max-width: 100% !important;
    border-radius: 4px !important;
    overflow: hidden !important;
  }

  ul,
  ol {
    list-style-position: inside !important;

    li {
      border-radius: 8px;
      padding: 24px 32px;
      line-height: 1.6;

      &:not(:last-child) {
        margin-bottom: 12px !important;
      }
    }
  }

  ul {
    list-style-type: disc !important;
  }

  ol {
    list-style-type: number !important;
  }

  ${({ theme: { colors } }) => css`
    color: ${colors.neutral700} !important;

    a {
      color: ${colors.neutral0} !important;

      &:hover {
        color: ${colors.pink500} !important;
      }
    }

    ul,
    ol {
      li {
        background-color: ${colors.neutral100} !important;
      }
    }
  `}

  ${media.lessThan('xs')} {
    ul,
    ol {
      li {
        padding: 16px 24px;
      }
    }
  }
`
