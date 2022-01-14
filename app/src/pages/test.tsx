import CheckBox from '@/components/common/atoms/CheckBox'
import InputFiled from '@/components/common/atoms/InputFiled'
import Selector from '@/components/common/atoms/Selector'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

const TestForm = () => {
  const schema = z.object({
    name: z.string().nonempty({ message: 'error' }),
    password: z.string().nonempty({ message: 'error' }),
    array: z.enum(['1', '2', '3']).array(),
    select: z.string(),
    date: z.string()
  })
  type testFrom = z.infer<typeof schema>
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<testFrom>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
    defaultValues: {
      array: ['1', '2'] || [],
      name: '123',
      password: '',
      date: ''
    }
  })
  const onSubmit: SubmitHandler<testFrom> = React.useCallback(async (value) => {
    console.log(value)
  }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputFiled
        control={control}
        name='name'
        error={Boolean(errors.name)}
        errorTxt={errors?.name?.message}
      />
      <InputFiled
        control={control}
        name='password'
        error={Boolean(errors.password)}
        errorTxt={errors?.password?.message}
      />
      <CheckBox
        control={control}
        data={['1', '2', '3'].map((v) => ({ name: v, value: v }))}
        name='array'
        checkedData={control._defaultValues.array?.map((v) => String(v))}
      />
      <Selector
        control={control}
        name='select'
        data={['1', '2', '3'].map((v) => ({ name: v, value: v }))}
      />
      <InputFiled control={control} name='date' type='date' />
      <button type='submit'>submit</button>
    </form>
  )
}

export default TestForm
