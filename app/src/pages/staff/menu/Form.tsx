import MenuForm from '@components/form/menu/MenuForm'
import { menuSchema, MenuSchema } from '@components/form/menu/menuSchema'
import { TFormState } from '@components/form/_PropsType'
import { createMenu, editMenu } from '@store/actions/menuAction'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useCallback, useMemo } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'

const Form = ({ location }: RouteComponentProps<any, any, TFormState>) => {
  const dispatch = useDispatch()

  const shopId = location.state?.option

  const menu = useMemo(() => {
    return location.state?.menu
  }, [location])

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<MenuSchema>({
    resolver: zodResolver(menuSchema),
    mode: 'onSubmit',
    defaultValues: {
      name: menu?.name ?? '',
      price: menu?.price ?? 0,
      duration: menu?.duration ?? 0,
      description: menu?.description ?? ''
    }
  })

  const onSubmit: SubmitHandler<MenuSchema> = useCallback(
    (value, event) => {
      event?.preventDefault()
      if (menu) {
        dispatch(
          editMenu({
            shopId: menu.shopId,
            menuId: menu.id,
            params: {
              ...value,
              price: Number(value.price),
              duration: Number(value.duration)
            }
          })
        )
      } else {
        dispatch(
          createMenu({
            shopId: Number(shopId),
            params: {
              ...value,
              price: Number(value.price),
              duration: Number(value.duration)
            }
          })
        )
      }
    },
    [dispatch]
  )

  return (
    <MenuForm
      submitHandler={handleSubmit(onSubmit)}
      control={control}
      error={errors}
      formState={location?.state}
    />
  )
}

export default Form
