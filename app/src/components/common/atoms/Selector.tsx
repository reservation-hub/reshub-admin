import React from 'react'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import { StyledControl } from '@components/form/FormStyle'
import { IPickerProps } from '@components/common/_PropsType'

const Selector = ({ id, label, name, value, onChange, data }: IPickerProps) => {
  return (
    <StyledControl>
      <InputLabel id={id}>{label}</InputLabel>
      <Select
        name={name}
        value={value}
        onChange={onChange}
        className='w-18 h-4'
        variant='outlined'
      >
        {data?.map((value, index) => (
          <MenuItem key={index} value={value.slug}>
            {value.name}
          </MenuItem>
        ))}
      </Select>
    </StyledControl>
  )
}

export default Selector
