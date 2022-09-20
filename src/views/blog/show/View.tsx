import { useTranslation } from 'next-i18next'

interface ViewProps {
  data: any[]
  related: any
}

const View = ({}: ViewProps) => {
  const { t } = useTranslation('blog')

  return <></>
}

export default View
