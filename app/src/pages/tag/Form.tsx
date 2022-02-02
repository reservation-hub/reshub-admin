import React, { useCallback, useMemo } from 'react'
import { Route, RouteComponentProps } from 'react-router-dom'
import TagForm from '@components/form/tag/TagForm'
import { useDispatch } from 'react-redux'
import { TFormState } from '@components/form/_PropsType'
import { addTag, patchTag } from '@store/actions/tagAction'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  tagEditSchema,
  TagSchema,
  tagSchema
} from '@components/form/tag/tagSchema'

const Form = ({ location }: RouteComponentProps<any, any, TFormState>) => {
  const dispatch = useDispatch()

  const tag = useMemo(() => {
    return location?.state?.tag
  }, [location])

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<TagSchema>({
    resolver: zodResolver(tag ? tagEditSchema : tagSchema),
    mode: 'onSubmit',
    defaultValues: {
      slug: ''
    }
  })

  const onSubmit: SubmitHandler<TagSchema> = useCallback(
    async (value) => {
      if (tag) {
        dispatch(patchTag({ id: tag?.id, params: value }))
      } else {
        dispatch(addTag(value))
      }
    },
    [dispatch, tag]
  )

  return (
    <>
      <Route path='/'>
        <TagForm
          formState={location.state}
          formValue={control._defaultValues}
          submitHandler={handleSubmit(onSubmit)}
          error={errors}
          control={control}
        />
      </Route>
      <Route path='/:id'>
        {/* <TagForm
          formState={location.state}
          formValue={form}
          submitHandler={submitHandler}
          error={errors}
        /> */}
      </Route>
    </>
  )
}

export default Form
