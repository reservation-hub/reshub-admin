import React, { useCallback, useMemo } from 'react'
import { Route, RouteComponentProps } from 'react-router-dom'
import MainTemplate from '@components/common/layout/MainTemplate'
import UserForm from '@components/form/UserForm'
import { useDispatch } from 'react-redux'
import {
  TChangeHandle,
  TFormState,
  TUserInput
} from '@components/form/_PropsType'
import useInput from '@utils/useInput'
import useValidation from '@utils/useValidation'
import {
  insertUserFromAdminQuery,
  updateUserFromAdminQuery
} from '@utils/api/request-response-types/UserService'
import dayjs from 'dayjs'
import { addUser, patchUser } from '@store/actions/userAction'

const UserForms = ({ location }: RouteComponentProps<any, any, TFormState>) => {
  const dispatch = useDispatch()
  const user = location.state?.user

  const validationSchema = {
    email: false,
    password: false,
    confirm: false,
    firstNameKana: false,
    lastNameKana: false,
    duplicated: false
  }

  const { input, ChangeHandler } = useInput({
    email: user?.email ?? '',
    password: '',
    confirm: '',
    username: '',
    firstNameKanji: user?.firstNameKanji ?? '',
    lastNameKanji: user?.lastNameKanji ?? '',
    firstNameKana: user?.firstNameKana ?? '',
    lastNameKana: user?.lastNameKana ?? '',
    birthdayY: String(dayjs(user?.birthday).year()) ?? '',
    birthdayM: String(dayjs(user?.birthday).format('M')) ?? '',
    birthdayD: String(dayjs(user?.birthday).format('D')) ?? '',
    gender: user?.gender ?? '',
    role: user?.role.id ?? ''
  })

  const form = useMemo(() => {
    return {
      email: input.email,
      password: input.password,
      confirm: input.confirm,
      username: input.username,
      firstNameKanji: input.firstNameKanji,
      lastNameKanji: input.lastNameKanji,
      firstNameKana: input.firstNameKana,
      lastNameKana: input.lastNameKana,
      birthdayY: input.birthdayY,
      birthdayM: input.birthdayM,
      birthdayD: input.birthdayD,
      gender: input.gender,
      role: input.role
    } as TUserInput
  }, [input, user])

  const { validation, error } = useValidation(form, validationSchema)
  const changeHandlers = { input: ChangeHandler } as TChangeHandle

  const userData: {
    insertData: insertUserFromAdminQuery
    updateData: updateUserFromAdminQuery
  } = useMemo(() => {
    const insertData: insertUserFromAdminQuery = {
      email: form.email,
      password: form.password,
      confirm: form.confirm,
      firstNameKanji: form.firstNameKanji,
      lastNameKanji: form.lastNameKanji,
      firstNameKana: form.firstNameKana,
      lastNameKana: form.lastNameKana,
      roleId: Number(form.role),
      gender: form.gender,
      birthday: dayjs(
        `${form.birthdayY}/${form.birthdayM}/${form.birthdayD}`
      ).format('YYYY-MM-DD')
    }
    const updateData: updateUserFromAdminQuery = {
      id: Number(user?.id),
      params: {
        email: form.email,
        firstNameKanji: form.firstNameKanji,
        lastNameKanji: form.lastNameKanji,
        firstNameKana: form.firstNameKana,
        lastNameKana: form.lastNameKana,
        roleId: Number(form.role),
        gender: form.gender,
        birthday: dayjs(
          `${form.birthdayY}/${form.birthdayM}/${form.birthdayD}`
        ).format('YYYY-MM-DD')
      }
    }
    return { insertData, updateData }
  }, [form, user])

  const submitHandler = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      validation(form, form.password, form.confirm)
      if (user) {
        dispatch(patchUser(userData.updateData))
      } else {
        dispatch(addUser(userData.insertData))
      }
    },
    [dispatch, form, userData, user, validation]
  )

  return (
    <MainTemplate>
      <Route exact path='/'>
        <UserForm
          formState={location.state}
          formValue={form}
          submitHandler={submitHandler}
          changeHandler={changeHandlers}
          error={error}
        />
      </Route>
      <Route path='/:id'>
        <UserForm
          formState={location.state}
          formValue={form}
          submitHandler={submitHandler}
          changeHandler={changeHandlers}
          error={error}
        />
      </Route>
    </MainTemplate>
  )
}

export default UserForms
