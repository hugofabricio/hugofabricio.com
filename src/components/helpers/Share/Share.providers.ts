import { SvgProps } from 'svg'

export type SocialProvider = {
  id: SvgProps
  name: string
  url: string
}

const providers: SocialProvider[] = [
  {
    id: 'facebook',
    name: 'Facebook',
    url: 'https://facebook.com/sharer/sharer.php?u={shareRefer}'
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    url: 'https://api.whatsapp.com/send?text={shareTitle} {shareRefer}'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://linkedin.com/shareArticle?mini=true&url={shareRefer}&title={shareTitle}'
  },
  {
    id: 'twitter',
    name: 'Twitter',
    url: 'https://twitter.com/intent/tweet?text={shareTitle}&url={shareRefer}'
  }
]

export default providers
