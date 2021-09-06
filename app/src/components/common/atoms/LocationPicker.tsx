import React from 'react'
import { PickerProps } from '../_PropsType'

const LocationPicker = ({ area, pref, city, values }: PickerProps) => {
  return (
    <div className='display-flex'>
      <div>
        <select value={ area?.option } name='area' onChange={ area?.changeHandler }>
          { values?.areas?.map((value, index) => (
            <option key={ index } value={ value.id }>{ value.name }</option>
          )) }
        </select>
      </div>
      <div>
        <select value={ pref?.option } name='pref' onChange={ pref?.changeHandler }>
          { values?.pref?.map((value, index) => (
            <option key={ index } value={ value.id }>{ value.name }</option>
          )) }
        </select>
      </div>
      <div>
        <select value={ city?.option } name='city' onChange={ city?.changeHandler }>
          { values?.city?.map((value, index) => (
            <option key={ index } value={ value.id }>{ value.name }</option>
          )) }
        </select>
      </div>
    </div>
  )
}

export default LocationPicker
