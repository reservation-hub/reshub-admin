import React from 'react'
import ReactPaginate from 'react-paginate'
import { PaginateProps } from '../_PropsType'
import CommonStyle from '../../CommonStyle'

const Paginate = ({
  totalPage,
  setPage
}: PaginateProps) => {
  
  const classes = CommonStyle()
  
  const pageChangeHandler = (data: any | number[]): void => {
    let pageNum = data['selected']
    console.log(pageNum)
    setPage(pageNum + 1)
  }
  
  return (
    <div className={ classes.pagingBox }>
      <ReactPaginate
        marginPagesDisplayed={ 0 }
        pageCount={ Math.ceil(totalPage / 10) }
        pageRangeDisplayed={ 10 }
        breakLabel={ '' }
        previousLabel={ '<' }
        nextLabel={ '>' }
        activeClassName={ 'active' }
        containerClassName={ 'paging-container' }
        onPageChange={ pageChangeHandler }
      />
    </div>
  )
}

export default Paginate
