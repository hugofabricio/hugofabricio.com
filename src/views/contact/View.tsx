import { useTranslation } from 'next-i18next'
import { Col, Container, Row } from 'react-awesome-styled-grid'
import { Block, Section, Social, Text } from 'components/common'
import { ContactForm } from 'components/forms'
import bg from 'images/friends.jpeg'

import * as S from './View.styled'

const View = () => {
  const { t } = useTranslation(['common', 'contact'])

  return (
    <Section>
      <Container>
        <Row justify="space-between" align="center">
          <Col xs={12} md={6}>
            <Block marginBottom={40}>
              <Text
                tag="h1"
                fontSize="h2"
                weight={700}
                lineHeight={1.1}
                marginBottom={24}
              >
                {t('contact:title')}
              </Text>
              <Text fontSize="h4">{t('contact:body')}</Text>
              <Block marginTop={32}>
                <Social />
              </Block>
            </Block>
          </Col>
          <Col xs={12} md={5}>
            <ContactForm />
          </Col>
        </Row>
      </Container>
      <S.Background>
        <S.Image src={bg} alt="Friends" sizes="100vw" fill />
      </S.Background>
    </Section>
  )
}

export default View
