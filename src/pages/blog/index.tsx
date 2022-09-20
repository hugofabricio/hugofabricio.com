import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { PaginationData } from 'resources'
import { localeConfig } from 'config'
import BlogView from 'views/blog/index'

interface PageProps {
  posts: any[]
  pagination: PaginationData
}

interface StaticProps {
  locale: string
}

const Blog: NextPage<PageProps> = ({ posts, pagination }) => {
  const { t } = useTranslation('blog')

  return (
    <>
      <NextSeo title={t('seo.title')} description={t('seo.description')} />
      <BlogView pagination={pagination} data={posts} />
    </>
  )
}

export const getStaticProps = async ({ locale }: StaticProps) => {
  const posts: any[] = []

  return {
    props: {
      posts,
      pagination: {
        totalCount: 10,
        pageCount: 5,
        currentPage: 1,
        perPage: 2
      },
      ...(await serverSideTranslations(locale, [...localeConfig.defaultKeys, 'blog']))
    }
  }
}

export default Blog
