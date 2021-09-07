import React from 'react'
import Container from '@material-ui/core/Container'
import Header from './Header'
import { RouteComponentProps } from 'react-router-dom'
import { MatchParams } from '../user/_PropsType'
import FormStyle, { StyledInput } from './FormStyle'
import CustomButton from '../common/atoms/CustomButton'
import { useSelect } from '../../utils/useSelect'
import RoleSelector from '../common/atoms/RoleSelector'
import useInput from '../../utils/useInput'

const UserForm = ({ match }: RouteComponentProps<MatchParams>) => {
  
  const classes = FormStyle()
  const sRole = useSelect('')
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
    birthdayD: ''
  })
  
  return (
    <Container maxWidth='sm' className={ classes.container }>
      <Header
        title={ match.params.id ? 'ユーザー編集' : '新規登録' }
      />
      <div className='form-box'>
        <form>
          <div className='input-box'>
            <StyledInput
              label='メールアドレス'
              autoComplete='off'
              placeholder='メールアドレスを入力してください。'
              fullWidth
              variant='outlined'
              name='email'
            />
          </div>
          <div className='input-box'>
            <StyledInput
              label='ユーザーネーム'
              autoComplete='off'
              placeholder='ユーザーネームを入力してください。'
              fullWidth
              variant='outlined'
              name='password'
            />
          </div>
          <div className='input-box'>
            <StyledInput
              label='性'
              autoComplete='off'
              placeholder='お名前（名字）を入力してください。'
              variant='outlined'
              name='firstNameKanji'
            />
            <StyledInput
              label='名'
              autoComplete='off'
              placeholder='お名前を入力してください。'
              variant='outlined'
              name='lastNameKanji'
            />
          </div>
          <div className='input-box'>
            <StyledInput
              label='セイ'
              autoComplete='off'
              placeholder='お名前（名字）を入力してください。'
              variant='outlined'
              name='firstNameKana'
            />
            <StyledInput
              label='メイ'
              autoComplete='off'
              placeholder='お名前を入力してください。'
              variant='outlined'
              name='lastNameKana'
            />
          </div>
          <div className='input-box'>
            <StyledInput
              label='パスワード'
              autoComplete='off'
              placeholder='パスワードを入力してください。'
              fullWidth
              variant='outlined'
              name='password'
              type='password'
            />
          </div>
          <div className='input-box'>
            <StyledInput
              label='パスワード確認'
              autoComplete='off'
              placeholder='確認用パスワードを入力してください。'
              fullWidth
              variant='outlined'
              name='confirm'
              type='password'
            />
          </div>
          <div className='input-box'>
          
          </div>
          <div className='input-box'>
            <StyledInput
              label='年'
              name='birthdayY'
              autoComplete='off'
              variant='outlined'
              className='birthday'
            />
            <StyledInput
              label='月'
              name='birthdayM'
              autoComplete='off'
              variant='outlined'
              className='birthdayMD'
            />
            <StyledInput
              label='日'
              name='birthdayD'
              autoComplete='off'
              variant='outlined'
              className='birthdayMD'
            />
          </div>
          <div className='input-box'>
            <RoleSelector role={ sRole } />
          </div>
          <CustomButton className='submit-button'>
            登録
          </CustomButton>
        </form>
      </div>
    </Container>
  )
}

export default UserForm
