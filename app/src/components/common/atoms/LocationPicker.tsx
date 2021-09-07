import React from 'react'
import { PickerProps } from '../_PropsType'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import { StyledContr } from '../../form/FormStyle'

const LocationPicker = ({ area, pref, city, values }: PickerProps) => {
  
  return (
    <div className='display-flex'>
      <div className='mar-1'>
        <StyledContr>
          <InputLabel id='area'>エリア</InputLabel>
          <Select
            value={ area?.option }
            name='area'
            onChange={ area?.changeHandler }
            className='w-18 h-4'
            variant='outlined'
            label='エリア'
            labelId='area'
          >
            { values?.areas?.map((value, index) => (
              <MenuItem key={ index } value={ value.id }>{ value.name }</MenuItem>
            )) }
          </Select>
        </StyledContr>
      </div>
      <div className='mar-1'>
        <StyledContr>
          <InputLabel id='pref'>都道府県</InputLabel>
          <Select
            value={ pref?.option }
            name='pref'
            onChange={ pref?.changeHandler }
            className='w-18 h-4'
            variant='outlined'
            label='都道府県'
            labelId='pref'
          >
            { values?.pref?.map((value, index) => (
              <MenuItem key={ index } value={ value.id }>{ value.name }</MenuItem>
            )) }
          </Select>
        </StyledContr>
      </div>
      <div className='mar-1'>
        <StyledContr>
          <InputLabel id='city'>市区町村</InputLabel>
          <Select
            value={ city?.option }
            name='city'
            onChange={ city?.changeHandler }
            className='w-18 h-4'
            variant='outlined'
            label='市区町村'
            labelId='city'
          >
            { values?.city?.map((value, index) => (
              <MenuItem key={ index } value={ value.id }>{ value.name }</MenuItem>
            )) }
          </Select>
        </StyledContr>
      </div>
    </div>
  )
}

export default LocationPicker
