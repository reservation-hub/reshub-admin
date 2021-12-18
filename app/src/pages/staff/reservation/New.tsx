import CustomButton from '@/components/common/atoms/CustomButton'
import useInput from '@/utils/hooks/useInput'
import React, { useState } from 'react'

const NewReservation = () => {
  const [setp, setSetp] = useState<'1' | '2'>('1')
  const {input, ChangeHandler} = useInput({test: ''})

  console.log(input)

  return (
    <>
      {setp === '1' && (
        <>
          <span className='text[1.6rem]'>test</span>
          <CustomButton onClick={() => setSetp('2')}>next</CustomButton>
        </>
      )}
    </>
  )
}

export default NewReservation
