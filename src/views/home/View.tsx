import { useTranslation } from 'next-i18next'
import { Container } from 'react-awesome-styled-grid'
import { Waves } from 'components/app'
import { Social, Text } from 'components/common'

import * as S from './View.styled'

const View = () => {
  const { t } = useTranslation(['common', 'home'])

  return (
    <S.SectionIntro>
      <Container>
        <S.SectionContent
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                duration: 1.4,
                delay: 1.2
              }
            }
          }}
          initial="hidden"
          animate="visible"
        >
          <Text tag="h1" fontSize="heroTitle" lineHeight={1.2} weight={700}>
            {t('home:hero.title')}
          </Text>
          <Text fontSize="heroBody" weight={700}>
            {t('home:hero.body')}
          </Text>
        </S.SectionContent>
      </Container>
      <S.SocialWrapper
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delay: 1.2,
              duration: 0.8
            }
          }
        }}
        initial="hidden"
        animate="visible"
      >
        <Social />
      </S.SocialWrapper>
      <S.Waves>
        <Waves type="left" />
        <Waves type="right" />
      </S.Waves>
    </S.SectionIntro>
  )
}

export default View
