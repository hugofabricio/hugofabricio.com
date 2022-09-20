import { Vector } from 'components/common'
import { SvgProps } from 'svg'

import * as S from './Contact.styled'

interface ContactProps {
  type?: 'whatsapp' | 'phone'
  phone: string
  message?: string
}

const types = {
  whatsapp: {
    color: 'whatsapp',
    title: 'WhatsApp',
    icon: 'whatsapp',
    url: 'https://api.whatsapp.com/send?phone='
  },
  phone: {
    color: 'pink500',
    title: 'Contato',
    icon: 'phone',
    url: 'tel:'
  }
}

const Contact = ({ type = 'whatsapp', phone, message }: ContactProps) => {
  const config = types[type]

  const getTarget = () => {
    let target = `${config.url}${phone.replace(/\D/g, '')}`

    if (message) {
      target += `&text=${encodeURI(message)}`
    }

    return target
  }

  return (
    <S.Button
      color={config.color as Color}
      href={getTarget()}
      target="_blank"
      title={`${config.title} ${phone}`}
    >
      <Vector name={config.icon as SvgProps} color="neutral0" width={24} height={24} />
    </S.Button>
  )
}

export default Contact
