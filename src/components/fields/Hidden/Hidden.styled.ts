import styled from 'styled-components'

export const Field = styled.input.withConfig({
  shouldForwardProp: (prop) => !['tag', 'validations', 'errors'].includes(prop)
})``
