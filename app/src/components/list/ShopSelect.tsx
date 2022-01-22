import Selector, { ISelectorProps } from '@components/common/atoms/Selector'
import React from 'react'

export interface IShopSelectProps extends ISelectorProps {
  listStyle?: boolean
}

const ShopSelect = ({
  id,
  label,
  name,
  item,
  classes,
  listStyle,
  value,
  control
}: IShopSelectProps) => {
  return (
    <>
      {listStyle ? (
        <Selector
          id={id}
          label={label}
          item={item}
          classes={classes}
          control={control}
          value={value}
          name={name}
        />
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
              item={item}
              classes={classes}
              defaultValue={value}
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
