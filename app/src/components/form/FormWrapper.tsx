import React from 'react'
import CustomButton from '../common/atoms/CustomButton'
import { ClassesAndChildren } from '../common/_PropsType'
import Header from './Header'
import { IFormProps } from './_PropsType'

export interface IFormWrapperProps<T> extends IFormProps<T> {
  text?: string
}

const FormWrapper = <T extends Record<string, any>>({
  children,
  text,
  submitHandler
}: IFormWrapperProps<T>) => {
  return (
    <div className='p-[2rem] bg-secondary-main w-[60rem] mx-auto'>
      <Header title={String(text)} />
      <form onSubmit={submitHandler}>
        {children}
        <CustomButton classes='min-w-full'>登録</CustomButton>
      </form>
    </div>
  )
}

export default FormWrapper
