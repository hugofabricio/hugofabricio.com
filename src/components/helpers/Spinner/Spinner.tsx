import * as S from './Spinner.styled'

export interface SpinnerProps {
  color?: Color
  size?: Size
}

const Spinner = ({ color = 'pink600', size = 16 }: SpinnerProps) => (
  <S.Wrapper size={size} color={color}>
    <S.Loader />
  </S.Wrapper>
)

export default Spinner
