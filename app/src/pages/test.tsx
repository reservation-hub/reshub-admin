import CheckBox from '@/components/common/atoms/CheckBox'
import InputFiled from '@/components/common/atoms/InputFiled'
import RadioButton from '@/components/common/atoms/RadioButton'
import Selector from '@/components/common/atoms/Selector'
import { zodResolver } from '@hookform/resolvers/zod'
import dayjs from 'dayjs'
import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

const TestForm = () => {
  const schema = z.object({
    name: z.string().nonempty({ message: 'error' }),
    password: z.string().nonempty({ message: 'error' }),
    array: z.enum(['1', '2', '3']).array(),
    select: z.string(),
    date: z.string(),
    radio: z.enum(['test', 'test1'])
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
      date: '',
      radio: 'test'
    }
  })
  const onSubmit: SubmitHandler<testFrom> = React.useCallback(async (value) => {
    console.log(value)
  }, [])
  // const test = z.object({
  //   v1: z.string(),
  //   v2: z.string()
  // })
  // .refine((value) => value.v1 === value.v2, {
  //   message: 'test',
  //   path: ['v2']
  // })
  // console.log(test.parse({v1: '1', v2: '2'}))

  console.log(dayjs().format('YYYY-MM-DD HH:mm:ss'))

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
      <RadioButton
        control={control}
        name='radio'
        data={['test', 'test1'].map((r, i) => ({ id: i, label: r, value: r }))}
      />
      <button type='submit'>submit</button>
    </form>
  )
}

export default TestForm
