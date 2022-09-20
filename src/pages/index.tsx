import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { localeConfig } from 'config'
import HomeView from 'views/home'

interface StaticProps {
  locale: string
}

const Home: NextPage = () => {
  const { t } = useTranslation('home')

  return (
    <>
      <NextSeo description={t('seo.description')} />
      <HomeView />
    </>
  )
}

export const getStaticProps = async ({ locale }: StaticProps) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [...localeConfig.defaultKeys, 'home']))
    }
  }
}

export default Home
