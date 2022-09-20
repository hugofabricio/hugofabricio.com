import { object, string } from 'yup'

const schema = object({
  name: string().required('campo obrigatório'),
  email: string().required('campo obrigatório').email('e-mail inválido'),
  message: string().required('campo obrigatório')
})

export default schema
