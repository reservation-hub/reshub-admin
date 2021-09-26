import React from 'react'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import { useRange } from '../../../utils/useRange'
import { StyledControl } from '../../form/FormStyle'
import { IPickerProps } from '../_PropsType'

const DayPicker = ({
  option,
  name,
  selectHandler,
  classes,
  from,
  to,
  label,
  id
}: IPickerProps) => {
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
