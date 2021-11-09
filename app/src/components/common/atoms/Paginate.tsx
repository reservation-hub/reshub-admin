import React from 'react'
import ReactPaginate from 'react-paginate'
import { IPaginateProps } from '../_PropsType'
import { makeStyles } from '@material-ui/core/styles'

const classes = makeStyles((theme) => ({
  root: {
    '& .paging-container': {
      padding: '0',
      listStyle: 'none',
      '& li': {
        marginLeft: '.5rem',
        marginRight: '.5rem',
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: '.25rem',
        color: '#ABB0AD',
        textAlign: 'center',
        cursor: 'pointer',
        fontWeight: '600',
        height: '4rem',
        lineHeight: '4rem',
        background: theme.palette.secondary.main,
        '& a': {
          width: '4rem',
          display: 'inline-block'
        }
      },
      '& .active': {
        background: theme.palette.primary.main,
        color: theme.palette.secondary.main
      }
    }
  }
}))

const Paginate = ({ totalPage, setPage, page }: IPaginateProps) => {
  const pageChangeHandler = (data: any | number[]): void => {
    const pageNum = data['selected']
    setPage(pageNum + 1)
  }

  return (
    <div className={classes().root}>
      <ReactPaginate
        marginPagesDisplayed={10}
        pageCount={Math.ceil(totalPage / 10)}
        pageRangeDisplayed={10}
        breakLabel={'...'}
        initialPage={Number(page) - 1}
        previousLabel={'<'}
        nextLabel={'>'}
        activeClassName={'active'}
        containerClassName={'paging-container justify-center display-flex'}
        onPageChange={pageChangeHandler}
      />
    </div>
  )
}

export default Paginate
