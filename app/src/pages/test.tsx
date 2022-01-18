import CheckBox from '@/components/common/atoms/CheckBox'
import InputFiled from '@/components/common/atoms/InputFiled'
import RadioButton from '@/components/common/atoms/RadioButton'
import Selector from '@/components/common/atoms/Selector'
import { fetchReservations } from '@/store/actions/reservationAction'
import { RootState } from '@/store/store'
import { zodResolver } from '@hookform/resolvers/zod'
import dayjs, { OptionType } from 'dayjs'
import React, { useEffect, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { z } from 'zod'
import Loading from '@/components/common/atoms/loading'
import apiEndpoint, { baseEndpoint } from '@/utils/api/apiEndpoint'
import {
  ReservationListResponse,
  ReservationResponse
} from '@/utils/api/request-response-types/Shop'
import { ReservationForList } from '@/utils/api/request-response-types/models/Reservation'
import InfiniteScroll from 'react-infinite-scroll-component'
import Select from 'react-select'
import { AsyncPaginate, LoadOptions } from 'react-select-async-paginate'
import AsyncSelector from '@/components/common/atoms/AsyncSelector'
import { useLoadOptions } from '@/utils/hooks/useLoadOptions'

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

  const dispatch = useDispatch()
  const { reservations } = useSelector((state: RootState) => state.reservation)

  const [list, setList] = useState<ReservationForList[]>(reservations.values)
  const [more, setMore] = useState(true)
  const [page, setPage] = useState(1)
  const [open, setOpen] = useState<boolean>(false)
  const [value, _] = useState<{ value: string; label: string }[]>()

  // const loadMore = async () => {
  //   const pages = page + 1
  //   const reserv = await apiEndpoint.reservation.fetchReservations(205, pages, 'desc')
  //   const data = reserv.data.values

  //   if (data.length === 0 || data.length < 10) {
  //     setMore(false)
  //     return;
  //   }
  //   setList([...list, ...data])
  //   setPage(page + 1)
  // }

  const loadOptions = async (search: string, page: number) => {
    const res = await apiEndpoint.reservation.fetchReservations(
      205,
      page,
      'desc'
    )
    const data = res.data.values?.map((v, i) => ({
      label: v.clientName + i,
      value: String(v.id)
    }))

    let filteredOptions

    if (!search) {
      filteredOptions = data
    } else {
      const searchLower = search.toLowerCase()

      filteredOptions = data.filter(({ label }) =>
        label.toLowerCase().includes(searchLower)
      )
    }

    return {
      options: filteredOptions,
      hasMore: filteredOptions.length > page
    }
  }

  const { loadMore } = useLoadOptions<ReservationListResponse>(
    baseEndpoint.shops,
    205,
    'reservation'
  )

  const defaultAdditional = {
    page: page
  }

  // const load: LoadOptions<string, any, { page: any }> = async (q: string, p: any, a: { page: number } | undefined) => {
  //   const { options, hasMore } = await loadOptions2(q, Number(a?.page))

  //   return {
  //     options,
  //     hasMore,
  //     additional: {
  //       page: Number(a?.page) + 1
  //     }
  //   }
  // }

  // const test = fetch()
  // console.log(test)

  // useEffect(() => {
  //   const { data } = fetch()
  //   console.log(data)
  // }, [dispatch, page, 205])

  return (
    <div>
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
          data={['1', '2', '3'].map((v) => ({ label: v, value: v }))}
          name='array'
          checkedData={control._defaultValues.array?.map((v) => String(v))}
        />
        <InputFiled control={control} name='date' type='date' />
        <RadioButton
          control={control}
          name='radio'
          data={['test', 'test1'].map((r, i) => ({
            id: i,
            label: r,
            value: r
          }))}
        />
        {/* <Controller 
          control={control}
          name='select'
          render={({field}) => (
            <AsyncPaginate 
              loadOptions={() => loadOptions()}
              value={value?.find((v) => v.value === field.value)}
              onChange={(val) => {
                field.onChange(val?.value)
              }}
            />
          )}
        /> */}
        <AsyncSelector
          name='select'
          label='test'
          id='select'
          control={control}
          loadOptions={loadMore}
          defaultAdditional={defaultAdditional}
          error
          errorTxt='123'
        />
        <button type='submit'>submit</button>
      </form>
      <div className='text-[2rem]'>
        <div className='relative'>
          <span onClick={() => setOpen(!open)}>click me</span>
          <div className='h-[10rem] overflow-y-scroll border-2 w-[50rem] block'>
            {/* {open && (
              <InfiniteScroll
                next={loadMore}
                hasMore={more}
                loader={Loading}
                dataLength={list.length}
              >
                {list.map((r, index) => (
                  <div key={index} role='option'>
                    {index + 1}
                  </div>
                ))}
              </InfiniteScroll>
            )} */}
          </div>
        </div>

        <input type='text' name='test' list='menu' autoComplete='off' />
        {/* <InfiniteScroll
          loadMore={loadMore}
          hasMore={more}
          // loader={<Loading key={0} />}
          pageStart={page}
        >
          {item}
        </InfiniteScroll> */}
        {/* <InfiniteScroll 
          next={loadMore} 
          hasMore={more} 
          loader={Loading} 
          dataLength={list.length}        
        >
          {item}
        </InfiniteScroll> */}
      </div>
    </div>
  )
}

export default TestForm
