import React, { useCallback, useMemo } from 'react'
import { Route, RouteComponentProps } from 'react-router-dom'
import UserForm from '@components/form/user/UserForm'
import { useDispatch } from 'react-redux'
import { TFormState } from '@components/form/_PropsType'
import { addUser, patchUser } from '@store/actions/userAction'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import useConvertTime from '@utils/hooks/useConverTime'
import { RoleSlug } from '@utils/api/request-response-types/models/Role'
import {
  userEditSchema,
  UserSchema,
  userSchema
} from '@components/form/user/userSchema'

const Form = ({ location }: RouteComponentProps<any, any, TFormState>) => {
  const dispatch = useDispatch()

  const user = useMemo(() => {
    return location?.state?.user
  }, [location])

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<UserSchema>({
    resolver: zodResolver(user ? userEditSchema : userSchema),
    mode: 'onSubmit',
    defaultValues: {
      email: user?.email ?? '',
      username: user?.username ?? '',
      password: '',
      confirm: '',
      firstNameKana: user?.firstNameKana ?? '',
      lastNameKana: user?.lastNameKana ?? '',
      firstNameKanji: '',
      lastNameKanji: '',
      birthday: useConvertTime('ymd', user?.birthday) ?? '',
      roleSlug: user?.role?.slug ?? RoleSlug.SHOP_STAFF
    }
  })

  const onSubmit: SubmitHandler<UserSchema> = useCallback(
    async (value) => {
      if (user) {
        dispatch(patchUser({ id: user?.id, params: value }))
      } else {
        dispatch(addUser(value))
      }
    },
    [dispatch, user]
  )

  return (
    <>
      <Route path='/'>
        <UserForm
          formState={location.state}
          formValue={control._defaultValues}
          submitHandler={handleSubmit(onSubmit)}
          error={errors}
          control={control}
        />
      </Route>
      <Route path='/:id'>
        {/* <UserForm
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
