import React, { useCallback, useMemo } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import ShopTagForm from '@components/form/shopTag/ShopTagForm'
import { useDispatch } from 'react-redux'
import { TFormState } from '@components/form/_PropsType'
import { linkTag } from '@store/actions/shopTagAction'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  TagSchema,
  tagSchema
} from '@components/form/shopTag/shopTagSchema'

const Form = ({ location }: RouteComponentProps<any, any, TFormState>) => {
  const dispatch = useDispatch()
  const option = location.state?.option

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<TagSchema>({
    resolver: zodResolver(tagSchema),
    mode: 'onSubmit',
    defaultValues: {
      tagIds: []
    }
  })

  const onSubmit: SubmitHandler<TagSchema> = useCallback(
    async (value) => {
        dispatch(linkTag({shopId: Number(option), params: value}))
    },
    [dispatch]
  )

  return (
    <ShopTagForm
      formState={location.state}
      formValue={control._defaultValues}
      submitHandler={handleSubmit(onSubmit)}
      error={errors}
      control={control}
    />
  )
}

export default Form
