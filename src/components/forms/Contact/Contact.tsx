import { useTranslation } from 'next-i18next'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Col, Row } from 'react-awesome-styled-grid'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'

import { contactService } from 'services'
import { Button } from 'components/common'
import { Form, Input, Textarea } from 'components/fields'
import schema from './Contact.schema'

export type ContactValues = {
  name: string
  email: string
  message: string
}

const Contact = () => {
  const { t } = useTranslation(['form', 'common'])

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactValues>({
    resolver: yupResolver(schema)
  })

  const onSubmitForm: SubmitHandler<ContactValues> = async (data) => {
    const resp = await contactService.post(data)

    if (!resp.data?.ok) {
      toast(t('form:message.failed'), { type: 'error' })
      return
    }

    toast(t('form:message.success'), { type: 'success' })
    reset()
  }

  return (
    <Form onSubmit={handleSubmit(onSubmitForm)}>
      <Row>
        <Col xs={12}>
          <Input
            {...register('name')}
            id="contact-name"
            label={t('form:fields.name')}
            placeholder={t('form:fields.name')}
            errors={errors}
            hideLabel
          />
        </Col>
        <Col xs={12}>
          <Input
            {...register('email')}
            id="contact-email"
            label={t('form:fields.email')}
            placeholder={t('form:fields.email')}
            type="email"
            errors={errors}
            hideLabel
          />
        </Col>
        <Col xs={12}>
          <Textarea
            {...register('message')}
            id="contact-message"
            label={t('form:fields.message')}
            placeholder={t('form:fields.message')}
            rows={4}
            errors={errors}
            marginBottom={32}
            hideLabel
          />
        </Col>
        <Col xs={12}>
          <div>
            <Button
              color="neutral0"
              appearance="solid"
              type="submit"
              isLoading={isSubmitting}
              disabled={isSubmitting}
              uppercase
            >
              {t('common:send-message')}
            </Button>
          </div>
        </Col>
      </Row>
    </Form>
  )
}

export default Contact
