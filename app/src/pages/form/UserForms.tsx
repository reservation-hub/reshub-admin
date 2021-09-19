import React, { useCallback, useMemo } from 'react'
import { Route, RouteComponentProps } from 'react-router-dom'
import MainTemplate from '../../components/common/layout/MainTemplate'
import UserForm from '../../components/form/UserForm'
import { useDispatch } from 'react-redux'
import { TFormState } from '../../components/form/_PropsType'
import useInput from '../../utils/useInput'
import useValidation from '../../utils/useValidation'
import { insertUserFromAdminQuery, updateUserFromAdminQuery } from '../../utils/api/request-response-types/UserService'
import dayjs from 'dayjs'
import { addUser, patchUser } from '../../store/actions/userAction'

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
    email: user ? String(location.state?.user?.email) : '',
    password: '',
    confirm: '',
    username: '',
    firstNameKanji: user ? String(location.state?.user?.firstNameKanji) : '',
    lastNameKanji: user ? String(location.state?.user?.lastNameKanji) : '',
    firstNameKana: user ? String(location.state?.user?.firstNameKana) : '',
    lastNameKana: user ? String(location.state?.user?.lastNameKana) : '',
    birthdayY: user ? String(dayjs(location.state?.user?.birthday).year()) : '',
    birthdayM: user ? String(dayjs(location.state?.user?.birthday).month()) : '',
    birthdayD: user ? String(dayjs(location.state?.user?.birthday).day()) : '',
    gender: user ? String(location.state?.user?.gender) : '',
    role: ''
  })

  const { validation, error } = useValidation(input, validationSchema)

  const userData: { insertData: insertUserFromAdminQuery, updateData: updateUserFromAdminQuery }
    = useMemo(() => {
    const insertData: insertUserFromAdminQuery = {
      email: input.email,
      password: input.password,
      confirm: input.confirm,
      firstNameKanji: input.firstNameKanji,
      lastNameKanji: input.lastNameKanji,
      firstNameKana: input.firstNameKana,
      lastNameKana: input.lastNameKana,
      roleIds: [Number(input.role)],
      gender: input.gender,
      birthday: dayjs(
        `${ input.birthdayY }/${ input.birthdayM }/${ input.birthdayD }`
      ).format('YYYY-MM-DD')
    }

    const updateData: updateUserFromAdminQuery = {
      id: location.state?.user ? Number(location.state.user?.id) : 0,
      params: {
        email: input.email,
        firstNameKanji: input.firstNameKanji,
        lastNameKanji: input.lastNameKanji,
        firstNameKana: input.firstNameKana,
        lastNameKana: input.lastNameKana,
        roleIds: [Number(input.role)],
        gender: input.gender,
        birthday: dayjs(
          `${ input.birthdayY }/${ input.birthdayM }/${ input.birthdayD }`
        ).format('YYYY-MM-DD')
      }
    }

    return { insertData, updateData }
  }, [
    input,
    location.state
  ])

  const submitHandler = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      validation(input, input.password, input.confirm)
      if (location.state?.user) {
        dispatch(patchUser(userData.updateData))
      } else {
        dispatch(addUser(userData.insertData))
      }
    }, [
      dispatch,
      input,
      userData,
      location.state,
      validation
    ]
  )

  return (
    <MainTemplate>
      <Route exact path="/">
        <UserForm
          formState={ location.state }
          formValue={ input }
          submitHandler={ submitHandler }
          changeHandler={ ChangeHandler }
          error={ error }
        />
      </Route>
      <Route path="/:id">
        <UserForm
          formState={ location.state }
          formValue={ input }
          submitHandler={ submitHandler }
          changeHandler={ ChangeHandler }
          error={ error }
        />
      </Route>
    </MainTemplate>
  )
}

export default UserForms
