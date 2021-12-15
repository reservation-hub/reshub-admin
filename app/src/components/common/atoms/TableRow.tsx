import history from '@utils/routes/history'
import React from 'react'
import { ClassesAndChildren } from '@components/common/_PropsType'

export interface IRowPorps extends ClassesAndChildren {
  url?: string
  id?: number
}

const TableRow = ({ url, id, children, classes }: IRowPorps) => {
  return (
    <tr
      onClick={() => history.push(`/${url}/${id}`)}
      className={`${classes} hover:bg-secondary-dark border-b-2 h-[4.5rem]`}
    >
      {children}
    </tr>
  )
}

export default TableRow
