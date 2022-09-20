import ReactPaginate from 'react-paginate'

import { usePagination } from 'hooks'
import { Vector } from 'components/common'

import * as S from './Pagination.styled'

interface PaginationProps {
  pageCount: number
  currentPage: number
}

const Pagination = ({ pageCount, currentPage }: PaginationProps) => {
  const { handler } = usePagination()

  // if (pageCount === 1) {
  //   return null
  // }

  return (
    <S.Wrapper>
      <ReactPaginate
        previousClassName="page-item"
        nextClassName="page-item"
        pageClassName="page-item"
        previousLinkClassName="page-link"
        pageLinkClassName="page-link"
        nextLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        initialPage={currentPage - 1}
        marginPagesDisplayed={2}
        pageRangeDisplayed={4}
        pageCount={pageCount}
        onPageChange={handler}
        breakLabel="..."
        previousLabel={
          <Vector name="chevron-left" width={12} height={12} marginRight={2} />
        }
        nextLabel={<Vector name="chevron-right" width={12} height={12} marginLeft={2} />}
      />
    </S.Wrapper>
  )
}

export default Pagination
