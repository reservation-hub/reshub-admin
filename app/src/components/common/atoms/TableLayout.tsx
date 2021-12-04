import React from 'react'
import { ITableProps } from '../_PropsType'

const TableLayout = ({ children, cell, classes }: ITableProps) => {
  const styled = 'w-full bg-secondary-main rounded-[.25rem] p-[10rem] mb-5'
  return (
    <table className={`${styled} ${classes}`}>
      <thead className='bg-table-header text-table-headerFont h-[6rem]'>
        <tr className='text-[2rem]'>
          {cell && Object.values(cell).map((value, index: number) => (
            <th key={index}>{value}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  )
}

export default React.memo(TableLayout)
