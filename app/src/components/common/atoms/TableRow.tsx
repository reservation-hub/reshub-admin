import React from 'react'
import history from '@utils/routes/history'
import { ClassesAndChildren } from '@components/common/_PropsType'

export interface IRowPorps extends ClassesAndChildren {
  url?: string
  id?: number
  subParams?: number
}

const TableRow = ({ url, id, children, classes, subParams }: IRowPorps) => {
  return (
    <tr
      onClick={() =>
        history.push(
          `/${url}/${id}`,
          subParams ? { state: { id: subParams } } : null
        )
      }
      className={`${classes} hover:bg-secondary-dark border-b-2 h-[4.5rem]`}
    >
      {children}
    </tr>
  )
}

export default TableRow
