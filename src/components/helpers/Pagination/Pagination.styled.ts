import styled, { css } from 'styled-components'
import { rgba } from 'polished'

export const Wrapper = styled.div`
  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    .page-link {
      width: 32px;
      height: 32px;
      position: relative;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      border-radius: 50vh;
    }
  }

  ${({ theme: { colors } }) => css`
    .page-item {
      .page-link {
        color: ${colors.neutral600};

        &:hover {
          color: ${colors.neutral600};
          background-color: ${colors.neutral200};
          border-color: ${colors.neutral200};
        }
      }

      &.active {
        .page-link {
          color: ${colors.neutral0};
          background-color: ${colors.pink500};
          border-color: ${colors.pink500};
        }
      }

      &.disabled {
        .page-link {
          pointer-events: none;
          color: ${colors.neutral300};
          background-color: ${colors.neutral100};
          border-color: ${colors.neutral100};
        }
      }
    }
  `}
`
