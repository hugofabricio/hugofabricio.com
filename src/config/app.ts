interface AppConfigProps {
  CONTACT: {
    WHATSAPP: string
    EMAIL: string
  }
  MENU: {
    mobile: Breakpoint
    desktop: Breakpoint
  }
}

const config: AppConfigProps = {
  CONTACT: {
    WHATSAPP: '(19) 97151-0131',
    EMAIL: 'me@hugofabricio.com'
  },
  MENU: {
    mobile: 'xs',
    desktop: 'sm'
  }
}

export default config
