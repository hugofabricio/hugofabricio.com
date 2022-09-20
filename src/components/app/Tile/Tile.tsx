import * as S from './Tile.styled'

interface TileProps {
  label: string
}

const Tile = ({ label }: TileProps) => (
  <S.Label
    fontSize="h5"
    lineHeight={1.2}
    weight={700}
    dangerouslySetInnerHTML={{ __html: label }}
  />
)

export default Tile
