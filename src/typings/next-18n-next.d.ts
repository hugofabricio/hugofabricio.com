import 'react-i18next'

import about from '../../public/locales/pt-BR/about.json'
import blog from '../../public/locales/pt-BR/blog.json'
import common from '../../public/locales/pt-BR/common.json'
import contact from '../../public/locales/pt-BR/contact.json'
import error from '../../public/locales/pt-BR/error.json'
import footer from '../../public/locales/pt-BR/footer.json'
import form from '../../public/locales/pt-BR/form.json'
import home from '../../public/locales/pt-BR/home.json'
import menu from '../../public/locales/pt-BR/menu.json'
import portfolio from '../../public/locales/pt-BR/portfolio.json'

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNs: 'common'
    resources: {
      about: typeof about
      blog: typeof blog
      common: typeof common
      contact: typeof contact
      error: typeof error
      footer: typeof footer
      form: typeof form
      home: typeof home
      menu: typeof menu
      portfolio: typeof portfolio
    }
  }
}
