import { useTranslation } from 'next-i18next'

import * as S from './View.styled'

interface ViewProps {
  data: any[]
  related: any
}

const View = ({}: ViewProps) => {
  const { t } = useTranslation('portfolio')

  return <S.SectionPortfolio></S.SectionPortfolio>
}

export default View
