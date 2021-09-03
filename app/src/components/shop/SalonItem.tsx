import React from 'react'
import { StyledTableCell } from '../common/TableStyle'
import { UserListProps } from '../user/_PropsType'

const SalonItem = ({
  shop
}: UserListProps) => {
  console.log(shop)
  return (
    <>
      <StyledTableCell>
        { shop?.id }
      </StyledTableCell>
      <StyledTableCell>
        { shop?.name }
      </StyledTableCell>
      <StyledTableCell>
      
      </StyledTableCell>
      <StyledTableCell>
      
      </StyledTableCell>
      <StyledTableCell>
      
      </StyledTableCell>
      <StyledTableCell>
      
      </StyledTableCell>
      <StyledTableCell>
      
      </StyledTableCell>
    </>
  )
}
export default React.memo(SalonItem)