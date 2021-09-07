import React from 'react'
import { PickerProps } from '../_PropsType'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

const LocationPicker = ({ area, pref, city, values }: PickerProps) => {
  
  return (
    <div className='display-flex'>
      <div>
        <Select value={ area?.option } name='area' onChange={ area?.changeHandler }>
          { values?.areas?.map((value, index) => (
            <MenuItem key={ index } value={ value.id }>{ value.name }</MenuItem>
          )) }
        </Select>
      </div>
      <div>
        <Select value={ pref?.option } name='pref' onChange={ pref?.changeHandler }>
          { values?.pref?.map((value, index) => (
            <MenuItem key={ index } value={ value.id }>{ value.name }</MenuItem>
          )) }
        </Select>
      </div>
      <div>
        <Select value={ city?.option } name='city' onChange={ city?.changeHandler }>
          { values?.city?.map((value, index) => (
            <MenuItem key={ index } value={ value.id }>{ value.name }</MenuItem>
          )) }
        </Select>
      </div>
    </div>
  )
}

export default LocationPicker
