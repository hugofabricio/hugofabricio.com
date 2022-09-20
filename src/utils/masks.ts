const masks = {
  phone: (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d)/g, '($1) $2')
      .replace(/(\d)(\d{4})$/, '$1-$2')
      .slice(0, 15)
  },
  lowercase: (value: string) => {
    return value.toLowerCase()
  },
  date: (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\d{2})(\d{2})$/, '$1$2')
      .slice(0, 10)
  }
}

export type FormMask = keyof typeof masks

export default masks
