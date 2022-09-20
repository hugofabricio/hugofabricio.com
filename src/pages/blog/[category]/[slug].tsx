import type { NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { NextSeo } from 'next-seo'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { localeConfig } from 'config'
import BlogView from 'views/blog/show'

interface PageProps {
  post: any
  related: any[]
}

interface RouteParams extends ParsedUrlQuery {
  category: string
  slug: string
}

interface StaticProps {
  params: RouteParams
  locale: string
}

const Blog: NextPage<PageProps> = ({ post, related }) => (
  <>
    {/* <NextSeo title={post.seo.title} description={post.seo.description} /> */}
    <BlogView data={post} related={related} />
  </>
)

export const getStaticPaths = async () => {
  return {
    paths: ['/blog/devops/terraform/'],
    fallback: false
  }
}

export const getStaticProps = async ({ locale, params }: StaticProps) => {
  const post: any = {}
  const related: any[] = []

  return {
    props: {
      post,
      related,
      ...(await serverSideTranslations(locale, [...localeConfig.defaultKeys, 'blog']))
    }
  }
}

export default Blog
