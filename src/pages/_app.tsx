import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { appWithTranslation } from 'next-i18next'
import { DefaultSeo } from 'next-seo'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import SEO from '../../next-seo.config'

import { DefaultLayout } from 'layouts'
import { GlobalStyle, theme } from 'styles'

import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { asPath } = useRouter()

  useEffect(() => {
    document.body.className = asPath === '/contato/' ? 'bg-pink' : 'bg-dark'
  })

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <DefaultSeo {...SEO} />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
        <ToastContainer
          icon={false}
          hideProgressBar={true}
          autoClose={2000}
          theme="colored"
        />
      </ThemeProvider>
    </>
  )
}

export default appWithTranslation(MyApp)
