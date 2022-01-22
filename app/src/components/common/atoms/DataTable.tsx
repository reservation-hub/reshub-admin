import React from 'react'
import { ClassesAndChildren } from '@components/common/_PropsType'

export interface IDataTableProps<T> extends ClassesAndChildren {
  cell: { column: string; key: keyof T }[]
  item: T | undefined
}

const DataTable = <T extends Record<string, any>>({
  cell,
  item,
  classes
}: IDataTableProps<T>) => {
  const dt = `${classes}  min-w-[15rem] font-bold border-r-0 p-4 border-b-0 border-primary bg-table-header`
  const dd =
    'flex-1 text-[1.4rem] m-0 p-4 border-b-0 border-l-0 border bg-secondary-main'
  return (
    <div className='w-[51rem] h-full border-b text-[1.6rem]'>
      {cell?.map((value, index) => (
        <div className='flex' key={index}>
          <dt className={dt}>{value.column}</dt>
          <dd className={dd}>{(item && item[value.key]) || ''}</dd>
        </div>
      ))}
    </div>
  )
}

export default DataTable
