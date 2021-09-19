import React from 'react'
import { InputLabel, MenuItem, Select } from '@material-ui/core'
import { useRange } from '../../../utils/useRange'
import { StyledControl } from '../../form/FormStyle'
import { PickerProps } from '../_PropsType'

const DayPicker = ({
  option,
  name,
  selectHandler,
  classes,
  from,
  to,
  label,
  id
}: PickerProps) => {
  return (
    <StyledControl>
      <InputLabel id={ id }>
        { label }
      </InputLabel>
      <Select
        value={ option }
        name={ name }
        onChange={ selectHandler }
        onBlur={ selectHandler }
        className={ classes }
        variant="outlined"
      >
        { useRange(from as number, to as number).map((value, index) => (
          <MenuItem key={ index } value={ value }>
            { String(value) }
          </MenuItem>
        )) }
      </Select>
    </StyledControl>
  )
}

export default DayPicker
