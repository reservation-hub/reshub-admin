import React from 'react'
import { ClassesAndChildren } from '@components/common/_PropsType'
import { Items } from '@/components/list/_PropsType'

export interface ITableProps extends ClassesAndChildren {
  cell?: Record<string, any>
  index?: number
}

function TableLayout({ children, cell, classes }: ITableProps) {
  const styled = 'w-full bg-secondary-main rounded-[.25rem] p-[10rem] mb-5'
  return (
    <table className={`${styled} ${classes}`}>
      <thead className='bg-table-header text-table-headerFont h-[6rem]'>
        <tr className='text-[2rem]'>
          {cell &&
            Object.values(cell).map((value, index: number) => (
              <th key={index}>{value}</th>
            ))}
        </tr>
      </thead>
      <tbody className='text-[1.6rem] text-center'>{children}</tbody>
    </table>
  )
}

export default React.memo(TableLayout)
