import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { localeConfig } from 'config'
import ErrorView from 'views/error'

interface StaticProps {
  locale: string
}

const Error: NextPage = () => {
  const { t } = useTranslation('error')

  return (
    <>
      <NextSeo title={t('500')} />
      <ErrorView status={500} />
    </>
  )
}

export const getStaticProps = async ({ locale }: StaticProps) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [...localeConfig.defaultKeys, 'error']))
    }
  }
}

export default Error
