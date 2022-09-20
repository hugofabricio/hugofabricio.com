const config = {
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR']
  },
  returnObjects: true,
  reloadOnPrerender: process.env.NODE_ENV === 'development'
}

module.exports = config
