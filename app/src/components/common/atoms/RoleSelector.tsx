import React from 'react'
import { StyledControl } from '../../form/FormStyle'
import { InputLabel, MenuItem, Select } from '@material-ui/core'
import { Roles } from '../_Constants'
import { PickerProps } from '../_PropsType'

const RoleSelector = ({ option, selectHandler }: PickerProps) => {
  return (
    <StyledControl>
      <InputLabel id="role">権限</InputLabel>
      <Select
        name="role"
        variant="outlined"
        value={ option }
        onChange={ selectHandler }
        className="w-18 h-4"
      >
        { Roles.map((value, index) => (
          <MenuItem key={ index } value={ value.id }>{ value.value }</MenuItem>
        )) }
      </Select>
    </StyledControl>
  )
}

export default RoleSelector
