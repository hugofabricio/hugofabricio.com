export interface SitemapData {
  lastmod: string
  url: string
}

export interface PaginationData {
  totalCount: number
  pageCount: number
  currentPage: number
  perPage: number
}

export interface GalleryData {
  id: string
  type: string
  name: string
  preview: string
  image: string
}

export type SeoData = {
  title: string
  description: string
  image: string | null
}

export type TaxonomyData = {
  id: string
  url: string
  slug: string
  title: string
  body: string | null
}

export type PostData = {
  seo: SeoData
}

export type ProjectData = {
  title: string
  href: string
}
