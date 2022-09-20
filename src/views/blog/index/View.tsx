import { useTranslation } from 'next-i18next'
import { PaginationData } from 'resources'

interface ViewProps {
  pagination: PaginationData
  data: any[]
}

const View = ({}: ViewProps) => {
  const { t } = useTranslation('blog')

  return <></>
}

export default View
