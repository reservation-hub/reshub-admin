import CustomButton from '@components/common/atoms/CustomButton'
import { OnClickProps } from '@components/common/_PropsType'
import React from 'react'

const Welcome = ({ onClick }: OnClickProps) => {
  return (
    <div className='text-center text-4xl text-secondary-light border p-11 rounded-md'>
      <div className='grid'>
        <span className='mb-4'>
          <p className='mb-3'>reshub-admin</p>
          ご登録いただき誠にありがとうございます。
        </span>

        <span className='my-4 text-[1.7rem] text-table-header'>
          下のボタンを押して店舗のご登録からお願いいたします。
        </span>
      </div>
      <CustomButton classes='mt-2' onClick={onClick}>
        店舗を登録
      </CustomButton>
    </div>
  )
}

export default Welcome
