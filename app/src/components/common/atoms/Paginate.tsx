import React from 'react'
import ReactPaginate from 'react-paginate'
import '@styles/paginate.css'

export interface IPaginateProps {
  totalPage: number
  page?: string | number | null
  pageChangeHandler: (selectedItem: { selected: number }) => void
}

const Paginate = ({ totalPage, page, pageChangeHandler }: IPaginateProps) => {
  return (
    <ReactPaginate
      marginPagesDisplayed={10}
      pageCount={Math.ceil(totalPage / 10)}
      pageRangeDisplayed={10}
      breakLabel='...'
      initialPage={Number(page) - 1}
      previousLabel='<'
      nextLabel='>'
      activeClassName='bg-primary text-secondary-main'
      containerClassName='h-[4rem] w-[4rem] text-center leading-[4rem] flex'
      pageLinkClassName='w-[4rem] inline-block'
      previousLinkClassName='w-[4rem] inline-block'
      nextLinkClassName='w-[4rem] inline-block'
      onPageChange={pageChangeHandler}
    />
  )
}

export default Paginate
