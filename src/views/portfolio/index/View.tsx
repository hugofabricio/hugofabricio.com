import { useTranslation } from 'next-i18next'
import { Container } from 'react-awesome-styled-grid'

import { ProjectData } from 'resources'
import { Block, Button, Section, Text } from 'components/common'

interface ViewProps {
  data: ProjectData[]
}

const View = ({ data }: ViewProps) => {
  const { t } = useTranslation('portfolio')

  return (
    <Section>
      <Container>
        <Block tag="header" marginBottom={40}>
          <Text tag="h1" fontSize="h2" weight={700} lineHeight={1.1} marginBottom={24}>
            {t('title')}
          </Text>
          {t('body').map((body, i) => (
            <Text
              key={i}
              maxWidth={700}
              marginBottom={i + 1 < t('body').length ? 24 : 0}
              fontSize={i + 1 < t('body').length ? 'h5' : 'text'}
              dangerouslySetInnerHTML={{ __html: body }}
            />
          ))}
        </Block>
        <Block
          tag="article"
          display="flex"
          flexWrap="wrap"
          flexDirection={{ xxxs: 'column', sm: 'row' }}
          maxWidth={900}
          gap={20}
        >
          {data.map(({ href, title }) => (
            <Button
              key={title}
              as="external"
              color="neutral0"
              appearance="outline"
              target="_blank"
              rel="nofollow noopener"
              fieldSize="lg"
              title={title}
              href={href}
              uppercase
            >
              {title}
            </Button>
          ))}
        </Block>
      </Container>
    </Section>
  )
}

export default View
