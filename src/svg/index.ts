import ChevronLeft from './chevron-left.svg'
import ChevronRight from './chevron-right.svg'
import Facebook from './facebook.svg'
import FlagEn from './flag-en.svg'
import FlagPtBr from './flag-pt-br.svg'
import Github from './github.svg'
import Instagram from './instagram.svg'
import Linkedin from './linkedin.svg'
import NotFound from './not-found.svg'
import Phone from './phone.svg'
import Twitter from './twitter.svg'
import Whatsapp from './whatsapp.svg'

const svg = {
  'chevron-left': ChevronLeft,
  'chevron-right': ChevronRight,
  'facebook': Facebook,
  'flag-en': FlagEn,
  'flag-pt-br': FlagPtBr,
  'github': Github,
  'instagram': Instagram,
  'linkedin': Linkedin,
  'not-found': NotFound,
  'phone': Phone,
  'twitter': Twitter,
  'whatsapp': Whatsapp,
}

export type SvgProps = keyof typeof svg

export default svg