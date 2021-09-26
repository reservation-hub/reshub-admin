import React from 'react'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import { StyledControl } from '@components/form/FormStyle'
import { IPickerProps } from '../_PropsType'

const LocationPicker = ({ area, pref, city, data }: IPickerProps) => {
  return (
    <div className='display-flex'>
      <div className='mar-1'>
        <StyledControl>
          <InputLabel id='area'>エリア</InputLabel>
          <Select
            value={area?.option}
            name='areaId'
            onChange={area?.changeHandler}
            className='w-18 h-4'
            variant='outlined'
            label='エリア'
            labelId='area'
          >
            {data?.areas?.map((value, index) => (
              <MenuItem key={index} value={value.id}>
                {value.name}
              </MenuItem>
            ))}
          </Select>
        </StyledControl>
      </div>
      <div className='mar-1'>
        <StyledControl>
          <InputLabel id='pref'>都道府県</InputLabel>
          <Select
            value={pref?.option}
            name='prefectureId'
            onChange={pref?.changeHandler}
            className='w-18 h-4'
            variant='outlined'
            label='都道府県'
            labelId='pref'
          >
            {data?.pref?.map((value, index) => (
              <MenuItem key={index} value={value.id}>
                {value.name}
              </MenuItem>
            ))}
          </Select>
        </StyledControl>
      </div>
      <div className='mar-1'>
        <StyledControl>
          <InputLabel id='city'>市区町村</InputLabel>
          <Select
            value={city?.option}
            name='cityId'
            onChange={city?.changeHandler}
            className='w-18 h-4'
            variant='outlined'
            label='市区町村'
            labelId='city'
          >
            {data?.city?.map((value, index) => (
              <MenuItem key={index} value={value.id}>
                {value.name}
              </MenuItem>
            ))}
          </Select>
        </StyledControl>
      </div>
    </div>
  )
}

export default LocationPicker
