import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { ProjectData } from 'resources'
import { localeConfig } from 'config'
import PortfolioView from 'views/portfolio/index'

interface PageProps {
  portfolio: ProjectData[]
}

interface StaticProps {
  locale: string
}

const Portfolio: NextPage<PageProps> = ({ portfolio }) => {
  const { t } = useTranslation('portfolio')

  return (
    <>
      <NextSeo title={t('seo.title')} description={t('seo.description')} />
      <PortfolioView data={portfolio} />
    </>
  )
}

export const getStaticProps = async ({ locale }: StaticProps) => {
  const portfolio: ProjectData[] = [
    {
      title: 'Zênite Construções',
      href: 'https://zeniteconstrucoes.com.br/'
    },
    {
      title: 'Istratégica',
      href: 'https://istrategica.com.br/'
    },
    {
      title: 'Voitz Energia',
      href: 'https://voitzenergia.com.br/'
    },
    {
      title: 'SC Tecelagem',
      href: 'https://sctecelagem.com.br/'
    },
    {
      title: 'HiSelly',
      href: 'https://hiselly.com.br/'
    },
    {
      title: 'EQ Empreendimentos',
      href: 'https://eqcomvc.com.br/'
    },
    {
      title: 'Superlógica',
      href: 'https://superlogica.com/'
    },
    {
      title: 'Superlógica Design Language',
      href: 'https://superlogica.design/'
    },
    {
      title: 'Superlógica Next',
      href: 'https://next.superlogica.com/'
    },
    {
      title: 'Superlógica Xperience',
      href: 'https://xperience.superlogica.com/'
    },
    {
      title: 'Gruvi',
      href: 'https://gruvi.app/'
    },
    {
      title: 'Grupo Roccia',
      href: 'https://somosroccia.com.br/'
    },
    {
      title: 'Onildo Rocha',
      href: 'https://curso.onildorocha.com/'
    },
    {
      title: 'Conserpa & Enger',
      href: 'https://grupoconserpaenger.com.br/'
    },
    {
      title: 'Moreira & Ruffos',
      href: 'https://moreiraeruffos.com.br/'
    },
    {
      title: 'Execut',
      href: 'https://execut.com.br/'
    },
    {
      title: 'Cultura Inglesa',
      href: 'https://culturainglesapb.com.br/'
    },
    {
      title: 'Voejar Brasil',
      href: 'https://voejarbrasil.com.br/'
    },
    {
      title: 'Lasca de Pizza',
      href: 'https://lascadepizza.com.br/'
    },
    {
      title: 'Cidade Viva',
      href: 'https://cidadeviva.org/'
    }
  ]

  return {
    props: {
      portfolio,
      ...(await serverSideTranslations(locale, [
        ...localeConfig.defaultKeys,
        'portfolio'
      ]))
    }
  }
}

export default Portfolio
