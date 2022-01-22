import { OptionsType } from '@components/common/_PropsType'
import { fetchShopList } from '@store/actions/shopAction'
import { RootState } from '@store/store'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

export const convertToOptionsType = (item: any): OptionsType => {
  return { label: item.name, value: item?.id ? String(item.id) : item.name }
}

export const useShopSelect = (page?: number) => {
  const dispatch = useDispatch()

  const { shops, loading } = useSelector((state: RootState) => state.shop)

  const { watch, control } = useForm({
    defaultValues: {
      shopId:
        (shops && shops.values?.find((shop) => shop)?.id) ||
        localStorage.getItem('currentShop')
    }
  })

  const shopSelect: OptionsType[] = shops.values?.map(convertToOptionsType)

  const shopId = watch('shopId')

  localStorage.setItem('currentShop', String(shopId))

  const option = localStorage.getItem('currentShop')

  useEffect(() => {
    dispatch(fetchShopList(Number(page), 'desc'))
  }, [dispatch])

  return {
    option,
    control,
    shopSelect,
    loading
  }
}
