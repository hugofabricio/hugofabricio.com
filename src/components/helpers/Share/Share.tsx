import { Button, Text, Vector } from 'components/common'
import { useTranslation } from 'next-i18next'
import { hasKey, isBrowser } from 'utils'

import providers from './Share.providers'
import * as S from './Share.styled'

interface ShareProps {
  color?: Color
  colorLink?: Color
  title: string
}

const Share = ({ color = 'neutral0', colorLink = 'neutral0', title }: ShareProps) => {
  const { t } = useTranslation('common')

  const handleOnClick = (url: string) => {
    if (isBrowser) {
      const params = {
        shareTitle: encodeURIComponent(title),
        shareRefer: window.location.href
      }

      const shareUrl = url.replace(/\{([^}]+)}/g, (m, key) =>
        hasKey(key, params) ? params[key] : ''
      )

      window.open(shareUrl)
    }
  }

  return (
    <S.Wrapper>
      <Text
        tag="h4"
        color={color}
        weight={700}
        letterSpacing={2}
        marginBottom={24}
        fontSize="tinylabel"
        uppercase
      >
        {t('share')}
      </Text>
      <S.List>
        {providers.map(({ id, name, url }) => (
          <S.Item key={id}>
            <Button
              as="external"
              href="#"
              title={t('share-provider', { provider: name })}
              onClick={() => handleOnClick(url)}
              color={colorLink}
              appearance="link"
            >
              <Vector name={id} width={20} height={20} />
            </Button>
          </S.Item>
        ))}
      </S.List>
    </S.Wrapper>
  )
}

export default Share
