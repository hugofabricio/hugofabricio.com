import { SvgProps } from 'svg'
import { Vector, Button } from 'components/common'
import providers from './Social.links'

import * as S from './Social.styled'
import { Link } from 'components/helpers'

interface SocialProps {
  iconSize?: number
}

const Social = ({ iconSize = 24 }: SocialProps) => (
  <S.List className="social">
    {providers.map(({ label, href }) => (
      <S.Item key={label}>
        <Link href={href}>
          <S.Link title={label} size={iconSize}>
            <Vector
              name={label.toLocaleLowerCase() as SvgProps}
              width="100%"
              height="100%"
            />
          </S.Link>
        </Link>
      </S.Item>
    ))}
  </S.List>
)

export default Social
