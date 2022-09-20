import styled, { css } from 'styled-components'
import { parseSize } from 'utils'

type LinkProps = {
  size: number
}

export const Link = styled.a.withConfig({
  shouldForwardProp: (prop) => !['size'].includes(prop)
})<LinkProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ size }) => css`
    width: ${parseSize(size)};
    height: ${parseSize(size)};
  `}

  ${({ theme: { colors } }) => css`
    color: ${colors.neutral0};

    &:hover {
      color: ${colors.neutral0};
      transform: scale(1.2);
    }
  `}
`

export const Item = styled.li`
  display: flex;
  align-items: center;
`

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
`
