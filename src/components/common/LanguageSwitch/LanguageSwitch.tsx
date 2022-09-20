import { useRouter } from 'next/router'
import cn from 'classnames'

import { SvgProps } from 'svg'
import { Link } from 'components/helpers'
import { Vector } from 'components/common'

import * as S from './LanguageSwitch.styled'

const LanguageSwitch = () => {
  const { locales, locale, asPath } = useRouter()

  if (!locales) {
    return null
  }

  return (
    <S.List>
      {locales.map((l, i) => (
        <S.Item key={i}>
          <Link href={asPath} locale={l}>
            <S.Link className={cn({ selected: l === locale })}>
              <Vector
                name={`flag-${l.toLocaleLowerCase()}` as SvgProps}
                width={20}
                height={20}
              />
            </S.Link>
          </Link>
        </S.Item>
      ))}
    </S.List>
  )
}

export default LanguageSwitch
