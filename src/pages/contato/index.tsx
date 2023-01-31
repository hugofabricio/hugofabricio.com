import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Script from 'next/script'

import { localeConfig } from 'config'
import ContactView from 'views/contact'

interface StaticProps {
  locale: string
}

const Contact: NextPage = () => {
  const { t } = useTranslation('contact')

  return (
    <>
      <Script id="customerio">
        {`(function() {
    var t = document.createElement('script'),
        s = document.getElementsByTagName('script')[0];
    t.async = true;
    t.id    = 'cio-forms-handler';
    t.setAttribute('data-site-id', '0a022ce96e7beae5f57d');
    t.setAttribute('data-base-url', 'https://customerioforms.com');

    t.src = 'https://customerioforms.com/assets/forms.js';

    s.parentNode.insertBefore(t, s);
  })();`}
      </Script>
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
