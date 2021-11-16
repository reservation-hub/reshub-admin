import React from 'react'
import { IPickerProps } from '../_PropsType'
import { makeStyles } from '@material-ui/core/styles'

const classes = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    '& div': {
      width: '7rem',
      height: '4.4rem',
      '& input[type=checkbox]': {
        display: 'none'
      },
      '& label': {
        width: '100%',
        padding: '.5rem',
        display: 'inline-block',
        background: 'white',
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: '.25rem',
        cursor: 'pointer',
        textAlign: 'center'
      },
      '& input[type=checkbox]:checked + label': {
        background: theme.palette.primary.main,
        color: theme.palette.secondary.main
      }
    }
  }
}))

const CheckBox = ({ inputHandler, data, checkedData }: IPickerProps) => {
  return (
    <div className={classes().root}>
      {data?.map((value, index) => (
        <div key={index} className={`checkbox-${index}`}>
          <input
            id={`check-${value.id}`}
            type='checkbox'
            checked={checkedData?.includes(value.id)}
            value={value.id}
            name={value.name}
            onChange={inputHandler}
          />
          <label htmlFor={`check-${value.id}`} className='font-2'>
            {value.name}
          </label>
        </div>
      ))}
    </div>
  )
}

export default CheckBox
