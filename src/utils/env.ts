export const isProd = process.env.NODE_ENV === 'production'

export const isDev = process.env.NODE_ENV === 'development'

export const isBrowser = typeof window !== 'undefined'
