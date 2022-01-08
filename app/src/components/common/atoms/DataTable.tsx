import React from 'react'
import { ClassesAndChildren } from '../_PropsType'

export interface IDataTableProps<T> extends ClassesAndChildren {
  cell: { column: string; key: keyof T }[]
  item: T | undefined
}

const DataTable = <T extends Record<string, any>>({
  cell,
  item,
  classes
}: IDataTableProps<T>) => {
  const dt = `${classes}  min-w-[13rem] text-[1.6rem] font-bold border-r-0 inline-block p-[1rem] border border-b-0 border-secondary-main text-secondary-main bg-primary`
  const dd =
    'flex-1 text-[1.4rem] m-0 inline-block p-[1rem] border-b-0 border-primary border'
  return (
    <div className='w-[40rem] h-full border-primary border-b bg-secondary-main'>
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
