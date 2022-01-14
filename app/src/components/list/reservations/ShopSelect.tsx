import Selector, { ISelectorProps } from '@components/common/atoms/Selector'
import React from 'react'

export interface IShopSelectProps extends ISelectorProps {
  listStyle?: boolean
}

const ShopSelect = ({
  id,
  label,
  name,
  data,
  classes,
  listStyle,
  control
}: IShopSelectProps) => {
  return (
    <>
      {listStyle ? (
        <Selector
          id={id}
          label={label}
          data={data}
          classes={classes}
          control={control}
          name={name}
        >
          <option>閲覧したい店舗を選択してください</option>
        </Selector>
      ) : (
        <div className='top-2/4 left-[55%] absolute transform translate-x-[-50%] translate-y-[-50%] w-[40rem] text-center'>
          <span className='text-[2rem]'>
            閲覧したい店舗を選択してください。
          </span>
          <div className='mt-3'>
            <Selector
              id={id}
              label={label}
              control={control}
              name={name}
              data={data}
              classes={classes}
            >
              <option>閲覧したい店舗を選択してください</option>
            </Selector>
          </div>
        </div>
      )}
    </>
  )
}

export default ShopSelect
