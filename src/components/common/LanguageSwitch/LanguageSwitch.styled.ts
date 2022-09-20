import styled from 'styled-components'

export const Link = styled.a`
  &:not(.selected) {
    filter: grayscale(100%);
    opacity: 0.4;
  }

  &:hover {
    filter: grayscale(0);
  }
`

export const Item = styled.li`
  &:not(:first-of-type) {
    margin-left: 6px;
  }

  &:not(:last-of-type) {
    margin-right: 6px;
  }
`

export const List = styled.ul`
  display: flex;
  align-items: center;
  margin-left: 20px;
`
