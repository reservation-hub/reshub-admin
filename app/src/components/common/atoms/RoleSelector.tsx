import React from 'react'
import { StyledControl } from '@components/form/FormStyle'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import { Roles } from '../_Constants'
import { IPickerProps } from '../_PropsType'

const RoleSelector = ({ option, selectHandler }: IPickerProps) => {
  return (
    <StyledControl>
      <InputLabel id='role'>権限</InputLabel>
      <Select
        name='role'
        variant='outlined'
        value={option}
        onChange={selectHandler}
        className='w-18 h-4'
      >
        {Roles.map((value, index) => (
          <MenuItem key={index} value={value.id}>
            {value.value}
          </MenuItem>
        ))}
      </Select>
    </StyledControl>
  )
}

export default RoleSelector
