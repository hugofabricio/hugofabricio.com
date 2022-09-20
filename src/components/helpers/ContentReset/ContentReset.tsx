import { PropsWithChildren } from 'react'

import * as S from './ContentReset.styled'

interface ContentReset {}

const ContentReset = ({ children }: PropsWithChildren<ContentReset>) => (
  <S.Wrapper dangerouslySetInnerHTML={{ __html: `${children}` }} />
)

export default ContentReset
