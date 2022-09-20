import { ReactNode } from 'react'
import { Header } from 'components/common'

import * as S from './DefaultLayout.styled'

interface LayoutProps {
  children: ReactNode
}

const DefaultLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <span id="inicio"></span>
      <Header />
      <S.Wrapper role="main">{children}</S.Wrapper>
    </>
  )
}

export default DefaultLayout
