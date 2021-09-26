import React, { useCallback, useMemo } from 'react'
import { Route, RouteComponentProps } from 'react-router-dom'
import MainTemplate from '@components/common/layout/MainTemplate'
import UserForm from '@components/form/UserForm'
import { useDispatch } from 'react-redux'
import { TFormState, TUserInput } from '@components/form/_PropsType'
import useInput from '@utils/useInput'
import useValidation from '@utils/useValidation'
import { insertUserFromAdminQuery, updateUserFromAdminQuery } from '@utils/api/request-response-types/UserService'
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
    email: '',
    password: '',
    confirm: '',
    username: '',
    firstNameKanji: '',
    lastNameKanji: '',
    firstNameKana: '',
    lastNameKana: '',
    birthdayY: '',
    birthdayM: '',
    birthdayD: '',
    gender: '',
    role: ''
  })

  const form = useMemo(() => {
    return {
      email: user ? String(user?.email) : input.email,
      password: input.password,
      confirm: input.confirm,
      username: input.username,
      firstNameKanji: user
        ? String(user?.firstNameKanji)
        : input.firstNameKanji,
      lastNameKanji: user ? String(user?.lastNameKanji) : input.lastNameKanji,
      firstNameKana: user ? String(user?.firstNameKana) : input.firstNameKana,
      lastNameKana: user ? String(user?.lastNameKana) : input.lastNameKana,
      birthdayY: user ? String(dayjs(user?.birthday).year()) : input.birthdayY,
      birthdayM: user
        ? String(dayjs(user?.birthday).format('M'))
        : input.birthdayM,
      birthdayD: user
        ? String(dayjs(user?.birthday).format('D'))
        : input.birthdayD,
      gender: user ? String(user?.gender) : input.gender,
      role: input.role
    } as TUserInput
  }, [input, user])

  const { validation, error } = useValidation(form, validationSchema)

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
      roleIds: [Number(form.role)],
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
        roleIds: [Number(form.role)],
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
          changeHandler={ChangeHandler}
          error={error}
        />
      </Route>
      <Route path='/:id'>
        <UserForm
          formState={location.state}
          formValue={form}
          submitHandler={submitHandler}
          changeHandler={ChangeHandler}
          error={error}
        />
      </Route>
    </MainTemplate>
  )
}

export default UserForms
