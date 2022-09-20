import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { localeConfig } from 'config'
import ContactView from 'views/contact'

interface StaticProps {
  locale: string
}

const Contact: NextPage = () => {
  const { t } = useTranslation('contact')

  return (
    <>
      <NextSeo title={t('seo.title')} description={t('seo.description')} />
      <ContactView />
    </>
  )
}

export const getStaticProps = async ({ locale }: StaticProps) => {
  return {
    props: {
      isPink: true,
      ...(await serverSideTranslations(locale, [...localeConfig.defaultKeys, 'contact']))
    }
  }
}

export default Contact
