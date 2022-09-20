import { useTranslation } from 'next-i18next'
import { Col, Container, Row } from 'react-awesome-styled-grid'

import { Block, Section, Text } from 'components/common'
import { Tile } from 'components/app'
import hugo from 'images/hugo.png'

import * as S from './View.styled'

const View = () => {
  const { t } = useTranslation('about')

  return (
    <Section padding={{ xxxs: '0 0 40px', md: '0 0 80px' }}>
      <Container>
        <Block
          position="relative"
          overflow="hidden"
          padding={{ xxxs: '140px 0 40px', sm: '200px 0 80px' }}
          tag="header"
        >
          <Row justify="space-between">
            <Col xs={12} sm={8} md={6}>
              <Block>
                <Text
                  tag="h1"
                  fontSize="h2"
                  weight={700}
                  lineHeight={1.1}
                  marginBottom={24}
                >
                  {t('title')}
                </Text>
                {t('body').map((body, i) => (
                  <Text
                    key={i}
                    fontSize="h5"
                    marginBottom={i + 1 < t('body').length ? 16 : 0}
                    dangerouslySetInnerHTML={{ __html: body }}
                  />
                ))}
              </Block>
            </Col>
          </Row>
          <S.Figure>
            <S.Image src={hugo} alt="Hugo Fabricio" priority />
          </S.Figure>
        </Block>
        <Block
          display="flex"
          flexDirection={{ xxxs: 'column', xs: 'row' }}
          alignItems={{ xxxs: 'flex-start', md: 'center' }}
          justifyContent={{ xxxs: 'flex-start', md: 'center' }}
          bgColor="pink500"
          padding={{ xxxs: 40, sm: 60 }}
          gap={{ xxxs: 24, sm: 32 }}
        >
          <Tile label={t('stats.experience', { value: '12+' })} />
          <Tile label={t('stats.projects', { value: '150+' })} />
        </Block>
      </Container>
    </Section>
  )
}

export default View
