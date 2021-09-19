import React, { FormEvent, useCallback, useMemo } from 'react'
import { Route, RouteComponentProps } from 'react-router-dom'
import MainTemplate from '../../components/common/layout/MainTemplate'
import UserForm from '../../components/form/UserForm'
import { useDispatch } from 'react-redux'
import { TFormState } from '../../components/form/PropsType'
import { useSelect } from '../../utils/useSelect'
import useInput from '../../utils/useInput'
import useValidation from '../../utils/useValidation'
import { insertUserFromAdminQuery, updateUserFromAdminQuery } from '../../utils/api/request-response-types/UserService'
import dayjs from 'dayjs'
import { addUser, patchUser } from '../../store/actions/userAction'

const UserForms = ({ location }: RouteComponentProps<any, any, TFormState>) => {

  const dispatch = useDispatch()
  const sRole = useSelect('')

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
    role: sRole.option
  })

  const changeHandlers = {
    changeHandler: ChangeHandler,
    selectHandler: sRole.changeHandler
  }

  const { validation, error, setError } = useValidation(input, validationSchema)

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
      roleIds: [Number(sRole.option)],
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
        roleIds: [Number(sRole.option)],
        gender: input.gender,
        birthday: dayjs(
          `${ input.birthdayY }/${ input.birthdayM }/${ input.birthdayD }`
        ).format('YYYY-MM-DD')
      }
    }
    return { insertData, updateData }
  }, [
    input,
    sRole,
    location.state
  ])

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (input.password !== input.confirm) {
        setError((error) => ( { ...error, duplicated: true } ))
      } else {
        setError((error) => ( { ...error, duplicated: false } ))
      }
      try {
        validation(input)
        if (location.state?.user) {
          dispatch(patchUser(userData.updateData))
        } else {
          dispatch(addUser(userData.insertData))
        }
      } catch (e) {
        console.log(e)
      }
    }, [
      dispatch,
      input,
      userData,
      location.state,
      validation,
      setError
    ]
  )
  return (
    <MainTemplate>
      <Route exact path="/">
        <UserForm
          formState={ location.state }
          formValue={ input }
          onSubmit={ onSubmit }
          changeHandlers={ changeHandlers }
          error={ error }
        />
      </Route>
      <Route path="/:id">
        <UserForm
          formState={ location.state }
          formValue={ input }
          onSubmit={ onSubmit }
          changeHandlers={ changeHandlers }
          error={ error }
        />
      </Route>
    </MainTemplate>
  )
}

export default UserForms
