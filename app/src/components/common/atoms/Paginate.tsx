import React from 'react'
import ReactPaginate from 'react-paginate'
import { IPaginateProps } from '../_PropsType'
import CommonStyle from '../../CommonStyle'

const Paginate = ({
  totalPage,
  setPage,
  page
}: IPaginateProps) => {

  const classes = CommonStyle()

  const pageChangeHandler = (data: any | number[]): void => {
    let pageNum = data['selected']
    setPage(pageNum + 1)
  }

  return (
    <div className={ classes.pagingBox }>
      <ReactPaginate
        marginPagesDisplayed={ 10 }
        pageCount={ Math.ceil(totalPage / 10) }
        pageRangeDisplayed={ 10 }
        breakLabel={ '...' }
        initialPage={ Number(page) - 1 }
        previousLabel={ '<' }
        nextLabel={ '>' }
        activeClassName={ 'active' }
        containerClassName={ 'paging-container justify-center display-flex' }
        onPageChange={ pageChangeHandler }
      />
    </div>
  )
}

export default Paginate
