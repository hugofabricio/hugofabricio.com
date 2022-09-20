import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { localeConfig } from 'config'
import AboutView from 'views/about'

interface StaticProps {
  locale: string
}

const About: NextPage = () => {
  const { t } = useTranslation('about')

  return (
    <>
      <NextSeo title={t('seo.title')} description={t('seo.description')} />
      <AboutView />
    </>
  )
}

export const getStaticProps = async ({ locale }: StaticProps) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [...localeConfig.defaultKeys, 'about']))
    }
  }
}

export default About
