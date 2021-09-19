import React from 'react'
import Container from '@material-ui/core/Container'
import Header from './Header'
import FormStyle, { StyledInput } from './FormStyle'
import CustomButton from '../common/atoms/CustomButton'
import { IUserForm } from './PropsType'
import { VALIDATION_TEXT } from '../../constants/FormValid'
import RoleSelector from '../common/atoms/RoleSelector'

const UserForm = ({
  onSubmit,
  formState,
  formValue,
  changeHandlers,
  error
}: IUserForm) => {
  const classes = FormStyle()
  let disabled = false

  if (
    formValue.email.length === 0 ||
    formValue.username.length === 0 ||
    formValue.password.length === 0 ||
    formValue.confirm.length === 0 ||
    formValue.firstNameKanji.length === 0 ||
    formValue.lastNameKanji.length === 0 ||
    formValue.firstNameKana.length === 0 ||
    formValue.lastNameKana.length === 0 ||
    formValue.gender.length === 0
  ) {
    disabled = true
  }

  return (
    <Container maxWidth="sm" className={ classes.container }>
      <Header
        title={ formState?.user ? 'ユーザー編集' : '新規登録' }
      />
      <div className="form-box">
        <form onSubmit={ onSubmit }>
          <div className="input-box">
            <StyledInput
              label="メールアドレス"
              autoComplete="off"
              placeholder="メールアドレスを入力してください。"
              fullWidth
              variant="outlined"
              name="email"
              error={ error.email }
              onChange={ changeHandlers.changeHandler }
              onBlur={ changeHandlers.changeHandler }
              helperText={
                error.email &&
                VALIDATION_TEXT.EMAIL
              }
            />
          </div>
          <div className="input-box">
            <StyledInput
              label="ユーザーネーム"
              autoComplete="off"
              placeholder="ユーザーネームを入力してください。"
              fullWidth
              variant="outlined"
              name="username"
              onChange={ changeHandlers.changeHandler }
            />
          </div>
          <div className="input-box">
            <StyledInput
              label="性"
              autoComplete="off"
              placeholder="お名前（名字）を入力してください。"
              variant="outlined"
              name="firstNameKanji"
              onChange={ changeHandlers.changeHandler }
              onBlur={ changeHandlers.changeHandler }
            />
            <StyledInput
              label="名"
              autoComplete="off"
              placeholder="お名前を入力してください。"
              variant="outlined"
              name="lastNameKanji"
              onChange={ changeHandlers.changeHandler }
              onBlur={ changeHandlers.changeHandler }
            />
          </div>
          <div className="input-box">
            <StyledInput
              label="セイ"
              autoComplete="off"
              placeholder="お名前（名字）を入力してください。"
              variant="outlined"
              name="firstNameKana"
              error={ error.firstNameKana }
              onChange={ changeHandlers.changeHandler }
              onBlur={ changeHandlers.changeHandler }
              helperText={
                error.firstNameKana &&
                VALIDATION_TEXT.KANA_NAME
              }
            />
            <StyledInput
              label="メイ"
              autoComplete="off"
              placeholder="お名前を入力してください。"
              variant="outlined"
              name="lastNameKana"
              error={ error.lastNameKana }
              onChange={ changeHandlers.changeHandler }
              onBlur={ changeHandlers.changeHandler }
              helperText={
                error.lastNameKana &&
                VALIDATION_TEXT.KANA_NAME
              }
            />
          </div>
          <div className="input-box">
            <StyledInput
              label="パスワード"
              autoComplete="off"
              placeholder="パスワードを入力してください。"
              fullWidth
              variant="outlined"
              name="password"
              type="password"
              error={ error.password || error.duplicated }
              onChange={ changeHandlers.changeHandler }
              onBlur={ changeHandlers.changeHandler }
              helperText={
                error.password &&
                VALIDATION_TEXT.PASSWORD
              }
            />
          </div>
          <div className="input-box">
            <StyledInput
              label="パスワード確認"
              autoComplete="off"
              placeholder="確認用パスワードを入力してください。"
              fullWidth
              variant="outlined"
              name="confirm"
              type="password"
              error={ error.confirm || error.duplicated }
              onChange={ changeHandlers.changeHandler }
              onBlur={ changeHandlers.changeHandler }
              helperText={
                error.confirm &&
                VALIDATION_TEXT.PASSWORD
              }
            />
          </div>
          <div className="input-box">
            <StyledInput
              label="年"
              name="birthdayY"
              autoComplete="off"
              variant="outlined"
              className="birthday"
              onChange={ changeHandlers.changeHandler }
              onBlur={ changeHandlers.changeHandler }
            />
            <StyledInput
              label="月"
              name="birthdayM"
              autoComplete="off"
              variant="outlined"
              className="birthdayMD"
              onChange={ changeHandlers.changeHandler }
              onBlur={ changeHandlers.changeHandler }
            />
            <StyledInput
              label="日"
              name="birthdayD"
              autoComplete="off"
              variant="outlined"
              className="birthdayMD"
              onChange={ changeHandlers.changeHandler }
              onBlur={ changeHandlers.changeHandler }
            />
          </div>
          <div className="input-box">
            <RoleSelector
              option={ formValue.role }
              selectHandler={ changeHandlers.selectHandler }
            />
          </div>
          { error.duplicated && VALIDATION_TEXT.DUPLICATED }
          <CustomButton
            className="submit-button"
            disabled={ disabled }
          >
            登録
          </CustomButton>
        </form>
      </div>
    </Container>
  )
}

export default UserForm