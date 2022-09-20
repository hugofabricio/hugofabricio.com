import { Button, Section, Text } from 'components/common'
import { useTranslation } from 'next-i18next'
import { Container } from 'react-awesome-styled-grid'

interface ViewProps {
  status: 404 | 500
}

const View = ({ status }: ViewProps) => {
  const { t } = useTranslation('error')

  return (
    <Section>
      <Container>
        <Text tag="h1" fontSize="h1" weight={700} lineHeight={1.1} marginBottom={24}>
          {t('title', { status })}
        </Text>
        <Text fontSize="h4" marginBottom={40}>
          {t(`${status}`)}
        </Text>
        <Button
          as="link"
          appearance="solid"
          color="pink500"
          href="/"
          title={t('back-home')}
        >
          {t('back-home')}
        </Button>
      </Container>
    </Section>
  )
}

export default View
