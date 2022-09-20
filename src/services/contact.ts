import { ContactValues } from 'components/forms'
import instance from 'utils/client'

const contact = {
  post: (payload: ContactValues) => {
    return instance.post(
      `https://formspree.io/f/xnqrpwyq`,
      {
        identifier: 'form-contato',
        ...payload
      },
      {
        headers: {
          Accept: 'application/json'
        }
      }
    )
  }
}

export default contact
